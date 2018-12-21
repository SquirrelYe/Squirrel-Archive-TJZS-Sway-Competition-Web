<template>
  <div>
     <div class="wrapper-page">
        <div class="panel panel-color panel-primary panel-pages">
            <div class="panel-heading bg-img">
                <div class="bg-overlay"></div>
                <h3 class="text-center m-t-10 text-white"> AESEN 青年领袖联盟 </h3>
                <br>
                <h3 class="text-center text-white" style="font-size:30px;">Sway 商业模拟挑战赛</h3> 
            </div>

            <div class="panel-body" >
                <div class="form-horizontal m-t-20">

                    <div class="form-group">
                        <div class="col-xs-12">
                            <input class="form-control input-lg" type="text" required="" placeholder="用户名" v-model="userName" v-on:keyup.enter="login()">
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-xs-12">
                            <input class="form-control input-lg" type="password" required="" placeholder="密码" v-model="passWord" v-on:keyup.enter="login()">
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-xs-12">
                            <div class="checkbox checkbox-primary">
                                <input id="checkbox-signup" type="checkbox" v-model="check">
                                <label for="checkbox-signup">
                                    记住我
                                </label>
                            </div>

                        </div>
                    </div>

                    <div class="form-group text-center m-t-40">
                        <div class="col-xs-12">
                            <button class="btn btn-primary btn-lg w-lg waves-effect waves-light" @click="login()">登录</button>
                            <!-- <button @click="setcookie">cookietest</button>
                            <button @click="clearcookie">clearcookie</button>
                            <button @click="getcookie">getcookie</button> -->
                        </div>
                    </div>

                    <div class="form-group m-t-30">
                        <div class="col-sm-7">
                            <a href="/#/recoverypw"><i class="fa fa-lock m-r-5"></i> 忘记密码？</a>
                        </div>
                        <div class="col-sm-5 text-right">
                            <a href="/#/register">创建新用户</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <h3>{{username}},{{password}}</h3> -->
        </div>
    </div>
  </div>
</template>

<script>
//引入 utils->cookie
const cookie = require("../utils/cookie");
const s_alert = require("../utils/alert");
import app from '../App.vue'
var App = app;

export default {
  name: "logging",
  data() {
    return {
      userName: "",
      passWord: "",
      username: "",
      password: "",
      judge: "",
      Sid:'001',
      check: true
    };
  },
  mounted() {
    cookie.getCookie(this);
  },
   beforeRouteEnter(to, from, next) {
    //alert(to.params.id);
    next();
  },
  methods: {
    login() {
      if (this.userName == "" || this.passWord == "") {
          s_alert.basic("用户名或密码为空");
      } else {
          //判断用户为 管理员
        this.axios({
          method: "post",
          url: `${app.data().globleUrl}/admin?judge=0&name=${this.userName}&pass=${this.passWord}`
        })
          .then(res => {
            this.content = res.data;
            if (res.data.length > 0) {
                if(this.check){                
                    var ses = window.sessionStorage;
                    var d = JSON.stringify(res.data);
                    ses.setItem("userinfo", d);
                    ses.setItem("name", this.userName);
                    ses.setItem("pass", this.passWord);
                    ses.setItem("type", '1');
                    ses.setItem("Sid", this.Sid);    
                    //cookie.setCookie(this.userName, this.passWord,'1', 7);            
                    s_alert.Success("保存状态成功，你的身份是管理员","正在加载……","success");
                    this.$router.push({name: 'menu', params: {type: '1'}})
                }else{                
                    var ses = window.sessionStorage;
                    var d = JSON.stringify(res.data);
                    ses.setItem("userinfo", d);
                    ses.setItem("name", this.userName);
                    ses.setItem("pass", this.passWord);
                    ses.setItem("type", '1');    
                    ses.setItem("Sid", this.Sid);    
                    //cookie.setCookie(this.userName, this.passWord,'1', 7);  
                    s_alert.Success("登录成功，你的身份是管理员","正在加载……","success");
                    this.$router.push({name:'menu'});
                }
            } else {
                //判断用户为 参赛者
                this.axios({
                method: "post",
                url: `${app.data().globleUrl}/sway?judge=0&name=${this.userName}&pass=${this.passWord}`
                })
                .then(res => {
                this.content = res.data;
                if (res.data.length > 0) {
                    if(this.check){
                        var ses = window.sessionStorage;
                        var d = JSON.stringify(res.data);
                        ses.setItem("userinfo", d);
                        ses.setItem("name", this.userName);
                        ses.setItem("pass", this.passWord);
                        ses.setItem("type", '0');
                        ses.setItem("Sid", this.Sid);    
                        //cookie.setCookie(this.userName, this.passWord,'0', 7);            
                        s_alert.Success("保存状态成功，你的身份是参赛者","正在加载……","success");
                        this.$router.push("/menu");
                    }else{
                        var ses = window.sessionStorage;
                        var d = JSON.stringify(res.data);
                        ses.setItem("userinfo", d);
                        ses.setItem("name", this.userName);
                        ses.setItem("pass", this.passWord);
                        ses.setItem("type", '0');
                        ses.setItem("Sid", this.Sid);    
                        //cookie.setCookie(this.userName, this.passWord,'0', 7); 
                        s_alert.Success("登录成功，你的身份是参赛者","正在加载……","success");
                        this.$router.push("/menu");
                    }
                } else {
                    s_alert.Timer("登录失败","用户名或密码有误");
                }
                })
            }
          })
          .catch(error => console.log(error));
      }
    },
    select() {
      alert("selected!");
    },
    setcookie() {
      cookie.setCookie("name", "yexuan", 7);
    },
    clearcookie() {
      cookie.clearCookie();
    },
    getcookie() {
     cookie.getCookie(this);
    }
  }
};
</script>

<style scoped>

</style>

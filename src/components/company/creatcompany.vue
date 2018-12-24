<template>
    <div class="container">
        <!-- Page-Title -->
        <div class="row">
            <div class="col-sm-12">
                <h4 class="pull-left page-title">公司管理</h4>
            </div>
        </div>
        
        <div class="row">
        <div class="col-sm-12">
            <div class="panel panel-default">
                <div class="panel-heading"><h3 class="panel-title">Sway商战大赛-新建公司</h3></div>
                <div class="panel-body">
                    <form class="form-horizontal" role="form">
                        <div class="form-group">
                            <label class="col-md-2 control-label">公司名称</label>
                            <div class="col-md-10">
                                <input type="text" class="form-control" placeholder="xxx有限公司" v-model="name">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="example-email" >法人</label>
                            <div class="col-md-10">
                                <input class="form-control" placeholder="xxx" v-model="legal">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="example-email">统一社会信用代码</label>
                            <div class="col-md-10">
                                <input class="form-control" placeholder="51370113MJD7670793" v-model="code">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="example-email">经营范围</label>
                            <div class="col-md-10">
                                <input class="form-control" placeholder="教育（逗号隔开）" v-model="area">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label">备注</label>
                            <div class="col-md-10">
                                <textarea class="form-control" v-model="others" rows="5" placeholder=""></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label"></label>
                            <div class="col-md-10">
                            <button type="button" class="btn btn-block btn-lg btn-success waves-effect waves-light" @click="submitForm()">创建公司</button>
                            </div>
                        </div>
                    </form>
                    
                    <label class="col-md-1 control-label"></label>
                    <div class="col-md-11">
                        注意：<br>
                        <strong>公司由选出的公司CEO创建，公司创建完成之后，公司其他成员通过 公司->加入公司 找到并加入公司。</strong>
                    </div>
                </div> 
            </div> 
        </div> 
    </div> 
    </div>
</template>

<script>
const s_alert = require("../../utils/alert");
import app from "../../App.vue";

export default {
  name: "docCreate",
  data() {
    return {
        userinfo:'',
        name:'',
        legal:'',
        code:'',
        area:'',
        others:''
    };
  },
  beforeMount() {
    var ses = window.sessionStorage;
    this.userinfo =JSON.parse(ses.getItem("userinfo"));    
  },
  methods: {
    submitForm() {
      if (this.name == "" || this.legal == ""|| this.code == ""|| this.area == ""|| this.others == "") {
        s_alert.basic("某一项输入为空！");
      } else {
        // s_alert.Timer("ok", "ok");
        this.submitcom();        
      }
    },
    submitcom(){
        let url=`${app.data().globleUrl}/company?judge=1&id=0&name=${this.name}&legal=${this.legal}&code=${this.code}&area=${this.area}&condition=0`
        console.log(url)
        this.axios({
          method: "post",
          url: url
        })
          .then(res => {
            if (res.data.success) {
                s_alert.Success("公司创建成功", "正在加载……", "success"); 
                setTimeout(() => {
                    this.$router.push({name:'infocompany'})
                }, 2000);           
            } else {
              s_alert.Timer("公司创建失败", "。。。");
            }
          })
          .catch(error => {
            console.log(error);
            s_alert.Timer("公司创建失败", "请检查网络状况");
          });
    }
  }
};
</script>

<style>
</style>

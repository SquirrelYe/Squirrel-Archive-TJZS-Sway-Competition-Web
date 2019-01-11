<template>
  <div>
    <!-- Begin page -->
    <div id="wrapper">
      <!-- Top Bar Start -->
      <div class="topbar">
        <!-- LOGO -->
        <div class="topbar-left">
          <div class="text-center" style="background-color:white">
            <a href="javascript:void(0)" class="logo">
              <i class="md md-terrain"></i>
              <span>Sway 商业模拟挑战赛</span>
            </a>
          </div>
        </div>
        <!-- Button mobile view to collapse sidebar menu -->
        <div class="navbar navbar-default" role="navigation">
          <div class="container">
            <div class>
              <div class="pull-left">
                <button class="button-menu-mobile open-left">
                  <i class="fa fa-bars"></i>
                </button>
                <span class="clearfix"></span>
              </div>
              <form class="navbar-form pull-left" role="search">
                <div class="form-group">
                  <input type="text" class="form-control search-bar" placeholder="搜索">
                </div>
                <button type="submit" class="btn btn-search">
                  <i class="fa fa-search"></i>
                </button>
              </form>
               

              <ul class="nav navbar-nav navbar-right pull-right">
                <li class="dropdown hidden-xs">
                  <a
                    href="#"
                    data-target="#"
                    class="dropdown-toggle waves-effect"
                    data-toggle="dropdown"
                    aria-expanded="true"
                  >
                    <i class="md md-notifications"></i>
                    <span class="badge badge-xs badge-danger">3</span>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-lg">
                    <li class="text-center notifi-title">通知</li>
                    <li class="list-group">
                      <!-- list item-->
                      <a href="javascript:void(0);" class="list-group-item">
                        <div class="media">
                          <div class="pull-left">
                            <em class="fa fa-user-plus fa-2x text-info"></em>
                          </div>
                          <div class="media-body clearfix">
                            <div class="media-heading">新的好友消息</div>
                            <p class="m-0">
                              <small>您有10条未读消息</small>
                            </p>
                          </div>
                        </div>
                      </a>
                      <!-- list item-->
                      <a href="javascript:void(0);" class="list-group-item">
                        <div class="media">
                          <div class="pull-left">
                            <em class="fa fa-diamond fa-2x text-primary"></em>
                          </div>
                          <div class="media-body clearfix">
                            <div class="media-heading">新的参赛信息</div>
                            <p class="m-0">
                              <small>暂未组委会发布新信息</small>
                            </p>
                          </div>
                        </div>
                      </a>
                      <!-- list item-->
                      <a href="javascript:void(0);" class="list-group-item">
                        <div class="media">
                          <div class="pull-left">
                            <em class="fa fa-bell-o fa-2x text-danger"></em>
                          </div>
                          <div class="media-body clearfix">
                            <div class="media-heading">系统通知</div>
                            <p class="m-0">
                              <small>
                                您还有
                                <span class="text-primary">10</span> 分钟提交选择
                              </small>
                            </p>
                          </div>
                        </div>
                      </a>
                      <!-- last list item -->
                      <a href="javascript:void(0);" class="list-group-item">
                        <small>查看所有通知</small>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="hidden-xs">
                  <a href="#" id="btn-fullscreen" class="waves-effect">
                    <i class="md md-crop-free"></i>
                  </a>
                </li>
                <li class="hidden-xs">
                  <a href="#" class="right-bar-toggle waves-effect">
                    <i class="md md-chat"></i>
                  </a>
                </li>
                <li class="dropdown">
                  <a
                    href
                    class="dropdown-toggle profile"
                    data-toggle="dropdown"
                    aria-expanded="true"
                  >
                    <img :src="icon_src" alt="user-img" class="img-circle">
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="javascript:void(0)">
                        <i class="md md-face-unlock"></i> 个人简介
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i class="md md-settings"></i> 设置
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i class="md md-lock"></i> 锁屏
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <i class="md md-settings-power"></i> 注销
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <!--/.nav-collapse -->
          </div>
        </div>
      </div>
      <!-- Top Bar End -->
      <!-- ========== Left Sidebar Start ========== -->
      <div class="left side-menu leftfixed" v-if="judgeUserType==1">
        <div class="sidebar-inner slimscrollleft">
          <div class="user-details">
            <div class="pull-left">
              <img :src="icon_src" alt class="thumb-md img-circle">
            </div>
            <div class="user-info">
              <div class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                  {{userinfo.cname}}
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="javascript:void(0)">
                      <i class="md md-face-unlock"></i> 个人简介
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i class="md md-settings"></i> 设置
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i class="md md-lock"></i> 锁屏
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i class="md md-settings-power"></i> 注销
                    </a>
                  </li>
                </ul>
              </div>

              <p class="text-muted m-0">管理员</p>
            </div>
          </div>
          <!--- Divider -->
          <div id="sidebar-menu">
            <ul>
              <li>
                <a href="./#/menu/index" class="waves-effect waves-light active">
                  <i class="md md-home"></i>
                  <span>首页</span>
                </a>
              </li>

              <li class="has_sub">
                <a href="javascript:void(0)" class="waves-effect waves-light">
                  <i class="md md-account-child"></i>
                  <span>用户管理</span>
                  <span class="pull-right">
                    <i class="md md-add"></i>
                  </span>
                </a>
                <ul class="list-unstyled">
                  <li>
                    <a href="javascript:void(0)" @click="sway()">参赛者管理</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" @click="admin()">管理员管理</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" @click="company()">公司管理</a>
                  </li>
                </ul>
              </li>

              <li class="has_sub">
                <a href="javascript:void(0)" class="waves-effect waves-light">
                  <i class="md md-palette"></i>
                  <span>赛事管理</span>
                  <span class="pull-right">
                    <i class="md md-add"></i>
                  </span>
                </a>
                <ul class="list-unstyled">
                  <li>
                    <a href="javascript:void(0)" @click="creatgame()">新建比赛</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" @click="listgame()">赛事列表</a>
                  </li>
                </ul>
              </li>

              <li class="has_sub">
                <a href="javascript:void(0)" class="waves-effect waves-light">
                  <i class="md md-invert-colors-on"></i>
                  <span>赛事运营</span>
                  <span class="pull-right">
                    <i class="md md-add"></i>
                  </span>
                </a>
                <ul class="list-unstyled">
                  <li>
                    <a href="javascript:void(0)" @click="syear()">财年管理</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" @click="scompete()">竞拍管理</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" @click="stransation()">交易管理</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" @click="sstastics()">赛事数据</a>
                  </li>
                </ul>
              </li>

              <li class="has_sub">
                <a href="javascript:void(0)" class="waves-effect waves-light">
                  <i class="md md-mail"></i>
                  <span>消息通知</span>
                  <span class="pull-right">
                    <i class="md md-add"></i>
                  </span>
                </a>
                <ul class="list-unstyled">
                  <li>
                    <a href="javascript:void(0)">全员广播</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">定向广播</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">定时广播</a>
                  </li>
                </ul>
              </li>

              <li class="has_sub">
                <a href="javascript:void(0)" class="waves-effect waves-light">
                  <i class="md md-assignment"></i>
                  <span>后期反馈</span>
                  <span class="pull-right">
                    <i class="md md-add"></i>
                  </span>
                </a>
                <ul class="list-unstyled">
                  <li>
                    <a href="javascript:void(0)">漏洞提交</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">体验反馈</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">联系我们</a>
                  </li>
                </ul>
              </li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="clearfix"></div>
          <!-- 计时器 -->
          <!-- <h4 class="time">{{startTime}}</h4> -->
        </div>
      </div>

      <!-- 参赛者端 -->
      <div class="left side-menu leftfixed" v-if="judgeUserType==0">
        <div class="sidebar-inner slimscrollleft">
          <div class="user-details">
            <div class="pull-left">
              <img :src="icon_src" alt class="thumb-md img-circle">
            </div>
            <div class="user-info">
              <div class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                  {{userinfo.cname}}
                  <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="javascript:void(0)">
                      <i class="md md-face-unlock"></i> 个人简介
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i class="md md-settings"></i> 设置
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i class="md md-lock"></i> 锁屏
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i class="md md-settings-power"></i> 注销
                    </a>
                  </li>
                </ul>
              </div>

              <p class="text-muted m-0">参赛者</p>
            </div>
          </div>
          <!--- Divider -->
          <div id="sidebar-menu">
            <ul>
              <li>
                <a href="./#/menu/index" class="waves-effect waves-light active">
                  <i class="md md-home"></i>
                  <span>首页</span>
                </a>
              </li>

              <li class="has_sub">
                <a href="javascript:void(0)" class="waves-effect waves-light">
                  <i class="md md-extension"></i>
                  <span>公司</span>
                  <span class="pull-right">
                    <i class="md md-add"></i>
                  </span>
                </a>
                <ul class="list-unstyled">
                  <li>
                    <a href="javascript:void(0)" @click="creatCompany()">组建公司</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" @click="joinCompany()">加入公司</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" @click="infoCompany()">公司信息</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" @click="goods()">公司产品</a>
                  </li>
                </ul>
              </li>

              <li class="has_sub">
                <a href="javascript:void(0)" class="waves-effect waves-light">
                  <i class="md md-my-library-books"></i>
                  <span>竞拍</span>
                  <span class="pull-right">
                    <i class="md md-add"></i>
                  </span>
                </a>
                <ul class="list-unstyled">
                  <li>
                    <a href="javascript:void(0)" @click="doCompete()">竞拍资产</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" @click="infoCompete()">竞拍情况</a>
                  </li>
                </ul>
              </li>

              <li class="has_sub">
                <a href="javascript:void(0)" class="waves-effect waves-light">
                  <i class="md md-palette"></i>
                  <span>资产</span>
                  <span class="pull-right">
                    <i class="md md-add"></i>
                  </span>
                </a>
                <ul class="list-unstyled">
                  <li>
                    <a href="javascript:void(0)" @click="mine()">矿区配置</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" @click="industry()">工业用地配置</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" @click="commer()">商业用地配置</a>
                  </li>
                </ul>
              </li>

              <li class="has_sub">
                <a href="javascript:void(0)" class="waves-effect waves-light">
                  <i class="md md-invert-colors-on"></i>
                  <span>运营</span>
                  <span class="pull-right">
                    <i class="md md-add"></i>
                  </span>
                </a>
                <ul class="list-unstyled">
                  <li>
                    <a href="javascript:void(0)" @click="exploit()">开采</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" @click="research()">研发</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" @click="product()">生产</a>
                  </li>
                </ul>
              </li>

              <li class="has_sub">
                <a href="javascript:void(0)" class="waves-effect waves-light">
                  <i class="md md-redeem"></i>
                  <span>库存</span>
                  <span class="pull-right">
                    <i class="md md-add"></i>
                  </span>
                </a>
                <ul class="list-unstyled">
                  <li>
                    <a href="javascript:void(0)" @click="stock()">产品库存</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" @click="resource()">原料库存</a>
                  </li>
                </ul>
              </li>

              <li class="has_sub">
                <a href="javascript:void(0)" class="waves-effect waves-light">
                  <i class="md md-now-widgets"></i>
                  <span>交易</span>
                  <span class="pull-right">
                    <i class="md md-add"></i>
                  </span>
                </a>
                <ul class="list-unstyled">
                  <li class="has_sub">
                    <a href="javascript:void(0)" @click="tomarket()">交易市场</a>
                  </li>
                  <li class="has_sub">
                    <a href="javascript:void(0)" @click="showTransaction()">订单列表</a>
                  </li>
                  <li class="has_sub">
                    <a href="javascript:void(0)" @click="trade()">交易明细</a>
                  </li>
                </ul>
              </li>
            </ul>
            <div class="clearfix">
            </div>
          </div>
          <div class="clearfix"></div>
          <!-- 计时器 -->
          <!-- <h4 class="time">{{startTime}}</h4> -->
        </div>
      </div>
      
      <!-- Left Sidebar End -->
      <div class="content-page">
        <!-- Start content -->
        <div class="content">
          <div class="container">
            <!-- 内容展示处 -->
            <router-view></router-view>
          </div>
        </div>

        <!-- Footer -->
        <footer class="footer text-right footer">
          <div class="container">
            <div class="row">
              <div class="col-xs-6">2018 © 天津智识教育科技有限公司.</div>
              <div class="col-xs-6">
                <ul class="pull-right list-inline m-b-0">
                  <li>
                    <a href="javascript:void(0)">关于</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">帮助</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">联系</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
      
      <div class="side-bar right-bar nicescroll">
        <h4 class="text-center">联系</h4>
        <div class="contact-list nicescroll">
          <ul class="list-group contacts-list">
            <!-- <li class="list-group-item">
              <a href="#">
                <div class="avatar">
                  <img src="assets/images/users/avatar-1.jpg" alt>
                </div>
                <span class="name">Chadengle</span>
                <i class="fa fa-circle online"></i>
              </a>
              <span class="clearfix"></span>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
    <!-- App js -->
    <remote src="static/js/jquery.app.js"></remote>
  </div>
</template>

<script>
const s_alert = require("../utils/alert");
const ses = require("../utils/ses");
const req = require("../utils/axios");
const print = require("../utils/print");
const apis = require("../utils/api/apis");

import app from "../App.vue";
var App = app;

export default {
  name: "menus",
  data() {
    return {
      icon_src:"http://ww3.sinaimg.cn/thumb300/005NL6H7gw1ew1tp2et08j30cj0dl0tq.jpg",
      userinfo:'',
      judgeUserType: '', //0.参赛者、1.管理员
      startTime:'', //格式 2018-12-11 11:17:16
    };
  },
  beforeMount() {
    this.userinfo =JSON.parse(ses.getSes("userinfo"));    
  },
  mounted() {
    if (ses.getSes("userinfo")== null) {
      s_alert.basic("登录会话过期，请重新登录！");
      this.$router.push("/");
    } else {
      //默认加载 index
      this.$router.push("/menu/index");
      if (ses.getSes("type") && this.userinfo!='') {
        print.log("用户类别：-->", ses.getSes("type"));
        this.judgeUserType = ses.getSes("type");
      }
    }
    
    setInterval(() => { //实时更新个人信息
        // this.refreshUserinfo()
        // this.refreshYearid()
    }, 5000);
    this.refreshUserinfo()
    this.refreshYearid()
  },
  methods: {

    // 更新个人信息
    refreshUserinfo(){
      if(ses.getSes('name')!=null||ses.getSes('pass')!=null){
        if(ses.getSes('type')==0){
          apis.getOneSwayById(JSON.parse(ses.getSes('userinfo')).id)
          .then(res => {
            let uinfo = JSON.stringify(res.data);
            ses.setSes('userinfo',uinfo);
            print.log('个人信息',res.data)
          })
        }else{
          apis.getOneAdminById(JSON.parse(ses.getSes('userinfo')).id)
          .then(res => {
            let uinfo = JSON.stringify(res.data);
            ses.setSes('userinfo',uinfo);
            print.log('个人信息',res.data)
          })
        }
      }    
    },
    
    // 获取赛事财年信息
    refreshYearid(){
      apis.getGameYear(1)
      .then(res => {
        let ginfo=JSON.stringify(res.data)
        ses.setSes('gameinfo',ginfo)
        print.log('财年信息',res.data)
      })    
    },

    // 页面跳转 用户端
    creatCompany(){this.$router.push({name:'creatcompany'})},//公司
    joinCompany(){this.$router.push({name:'joincompany'})},
    infoCompany(){ this.$router.push({name:'infocompany'})},
    doCompete(){ this.$router.push({name:'docompete'})},//竞拍
    infoCompete(){ this.$router.push({ name:'infocompete'})},
    mine(){ this.$router.push({ name:'mine'})},//资产
    industry(){ this.$router.push({ name:'industry'})},
    commer(){ this.$router.push({ name:'commer'})},
    exploit(){ this.$router.push({ name:'exploit'})},//运营
    research(){ this.$router.push({ name:'research'})},
    product(){ this.$router.push({ name:'product'})},
    goods(){ this.$router.push({ name:'goods'})}, //库存
    resource(){ this.$router.push({ name:'resource'})},
    stock(){ this.$router.push({ name:'stock'})},
    trade(){ this.$router.push({ name:'trade'})},   //交易
    tomarket(){ this.$router.push({ name:'tomarket'})},
    loan(){ this.$router.push({ name:'loan'})},
    showTransaction(){ this.$router.push({ name:'showtransaction'}) },
    // 页面跳转 管理员端
    sway(){this.$router.push({name:'sway'})},//用户管理
    admin(){this.$router.push({name:'admin'})},
    company(){this.$router.push({name:'company'})},
    creatgame(){this.$router.push({name:'creatgame'})},//赛事管理
    listgame(){this.$router.push({name:'listgame'})},
    scompete(){this.$router.push({name:'scompete'})},//赛事运营
    stransation(){this.$router.push({name:'stransation'})},
    sstastics(){this.$router.push({name:'sstastics'})},
    syear(){this.$router.push({name:'syear'})}
  },

  components: {   //注入外部 js文件
    remote: {
      render: function(createElement) {
        var self = this;
        return createElement("script", {
          attrs: {
            type: "text/javascript",
            src: this.src
          }
        });
      },
      props: {
        src: {
          type: String,
          required: true
        }
      }
    }
  }
};
</script>

<style scoped>
.leftfixed {
  position: fixed;
  z-index: 100
}
.time{
  color: aliceblue;
  margin-left: 30px
}
</style>

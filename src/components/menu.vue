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
      <div class="left side-menu leftfixed">
        <div class="sidebar-inner slimscrollleft">
          <div class="user-details">
            <div class="pull-left">
              <img :src="icon_src" alt class="thumb-md img-circle">
            </div>
            <div class="user-info">
              <div class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                  朱顺
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
                  <i class="md md-mail"></i>
                  <span>竞拍</span>
                  <span class="pull-right">
                    <i class="md md-add"></i>
                  </span>
                </a>
                <ul class="list-unstyled">
                  <li>
                    <a href="javascript:void(0)">矿区</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">工业用地</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">商业用地</a>
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
                    <a href="javascript:void(0)">建造研究所</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">购买工厂</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">引进生产线</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">购买挖掘机</a>
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
                    <a href="javascript:void(0)">研发</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">生产</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">开采</a>
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
                    <a href="javascript:void(0)">公司产品</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">产品库存</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">原料库存</a>
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
                    <a href="javascript:void(0)">定向公司</a>
                    <ul class="list-unstyled">
                      <li>
                        <a href="javascript:void(0)">产品订单</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">原料订单</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">代工订单</a>
                      </li>
                    </ul>
                  </li>
                  <li class="has_sub">
                    <a href="javascript:void(0)">市场</a>
                    <ul class="list-unstyled">
                      <li>
                        <a href="javascript:void(0)">产品订单</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">原料订单</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">代工订单</a>
                      </li>
                    </ul>
                  </li>
                  <li class="has_sub">
                    <a href="javascript:void(0)">贷款</a>
                    <ul class="list-unstyled">
                      <li>
                        <a href="javascript:void(0)">授信额度</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">贷款期限</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">未还贷款</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <div class="clearfix"></div>
          </div>
          <div class="clearfix"></div>
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
                    <a href="#">关于</a>
                  </li>
                  <li>
                    <a href="#">帮助</a>
                  </li>
                  <li>
                    <a href="#">联系</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <!-- End Footer -->
      </div>
      <!-- Right Sidebar -->
        <div class="side-bar right-bar nicescroll">
            <h4 class="text-center">联系</h4>
            <div class="contact-list nicescroll">
                <ul class="list-group contacts-list">
                    <li class="list-group-item">
                        <a href="#">
                            <div class="avatar">
                                <img src="assets/images/users/avatar-1.jpg" alt="">
                            </div>
                            <span class="name">Chadengle</span>
                            <i class="fa fa-circle online"></i>
                        </a>
                        <span class="clearfix"></span>
                    </li>
                    <li class="list-group-item">
                        <a href="#">
                            <div class="avatar">
                                <img src="assets/images/users/avatar-2.jpg" alt="">
                            </div>
                            <span class="name">Tomaslau</span>
                            <i class="fa fa-circle online"></i>
                        </a>
                        <span class="clearfix"></span>
                    </li>
                    <li class="list-group-item">
                        <a href="#">
                            <div class="avatar">
                                <img src="assets/images/users/avatar-3.jpg" alt="">
                            </div>
                            <span class="name">Stillnotdavid</span>
                            <i class="fa fa-circle online"></i>
                        </a>
                        <span class="clearfix"></span>
                    </li>
                    <li class="list-group-item">
                        <a href="#">
                            <div class="avatar">
                                <img src="assets/images/users/avatar-4.jpg" alt="">
                            </div>
                            <span class="name">Kurafire</span>
                            <i class="fa fa-circle online"></i>
                        </a>
                        <span class="clearfix"></span>
                    </li>
                    <li class="list-group-item">
                        <a href="#">
                            <div class="avatar">
                                <img src="assets/images/users/avatar-5.jpg" alt="">
                            </div>
                            <span class="name">Shahedk</span>
                            <i class="fa fa-circle away"></i>
                        </a>
                        <span class="clearfix"></span>
                    </li>
                    <li class="list-group-item">
                        <a href="#">
                            <div class="avatar">
                                <img src="assets/images/users/avatar-6.jpg" alt="">
                            </div>
                            <span class="name">Adhamdannaway</span>
                            <i class="fa fa-circle away"></i>
                        </a>
                        <span class="clearfix"></span>
                    </li>
                    <li class="list-group-item">
                        <a href="#">
                            <div class="avatar">
                                <img src="assets/images/users/avatar-7.jpg" alt="">
                            </div>
                            <span class="name">Ok</span>
                            <i class="fa fa-circle away"></i>
                        </a>
                        <span class="clearfix"></span>
                    </li>
                    <li class="list-group-item">
                        <a href="#">
                            <div class="avatar">
                                <img src="assets/images/users/avatar-8.jpg" alt="">
                            </div>
                            <span class="name">Arashasghari</span>
                            <i class="fa fa-circle offline"></i>
                        </a>
                        <span class="clearfix"></span>
                    </li>
                    <li class="list-group-item">
                        <a href="#">
                            <div class="avatar">
                                <img src="assets/images/users/avatar-9.jpg" alt="">
                            </div>
                            <span class="name">Joshaustin</span>
                            <i class="fa fa-circle offline"></i>
                        </a>
                        <span class="clearfix"></span>
                    </li>
                    <li class="list-group-item">
                        <a href="#">
                            <div class="avatar">
                                <img src="assets/images/users/avatar-10.jpg" alt="">
                            </div>
                            <span class="name">Sortino</span>
                            <i class="fa fa-circle offline"></i>
                        </a>
                        <span class="clearfix"></span>
                    </li>
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
export default {
  name: "menus",
  data() {
    return {
      icon_src:
        "http://ww3.sinaimg.cn/thumb300/005NL6H7gw1ew1tp2et08j30cj0dl0tq.jpg"
    };
  },
  mounted() {
    if (window.sessionStorage.data == null) {
      s_alert.basic("登录会话过期，请重新登录！");
      this.$router.push("/");
    } else {
      //默认加载 index
      this.$router.push("/menu/index");
    }
  },
  components: {
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
.leftfixed{
  position:fixed;

}
</style>

<template>
    <div class="wrapper">
        <div class="container">

            <!-- Page-Title -->
            <div class="row">
                <div class="col-sm-12">
                    <div class="btn-group pull-right">
                        <button type="button" class="btn btn-primary dropdown-toggle waves-effect waves-light" data-toggle="dropdown" aria-expanded="false"> 设置 <span class="m-l-5"><i class="fa fa-cog"></i></span></button>
                        <!-- <ul class="dropdown-menu" role="menu">
                            <li><a href="#">测试</a></li>
                            <li><a href="#">测试</a></li>
                            <li><a href="#">测试</a></li>
                            <li class="divider"></li>
                            <li><a href="#">测试</a></li>
                        </ul> -->
                    </div>
                    <h4 class="page-title">欢迎 !</h4>
                </div>
            </div>

            <!-- Start Widget -->
            <div class="row">
                <div class="col-md-6 col-sm-6 col-lg-3">
                    <div class="mini-stat clearfix bx-shadow bg-info">
                        <span class="mini-stat-icon"><i class="ion-ios7-location"></i></span>
                        <div class="mini-stat-info text-right">
                            <span class="counter">521</span>
                            总共参赛人数数量
                        </div>
                        <div class="tiles-progress">
                            <div class="m-t-20">
                                <h5 class="text-uppercase text-white m-0"> 上周新增人数 <span class="pull-right">23</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6 col-lg-3">
                    <div class="mini-stat clearfix bg-purple bx-shadow">
                        <span class="mini-stat-icon"><i class="md md-aspect-ratio"></i></span>
                        <div class="mini-stat-info text-right">
                            <span class="counter">956</span>
                            总共参赛人数
                        </div>
                        <div class="tiles-progress">
                            <div class="m-t-20">
                                <h5 class="text-uppercase text-white m-0">上周新增赛事<span class="pull-right">59</span></h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-sm-6 col-lg-3">
                    <div class="mini-stat clearfix bg-primary bx-shadow">
                        <span class="mini-stat-icon"><i class="md md-invert-colors-on"></i></span>
                        <div class="mini-stat-info text-right">
                            <span class="counter">5210</span>
                            线下交流次数
                        </div>
                        <div class="tiles-progress">
                            <div class="m-t-20">
                                <h5 class="text-uppercase text-white m-0">上周交流次数 <span class="pull-right">136</span></h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-sm-6 col-lg-3">
                    <div class="mini-stat clearfix bg-success bx-shadow">
                        <span class="mini-stat-icon"><i class="ion-eye"></i></span>
                        <div class="mini-stat-info text-right">
                            <span class="counter">20544</span>
                            总共系统访问量
                        </div>
                        <div class="tiles-progress">
                            <div class="m-t-20">
                                <h5 class="text-uppercase text-white m-0"> 最近访问量 <span class="pull-right">1026</span></h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!-- End row-->

            <div class="row">
                <div class="col-lg-8">
                    <div class="portlet"><!-- /portlet heading -->
                        <div class="portlet-heading">
                            <h3 class="portlet-title text-dark text-uppercase">
                                赛事分布位置图
                            </h3>
                            <div class="portlet-widgets">
                                <a href="javascript:;" data-toggle="reload"><i class="ion-refresh"></i></a>
                                <span class="divider"></span>
                                <a data-toggle="collapse" data-parent="#accordion1" href="#portlet1"><i class="ion-minus-round"></i></a>
                                <span class="divider"></span>
                                <a href="#" data-toggle="remove"><i class="ion-close-round"></i></a>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div id="portlet1" class="panel-collapse collapse in">
                            <div class="portlet-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div id="website-stats" style="position: relative;height: 320px">
                                            <!-- 地图 -->
                                            <div id="app">       
                                                <div id="allmap" ref="allmap"></div>
                                                <router-view></router-view>
                                            </div>
                                        </div>
                                        <div class="row text-center m-t-30">
                                            <div class="col-sm-4">
                                                <h4 class="counter">86,956</h4>
                                                <small class="text-muted"> Weekly Report</small>
                                            </div>
                                            <div class="col-sm-4">
                                                <h4 class="counter">86,69</h4>
                                                <small class="text-muted">Monthly Report</small>
                                            </div>
                                            <div class="col-sm-4">
                                                <h4 class="counter">948,16</h4>
                                                <small class="text-muted">Yearly Report</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> <!-- /Portlet -->
                </div> <!-- end col -->

                <div class="col-lg-4">
                    <div class="portlet"><!-- /portlet heading -->
                        <div class="portlet-heading">
                            <h3 class="portlet-title text-dark text-uppercase">
                                公司运营情况示意图
                            </h3>
                            <div class="portlet-widgets">
                                <a href="javascript:;" data-toggle="reload"><i class="ion-refresh"></i></a>
                                <span class="divider"></span>
                                <a data-toggle="collapse" data-parent="#accordion1" href="#portlet2"><i class="ion-minus-round"></i></a>
                                <span class="divider"></span>
                                <a href="#" data-toggle="remove"><i class="ion-close-round"></i></a>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div id="portlet2" class="panel-collapse collapse in">
                            <div class="portlet-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div id="pie-chart">
                                            <div id="pie-chart-container" class="flot-chart" style="height: 320px">
                                                <div class="table-responsive" v-if="showStasticsItem">
                                                    <table class="table table-borderless">
                                                        <tbody>
                                                        <tr>
                                                            <th>财年</th>
                                                            <td>{{showStasticsItem.Yearid}}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>公司名称</th>
                                                            <td>{{showStasticsItem.company.name}}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>流动资金</th>
                                                            <td>{{showStasticsItem.float}}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>固定资金</th>
                                                            <td>{{showStasticsItem.fixed}}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>总资产</th>
                                                            <td>{{showStasticsItem.total}}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>品牌价值</th>
                                                            <td>{{showStasticsItem.brand}}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>状态</th>
                                                            <td>{{showStasticsItem.condition|formatCondition}}</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            </div>
                                        </div>

                                        <div class="row text-center m-t-30">
                                            <div class="col-sm-6">
                                                <h4 class="counter">86,956</h4>
                                                <small class="text-muted"> Weekly Report</small>
                                            </div>
                                            <div class="col-sm-6">
                                                <h4 class="counter">86,69</h4>
                                                <small class="text-muted">Monthly Report</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div> 
            </div>

        </div>
</template>

<script>
const s_alert = require("../../utils/alert");
const moment = require("moment");
const notify= require('bootstrap-notify');
import app from "../../App.vue";
var App = app;

export default {
  name: "index",
  data() {
    return {
        showStasticsItem:''
    };
  },
  filters:{
    formatCondition(x){
        if(x==0) return '存续';
        if(x==-1) return '公司破产'
    }
  },
  mounted() {
      this.init()
  },
  methods: {
    init(){
      this.map();
      this.showStastics();
    },
    map() {
      let map = new BMap.Map(this.$refs.allmap); // 创建Map实例
      map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设置中心点坐标和地图级别
      map.addControl(
        new BMap.MapTypeControl({
          //添加地图类型控件
          mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
        })
      );
      map.setCurrentCity("天津"); // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    },
    showStastics(){
        let company_id=JSON.parse(window.sessionStorage.getItem('userinfo'))[0].company_id
        let s=`${app.data().globleUrl}/ass/company_statistic?judge=5&company_id=${company_id}`
        console.log(s)
        this.axios({
        method: "post",
        url: s
        })
        .then(res => {   
          console.log(res.data)
          this.showStasticsItem=res.data[0] 
        })
        .catch(err => {
          console.log(err)
        });
    }
}
};
</script>

<style scoped>
#app {
  color: #2c3e50;
  margin-top: 0px;
  height: 100%;
}
#allmap {
  height: 100%;
  overflow: hidden;
}
</style>

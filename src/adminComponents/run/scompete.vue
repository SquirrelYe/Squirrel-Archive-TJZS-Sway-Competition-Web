<template>
  <div class="container">
    <!-- Page-Title -->
    <div class="row">
      <div class="col-sm-12">
        <h4 class="pull-left page-title">竞拍管理</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Sway商战大赛-竞拍资产</h3>
          </div>

          <div class="panel-body">
            <div class="col-lg-12">
              <ul class="nav nav-tabs navtab-bg">
                <li class="active" @click="showMining()">
                  <a href="#home" data-toggle="tab" aria-expanded="true">
                    <span class="visible-xs">
                      <i class="fa fa-home"></i>
                    </span>
                    <span class="hidden-xs">矿区</span>
                  </a>
                </li>
                <li class @click="showIndus()">
                  <a href="#profile" data-toggle="tab" aria-expanded="false">
                    <span class="visible-xs">
                      <i class="fa fa-user"></i>
                    </span>
                    <span class="hidden-xs">工业用地</span>
                  </a>
                </li>
                <li class @click="showCommer()">
                  <a href="#messages" data-toggle="tab" aria-expanded="false">
                    <span class="visible-xs">
                      <i class="fa fa-envelope-o"></i>
                    </span>
                    <span class="hidden-xs">商业用地</span>
                  </a>
                </li>
              </ul>
              <div class="tab-content">
                <!-- 矿区展示处 -->
                <div class="tab-pane active" id="home">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="m-b-30">
                            <button id="addToTable" class="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target="#myModal">发布矿区竞拍<i class="fa fa-plus"></i></button>
                        </div>
                    </div>
                </div>
                  <div class="row">                      
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <table class="table table-striped" style id="datatable-editable">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>矿区星级</th>
                            <th>属性</th>
                            <th>元素储量</th>
                            <th>折旧减免</th>
                            <th>回购价值</th>
                            <th>起拍价</th>
                            <th>状态</th>
                            <th>成交价</th>
                            <th>成交公司</th>
                            <th>出现财年</th>
                            <th>操作</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item,index) in showMiningItems" :key="index">
                            <td>{{index}}</td>
                            <td>{{item.star}}</td>
                            <td>{{item.source_id|formatSource}}</td>
                            <td>{{item.reserve}}</td>
                            <td>{{item.deprelief}}</td>
                            <td>{{item.repurchase}}</td>
                            <td>{{item.startprice}}</td>
                            <td>{{item.condition|formatCondition}}</td>
                            <td>{{item.price}}</td>
                            <td v-if="item.company">{{item.company.name}}</td>
                            <td v-else></td>
                            <td>{{item.Yearid}}</td>
                            <td class="actions" align="center">
                              <a class="waves-effect waves-light" @click="start(item,1)">
                                <i class="fa  fa-play"></i>
                              </a>
                              <a class="waves-effect waves-light" @click="stop(item,1)">
                                <i class="fa  fa-stop"></i>
                              </a>
                              <a class="waves-effect waves-light" data-toggle="modal" data-target="#company" @click="opensetting(item,1,1)">
                                <i class="fa  fa-tags"></i>
                              </a>
                              <a class="waves-effect waves-light" data-toggle="modal" data-target="#desc" @click="opensetting(item,1,2)">
                                <i class="fa  fa-sort-amount-desc"></i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <hr>
                  <p><strong>注意</strong>：拍卖过程分为<strong>明拍</strong>与<strong>暗拍</strong>两种，以上价钱单位均为<strong>万元</strong>。</p>
                </div>
                <!-- 工业用地展示处 -->
                <div class="tab-pane" id="profile">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="m-b-30" data-toggle="modal" data-target="#myindus">
                            <button id="addToTable" class="btn btn-primary waves-effect waves-light">发布工业用地竞拍<i class="fa fa-plus"></i></button>
                        </div>
                    </div>
                </div>
                  <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <table class="table table-striped" style id="datatable-editable">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>型号</th>
                            <th>土地面积</th>
                            <th>生产效率提升</th>
                            <th>产线价值折旧减免</th>
                            <th>改良花费</th>
                            <th>起拍价</th>
                            <th>状态</th>
                            <th>成交价</th>
                            <th>成交公司</th>
                            <th>出现财年</th>
                            <th>操作</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item,index) in showInduslandItems" :key="index">
                            <td>{{index}}</td>
                            <td>{{item.model}}</td>
                            <td>{{item.measure}}</td>
                            <td>{{item.efficient}}</td>
                            <td>{{item.repurchase}}</td>
                            <td>{{item.improve}}</td>
                            <td>{{item.startprice}}</td>
                            <td>{{item.condition|formatCondition}}</td>
                            <td>{{item.price}}</td>
                            <td v-if="item.company">{{item.company.name}}</td>
                            <td v-else></td>
                            <td>{{item.Yearid}}</td>
                            <td class="actions" align="center">
                              <a class="waves-effect waves-light" @click="start(item,2)">
                                <i class="fa  fa-play"></i>
                              </a>
                              <a class="waves-effect waves-light" @click="stop(item,2)">
                                <i class="fa  fa-stop"></i>
                              </a>
                              <a class="waves-effect waves-light" data-toggle="modal" data-target="#company" @click="opensetting(item,2,1)">
                                <i class="fa  fa-tags"></i>
                              </a>
                              <a class="waves-effect waves-light" data-toggle="modal" data-target="#desc" @click="opensetting(item,2,2)">
                                <i class="fa  fa-sort-amount-desc"></i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <hr>
                  <p><strong>注意</strong>：拍卖过程分为<strong>明拍</strong>与<strong>暗拍</strong>两种，以上价钱单位均为<strong>万元</strong>。</p>
                </div>
                <!-- 商业用地展示处 -->
                <div class="tab-pane" id="messages">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="m-b-30" data-toggle="modal" data-target="#commerland">
                            <button id="addToTable" class="btn btn-primary waves-effect waves-light">发布商业用地竞拍<i class="fa fa-plus"></i></button>
                        </div>
                    </div>
                </div>
                  <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <table class="table table-striped" style id="datatable-editable">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>等级</th>
                            <th>品牌提升</th>
                            <th>增值空间</th>
                            <th>起拍价</th>
                            <th>状态</th>
                            <th>成交价</th>
                            <th>成交公司</th>
                            <th>出现财年</th>
                            <th>操作</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item,index) in showCommerlandItems" :key="index">
                            <td>{{index}}</td>
                            <td>{{item.level}}</td>
                            <td>{{item.brand}}</td>
                            <td>{{item.increment}}</td>
                            <td>{{item.startprice}}</td>
                            <td>{{item.condition|formatCondition}}</td>
                            <td>{{item.price}}</td>
                            <td v-if="item.company">{{item.company.name}}</td>
                            <td v-else></td>
                            <td>{{item.Yearid}}</td>
                            <td class="actions" align="center">
                              <a class="waves-effect waves-light" @click="start(item,3)">
                                <i class="fa  fa-play"></i>
                              </a>
                              <a class="waves-effect waves-light" @click="stop(item,3)">
                                <i class="fa  fa-stop"></i>
                              </a>
                              <a class="waves-effect waves-light" data-toggle="modal" data-target="#company" @click="opensetting(item,3,1)">
                                <i class="fa  fa-tags"></i>
                              </a>
                              <a class="waves-effect waves-light" data-toggle="modal" data-target="#desc" @click="opensetting(item,3,2)">
                                <i class="fa  fa-sort-amount-desc"></i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <hr>
                  <p><strong>注意</strong>：拍卖过程分为<strong>明拍</strong>与<strong>暗拍</strong>两种，以上价钱单位均为<strong>万元</strong>。</p>
                </div>
              </div>
            </div>            
          </div>
        </div>
      </div>
    </div>

    <!-- mining -->
    <div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title" id="myModalLabel">发布竞拍</h4>
            </div>
            <!-- 内容 -->
            <div class="modal-body" align='center'>
              <div class="row">
                <div class="col-sm-12">
                    <div class="panel panel-default">
                        <div class="panel-heading"><h4>发布新的矿区</h4></div>
                        <div class="panel-body">
                            <form class="form-horizontal" role="form">                                    
                                <div class="form-group">
                                    <label class="col-md-2 control-label">矿区星级</label>
                                    <div class="col-md-10">
                                        <select class="form-control" v-model="mstar" @change="getstar()">
                                            <option v-for="(item,index) in star" :key="index" :value="item">{{item | formatStar}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-2 control-label" for="example-email">原料属性</label>
                                    <div class="col-md-10">
                                        <select class="form-control" v-model="msource_id">
                                            <option v-for="(item,index) in source" :key="index" :value="item">{{item | formatSource}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-2 control-label">原料储量</label>
                                    <div class="col-md-10">
                                        <input type="number" disabled class="form-control" :value="mreserve">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-2 control-label">折旧减免</label>
                                    <div class="col-md-10">
                                        <input type="number" disabled class="form-control" :value="mdeprelief">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-2 control-label">回购价值</label>
                                    <div class="col-md-10">
                                        <input type="number" disabled class="form-control" :value="mrepurchase">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-2 control-label">起拍价</label>
                                    <div class="col-md-10">
                                        <input type="number" class="form-control" v-model="mstartprice">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-2 control-label">出现财年</label>
                                    <div class="col-md-10">
                                        <input type="number" class="form-control" v-model="myear">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>         
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary waves-effect waves-light" data-dismiss="modal" @click="sendCompete(1)">发布竞拍</button>
            </div>
        </div>
      </div>
    </div>

    <!-- myindus -->
    <div id="myindus" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title" id="myModalLabel">发布竞拍</h4>
            </div>
            <!-- 内容 -->
            <div class="modal-body" align='center'>
              <div class="row">
                <div class="col-sm-12">
                    <div class="panel panel-default">
                        <div class="panel-heading"><h4>发布新的工业用地</h4></div>
                        <div class="panel-body">
                            <form class="form-horizontal" role="form">                                    
                                <div class="form-group">
                                    <label class="col-md-2 control-label">型号</label>
                                    <div class="col-md-10">
                                        <select class="form-control" v-model="imodel">
                                            <option v-for="(item,index) in model" :key="index" :value="item">{{item | formatmodel}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-2 control-label" for="example-email">土地面积</label>
                                    <div class="col-md-10">
                                        <select class="form-control" v-model="imeasure">
                                            <option v-for="(item,index) in measure" :key="index" :value="item">{{item | formatmeasure}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-2 control-label">效率提升</label>
                                    <div class="col-md-10">
                                        <input type="number" class="form-control" v-model="iefficient">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-2 control-label">折旧减免</label>
                                    <div class="col-md-10">
                                        <input type="number" class="form-control" v-model="irepurchase">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-2 control-label">改良花费</label>
                                    <div class="col-md-10">
                                        <input type="number" class="form-control" v-model="iimprove">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-2 control-label">起拍价</label>
                                    <div class="col-md-10">
                                        <input type="number" class="form-control" v-model="istartprice">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-2 control-label">出现财年</label>
                                    <div class="col-md-10">
                                        <input type="number" class="form-control" v-model="iyear">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>         
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary waves-effect waves-light" data-dismiss="modal" @click="sendCompete(2)">发布竞拍</button>
            </div>
        </div>
      </div>
    </div>

    <!-- commerland -->
    <div id="commerland" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title" id="myModalLabel">发布竞拍</h4>
            </div>
            <!-- 内容 -->
            <div class="modal-body" align='center'>
              <div class="row">
                <div class="col-sm-12">
                    <div class="panel panel-default">
                        <div class="panel-heading"><h4>发布新的商业用地</h4></div>
                        <div class="panel-body">
                            <form class="form-horizontal" role="form">                                    
                                <div class="form-group">
                                    <label class="col-md-2 control-label">土地等级</label>
                                    <div class="col-md-10">
                                        <select class="form-control" v-model="clevel">
                                            <option v-for="(item,index) in level" :key="index" :value="item">{{item | formatlevel}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-2 control-label">品牌提升</label>
                                    <div class="col-md-10">
                                        <input type="number" class="form-control" v-model="cbrand">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-2 control-label">增值空间</label>
                                    <div class="col-md-10">
                                        <input type="number" class="form-control" v-model="cincrement">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-2 control-label">起拍价</label>
                                    <div class="col-md-10">
                                        <input type="number" class="form-control" v-model="cstartprice">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-2 control-label">出现财年</label>
                                    <div class="col-md-10">
                                        <input type="number" class="form-control" v-model="cyear">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>         
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary waves-effect waves-light" data-dismiss="modal" @click="sendCompete(3)">发布竞拍</button>
            </div>
        </div>
      </div>
    </div>

    <!-- company -->
    <div id="company" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title" id="myModalLabel">定向发送</h4>
            </div>
            <!-- 内容 -->
            <div class="modal-body" align='center'>
              <div class="row">
                <div class="col-sm-12">
                    <div class="panel panel-default">
                        <div class="panel-heading"><h4>发放固定资产到指定公司</h4></div>
                        <div class="panel-body">
                            <form class="form-horizontal" role="form">                                    
                                <div class="form-group">
                                    <label class="col-md-2 control-label">公司名称</label>
                                    <div class="col-md-10">
                                        <select class="form-control" v-model="company_id">
                                            <option v-for="(item,index) in company" :key="index" :value="item.id">{{item.name}}</option>
                                        </select>
                                    </div>
                                </div>                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>         
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary waves-effect waves-light" data-dismiss="modal" @click="sendToCompany()">发放到公司</button>
            </div>
        </div>
      </div>
    </div>

    <!-- desc -->
    <div id="desc" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title" id="myModalLabel">当前拍卖情况</h4>
            </div>
            <!-- 内容 -->
            <div class="modal-body" align='center'>
              <div class="row">
                <div class="col-sm-12">
                    <div class="panel panel-default">
                        <div class="panel-heading"><h4>发放固定资产到指定公司</h4></div>
                        <div class="col-md-12 col-sm-12 col-xs-12">
                      <table class="table table-striped" style id="datatable-editable">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>公司名称</th>
                            <th>出价</th>
                            <th>操作</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item,index) in showDesc" :key="index">
                            <td>{{index}}</td>
                            <td v-if="item.companies">{{item.companies[0].name}}</td>
                            <td v-else></td>
                            <td>{{item.auction}}</td>
                            <td class="actions" align="center">
                              <a class="waves-effect waves-light" data-dismiss="modal" @click="getit(item)">
                                <i class="fa fa-tags"></i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
import app from "../../App.vue";
const moment = require("moment");
var App = app;

export default {
  name: "docompete",
  data() {
    return {
      showMiningItems: "",
      showInduslandItems: "",
      showCommerlandItems: "",
      
      model:"",
      price:'',
      givePrice:'',

      //默认数据
      star:[1,2,3,4,5],
      source:[1,2,3,4,5],
      model:[1,2,3,4],
      measure:[1,2,3,4],
      level:[1,2,3,4],

      //发布竞拍 - 矿区
      mstar:0,
      msource_id:0,
      mreserve:0,
      mdeprelief:0,
      mrepurchase:0,
      mstartprice:0,
      myear:0,

      //发布竞拍 - 工业用地
      imodel:0,
      imeasure:0,
      iefficient:0,
      irepurchase:0,
      iimprove:0,
      istartprice:0,
      iyear:0,

      //发布竞拍 - 商业用地
      clevel:0,
      cbrand:0,
      cincrement:0,
      cstartprice:0,
      cyear:0,

      //选择
      chooseItem:'',
      chooseType:1,

      //定向发送
      company:'',
      company_id:'',

      //排序表
      showDesc:'',

      //储存钱
      money:''

    };
  },
  beforeMount() {
    var ses = window.sessionStorage;
    this.userinfo = JSON.parse(ses.getItem("userinfo"));
  },
  mounted() {
    this.init()
  },
  filters: {
    formatTime(val) {
      return moment(val).format("YYYY-MM-DD HH:mm:ss");
    },
    formatCondition(val){
      if(val==-2) return '竞拍未开始'
      if(val==-1) return '产品流拍'
      if(val==0) return '竞拍中'
      if(val==1) return '竞拍已结束'
      if(val==2) return '定向公司发送'
    },
    formatStar(x){
      if(x==1) return '一星矿区'
      if(x==2) return '二星矿区'
      if(x==3) return '三星矿区'
      if(x==4) return '四星矿区'
      if(x==5) return '五星矿区'
    },
    formatSource(x){
      if(x==1) return '金'
      if(x==2) return '木'
      if(x==3) return '水'
      if(x==4) return '火'
      if(x==5) return '土'
    },
    formatmodel(x){
      if(x==1) return 'A'
      if(x==2) return 'Z'
      if(x==3) return 'C'
      if(x==4) return 'S'
    },
    formatmeasure(x){
      if(x==1) return '5'
      if(x==2) return '5'
      if(x==3) return '10'
      if(x==4) return '8'
    },
    formatlevel(x){
      if(x==1) return '投契级'
      if(x==2) return '机构级'
      if(x==3) return '投资级'
      if(x==4) return '地标级'
    }
  },
  methods: {
    init(){
        this.showMining();
        this.showIndus();
        this.showCommer();
        this.getAllCompany();
    },
    sendCompete(index){
      //矿区
      if(index==1){
        let s=`${app.data().globleUrl}/mining?judge=1&star=${this.mstar}&reserve=${this.mreserve}&deprelief=${this.mdeprelief}&repurchase=${this.mrepurchase}&startprice=${this.mstartprice}&condition=-2&Yearid=${this.myear}&source_id=${this.msource_id}`
        console.log(s)
        this.tempSendCompete(s)
      }
      //工业用地
      if(index==2){
        let s=`${app.data().globleUrl}/indusland?judge=1&model=${this.imodel}&measure=${this.imeasure}&efficient=${this.iefficient}&repurchase=${this.irepurchase}&isimprove=0&improve=${this.iimprove}&startprice=${this.istartprice}&condition=-2&Yearid=${this.iyear}`
        console.log(s)
        this.tempSendCompete(s)
      }
      //商业用地
      if(index==3){
        let s=`${app.data().globleUrl}/commerland?judge=1&level=${this.clevel}&brand=${this.cbrand}&increment=${this.cincrement}&startprice=${this.istartprice}&condition=-2&Yearid=${this.cyear}`
        console.log(s)
        this.tempSendCompete(s)          
      }
    },
    tempSendCompete(s){ //发布订单模板      *********************
        this.axios({
        method: "post",
        url: s
        })
        .then(res => {
            console.log(res.data);
            s_alert.Success("发布竞拍成功", "注意，默认为未开启竞拍状态，点击开始按钮开始竞拍", "success");
            this.init()
        })
        .catch(err => {
        console.log(err);
        });
    },
    //开始竞拍
    start(item,index){
        if(index==1){
            let s=`${app.data().globleUrl}/mining?judge=2&condition=0&id=${item.id}`
            this.tempStartCompete(s)
        }
        else if(index==2){
            let s=`${app.data().globleUrl}/indusland?judge=2&condition=0&id=${item.id}`
            this.tempStartCompete(s)
        }
        else if(index==3){
            let s=`${app.data().globleUrl}/commerland?judge=2&condition=0&id=${item.id}`
            this.tempStartCompete(s)
        }else{
            s_alert.Success("发布竞拍失败", "请联系管理人员", "warning");
        }
    },
    stop(item,index){
        if(index==1){
            let s=`${app.data().globleUrl}/mining?judge=2&condition=1&id=${item.id}`
            this.tempStartCompete(s)
        }
        else if(index==2){
            let s=`${app.data().globleUrl}/indusland?judge=2&condition=1&id=${item.id}`
            this.tempStartCompete(s)
        }
        else if(index==3){
            let s=`${app.data().globleUrl}/commerland?judge=2&condition=1&id=${item.id}`
            this.tempStartCompete(s)
        }else{
            s_alert.Success("发布竞拍失败", "请联系管理人员", "warning");
        }
    },
    opensetting(item,type,func){    //选择发放
        this.chooseItem=item
        this.chooseType=type
        console.log(item,type)
        if(func==2){
            this.getDesc(item,type)
        }
    },
    sendToCompany(){
        if(this.chooseType==1){
            let s=`${app.data().globleUrl}/mining?judge=2&condition=1&id=${this.chooseItem.id}&company_id=${this.company_id}&price=0`
            this.tempStartCompete(s)
        }else if(this.chooseType==2){
            let s=`${app.data().globleUrl}/indusland?judge=2&condition=1&id=${this.chooseItem.id}&company_id=${this.company_id}&price=0`
            this.tempStartCompete(s)
        }else if(this.chooseType==3){
            let s=`${app.data().globleUrl}/commerland?judge=2&condition=1&id=${this.chooseItem.id}&company_id=${this.company_id}&price=0`
            this.tempStartCompete(s)
        }
    },
    getDesc(item,type){
        let s=`${app.data().globleUrl}/ass/company_compete?judge=5&type=${type}&thingid=${item.id}`
        console.log(s)
        this.axios({
        method: "post",
        url: s
        })
        .then(res => {
            this.showDesc=res.data;
            console.log('showDesc',this.showDesc)
        })
        .catch(err => {
        console.log(err);
        });
    },
    getit(item){
        if(this.chooseType==1){
            let s=`${app.data().globleUrl}/mining?judge=2&condition=1&id=${this.chooseItem.id}&company_id=${item.companies[0].id}&price=${item.auction}`
            console.log(s)
            this.tempStartCompete(s)            
            //－钱
            let m=`${app.data().globleUrl}/statistic?judge=5&company_id=${item.companies[0].id}`
            this.tempPrice(m,item.auction,item.companies[0].id)   
        }else if(this.chooseType==2){
            let s=`${app.data().globleUrl}/indusland?judge=2&condition=1&id=${this.chooseItem.id}&company_id=${item.companies[0].id}&price=${item.auction}`
            console.log(s)
            this.tempStartCompete(s)
            //－钱
            let m=`${app.data().globleUrl}/statistic?judge=5&company_id=${item.companies[0].id}`
            this.tempPrice(m,item.auction,item.companies[0].id)   
        }else if(this.chooseType==3){
            let s=`${app.data().globleUrl}/commerland?judge=2&condition=1&id=${this.chooseItem.id}&company_id=${item.companies[0].id}&price=${item.auction}`
            console.log(s)
            this.tempStartCompete(s)
            //－钱
            let m=`${app.data().globleUrl}/statistic?judge=5&company_id=${item.companies[0].id}`
            //查询商业用地 固定资产
            this.tempPriceFixed(m,item)
        }
    },        
    tempPriceFixed(m,item){           //查钱模板   *********************
        this.axios({
        method: "post",
        url: m
        })
        .then(res => {
            this.money=res.data
            console.log(res.data)

            let fix=this.chooseItem.startprice+(item.auction-this.chooseItem.startprice)*this.chooseItem.increment
            let fixed=res.data[0].fixed+fix;
            let total=res.data[0].total+fix-item.auction;
            let float=res.data[0].float-item.auction;

            let s = `${app.data().globleUrl}/statistic?judge=4&fixed=${fixed}&total=${total}&float=${float}&company_id=${item.companies[0].id}`;   
            console.log(s);
            this
            .axios({
            method: "post",
            url: s
            })
            .then(res => {
                console.log(res.data);
                this.init()
            })
            .catch(err => {
            console.log(err);
            });
        })
        .catch(err => {
            console.log(err);
        });
    },
    tempStartCompete(s){        //竞拍状态更新模板   *********************
        this.axios({
        method: "post",
        url: s
        })
        .then(res => {
            if(res.data.success){
                s_alert.Success("竞拍状态更新成功", "", "success");
                this.init()
            }else{
                s_alert.Success("竞拍状态更新失败", "", "warning");
                this.init()
            }
        })
        .catch(err => {
        console.log(err);
        });
    },
    tempPrice(s,m,c){           //查钱模板   *********************
        this.axios({
        method: "post",
        url: s
        })
        .then(res => {
            this.money=res.data
            // console.log(res.data)
            let float=res.data[0].float-m;
            let total=res.data[0].total-m;

            let s = `${app.data().globleUrl}/statistic?judge=4&float=${float}&total=${total}&company_id=${c}`;
            console.log(s);
            this
            .axios({
            method: "post",
            url: s
            })
            .then(res => {
                // console.log(res.data);
                swal("资金信息更新成功!", "参赛者资产信息更新成功", "success");
                this.init()
            })
            .catch(err => {
            console.log(err);
            });
        })
        .catch(err => {
            console.log(err);
        });
    },

    getAllCompany(){
        //获取公司列表
        let s=`${app.data().globleUrl}/company?judge=0`
        // console.log(s)
        this.axios({
        method: "post",
        url: s
        })
        .then(res => {
        //   console.log(res.data);
          this.company = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },

    getstar(){
        if(this.mstar==1){ this.mreserve = Math.round(Math.random()*(6000-4000)+4000);this.mdeprelief=0;this.mrepurchase=120;}
        if(this.mstar==2){ this.mreserve = Math.round(Math.random()*(10000-8000)+8000);this.mdeprelief=0.1;this.mrepurchase=160;}
        if(this.mstar==3){ this.mreserve = Math.round(Math.random()*(15000-12000)+12000);this.mdeprelief=0.2;this.mrepurchase=200;}
        if(this.mstar==4){ this.mreserve = Math.round(Math.random()*(24000-18000)+18000);this.mdeprelief=0.25;this.mrepurchase=300;}
        if(this.mstar==5){ this.mreserve = Math.round(Math.random()*(32000-26000)+26000);this.mdeprelief=0.3;this.mrepurchase=450;}
    },

    showMining() {
      //获取政府矿区竞拍汇总表
      let s=`${app.data().globleUrl}/mining?judge=0`
        // console.log(s)
        this.axios({
        method: "post",
        url: s
        })
        .then(res => {
        //   console.log(res.data);
          this.showMiningItems = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    showIndus() {
      //获取政府工业用地竞拍汇总表
      let s=`${app.data().globleUrl}/indusland?judge=0`
        // console.log(s)
        this.axios({
        method: "post",
        url: s
        })
        .then(res => {
        //   console.log(res.data);
          this.showInduslandItems = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    showCommer() {
      //获取政府商业用地竞拍汇总表
      let s=`${app.data().globleUrl}/commerland?judge=0`
        // console.log(s)
        this.axios({
        method: "post",
        url: s
        })
        .then(res => {
        //   console.log(res.data);
          this.showCommerlandItems = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>

</style>

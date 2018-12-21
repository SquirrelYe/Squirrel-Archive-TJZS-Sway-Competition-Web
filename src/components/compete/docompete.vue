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
                            <th>状态</th>
                            <th>起拍价</th>
                            <th>所属公司</th>
                            <th>成交价</th>
                            <th>出现财年</th>
                            <th>操作</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item,index) in showMiningItems" :key="index">
                            <td>{{index}}</td>
                            <td>{{item.star}}</td>
                            <td>{{item.source_id}}</td>
                            <td>{{item.reserve}}</td>
                            <td>{{item.deprelief}}</td>
                            <td>{{item.repurchase}}</td>
                            <td>{{item.condition}}</td>
                            <td>{{item.startprice}}</td>
                            <td>{{item.company_id}}</td>
                            <td>{{item.price}}</td>
                            <td>{{item.yearid}}</td>
                            <td class="actions" align="center">
                              <a class="waves-effect waves-light" data-toggle="modal" data-target="#myModal" @click="m(index)">
                                <i class="fa  fa-tags"></i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <hr>
                  <p><strong>注意</strong>：拍卖过程分为<strong>明拍</strong>与<strong>暗拍</strong>两种，以上单位均为<strong>万元</strong>。</p>
                </div>
                <!-- 工业用地展示处 -->
                <div class="tab-pane" id="profile">
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
                            <th>所属公司</th>
                            <th>成交价</th>
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
                            <td>{{item.condition}}</td>
                            <td>{{item.company_id}}</td>
                            <td>{{item.price}}</td>
                            <td>{{item.yearid}}</td>
                            <td class="actions" align="center">
                              <a class="waves-effect waves-light" data-toggle="modal" data-target="#myModal" @click="m(index)">
                                <i class="fa  fa-tags"></i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <hr>
                  <p><strong>注意</strong>：拍卖过程分为<strong>明拍</strong>与<strong>暗拍</strong>两种，以上单位均为<strong>万元</strong>。</p>
                </div>
                <!-- 商业用地展示处 -->
                <div class="tab-pane" id="messages">
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
                            <th>所属公司</th>
                            <th>成交价</th>
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
                            <td>{{item.condition}}</td>
                            <td>{{item.company_id}}</td>
                            <td>{{item.price}}</td>
                            <td>{{item.yearid}}</td>
                            <td class="actions" align="center">
                              <a class="waves-effect waves-light" data-toggle="modal" data-target="#myModal" @click="m(index)">
                                <i class="fa  fa-tags"></i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <hr>
                  <p><strong>注意</strong>：拍卖过程分为<strong>明拍</strong>与<strong>暗拍</strong>两种，以上单位均为<strong>万元</strong>。</p>
                </div>
              </div>
            </div>            
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="row">
      <div class="col-sm-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Sway商战大赛-竞拍资产</h3>
          </div>
            
          <div class="panel-body">
            <div class="col-lg-12">
                <div class="table-responsive">
                  <table class="table table-striped" style id="datatable-editable">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>财年</th>
                        <th>物品种类</th>
                        <th>物品id</th>
                        <th>竞拍价</th>
                        <th>状态</th>
                        <th>创建时间</th>
                        <th>操作</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="gradeX" v-for="(item,index) in showCompete" :key="item.name">
                        <td>{{index}}</td>
                        <td>{{item.yearid}}</td>
                        <td>{{item.type}}</td>
                        <td>{{item.thingid}}</td>
                        <td>{{item.auction}}</td>
                        <td>{{item.condition}}</td>
                        <td>{{item.created_at}}</td>
                        <td class="actions" align="center">
                          <a class="waves-effect waves-light" data-toggle="modal" data-target="#con-close-modal" >
                            <i class="fa fa-pencil"></i>
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
    </div> -->

    <!-- StandardModal -->
    <div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title" id="myModalLabel">竞拍单</h4>
            </div>
            <!-- 内容 -->
            <div class="modal-body" align='center'>
              <h4>矿区情况介绍</h4>  
              <!-- <h5> {{model}}</h5> -->
              <address class="ng-scope">
                <strong>矿区星级:</strong>{{model.star}}<br>
                <strong>原料属性:</strong>{{model.source_id}}<br> 
                <strong>元素储量:</strong>{{model.reserve}}<br> 
                <strong>折旧减免:</strong>{{model.deprelief}}<br> 
                <strong>回购价值:</strong>{{model.repurchase}}<br> <hr>
                <div v-if="model.condition==0">
                  <h4 style="color:#00b300">竞拍还没有开始</h4>
                </div>
                <div v-if="model.condition==1">
                  <strong>请输入你的出价:</strong><input type="number" v-model="price"><strong>万元</strong>
                </div>
                <div v-if="model.condition==2">
                  <strong>你的出价为:</strong> {{price}} 万元
                </div>
              </address>             
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary waves-effect waves-light" data-dismiss="modal" @click="sendPrice()" v-if="model.condition==1">提交出价</button>
            </div>
        </div>
        </div>
    </div>
    <!-- <button class="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target="#myModal">StandardModal</button> -->
    <!-- Modal Content is Responsive -->
    <div id="con-close-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title">Modal Content is Responsive</h4>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="field-1" class="control-label">Name</label>
                  <input type="text" class="form-control" id="field-1" placeholder="John">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="field-2" class="control-label">Surname</label>
                  <input type="text" class="form-control" id="field-2" placeholder="Doe">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="field-3" class="control-label">Address</label>
                  <input type="text" class="form-control" id="field-3" placeholder="Address">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <label for="field-4" class="control-label">City</label>
                  <input type="text" class="form-control" id="field-4" placeholder="Boston">
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="field-5" class="control-label">Country</label>
                  <input type="text" class="form-control" id="field-5" placeholder="United States">
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label for="field-6" class="control-label">Zip</label>
                  <input type="text" class="form-control" id="field-6" placeholder="123456">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group no-margin">
                  <label for="field-7" class="control-label">Personal Info</label>
                  <textarea class="form-control autogrow" id="field-7" placeholder="Write something about yourself"
                    style="overflow: hidden; word-wrap: break-word; resize: horizontal; height: 104px">                                                        </textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-info waves-effect waves-light">Save changes</button>
          </div>
        </div>
      </div>
    </div><!-- /.modal -->
    <!-- <button class="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target="#con-close-modal">ResponsiveModal</button> -->

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
      showCompete: "",
      model:"",
      price:'',
    };
  },
  beforeMount() {
    var ses = window.sessionStorage;
    this.userinfo = JSON.parse(ses.getItem("userinfo"));
  },
  mounted() {
    this.showMining();
    // setInterval(() => {
      this.showMyCompete();
    // }, 2000);
  },
  filters: {
    formatTime(val) {
      //console.log(val)
      return moment(val).format("YYYY-MM-DD HH:mm:ss");
    }
  },
  //s_alert.Success("加入成功，请去公司信息查看", "正在加载……", "success");
  methods: {
    m(index){
      this.model=this.showMiningItems[index]
    },
    sendPrice(){
      s_alert.Success(this.price, "正在加载……", "success");
    },
    showMyCompete() {
      //获取自己公司竞拍情况
      this.axios
        .post("/compete/api")
        .then(res => {
          console.log(res.data);
          this.showCompete = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    showMining() {
      //获取政府矿区竞拍汇总表
      this.axios
        .post("/mcompete/api")
        .then(res => {
          console.log(res.data);
          this.showMiningItems = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    showIndus() {
      //获取政府工业用地竞拍汇总表
      this.axios
        .post("/icompete/api")
        .then(res => {
          console.log(res.data);
          this.showInduslandItems = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    showCommer() {
      //获取政府商业用地竞拍汇总表
      this.axios
        .post("/ccompete/api")
        .then(res => {
          console.log(res.data);
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

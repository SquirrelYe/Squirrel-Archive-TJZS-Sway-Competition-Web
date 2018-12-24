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
                            <th>起拍价</th>
                            <th>状态</th>
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
                            <td>{{item.startprice}}</td>
                            <td>{{item.condition|formatCondition}}</td>
                            <td>{{item.price}}</td>
                            <td>{{item.Yearid}}</td>
                            <td class="actions" align="center">
                              <a class="waves-effect waves-light" data-toggle="modal" data-target="#myModal" @click="m(index,1)">
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
                            <td>{{item.condition|formatCondition}}</td>
                            <td>{{item.price}}</td>
                            <td>{{item.Yearid}}</td>
                            <td class="actions" align="center">
                              <a class="waves-effect waves-light" data-toggle="modal" data-target="#myModal1" @click="m(index,2)">
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
                            <td>{{item.condition|formatCondition}}</td>
                            <td>{{item.price}}</td>
                            <td>{{item.Yearid}}</td>
                            <td class="actions" align="center">
                              <a class="waves-effect waves-light" data-toggle="modal" data-target="#myModal2" @click="m(index,3)">
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



    <!-- mining -->
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
                <div v-if="model.condition==-2">
                  <h4 style="color:#00b300">竞拍还没有开始</h4>
                </div>
                <div v-if="model.condition==-1">
                  <h4 style="color:#00b300">该商品已流拍</h4>
                </div>
                <div v-if="model.condition==0">
                  <h4 style="color:#00b300">商品竞拍中</h4><br>
                  <strong style="color:#00b300" v-if="price!=null">前一次出价为{{price}}</strong><br>
                  <strong>请输入你的出价:</strong><input type="number" v-model="givePrice"><strong>万元</strong>
                </div>
                <div v-if="model.condition==1">
                  <h4 style="color:#00b300">商品竞拍结束</h4>
                </div>
                <div v-if="model.condition==2">
                  <h4 style="color:#00b300">商品定向公司分配</h4>
                </div>
              </address>             
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary waves-effect waves-light" data-dismiss="modal" @click="sendPrice(1)" v-if="model.condition==0">提交出价</button>
            </div>
        </div>
      </div>
    </div>

    <!-- indusland -->
    <div id="myModal1" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title" id="myModalLabel">竞拍单</h4>
            </div>
            <!-- 内容 -->
            <div class="modal-body" align='center'>
              <h4>工业用地情况介绍</h4>  
              <!-- <h5> {{model}}</h5> -->
              <address class="ng-scope">
                <strong>工地型号:</strong>{{model.model}}<br>
                <strong>工地面积:</strong>{{model.measure}}<br> 
                <strong>效率提升:</strong>{{model.efficient}}<br> 
                <strong>折旧减免:</strong>{{model.repurchase}}<br> 
                <strong>改良花费:</strong>{{model.improve}}<br> <hr>
                <div v-if="model.condition==-2">
                  <h4 style="color:#00b300">竞拍还没有开始</h4>
                </div>
                <div v-if="model.condition==-1">
                  <h4 style="color:#00b300">该商品已流拍</h4>
                </div>
                <div v-if="model.condition==0">
                  <h4 style="color:#00b300">商品竞拍中</h4><br>
                  <strong style="color:#00b300" v-if="price!=null">前一次出价为{{price}}</strong><br>
                  <strong>请输入你的出价:</strong><input type="number" v-model="givePrice"><strong>万元</strong>
                </div>
                <div v-if="model.condition==1">
                  <h4 style="color:#00b300">商品竞拍结束</h4>
                </div>
                <div v-if="model.condition==2">
                  <h4 style="color:#00b300">商品定向公司分配</h4>
                </div>
              </address>             
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary waves-effect waves-light" data-dismiss="modal" @click="sendPrice(2)" v-if="model.condition==0">提交出价</button>
            </div>
        </div>
      </div>
    </div>

    <!-- commerland -->
    <div id="myModal2" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
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
                <strong>商地等级:</strong>{{model.level}}<br>
                <strong>品牌提升:</strong>{{model.brand}}<br> 
                <strong>增值空间:</strong>{{model.increment}}<br> <hr>
                <div v-if="model.condition==-2">
                  <h4 style="color:#00b300">竞拍还没有开始</h4>
                </div>
                <div v-if="model.condition==-1">
                  <h4 style="color:#00b300">该商品已流拍</h4>
                </div>
                <div v-if="model.condition==0">
                  <h4 style="color:#00b300">商品竞拍中</h4><br>
                  <strong style="color:#00b300" v-if="price!=null">前一次出价为{{price}}</strong><br>
                  <strong>请输入你的出价:</strong><input type="number" v-model="givePrice"><strong>万元</strong>
                </div>
                <div v-if="model.condition==1">
                  <h4 style="color:#00b300">商品竞拍结束</h4>
                </div>
                <div v-if="model.condition==2">
                  <h4 style="color:#00b300">商品已定向公司分配</h4>
                </div>
              </address>               
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary waves-effect waves-light" data-dismiss="modal" @click="sendPrice(3)" v-if="model.condition==0">提交出价</button>
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
      showCompete: "",
      model:"",
      price:'',
      givePrice:''
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
    },
    formatCondition(val){
      if(val==-2) return '竞拍未开始'
      if(val==-1) return '产品流拍'
      if(val==0) return '竞拍中'
      if(val==1) return '竞拍已结束'
      if(val==2) return '定向公司发送'
    }
  },
  //s_alert.Success("加入成功，请去公司信息查看", "正在加载……", "success");
  methods: {
    m(index,judge){
      this.givePrice=0
      //矿区
      if(judge==1){
        this.model=this.showMiningItems[index]
        console.log('model',this.model)
        this.getMaxPrice(this.model,judge)
      }
      //工业用地
      if(judge==2){
        this.model=this.showInduslandItems[index]
        console.log('model',this.model)
        this.getMaxPrice(this.model,judge)
      }
      //商业用地
      if(judge==3){
        this.model=this.showCommerlandItems[index]
        console.log('model',this.model)
        this.getMaxPrice(this.model,judge)
      }
    },
    getMaxPrice(m,type){
      //获取竞拍时某一商品已出价
      let userinfo=JSON.parse(window.sessionStorage.getItem('userinfo'))
      let s=`${app.data().globleUrl}/compete?judge=5&type=${type}&thingid=${m.id}&company_id=${userinfo[0].company_id}`
        console.log(s)
        this.axios({
        method: "post",
        url: s
        })
        .then(res => {
          console.log(res.data);
          this.price = res.data.auction;
        })
        .catch(err => {
          console.log(err);
        });
    },
    sendPrice(type){
      //出价
      let userinfo=JSON.parse(window.sessionStorage.getItem('userinfo'))
      let s=`${app.data().globleUrl}/compete?judge=4&type=${type}&thingid=${this.model.id}&company_id=${userinfo[0].company_id}&auction=${this.givePrice}`
        console.log(s)
        this.axios({
        method: "post",
        url: s
        })
        .then(res => {
          console.log(res.data);
          s_alert.Success(`你的此次出价为：${this.givePrice}`, "正在加载……", "success");
        })
        .catch(err => {
          console.log(err);
        });
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
      let s=`${app.data().globleUrl}/mining?judge=0`
        console.log(s)
        this.axios({
        method: "post",
        url: s
        })
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
      let s=`${app.data().globleUrl}/indusland?judge=0`
        console.log(s)
        this.axios({
        method: "post",
        url: s
        })
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
      let s=`${app.data().globleUrl}/commerland?judge=0`
        console.log(s)
        this.axios({
        method: "post",
        url: s
        })
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

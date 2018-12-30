<template>
  <div class="container">
    <!-- Page-Title -->
    <div class="row">
      <div class="col-sm-12">
        <h4 class="pull-left page-title">交易管理</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Sway商战大赛-交易市场</h3>
          </div>

          <div class="panel-body">
            <div class="col-lg-12">
              <ul class="nav nav-tabs navtab-bg">
                <li class="active" @click="showSource()">
                  <a href="#home" data-toggle="tab" aria-expanded="true">
                    <span class="visible-xs">
                      <i class="fa fa-home"></i>
                    </span>
                    <span class="hidden-xs">原料交易</span>
                  </a>
                </li>
                <li class @click="showGoods()">
                  <a href="#profile" data-toggle="tab" aria-expanded="false">
                    <span class="visible-xs">
                      <i class="fa fa-user"></i>
                    </span>
                    <span class="hidden-xs">产品交易</span>
                  </a>
                </li>
                <li class @click="showloan()">
                  <a href="#loan" data-toggle="tab" aria-expanded="false">
                    <span class="visible-xs">
                      <i class="fa fa-user"></i>
                    </span>
                    <span class="hidden-xs">贷款列表</span>
                  </a>
                </li>
                <li class @click="doLoan()">
                  <a href="#messages" data-toggle="tab" aria-expanded="false">
                    <span class="visible-xs">
                      <i class="fa fa-envelope-o"></i>
                    </span>
                    <span class="hidden-xs">政府贷款</span>
                  </a>
                </li>
              </ul>
              <div class="tab-content">
                <!-- 原料交易展示处 -->
                <div class="tab-pane active" id="home">
                  <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <table class="table table-striped" style id="datatable-editable">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>原料名称</th>
                            <th>公司id</th>
                            <th>单价</th>
                            <th>数量</th>
                            <th>生成时间</th>
                            <th>更新时间</th>
                            <th>操作</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item,index) in showSourceItems" :key="index">
                            <td>{{index}}</td>
                            <td>{{item.source.name}}</td>
                            <td>{{item.company.name}}</td>
                            <td>{{item.price}}</td>
                            <td>{{item.number}}</td>
                            <td>{{item.created_at|formatTime}}</td>
                            <td>{{item.updated_at|formatTime}}</td>
                            <td class="actions" align="center">
                              <a class="waves-effect waves-light" data-toggle="modal" data-target="#myModal" @click="openSetting(index,0)">
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
                <!-- 产品交易展示处 -->
                <div class="tab-pane" id="profile">
                  <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <table class="table table-striped" style id="datatable-editable">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>产品名称</th>
                            <th>公司id</th>
                            <th>总量</th>
                            <th>单价</th>
                            <th>生成时间</th>
                            <th>更新时间</th>
                            <th>操作</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item,index) in showGoodsItems" :key="index">
                            <td>{{index}}</td>
                            <td>{{item.commerresearch.name}}</td>
                            <td>{{item.company.name}}</td>
                            <td>{{item.number}}</td>
                            <td>{{item.commerresearch.price}}</td>
                            <td>{{item.created_at|formatTime}}</td>
                            <td>{{item.updated_at|formatTime}}</td>
                            <td class="actions" align="center">
                              <a class="waves-effect waves-light" data-toggle="modal" data-target="#myModal" @click="openSetting(index,1)">
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
                <!-- 已有贷款信息展示 -->
                <div class="tab-pane" id="loan">
                  <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <table class="table table-striped" style id="datatable-editable">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>贷款金额</th>
                            <th>开始财年</th>
                            <th>应还财年</th>
                            <th>贷款利率</th>
                            <th>应还金额</th>
                            <th>贷款状态</th>
                            <th>创建时间</th>
                            <th>备注</th>
                            <th>操作</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item,index) in showLoanItem" :key="index">
                            <td>{{index}}</td>
                            <td>{{item.money}}</td>
                            <td>{{item.from}}</td>
                            <td>{{item.end}}</td>
                            <td>{{item.rate}}</td>
                            <td>{{item.send}}</td>
                            <td>{{item.condition}}</td>
                            <td>{{item.created_at|formatTime}}</td>
                            <td>{{item.detail}}</td>
                            <td class="actions" align="center">
                              <a class="waves-effect waves-light" data-toggle="modal" data-target="#myModal" @click="openSetting(index,2)">
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
                <!-- 政府贷款展示处 -->
                <div class="tab-pane" id="messages">
                  <div class="panel-body">
                    <form class="form-horizontal" role="form">
                        <div class="form-group" v-if="currentCompanyName">
                            <label class="col-md-2 control-label">公司名称</label>
                            <div class="col-md-10">
                                <input type="text" disabled class="form-control" :placeholder="this.currentCompanyName">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="example-email">贷款金额</label>
                            <div class="col-md-10">
                                <input class="form-control" placeholder="xxx万元" v-model="money">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="example-email">贷款周期</label>
                            <div class="col-md-10">
                                <input type="number" class="form-control" placeholder="0" v-model="stay" @input="getRate()">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="example-email">贷款利率</label>
                            <div class="col-md-10">
                                <input class="form-control " type="number" disabled v-model="rate">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label">备注</label>
                            <div class="col-md-10">
                                <textarea class="form-control" v-model="other" rows="5" placeholder=""></textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label"></label>
                            <div class="col-md-10">
                            <button type="button" class="btn btn-block btn-lg btn-success waves-effect waves-light" @click="submitForm()">申请贷款</button>
                            </div>
                        </div>
                    </form>
                </div> 
                  <hr>
                  <p>
                    <strong>注意：</strong><br>
                    贷款额度为公司固定资产的80%，公司品牌价值超过100的部分对可贷上限有百分比提升。<br>
                    <strong>可贷额度</strong>=<strong>(固定资产 - 已贷资金)*0.8*（品牌价值）/100</strong><br>
                    利率：一年8%、两年12%、三年16%，利息计算方法为单利计算<br>                  
                  </p>
                </div>
              </div>
            </div>            
          </div>
        </div>
      </div>
    </div>

    <!-- 原料Modal -->
    <div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" v-if="judgeChoose==0">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- 头部 -->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title" id="myModalLabel">交易清单</h4>
          </div>
          <!-- 内容 -->
          <div class="modal-body" align='center'>
            <h4>原料情况介绍</h4>  
            <!-- <h5> {{model}}</h5> -->
            <address class="ng-scope">
              <strong>原料id:</strong>{{model.source_id}}<br> 
              <strong>公司id:</strong>{{model.me}}<br> 
              <strong>单价:</strong>{{model.price}}<br> 
              <strong>数量:</strong>{{model.number}}<br> 
              <strong>分布时间:</strong>{{model.updated_at|formatTime}}<br> <hr>
              <strong>订单总额为:</strong><strong style="color:green">{{model.number|sumPrice(model.price)}}万元</strong><br> 
              <textarea v-model="detail" placeholder="产品交易备注"></textarea><br>
            </address>             
          </div>
          <div class="modal-footer">
          <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">关闭</button>
          <button type="button" class="btn btn-primary waves-effect waves-light" data-dismiss="modal" @click="sendPrice(0,model)">提交订单</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 产品Modal -->
    <div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" v-if="judgeChoose==1">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- 头部 -->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title" id="myModalLabel">交易清单</h4>
          </div>
          <!-- 内容 -->
          <div class="modal-body" align='center' v-if="model.commerresearch">
            <h4>产品情况介绍</h4>  
            <!-- <h5> {{model}}</h5> -->
            <address class="ng-scope" v-if="model.commerresearch">
              <strong>产品id:</strong>{{model.commerresearch.id}}<br>
              <strong>产品名称:</strong>{{model.commerresearch.name}}<br> 
              <strong>产品介绍:</strong>{{model.commerresearch.introduction}}<br> 
              <strong>产品单价:</strong>{{model.commerresearch.price}}<br> 
              <strong>产品数量:</strong>{{model.number}}<br> 
              <strong>发布时间:</strong>{{model.updated_at | formatTime}}<br> <hr>
              <strong>订单总额为:</strong><strong style="color:green">{{model.number|sumPrice(model.commerresearch.price)}}万元</strong><br> 
              <textarea v-model="detail" placeholder="产品交易备注"></textarea><br>
            </address>
          </div>
          <div class="modal-footer">
          <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">关闭</button>
          <button type="button" class="btn btn-primary waves-effect waves-light" data-dismiss="modal" @click="sendPrice(1,model)" >提交订单</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 贷款信息model -->
    <div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" v-if="judgeChoose==2">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- 头部 -->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title" id="myModalLabel">贷款清单</h4>
          </div>
          <!-- 内容 -->
          <div class="modal-body" align='center'>
            <h4>贷款情况介绍</h4>  
            <!-- <h5> {{model}}</h5> -->
            <address class="ng-scope">
              <strong>贷款金额:</strong>{{model.money}}<br>
              <strong>开始财年:</strong>{{model.from}}<br> 
              <strong>应还财年:</strong>{{model.end}}<br> 
              <strong>贷款利率:</strong>{{model.rate}}<br> 
              <strong>应还金额:</strong>{{model.send}}<br> 
              <strong>贷款状态:</strong>{{model.condition | formatLoanCondition}}<br> <hr> 
              <strong>贷款备注:</strong>{{model.detail}}<br> 
            </address>
          </div>
          <div class="modal-footer">
          <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">关闭</button>
          <button type="button" class="btn btn-primary waves-effect waves-light" data-dismiss="modal" @click="sendPrice(2,model)" v-if="model.condition==0">还清贷款</button>
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
  name: "docompete",
  data() {
    return {
      //公司信息
      company_id:'',
      companyAllInfo:'',
      //界面信息
      showSourceItems: "",
      showGoodsItems: "",
      showCommerlandItems: "",
      showLoanItem:'',
      showCompete: "",
      model:"",
      number:'',
      //贷款信息
      currentCompanyName:'xx',
      from:0,
      stay:0,
      end:0,
      rate:0,
      other:'',//备注
      money:0,
      send:0,
      //选择
      judgeChoose:0,
      detail:''
    };
  },
  beforeMount() {
    var ses = window.sessionStorage;
    this.userinfo = JSON.parse(ses.getItem("userinfo"));
    this.company_id=JSON.parse(window.sessionStorage.getItem('userinfo'))[0].company_id
  },
  mounted() {
    this.init()
  },
  filters: {
    formatTime(val) {
      return moment(val).format("YYYY-MM-DD HH:mm:ss");
    },
    sumPrice(x,y){
        return x*y
        console.log(x,y)
    },
    formatLoanCondition(x){
      if(x==0) return '未还款'
      if(x==1) return '已还款'
    }
  },
  methods: {
    init(){
      this.showSource();
      this.showAllCompanyToFormat() 
      // this.showGoods();
      // this.doLoan()
    },
    openSetting(index,x){
      if(x==0) {this.model=this.showSourceItems[index];console.log(this.model)}
      if(x==1) {this.model=this.showGoodsItems[index];console.log(this.model)}
      if(x==2) this.model=this.showLoanItem[index]
      this.number=0      
    },
    sendPrice(index,model){
      console.log(index,model)

       if(index==0){ //购买 原料
        let userinfo=JSON.parse(window.sessionStorage.getItem('userinfo'))
        if(model.me!=userinfo[0].company_id){
          let s=`${app.data().globleUrl}/transaction?judge=2&detail=${this.detail}&other=${userinfo[0].company_id}&id=${model.id}`
          console.log(s)
          this.axios({
          method: "post",
          url: s
          })
          .then(res => {
            console.log(res.data);
            s_alert.Success("下单成功", "正在加载……", "success");
            //追加到 库存
            this.appendToStock(index,model);
            //刷新 页面
            this.showSource()
          })
          .catch(err => {
            console.log(err);
          });
        }else{
          s_alert.Success("不能与自己进行交易", "正在加载……", "warning");
        }        
      }

      if(index==1){ //购买 产品
        let userinfo=JSON.parse(window.sessionStorage.getItem('userinfo'))
        if(model.me!=userinfo[0].company_id){
          let s=`${app.data().globleUrl}/transaction?judge=2&detail=${this.detail}&other=${userinfo[0].company_id}&id=${model.id}`
          console.log(s)
          this.axios({
          method: "post",
          url: s
          })
          .then(res => {
            console.log(res.data);
            // s_alert.Success("下单成功", "正在加载……", "success");
            //追加到 库存
            this.appendToStock(index,model);
            //刷新 页面
            this.showGoods()
          })
          .catch(err => {
            console.log(err);
          });
        }else{
          s_alert.Success("不能与自己进行交易", "正在加载……", "warning");
        }        
      }

        if(index==2){ //还清 贷款
          let s=`${app.data().globleUrl}/loan?judge=2&id=${model.id}&condition=1`
          console.log(s)
          this.axios({
          method: "post",
          url: s
          })
          .then(res => {
            console.log(res.data);
            s_alert.Success("还清贷款成功", "正在加载……", "success");
            this.showloan()
            this.tempPriceEndLoan(model)
          })
          .catch(err => {
            console.log(err);
          });
        }      
      },
    appendToStock(index,model){
      //追加 原料订单
      let company_id=JSON.parse(window.sessionStorage.getItem('userinfo'))[0].company_id
      if(index==0){
        let s=`${app.data().globleUrl}/miniyield?judge=1&source_id=${model.source_id}&company_id=${company_id}&sum=${model.number}`
          console.log(s)
          this.axios({
          method: "post",
          url: s
          })
          .then(res => {
            console.log(res.data);
            if(!res.data[1]){
              this.sendNumber(0,model,res.data[0])
              //－钱
              this.tempPriceFixed(company_id,model)
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
      //追加 产品订单
      if(index==1){
        let s=`${app.data().globleUrl}/industryyield?judge=1&commerresearch_id=${model.commerresearch_id}&company_id=${company_id}&sum=${model.number}`
          console.log(s)
          this.axios({
          method: "post",
          url: s
          })
          .then(res => {
            console.log(res.data);
            if(!res.data[1]){
              this.sendNumber(1,model,res.data[0])
              //钱
              this.tempPriceFixed(company_id,model)
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
          
    tempPriceFixed(company_id,model){           //钱模板   *********************
        let m=`${app.data().globleUrl}/statistic?judge=5&company_id=${company_id}`
        this.axios({
        method: "post",
        url: m
        })
        .then(res => {
            let float=res.data[0].float-model.price*model.number;
            let total=res.data[0].total-model.price*model.number;

            let s = `${app.data().globleUrl}/statistic?judge=4&total=${total}&float=${float}&company_id=${company_id}`;   
            console.log('jian',s);
            this
            .axios({
            method: "post",
            url: s
            })
        })

        let m1=`${app.data().globleUrl}/statistic?judge=5&company_id=${model.me}`
        this.axios({
        method: "post",
        url: m1
        })
        .then(res => {
            let float=res.data[0].float+model.price*model.number;
            let total=res.data[0].total+model.price*model.number;

            let s = `${app.data().globleUrl}/statistic?judge=4&total=${total}&float=${float}&company_id=${model.me}`;   
            console.log('jia',s);
            this
            .axios({
            method: "post",
            url: s
            })
        })
    },
    sendNumber(index,model,data) {
      if(index==0){
        //更改 库存 原料储量
        try {
          let addNumber= Number(data.sum) + Number(model.number)
          console.log('-->',addNumber)
          let s=`${app.data().globleUrl}/miniyield?judge=2&id=${data.id}&sum=${addNumber}`
          console.log(s)
          this.axios({
          method: "post",
          url: s
          })
          .then(res => {       
            console.log(res.data)   
            if(res){
              s_alert.Success("下单成功", "正在加载……", "success");
              this.init()
            }else{
              s_alert.Success("下单失败", "正在加载……", "success");
            }
          })
        } 
        catch (error) {
          let addNumber= Number(model.number)
          console.log(addNumber)
          let s=`${app.data().globleUrl}/miniyield?judge=2&id=${data.id}&sum=${model.number}`
          console.log(s)
          this.axios({
          method: "post",
          url: s
          })
          .then(res => {       
            console.log(res.data)   
            if(res){
              s_alert.Success("下单成功", "正在加载……", "success");
              this.init()
            }else{
              s_alert.Success("下单失败", "正在加载……", "success");
            }
          })
        }
      }
      if(index==1){
        //更改 库存 产品储量
        try {
          let addNumber= Number(data.sum) + Number(model.number)
          console.log('-->',addNumber)
          let s=`${app.data().globleUrl}/industryyield?judge=2&id=${data.id}&sum=${addNumber}`
          console.log(s)
          this.axios({
          method: "post",
          url: s
          })
          .then(res => {       
            console.log(res.data)   
            if(res){
              s_alert.Success("下单成功", "正在加载……", "success");
              this.init()
            }else{
              s_alert.Success("下单失败", "正在加载……", "success");
            }
          })
        } 
        catch (error) {
          let addNumber= Number(model.number)
          console.log(addNumber)
          let s=`${app.data().globleUrl}/industryyield?judge=2&id=${data.id}&sum=${addNumber}`
          console.log(s)
          this.axios({
          method: "post",
          url: s
          })
          .then(res => {       
            console.log(res.data)   
            if(res){
              s_alert.Success("下单成功", "正在加载……", "success");
              this.init()
            }else{
              s_alert.Success("下单失败", "正在加载……", "success");
            }
          })
        }
      }      
    },
    showSource() {
      //市场交易 - 原料
      let s=`${app.data().globleUrl}/transaction?judge=7`
      console.log(s)
      this.axios({
      method: "post",
      url: s
      })
      .then(res => {
        console.log(res.data);
        this.showSourceItems = res.data;
        this.judgeChoose=0
      })
      .catch(err => {
        console.log(err);
      });
    },
    showGoods() {
      //市场交易 - 产品
      let s=`${app.data().globleUrl}/transaction?judge=6`
      console.log(s)
      this.axios({
      method: "post",
      url: s
      })
      .then(res => {
        console.log(res.data);
        this.showGoodsItems = res.data;
          this.judgeChoose=1
      })
      .catch(err => {
        console.log(err);
      });
    },
    showAllCompanyToFormat() {
      //获取所有公司信息
      let s=`${app.data().globleUrl}/company?judge=0`
      console.log(s)
      this.axios({
      method: "post",
      url: s
      })
      .then(res => {
        console.log(res.data);
        this.companyAllInfo = res.data;
      })
      .catch(err => {
        console.log(err);
      });
    },
    doLoan() {
      this.currentCompanyName=JSON.parse(window.sessionStorage.getItem('companyinfo')).name
      //市场交易 - 贷款      
    },
    showloan(){
      let company_id=JSON.parse(window.sessionStorage.getItem('userinfo'))[0].company_id

      let s=`${app.data().globleUrl}/loan?judge=4&company_id=${company_id}`
      console.log(s)
      this.axios({
      method: "post",
      url: s
      })
      .then(res => {
        console.log(res.data);
        this.showLoanItem = res.data;
        this.judgeChoose=2
      })
      .catch(err => {
        console.log(err);
      });
    },
    submitForm(){
      //市场交易 - 提交贷款
      //贷款信息
      let send=this.money*(1+(this.rate*this.stay));//应还总额
      let from=Number(window.sessionStorage.getItem('yearid')) //当前财年
      let end=Number(window.sessionStorage.getItem('yearid'))+this.stay;//应还财年
      let company_id=JSON.parse(window.sessionStorage.getItem('userinfo'))[0].company_id

      let s=`${app.data().globleUrl}/loan?judge=1&from=${from}&stay=${this.stay}&end=${end}&rate=${this.rate}&detail=${this.other}&money=${this.money}&send=${send}&condition=0&company_id=${company_id}`
      console.log(s)

      this.axios({
      method: "post",
      url: s
      })
      .then(res => {
        console.log(res.data)
        if(res.data[1]){
          s_alert.Success("贷款信息提交成功", "正在加载……", "success");
          this.tempPriceLoan(company_id,this.money)
        }else{
          s_alert.Warning('贷款信息提交失败','请改正后重试……')
        }
      })
      .catch(err => {
        console.log(err);
      });
    },
    tempPriceLoan(company_id,money){           //钱模板   *********************
      let m=`${app.data().globleUrl}/statistic?judge=5&company_id=${company_id}`
      this.axios({
      method: "post",
      url: m
      })
      .then(res => {
          let float=Number(res.data[0].float)+Number(money);
          let total=Number(res.data[0].total)+Number(money);

          let s = `${app.data().globleUrl}/statistic?judge=4&total=${total}&float=${float}&company_id=${company_id}`;   
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
    tempPriceEndLoan(model){           //钱模板   *********************
      let company_id=JSON.parse(window.sessionStorage.getItem('userinfo'))[0].company_id
      let m=`${app.data().globleUrl}/statistic?judge=5&company_id=${company_id}`
      this.axios({
      method: "post",
      url: m
      })
      .then(res => {
          let float=res.data[0].float-Number(model.send);
          let total=res.data[0].float-Number(model.send);

          let s = `${app.data().globleUrl}/statistic?judge=4&total=${total}&float=${float}&company_id=${company_id}`;   
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
    getRate(){
      if(this.stay==0) this.rate=0;
      if(this.stay==1) this.rate=0.08;
      if(this.stay==2) this.rate=0.12;
      if(this.stay==3) this.rate=0.16;
      if(this.stay>3||this.stay<0) {
        s_alert.Warning('贷款年限输入有误','贷款年限不能小于0或者大于3，请改正后重试……')
        this.stay=0;
        this.rate=0;
      }
    }
  }
}
</script>

<style>

</style>

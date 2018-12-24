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
                <li class @click="showLoan()">
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
                            <th>矿区id</th>
                            <th>原料id</th>
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
                            <td>{{item.mining_id}}</td>
                            <td>{{item.source_id}}</td>
                            <td>{{item.company_id}}</td>
                            <td>{{item.price}}</td>
                            <td>{{item.sum}}</td>
                            <td>{{item.created_at}}</td>
                            <td>{{item.updated_at}}</td>
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
                <!-- 产品交易展示处 -->
                <div class="tab-pane" id="profile">
                  <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <table class="table table-striped" style id="datatable-editable">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>产品id</th>
                            <th>工业用地id</th>
                            <th>公司id</th>
                            <th>类型</th>
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
                            <td>{{item.commerresearch_id}}</td>
                            <td>{{item.indusland_id}}</td>
                            <td>{{item.company_id}}</td>
                            <td>{{item.kind}}</td>
                            <td>{{item.sum}}</td>
                            <td>{{item.price}}</td>
                            <td>{{item.created_at}}</td>
                            <td>{{item.updated_at}}</td>
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
                <!-- 政府贷款展示处 -->
                <div class="tab-pane" id="messages">
                  <div class="panel-body">
                    <form class="form-horizontal" role="form">
                        <div class="form-group">
                            <label class="col-md-2 control-label">公司名称</label>
                            <div class="col-md-10">
                                <input type="text" class="form-control" placeholder="xxx" v-model="name">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="example-email" >贷款金额</label>
                            <div class="col-md-10">
                                <input class="form-control" placeholder="xxx" v-model="money">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-2 control-label" for="example-email">贷款年限</label>
                            <div class="col-md-10">
                                <input type="number" class="form-control" placeholder="0" v-model="year" @input="getRate()">
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

    <!-- StandardModal -->
    <div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title" id="myModalLabel">交易清单</h4>
            </div>
            <!-- 内容 -->
            <div class="modal-body" align='center'>
              <h4>矿区情况介绍</h4>  
              <!-- <h5> {{model}}</h5> -->
              <address class="ng-scope">
                <strong>矿区id:</strong>{{model.mining_id}}<br>
                <strong>原料id:</strong>{{model.source_id}}<br> 
                <strong>公司id:</strong>{{model.company_id}}<br> 
                <strong>单价:</strong>{{model.price}}<br> 
                <strong>数量:</strong>{{model.sum}}<br> 
                <strong>分布时间:</strong>{{model.updated_at}}<br> <hr>
                <strong>订单总额为:</strong><strong>{{number|sumPrice(model.price)}}万元</strong><br> 
                <strong>请输入购买数量:</strong><input type="number" v-model="number"><strong>万件</strong>
              </address>             
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary waves-effect waves-light" data-dismiss="modal" @click="sendPrice()" v-if="number!='' && number>0">提交订单</button>
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
    </div>
    <!-- <button class="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target="#con-close-modal">ResponsiveModal</button> -->

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
      showSourceItems: "",
      showGoodsItems: "",
      showCommerlandItems: "",
      showCompete: "",
      model:"",
      number:'',
      //贷款信息
      name:'xx公司',
      money:0,
      year:0,
      rate:0,
      other:'',
    };
  },
  beforeMount() {
    var ses = window.sessionStorage;
    this.userinfo = JSON.parse(ses.getItem("userinfo"));
  },
  mounted() {
    this.showSource();
  },
  filters: {
    formatTime(val) {
      //console.log(val)
      return moment(val).format("YYYY-MM-DD HH:mm:ss");
    },
    sumPrice(x,y){
        return x*y
        console.log(x,y)
    }
  },
  //s_alert.Success("加入成功，请去公司信息查看", "正在加载……", "success");
  methods: {
    submitForm(){
      $.notify({
        // options
        message: '提交贷款信息成功！' 
      },{
        // settings
        type: 'success'
      });
    },
    info(){
      // $.Notification.notify('info', 'top right', '简单', '加入成功，请去公司信息查看，正在加载……')
      $.notify({
        // options
        message: 'Hello World' 
      },{
        // settings
        type: 'danger'
      });
    },
    m(index){
      this.model=this.showSourceItems[index]
    },
    sendPrice(){
      s_alert.Success("下单成功", "正在加载……", "success");
    },
    showMyCompete() {
      //获取自己公司贷款情况
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
    showSource() {
      //市场交易 - 原料
      this.axios
        .post("/transoource/api")
        .then(res => {
          console.log(res.data);
          this.showSourceItems = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    showGoods() {
      //市场交易 - 产品
      this.axios
        .post("/trangoods/api")
        .then(res => {
          console.log(res.data);
          this.showGoodsItems = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    showLoan() {
      //市场交易 - 贷款
      this.axios
        .post("/ccompete/api")
        .then(res => {
          console.log(res.data);
          this.showCommerlandItems = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getRate(){
      if(this.year==0) this.rate=0;
      if(this.year==1) this.rate=0.08;
      if(this.year==2) this.rate=0.12;
      if(this.year==3) this.rate=0.16;
      if(this.year>3||this.year<0) {
        s_alert.Warning('贷款年限输入有误','贷款年限不能小于0或者大于3，请改正后重试……')
        this.year=0;
        this.rate=0;
      }
    }
  }
};
</script>

<style>
th {
  text-align: center; /** 设置水平方向居中 */
  vertical-align: middle; /** 设置垂直方向居中 */
}
td {
  text-align: center; /** 设置水平方向居中 */
  vertical-align: middle; /** 设置垂直方向居中 */
}
</style>

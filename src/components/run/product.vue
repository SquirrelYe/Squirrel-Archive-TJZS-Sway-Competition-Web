<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h4 class="pull-left page-title">公司运营</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Sway商战大赛-工业用地生产管理</h3>            
          </div>
          <div class="panel panel-body"> 
            <div class="tabs-vertical-env"> 
                <ul class="nav tabs-vertical"> 
                    <li class="" v-for="(item,index) in showCompeteMining" :key="index" :class="{'active' : index==1}">
                        <a :href="'#'+index" data-toggle="tab" aria-expanded="false" @click="chooseMiningIndex(index)">工业用地ID{{item.id}}</a>
                    </li> 
                </ul> 
                <div class="tab-content"> 
                    <div class="tabs-vertical-env"> 
                <ul class="nav tabs-vertical"> 
                    <li class="" v-for="(item,index) in showCompeteMining" :key="index" :class="{'active' : index==1}">
                        <a :href="'#'+index" data-toggle="tab" aria-expanded="false" @click="chooseMiningIndex(index)">工厂ID{{item.id}}</a>
                    </li> 
                </ul> 
                <div class="tab-content"> 
                    <div class="tab-pane" :id="index" v-for="(item,index) in showCompeteMining" :key="index" :class="{'active' : index==1}"> 
                      <h3 class="panel-title">工业用地 & 工厂信息</h3>  
                      <div class="tab-content">
                        <div class="panel panel-default">
                          <div class="panel-heading"> 
                                <!-- {{item}} -->
                              <table class="table table-striped" style id="datatable-editable">
                                <thead>
                                  <tr>
                                    <th>矿区星级</th>
                                    <th>原料类型</th>
                                    <th>元素储量</th>
                                    <th>折旧减免</th>
                                    <th>回购价值</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>{{item.star}}</td>
                                    <td>{{item.source_id}}</td>
                                    <td>{{item.reserve}}</td>
                                    <td>{{item.deprelief}}</td>
                                    <td>{{item.repurchase}}</td>
                                  </tr>
                                </tbody>
                            </table>
                          </div>
                        </div>
                      </div>

                      <div class="tab-content">
                        <div class="panel panel-default">
                          <div class="panel-heading"> 
                                <!-- {{item}} -->
                              <table class="table table-striped" style id="datatable-editable">
                                <thead>
                                  <tr>
                                    <th>矿区星级</th>
                                    <th>原料类型</th>
                                    <th>元素储量</th>
                                    <th>折旧减免</th>
                                    <th>回购价值</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>{{item.star}}</td>
                                    <td>{{item.source_id}}</td>
                                    <td>{{item.reserve}}</td>
                                    <td>{{item.deprelief}}</td>
                                    <td>{{item.repurchase}}</td>
                                  </tr>
                                </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div class='tab-pane'>    
                        <h3 class="panel-title">生产线信息</h3>                        
                        <div class="tab-content" v-for="(item,index) in showDiggerItems" :key="index">
                          <div class="panel panel-default">
                            <div class="panel-heading"> 
                                <!-- {{item}}   -->
                                <br>
                                <strong>挖掘机编号:</strong>{{item.id}}<br>
                                <strong>挖掘机型号:</strong>{{item.model}}<br>
                                <strong>挖掘效率:</strong>{{item.efficient}}<br> 
                                <strong>价值折旧:</strong>{{item.deprelief}}<br>                                 
                                <hr>
                                <button class="btn btn-icon waves-effect waves-light btn-success m-b-5" data-toggle="modal" data-target=".bs-example-modal-lg"  @click="go(index)" v-if="item.condition==1"> <i class="fa fa-spin fa-circle-o-notch"></i> </button> 
                                <button class="btn btn-icon waves-effect waves-light btn-success m-b-5" data-toggle="modal" data-target=".bs-example-modal-lg"  @click="go(index)" v-if="item.condition==0"> <i class="fa fa-wrench"></i> </button> 
                                <button class="btn btn-icon waves-effect waves-light btn-success m-b-5" data-toggle="modal" data-target=".bs-example-modal-lg"  @click="go(index)" v-if="item.condition==2"> <i class="fa fa-check"></i> </button> 
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
        </div>
      </div>
    </div>

    <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title" id="myModalLabel">工程清单</h4>
                  </div>
                  <!-- 内容 -->
                  <div class="modal-body" align='center'>
                      <div class="row">
                        <div class="col-lg-4">
                            <div class="portlet">
                                <div class="portlet-heading bg-inverse">
                                    <h3 class="portlet-title">
                                        工业用地
                                    </h3>
                                    <div class="portlet-widgets">
                                        <a href="javascript:;" data-toggle="reload"><i class="ion-refresh"></i></a>
                                        <span class="divider"></span>                                
                                        <a data-toggle="collapse" data-parent="#accordion1" href="#bg-inverse"><i class="ion-minus-round"></i></a>
                                        <span class="divider"></span>
                                        <a href="#" ><i class="ion-close-round"></i></a>
                                        <!-- data-toggle="remove" -->
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <div id="bg-inverse" class="panel-collapse collapse in">
                                    <div class="portlet-body">
                                      <strong>工地ID:</strong>{{tMining.id}}<br> 
                                      <strong>工地面积:</strong>{{tMining.star}}<br>
                                      <strong>效率提升:</strong>{{tMining.source_id}}<br> 
                                      <strong>折旧降低:</strong>{{tMining.reserve}}<br> 
                                      <hr>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                          <div class="portlet">
                              <div class="portlet-heading bg-success">
                                  <h3 class="portlet-title">
                                      工厂
                                  </h3>
                                  <div class="portlet-widgets">
                                      <a href="javascript:;" data-toggle="reload"><i class="ion-refresh"></i></a>
                                      <span class="divider"></span>
                                      <a data-toggle="collapse" data-parent="#accordion1" href="#bg-success"><i class="ion-minus-round"></i></a>
                                      <span class="divider"></span>
                                      <a href="#" data-toggle="remove"><i class="ion-close-round"></i></a>
                                  </div>
                                  <div class="clearfix"></div>
                              </div>
                              <div id="bg-primary" class="panel-collapse collapse in">
                                    <div class="portlet-body">
                                      <strong>工厂ID:</strong>{{tDigger.id}}<br>
                                      <strong>工地型号:</strong>{{tDigger.model}}<br> 
                                      <strong>占用面积:</strong>{{tDigger.model}}<br> 
                                      <strong>可容纳生产线:</strong>{{tDigger.efficient}}<br> 
                                      <hr>
                                    </div>
                                </div>
                          </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="portlet">
                                <div class="portlet-heading bg-primary">
                                    <h3 class="portlet-title">
                                        生产线
                                    </h3>
                                    <div class="portlet-widgets">
                                        <a href="javascript:;" data-toggle="reload"><i class="ion-refresh"></i></a>
                                        <span class="divider"></span>
                                        <a data-toggle="collapse" data-parent="#accordion1" href="#bg-primary"><i class="ion-minus-round"></i></a>
                                        <span class="divider"></span>
                                        <a href="#" ><i class="ion-close-round"></i></a>
                                        <!-- data-toggle="remove" -->
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <div id="bg-primary" class="panel-collapse collapse in">
                                    <div class="portlet-body">
                                      <strong>生产线ID:</strong>{{tDigger.id}}<br>
                                      <strong>生产产能:</strong>{{tDigger.model}}<br> 
                                      <strong>产线价值折旧:</strong>{{tDigger.efficient}}<br> 
                                      <strong>良品率:</strong>{{tDigger.deprelief}}<br> 
                                      <hr>
                                    </div>
                                </div>
                            </div>
                        </div>         
                        <div class="col-lg-12" v-if="tDigger.condition==0">
                                <div class="portlet">
                                    <div class="portlet-heading portlet-default">
                                        <h3 class="portlet-title text-dark">
                                            选择要生产的产品
                                        </h3>
                                        <div class="portlet-widgets">
                                            <a href="javascript:;" data-toggle="reload"><i class="ion-refresh"></i></a>
                                            <span class="divider"></span>
                                            <a data-toggle="collapse" data-parent="#accordion1" href="#bg-default"><i class="ion-minus-round"></i></a>
                                            <span class="divider"></span>
                                            <a href="#" data-toggle="remove"><i class="ion-close-round"></i></a>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div id="bg-default" class="panel-collapse collapse in">
                                        <div class="panel-heading"> 
                                          <!-- {{item}} -->
                                          <table class="table table-striped" style id="datatable-editable">
                                            <thead>
                                              <tr>
                                                <th>#</th>
                                                <th>产品编号</th>
                                                <th>产品名称</th>
                                                <th>元素金</th>
                                                <th>元素木</th>
                                                <th>元素水</th>
                                                <th>元素火</th>
                                                <th>元素土</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr v-for="(item,index) in showGoodItems" :key="index" :class="{'active' : index==1}">
                                                <td>
                                                  <div class="radio radio-success radio-single">
                                                      <input type="radio" @input="getResearch(index)" v-model="research" :value="index" name="radioSingle1" aria-label="Single radio One">
                                                      <label></label>
                                                  </div>                                                
                                                </td>
                                                <td>{{item.id}}</td>
                                                <td>{{item.name}}</td>
                                                <td>{{item.s1}}</td>
                                                <td>{{item.s2}}</td>
                                                <td>{{item.s3}}</td>
                                                <td>{{item.s4}}</td>
                                                <td>{{item.s5}}</td>
                                              </tr>
                                            </tbody>
                                        </table>
                                      </div>
                                    </div>
                                </div>
                            </div>                  
                        
                    </div>

                      <hr>
                      <div v-if="tDigger.condition==0">
                        <strong>产品名称:</strong><strong>{{chooseResearch.name}}</strong><br>
                        <strong>预计产量（单位/量）:</strong><strong>{{number|sumCreat(0.88)}}</strong><br>
                        <strong>预计结束时间:</strong><strong>{{number|predict(100)}}</strong><br>
                        <div v-if="chooseResearch!=''">
                          <strong>需要耗费元素:
                            金：{{chooseResearch.s1|sumSource(this.number)}}
                            木：{{chooseResearch.s2|sumSource(this.number)}}
                            水：{{chooseResearch.s3|sumSource(this.number)}}
                            火：{{chooseResearch.s4|sumSource(this.number)}}
                            土：{{chooseResearch.s5|sumSource(this.number)}}
                          </strong>
                        </div>
                        <br>
                        <strong>请输入需要生产的产品数量:</strong><input type="number" v-model="number"><strong>（单位/件）</strong><br>
                      </div>
                      <div v-if="tDigger.condition==1">
                        <strong>产品名称:</strong><strong>{{chooseResearch.name}}</strong><br>
                        <h4 style="color:#00b300">生产中</h4><br>
                        <strong>预计结束时间:</strong><strong>{{number|predict(100)}}</strong><br>
                      </div>
                      <div v-if="tDigger.condition==2">
                        <strong>产品名称:</strong><strong>{{chooseResearch.name}}</strong><br>
                        <h4 style="color:#00b300">生产完成</h4>
                        <strong>产量（单位/量）:</strong><strong>{{number|sumCreat(0.88)}}</strong><br>
                          <strong>耗费元素:
                            金：{{chooseResearch.s1|sumSource(this.number)}}
                            木：{{chooseResearch.s2|sumSource(this.number)}}
                            水：{{chooseResearch.s3|sumSource(this.number)}}
                            火：{{chooseResearch.s4|sumSource(this.number)}}
                            土：{{chooseResearch.s5|sumSource(this.number)}}
                          </strong>
                      </div>     
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">关闭</button>
                    <button type="button" class="btn btn-primary waves-effect waves-light" data-dismiss="modal" @click="sendPrice()" v-if="tDigger.condition==0">开始生产</button>
                    <button type="button" class="btn btn-primary waves-effect waves-light" data-dismiss="modal" @click="sendPrice()" v-if="tDigger.condition==2">重新配置</button>
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
const notify = require("bootstrap-notify");
const co = require("co")
import app from "../../App.vue";
var App = app;

export default {
  name: "exploit",
  data() {
    return {
      showCompeteMining:'',
      showDiggerItems:'',
      showGoodItems:'',
      chooseResearch:'',  //显示选择的产品信息
      research:'',  //保存选择的 产品
      number:0,
      tMining:'',
      tDigger:'',
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
    sumCreat(x, y) {
      return Number(x) * Number(y);
    },
    sumSource(x,y) {
      return x * y
    },
    predict(x,y){      
      return moment().locale('zh-cn').add(x/y, 'minutes').utc().utcOffset(-8).format('YYYY-MM-DD HH:mm:ss');
    }
  },
  methods: {
    init(){      
      let that=this
      that.showMyMining();
      that.showDigger();
      that.showGood()
    },
    go(index){
      this.tDigger=this.showDiggerItems[index]
      this.chooseResearch=''
      this.research=''
    },
    sendPrice(){
      s_alert.Success("矿区-挖掘机配置成功，挖掘机开始开采ing", "正在加载……", "success");
      console.log(Date.now())
    },
    showMyMining() {
      this.axios
        .post("/mcompete/api")
        .then(res => {
          this.showCompeteMining=res.data;
          this.chooseMiningIndex(1)
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 测试 显示挖掘机信息  
    showDigger() {
      this.axios
        .post("/digger/api")
        .then(res => {
          console.log(res.data);
          this.showDiggerItems = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 测试 显示公司产品信息  
    showGood() {
      this.axios
        .post("/good/api")
        .then(res => {
          console.log(res.data);
          this.showGoodItems = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    chooseMiningIndex(index){
      this.tMining= this.showCompeteMining[index]      
    },
    getResearch(index){
      this.chooseResearch=this.showGoodItems[index];
      console.log(this.showGoodItems[index].id,this.chooseResearch,this.research)
    }
  }
};
</script>

<style>

</style>

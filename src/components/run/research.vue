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
            <h3 class="panel-title">Sway商战大赛-研究所研发管理</h3>            
          </div>
          <div class="panel panel-body"> 
            <div class="tabs-vertical-env"> 
                <ul class="nav tabs-vertical"> 
                    <li class="" v-for="(item,index) in showCompeteCommer" :key="index" :class="{'active' : index==1}">
                        <a :href="'#'+index" data-toggle="tab" aria-expanded="false" @click="chooseCommerIndex(index)">商业用地ID{{item.id}}</a>
                    </li> 
                </ul> 
                <div class="tab-content"> 
                    <div class="tab-pane" :id="index" v-for="(item,index) in showCompeteCommer" :key="index" :class="{'active' : index==1}"> 
                            <h3 class="panel-title">商业用地信息</h3>  
                      <div class="tab-content">
                        <div class="panel panel-default">
                          <div class="panel-heading"> 
                                <!-- {{item}} -->
                              <table class="table table-striped" style id="datatable-editable">
                                <thead>
                                  <tr>
                                    <th>土地编号</th>
                                    <th>土地等级</th>
                                    <th>品牌提升</th>
                                    <th>增值空间</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>{{item.id}}</td>
                                    <td>{{item.level}}</td>
                                    <td>{{item.brand}}</td>
                                    <td>{{item.increment}}</td>
                                  </tr>
                                </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div class='tab-pane'>    
                        <h3 class="panel-title">研究所信息</h3>                        
                        <div class="tab-content" v-for="(item,index) in showResearchItems" :key="index">
                          <div class="panel panel-default">
                            <div class="panel-heading"> 
                                <!-- {{item}}   -->
                                <table class="table table-striped" style id="datatable-editable">
                                <thead>
                                  <tr>
                                    <th>研究所ID:</th>
                                    <th>研究所类型:</th>
                                    <th>品牌提升:</th>
                                    <th>配方工艺:</th>
                                    <th>建设要求:</th>
                                    <th>操作:</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>{{item.id}}</td>
                                    <td>{{item.model}}</td>
                                    <td>{{item.brand}}</td>
                                    <td>{{item.formula}}</td>
                                    <td>{{item.conrequire}}</td>
                                    <td>
                                      <i class="fa fa-wrench" data-toggle="modal" data-target="#myModal"  @click="m(index)"></i>  
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
      </div>
    </div>
    <!-- StandardModal -->
    <div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title" id="myModalLabel">产品研发</h4>
          </div>
          <!-- 内容 -->
          <div class="modal-body">
            
            <div class="col-lg-12"> 
              <div class="panel-group panel-group-joined" id="accordion-test"> 
                  <div class="panel panel-default"> 
                      <div class="panel-heading"> 
                          <h4 class="panel-title"> 
                              <a data-toggle="collapse" data-parent="#accordion-test" href="#collapseOne" aria-expanded="false" class="collapsed">
                                  产品研发信息填写 #1
                              </a> 
                          </h4> 
                      </div> 
                      <div id="collapseOne" class="panel-collapse collapse" aria-expanded="false" style=""> 
                          <div class="panel-body">
                            <div class="panel panel-default">
                              <div class="panel-body">
                                  <form class="form-horizontal" role="form">                                    
                                      <div class="form-group">
                                          <label class="col-md-2 control-label" >名称</label>
                                          <div class="col-md-10">
                                              <input type="text" class="form-control" placeholder="xxx" v-model="name">
                                          </div>
                                      </div>
                                      <div class="form-group">
                                          <label class="col-md-2 control-label" for="example-email">原理</label>
                                          <div class="col-md-10">
                                              <input type="text" class="form-control" placeholder="xxx" v-model="func">
                                          </div>
                                      </div>
                                      <div class="form-group">
                                          <label class="col-md-2 control-label">介绍</label>
                                          <div class="col-md-10">
                                              <input type="text" class="form-control" placeholder="xxx" v-model="intro">
                                          </div>
                                      </div>
                                      <div class="form-group">
                                          <label class="col-md-2 control-label">单价</label>
                                          <div class="col-md-10">
                                              <input type="number" class="form-control" v-model="price">
                                          </div>
                                      </div>         
                                  </form>
                                  注意：价格单位 万元，不得超过最高单价，最高单价=配方元素量*根号（元素种类）*（1+品牌提升）*0.1
                              </div>
                          </div>
                          </div> 
                      </div> 
                  </div> 

                  <div class="panel panel-default"> 
                      <div class="panel-heading"> 
                          <h4 class="panel-title"> 
                              <a data-toggle="collapse" data-parent="#accordion-test" href="#collapseTwo" aria-expanded="false" class="collapsed">
                                  产品研发原料填写 #2
                              </a> 
                          </h4> 
                      </div> 
                      <div id="collapseTwo" class="panel-collapse collapse" aria-expanded="false" style="height: 0px;"> 
                          <div class="panel-body">
                            <div class="panel panel-default">
                              <div class="panel-body">                            
                                <form class="form-horizontal" role="form">  
                                  <div class="form-group">
                                      <label class="col-md-2 control-label" >金</label>
                                      <div class="col-md-10">
                                          <input type="number" class="form-control" v-model="s1" @input="getMax()">
                                      </div>
                                  </div>
                                  <div class="form-group">
                                      <label class="col-md-2 control-label" >木</label>
                                      <div class="col-md-10">
                                          <input type="number" class="form-control" v-model="s2" @input="getMax()">
                                      </div>
                                  </div>
                                  <div class="form-group">
                                      <label class="col-md-2 control-label" >水</label>
                                      <div class="col-md-10">
                                          <input type="number" class="form-control" v-model="s3" @input="getMax()">
                                      </div>
                                  </div>
                                  <div class="form-group">
                                      <label class="col-md-2 control-label" >火</label>
                                      <div class="col-md-10">
                                          <input type="number" class="form-control" v-model="s4" @input="getMax()">
                                      </div>
                                  </div>
                                  <div class="form-group">
                                      <label class="col-md-2 control-label" >土</label>
                                      <div class="col-md-10">
                                          <input type="number" class="form-control" v-model="s5" @input="getMax()">
                                      </div>
                                  </div>
                                </form>
                                  注意：元素单位 量，元素总量不得超过 研究所 规定的总量。
                              </div>
                            </div>
                          </div> 
                      </div> 
                  </div> 
              </div> 
          </div>   

          </div>
          
          注意：申请产品研发需支付60万元，申请专利保护需支付100万元。
          <div align='center'>
            <div v-if="Number(s1)+Number(s2)+Number(s3)+Number(s4)+Number(s5)==sumSource">
              当前最高单价为：{{max}}万元
              <div class="checkbox checkbox-success checkbox-circle">
                  <input id="checkbox-10" type="checkbox" v-model="law">
                  <label for="checkbox-10">
                      是否申请专利保护
                  </label>
              </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">关闭</button>
              <button type="button" class="btn btn-primary waves-effect waves-light" data-dismiss="modal" @click="sendPrice()" >提交申请</button>
            </div>
            </div>
            <div v-if="Number(s1)+Number(s2)+Number(s3)+Number(s4)+Number(s5)>sumSource" style="color:red">
              超过研究所能够容纳的最大量
              <div class="modal-footer">
                <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">关闭</button>
              </div>
            </div>
            <div v-if="Number(s1)+Number(s2)+Number(s3)+Number(s4)+Number(s5)<sumSource" style="color:green">
              请填写产品原料组成以获取最高单价
              <div class="modal-footer">
                <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">关闭</button>
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
const notify = require("bootstrap-notify");
const co = require("co")
import app from "../../App.vue";
var App = app;

export default {
  name: "exploit",
  data() {
    return {
      showCompeteCommer:'',
      showResearchItems:'',
      number:0,
      tMining:'',
      tDigger:'',
      // 研发产品信息
      name:'',
      func:'',
      intro:'',
      price:'',
      // 原料信息
      s1:0,
      s2:0,
      s3:0,
      s4:0,
      s5:0,
      // 最高单价
      sumSource:3, // 元素量
      brand:0.5,  //品牌价值提升
      max:'',   //最高单价
      law:false
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
      return x * y;
    },
    predict(x){
      return moment().locale('zh-cn').add(x, 'minutes').utc().zone(-8).format('YYYY-MM-DD HH:mm:ss');
    }
  },
  methods: {
    init(){      
      let that=this
      that.showMyCommer();
      that.showResearch();
    },
    m(index){
      this.tDigger=this.showResearchItems[index]
    },
    sendPrice(){
      s_alert.Success("产品研发申请发送成功", "请到 公司—>公司产品 中查看", "success");
    },
    showMyCommer() {
      this.axios
        .post("/ccompete/api")
        .then(res => {
          this.showCompeteCommer=res.data;
          this.chooseCommerIndex(1)
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 测试 显示研究所信息  
    showResearch() {
      this.axios
        .post("/commer/api")
        .then(res => {
          console.log(res.data);
          this.showResearchItems = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    chooseCommerIndex(index){
      this.tMining= this.showCompeteCommer[index]      
    },
    getMax(){
      console.log(this.s1,this.s2,this.s3,this.s4,this.s5)
      let sum=0;
      if(this.s1!=0) sum++;
      if(this.s2!=0) sum++;
      if(this.s3!=0) sum++;
      if(this.s4!=0) sum++;
      if(this.s5!=0) sum++;
      console.log(sum)
      this.max=this.sumSource*Math.sqrt(sum)*(1+this.brand)*0.1
    }
  }
};
</script>

<style>

</style>

<template>
  <div class="container">
    <!-- Page-Title -->
    <div class="row">
      <div class="col-sm-12">
        <h4 class="pull-left page-title">资产管理</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Sway商战大赛-商业用地配置</h3>
          </div>

          <div class="panel-body">
            <div class="col-lg-12">
                  <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      
                      <div class="row">
                            <div class="col-lg-4" v-for="(item,index) in showCompeteCommerland" :key="index">
                                <div class="panel panel-fill" :class="{'panel-inverse' : index%3==0,'panel-purple' : index%3==1,'panel-success' : index%3==2}">
                                    <div class="panel-heading" style="height:40px"> 
                                        <h3 class="panel-title" style="float:left">研究所编号  {{item.id}}</h3> 
                                        <i class="fa fa-pencil" style="float:right"  data-toggle="modal" data-target="#accordion-modal" @click="openSetting(index)" v-if="showCompeteCommerland[index].research==null">配置</i>
                                    </div> 
                                    <div class="panel-body"> 
                                      <div class='row' v-if="showCompeteCommerland[index].research==null">
                                        <p>
                                          暂未配置研究所
                                        </p>
                                      </div>
                                      <div class="row" v-else>       
                                        研究所信息如下：<br>        
                                        <div class="col-lg-12">
                                          <div class="btn-group">
                                              <button type="button" class="btn dropdown-toggle waves-effect" data-toggle="dropdown" aria-expanded="false" :class="{'btn-default' : index%4==0,'btn-success' : index%4==1,'btn-warning' : index%4==2,'btn-primary' : index%4==3}">
                                                {{showCompeteCommerland[index].research.id}} 
                                                <span class="caret"></span>
                                              </button>
                                              <ul class="dropdown-menu" role="menu">
                                                  <li>
                                                    <a>
                                                      <div align='center'>
                                                        <p>
                                                          <strong>研究所类型：</strong>{{showCompeteCommerland[index].research.model}}<br>
                                                          <strong>品牌提升：</strong>{{showCompeteCommerland[index].research.brand}}<br>
                                                          <strong>配方工艺：</strong>{{showCompeteCommerland[index].research.formula}}<br>
                                                          <strong>购置价值：</strong>{{showCompeteCommerland[index].research.price}}<br>
                                                          <strong>建设要求：</strong>{{showCompeteCommerland[index].research.conrequire}}<br>
                                                        </p>  
                                                      </div>
                                                    </a>
                                                  </li>
                                              </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div> 
                                </div>
                            </div>
                        </div>                 

                      <div class="panel-body">
                        <a
                          class="btn btn-success waves-effect waves-light"
                          href="javascript:;"
                          @click="info"
                        >Info</a>

                      </div>
                    </div>
                  </div>
                  <hr>
                  <p>
                    <strong>注意</strong>：拍卖过程分为
                    <strong>明拍</strong>与
                    <strong>暗拍</strong>两种，以上单位均为
                    <strong>万元</strong>。
                  </p>
                </div>
          </div>
        </div>
      </div>
    </div>

    
    <!-- <button class="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target="#myModal">StandardModal</button> -->
    <!-- Modal Content is Responsive -->
    <div id="accordion-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none">
      <div class="modal-dialog">
          <div class="modal-content p-0">
              <div class="panel-group panel-group-joined" id="accordion-test"> 

                  <div class="panel  panel-default" v-for="(item,index) in judgeShowResearch" :key="index" > 
                    <div class="panel-heading"> 
                        <h4 class="panel-title"> 
                            <a data-toggle="collapse" data-parent="#accordion-test" :href="'#'+index" class="collapsed">
                                研究所编号 # {{item.id}}
                            </a> 
                        </h4> 
                    </div> 
                    <div :id="index" class="panel-collapse collapse" :class="{'in' : index==1}"> 
                        <div class="modal-body" align="center">
                          <table class="table table-bordered table-striped" style id="datatable-editable">
                            <thead>
                              <tr>
                                <th>研究所类型</th>
                                <th>品牌提升</th>
                                <th>配方工艺</th>
                                <th>价格</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="gradeX" >
                                <td>{{item.model}}</td>
                                <td>{{item.brand}}</td>
                                <td>{{item.formula}}</td>
                                <td>{{item.price}}</td>
                              </tr>
                            </tbody>
                          </table>
                          <strong>订单总额为:</strong><strong style='color:green'>{{item.price}}万元</strong><br>
                        </div>

                        <div class="modal-footer">
                          <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">关闭</button>
                          <button
                            type="button"
                            class="btn btn-primary waves-effect waves-light"
                            data-dismiss="modal"
                            @click="sendPrice(index)">提交订单</button>
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
const notify = require("bootstrap-notify");
import app from "../../App.vue";
var App = app;

export default {
  name: "mine",
  data() {
    return {
      showCompeteCommerland:'',
      showResearchItems:'',
      //购买研究所
      temp:'',
      judgeShowResearch:[]
    };
  },
  beforeMount() {
    var ses = window.sessionStorage;
    this.userinfo = JSON.parse(ses.getItem("userinfo"));
  },
  mounted() {
    this.showMyCommerland();
    this.showResearch()
  },
  filters: {
    formatTime(val) {
      //console.log(val)
      return moment(val).format("YYYY-MM-DD HH:mm:ss");
    },
    sumPrice(x, y) {
      return x * y;
      console.log(x, y);
    },
    formatDiggerNumber(x){
      // console.log(x)
      if(x==null) return '暂未配置挖掘机';
      else return x;
    }
  },
  //s_alert.Success("加入成功，请去公司信息查看", "正在加载……", "success");
  methods: {
    info() {
      $.notify(
        {
          // options
          message: "Hello World"
        },
        {
          // settings
          type: "success"
        }
      );
    },
    openSetting(index) {
      this.judgeShowResearch=[]
      this.temp=this.showCompeteCommerland[index]
      let level=this.showCompeteCommerland[index].level
      
      if(level==4){
        this.judgeShowResearch=this.showResearchItems
      }else if(level==3){
        this.showResearchItems.forEach(e => {
          if(e.conrequire<=level){
            this.judgeShowResearch.push(e)
          }
        });
      }else if(level==2 || level==1){
        this.showResearchItems.forEach(e => {
          if(e.conrequire<=2){
            this.judgeShowResearch.push(e)
          }
        });
      }
      console.log(this.temp)
      this.showResearch()
    },
    sendPrice(index) {
      //购买研究所 绑定 到 商业用地
      let that=this
      let s=`${app.data().globleUrl}/ass/commerland_research?judge=6&commerland_id=${this.temp.id}&research_id=${this.showResearchItems[index].id}`
        console.log(s)
        that.axios({
        method: "post",
        url: s
        })
        .then(res => {          
          s_alert.Success("下单成功", "正在加载……", "success");
          that.showMyCommerland();
        })
        .catch(err => {
          s_alert.Success("下单失败", "正在加载……", "success");
        });

    },
    checkMaxNumber(){
      console.log(Number(this.number)+Number(this.haveNumber))
      if(Number(this.number)+Number(this.haveNumber)>4){
          s_alert.Success("矿区挖掘机数量不超过4个", "正在加载……", "warning");
      }
    },
    showMyCommerland() {
      //显示已购 商业用地
      let userinfo=JSON.parse(window.sessionStorage.getItem('userinfo'))
      let s=`${app.data().globleUrl}/ass/commerland_research?judge=4&company_id=${userinfo[0].company_id}`
        console.log(s)
        this.axios({
        method: "post",
        url: s
        })
        .then(res => {
          this.showCompeteCommerland=res.data;
          console.log(this.showCompeteCommerland)
        })
        .catch(err => {
          console.log(err);
        });
    },
    showResearch() {
      //显示 研究所 信息
      let s=`${app.data().globleUrl}/research?judge=0`
        console.log(s)
        this.axios({
        method: "post",
        url: s
        })
        .then(res => {
          console.log(res.data);
          this.showResearchItems = res.data;
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

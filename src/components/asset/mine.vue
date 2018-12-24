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
            <h3 class="panel-title">Sway商战大赛-矿区配置</h3>
          </div>

          <div class="panel-body">
            <div class="col-lg-12">
                  <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      
                      <div class="row">
                            <div class="col-lg-4" v-for="(item,index) in showCompeteMining" :key="index">
                                <div class="panel panel-fill" :class="{'panel-inverse' : index%3==0,'panel-purple' : index%3==1,'panel-success' : index%3==2}">
                                    <div class="panel-heading" style="height:40px"> 
                                        <h3 class="panel-title" style="float:left">矿区编号  {{item.id}}</h3> 
                                        <i class="fa fa-pencil" style="float:right"  data-toggle="modal" data-target="#accordion-modal" @click="openSetting(index)">配置</i>
                                    </div> 
                                    <div class="panel-body"> 
                                      <!-- <p>
                                        暂未配置挖掘机
                                      </p>-->
                                      <div class="row">       
                                        挖掘机信息如下：<br>        
                                        <div class="col-lg-12">
                                          <div class="btn-group" v-for="(item,index) in showCompeteMining[index].diggers" :key="index">
                                              <button type="button" class="btn dropdown-toggle waves-effect" data-toggle="dropdown" aria-expanded="false" :class="{'btn-default' : index%4==0,'btn-success' : index%4==1,'btn-warning' : index%4==2,'btn-primary' : index%4==3}">
                                                {{item.id}} 
                                                <span class="caret"></span>
                                              </button>
                                              <ul class="dropdown-menu" role="menu">
                                                  <li>
                                                    <a>
                                                      <div align='center'>
                                                        <p>
                                                          <strong>挖掘机型号：</strong>{{item.id}}<br>
                                                          <strong>购置价格：</strong>{{item.id}}<br>
                                                          <strong>挖掘效率：</strong>{{item.id}}<br>
                                                          <strong>价值折旧：</strong>{{item.id}}<br>
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

                  <div class="panel  panel-default" v-for="(item,index) in showDiggerItems" :key="index" > 
                    <div class="panel-heading"> 
                        <h4 class="panel-title"> 
                            <a data-toggle="collapse" data-parent="#accordion-test" :href="'#'+index" class="collapsed">
                                挖掘机编号 # {{item.id}}
                            </a> 
                        </h4> 
                    </div> 
                    <div :id="index" class="panel-collapse collapse" :class="{'in' : index==1}"> 
                        <div class="modal-body" align="center">
                          <table class="table table-bordered table-striped" style id="datatable-editable">
                            <thead>
                              <tr>
                                <th>挖掘机型号</th>
                                <th>价格</th>
                                <th>挖掘效率</th>
                                <th>价值折旧</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="gradeX" >
                                <td>{{item.model}}</td>
                                <td>{{item.price}}</td>
                                <td>{{item.efficient}}</td>
                                <td>{{item.deprelief}}</td>
                              </tr>
                            </tbody>
                          </table>
                          <strong>订单总额为:</strong><strong style='color:green'>{{number|sumPrice(item.price)}}万元</strong><br>
                          <strong>请输入配置数量:</strong><input type="number" v-model="number"><strong>台</strong>
                        </div>

                        <div class="modal-footer">
                          <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">关闭</button>
                          <button
                            type="button"
                            class="btn btn-primary waves-effect waves-light"
                            data-dismiss="modal"
                            @click="sendPrice(index)"
                            v-if="number!='' && number>0"
                          >提交订单</button>
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
      showCompeteMining:'',
      showDiggerItems:'',
      //购买挖掘机
      number: "",
      temp:''
    };
  },
  beforeMount() {
    var ses = window.sessionStorage;
    this.userinfo = JSON.parse(ses.getItem("userinfo"));
  },
  mounted() {
    this.showMyMining();
    this.showDigger()
  },
  filters: {
    formatTime(val) {
      //console.log(val)
      return moment(val).format("YYYY-MM-DD HH:mm:ss");
    },
    sumPrice(x, y) {
      return x * y;
      console.log(x, y);
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
      this.number=''
      this.temp=this.showCompeteMining[index]
      console.log(this.temp)
      this.showDigger()
    },
    sendPrice(index) {
      //购买挖掘机 绑定 到矿区
      let that=this
      let s=`${app.data().globleUrl}/ass/mining_digger?judge=1&mining_id=${this.temp.id}&digger_id=${this.showDiggerItems[index].id}&number=${this.number}`
        console.log(s)
        that.axios({
        method: "post",
        url: s
        })
        .then(res => {          
          // s_alert.Success("下单成功", "正在加载……", "success");
          that.sendNumber(index)
        })
        .catch(err => {
          // s_alert.Success("下单失败", "正在加载……", "success");
        });

    },
    sendNumber(index) {
      //购买挖掘机 绑定 到矿区
      let s=`${app.data().globleUrl}/ass/mining_digger?judge=6&mining_id=${this.temp.id}&digger_id=${this.showDiggerItems[index].id}&number=${this.number}`
        console.log(s)
        this.axios({
        method: "post",
        url: s
        })
        .then(res => {          
          s_alert.Success("下单成功", "正在加载……", "success");
        })
        .catch(err => {
          // s_alert.Success("下单失败", "正在加载……", "success");
        });

    }
    ,
    showMyMining() {
      //显示已购 矿区
      let userinfo=JSON.parse(window.sessionStorage.getItem('userinfo'))
      let s=`${app.data().globleUrl}/ass/mining_digger?judge=5&company_id=${userinfo[0].company_id}`
        console.log(s)
        this.axios({
        method: "post",
        url: s
        })
        .then(res => {
          this.showCompeteMining=res.data;
          console.log(this.showCompeteMining)
        })
        .catch(err => {
          console.log(err);
        });
    },
    showDigger() {
      //显示 挖掘机 信息
      let s=`${app.data().globleUrl}/digger?judge=0`
        console.log(s)
        this.axios({
        method: "post",
        url: s
        })
        .then(res => {
          console.log(res.data);
          this.showDiggerItems = res.data;
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

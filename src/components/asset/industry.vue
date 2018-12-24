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
            <h3 class="panel-title">Sway商战大赛-工业用地配置</h3>
          </div>

          <div class="panel-body">
            <div class="col-lg-12">
                  <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">                      
                      <div class="row">
                            <div class="col-lg-6" v-for="(item,index) in showCompeteIndusland" :key="index">
                              <div class="panel panel-fill panel-inverse">
                                  <div class="panel-heading" style="height:40px"> 
                                      <h3 class="panel-title" style="float:left">工业用地编号  {{item.id}}</h3> 
                                      <i class="fa fa-pencil" style="float:right"  data-toggle="modal" data-target="#accordion-modal" @click="openSetting()">配置</i>
                                  </div> 
                                  <div class="panel-body"> 
                                    <!-- <p>
                                      暂未配置工厂
                                    </p> -->
                                    <div class="col-lg-4" v-for="(item,index) in showCompeteIndusland" :key="index">
                                      <div class="panel panel-fill panel-default">
                                          <div class="panel-heading" style="height:40px"> 
                                              <h3 class="panel-title" style="float:left">工厂编号  {{item.id}}</h3> 
                                              <i class="fa fa-pencil" style="float:right"  data-toggle="modal" data-target="#accordion-modal" @click="openSetting()">配置</i>
                                          </div> 
                                          <div class="panel-body"> 
                                            <!-- <p>
                                              暂未配置生产线
                                            </p>  -->
                                            <div class="row">       
                                              生产线信息如下：<br>        
                                              <div class="col-lg-12">
                                                <div class="btn-group" v-for="(item,index) in showCompeteIndusland" :key="index">
                                                    <button type="button" class="btn dropdown-toggle waves-effect" data-toggle="dropdown" aria-expanded="false" :class="{'btn-default' : index%4==0,'btn-success' : index%4==1,'btn-warning' : index%4==2,'btn-primary' : index%4==3}">
                                                      {{item.id}} 
                                                      <span class="caret"></span>
                                                    </button>
                                                    <ul class="dropdown-menu" role="menu">
                                                        <li>
                                                          <a>
                                                            <div align='center'>
                                                              <p>
                                                                <strong>生产线型号：</strong>{{item.id}}<br>
                                                                <strong>产能：</strong>{{item.id}}<br>
                                                                <strong>产线价值折旧：</strong>{{item.id}}<br>
                                                                <strong>良品率：</strong>{{item.id}}<br>
                                                                <strong>购置价格：</strong>{{item.id}}<br>
                                                                <strong>建设要求：</strong>{{item.id}}<br>
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
                              </div>
                            </div>
                        </div>                      
                      <div class="panel-body">
                        <a
                          class="btn btn-info waves-effect waves-light"
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

                  <div class="panel panel-default" v-for="(item,index) in showFactoryItems" :key="index"> 
                    <div class="panel-heading"> 
                        <h4 class="panel-title"> 
                            <a data-toggle="collapse" data-parent="#accordion-test" :href="'#'+index" class="collapsed">
                                工厂编号 # {{item.id}}
                            </a> 
                        </h4> 
                    </div> 
                    <div :id="index" class="panel-collapse collapse" :class="{'in' : index==1}"> 
                        <div class="modal-body" align="center">
                          <table class="table table-bordered table-striped" style id="datatable-editable">
                            <thead>
                              <tr>
                                <th>工厂型号</th>
                                <th>占用面积</th>
                                <th>容纳生产线</th>
                                <th>建设成本</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="gradeX" >
                                <td>{{item.model}}</td>
                                <td>{{item.measure}}</td>
                                <td>{{item.includeline}}</td>
                                <td>{{item.price}}</td>
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
                            @click="sendPrice()"
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
  name: "industry",
  data() {
    return {
      showCompeteIndusland:'',
      showFactoryItems:'',
      number: "",
    };
  },
  beforeMount() {
    var ses = window.sessionStorage;
    this.userinfo = JSON.parse(ses.getItem("userinfo"));
  },
  mounted() {
    this.showMyIndusland();
    this.showFactory()
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
          type: "danger"
        }
      );
    },
    openSetting(index) {
      this.number=''
    },
    sendPrice() {
      s_alert.Success("下单成功", "正在加载……", "success");
    },
    showMyIndusland() {
      //显示已购 工业用地
      this.axios
        .post("/compete/api")
        .then(res => {
          let arr=[]
          res.data.forEach(element => {
              if(element.type==1){
                  arr.push(element);
              }
          });
          this.showCompeteIndusland=arr;
          console.log(this.showCompeteIndusland)
        })
        .catch(err => {
          console.log(err);
        });
    },
    showFactory() {
      //显示 厂房 信息
      this.axios
        .post("/factory/api")
        .then(res => {
          console.log(res.data);
          this.showFactoryItems = res.data;
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

<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h4 class="pull-left page-title">交易管理</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Sway商战大赛-公司代工交易情况</h3>
          </div>
          <div class="panel-body">
            <div class="table-responsive">
              <table class="table table-striped" style id="datatable-editable">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>财年</th>
                    <th>资金出入</th>
                    <th>交易类型</th>
                    <th>订单类型</th>
                    <th>单价</th>
                    <th>数量</th>
                    <th>交易明细</th>
                    <th>己方</th>
                    <th>对方</th>
                    <th>交易原料id</th>
                    <th>交易产品id</th>
                    <th>创建日期</th>
                    <th>更新时间</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="gradeX" v-for="(item,index) in showTransaction" :key="item.name">
                    <td>{{index}}</td>
                    <td>{{item.Yearid}}</td>
                    <td>{{item.inout|formatInOut}}</td>
                    <td>{{item.type|formatType}}</td>
                    <td>{{item.kind|formatKind}}</td>
                    <td>{{item.price}}</td>
                    <td>{{item.number}}</td>
                    <td>{{item.detail}}</td>
                    <td>{{item.me}}</td>
                    <td>{{item.other}}</td>
                    <td v-if="item.source">{{item.source.name}}</td>
                    <td v-else></td>
                    <td v-if="item.commerresearch">{{item.commerresearch.name}}</td>
                    <td v-else></td>
                    <td>{{item.created_at|formatTime}}</td>
                    <td>{{item.updated_at|formatTime}}</td>
                  </tr>
                </tbody>
              </table>
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
  name: "showtransaction",
  data() {
    return {
      showTransaction: "",
    };
  },
  beforeMount() {
    var ses = window.sessionStorage;
    this.userinfo = JSON.parse(ses.getItem("userinfo"));
  },
  mounted() {
      this.showMyCompete()
  },
  filters:{
    formatTime(val) {
      return moment(val).format("YYYY-MM-DD HH:mm:ss");
    },
    formatInOut(x){
      if(x==1) return '买入';
      if(x==2) return '卖出';
    },
    formatType(x){
      if(x==1) return '定向公司交易';
      if(x==2) return '市场交易';
      if(x==3) return '贷款';
      if(x==4) return '固定资产支出';
    },
    formatKind(x){
      if(x==1) return '原料订单';
      if(x==2) return '产品订单';
      if(x==3) return '现金交易';
    }
  },
  methods: {
    showMyCompete() {
    //获取自己公司竞拍情况
    let company_id=JSON.parse(window.sessionStorage.getItem('userinfo'))[0].company_id
    let s=`${app.data().globleUrl}/transaction?judge=0`
    console.log(s)
    this.axios({
    method: "post",
    url: s
    })
    .then(res => {
        console.log(res.data);
        this.showTransaction = res.data;
    })
    .catch(err => {
        console.log(err);
    });
},
  }
};
</script>

<style>
</style>

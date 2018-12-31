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
                    <th>交易原料名称</th>
                    <th>交易产品名称</th>
                    <th>矿区</th>
                    <th>工业用地</th>
                    <th>商业用地</th>
                    <th>挖掘机</th>
                    <th>工厂</th>
                    <th>生产线</th>
                    <th>研究所</th>
                    <th>创建日期</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="gradeX" v-for="(item,index) in showTransaction" :key="index">
                    <td>{{item.id}}</td>
                    <td>{{item.Yearid}}</td>
                    <td>{{item.inout|formatInOut}}</td>
                    <td>{{item.type|formatType}}</td>
                    <td>{{item.kind|formatKind}}</td>
                    <td>{{item.price}}</td> 
                    <td>{{item.number}}</td>
                    <td>{{item.detail}}</td>
                    <td v-if="item.me_1">{{item.me_1.name}}</td>
                    <td v-else></td>
                    <td v-if="item.other_1">{{item.other_1.name}}</td>
                    <td v-else></td>
                    <td v-if="item.source">{{item.source.name}}</td>
                    <td v-else></td>
                    <td v-if="item.commerresearch">{{item.commerresearch.name}}</td>
                    <td v-else></td>
                    <td v-if="item.mining">{{item.mining.star|formatStar}}</td>
                    <td v-else></td>
                    <td v-if="item.indusland">{{item.indusland.model|formatModel}}</td>
                    <td v-else></td>
                    <td v-if="item.commerland">{{item.commerland.level|formatLevel}}</td>
                    <td v-else></td>
                    <td v-if="item.digger">{{item.digger.model}}</td>
                    <td v-else></td>
                    <td v-if="item.factory">{{item.factory.model}}</td>
                    <td v-else></td>
                    <td v-if="item.line">{{item.line.model}}</td>
                    <td v-else></td>
                    <td v-if="item.research">{{item.research.model}}</td>
                    <td v-else></td>
                    <td>{{item.created_at|formatTime}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p><strong>注意:上图所示己方与对方均为对方公司ID，详细公司信息请前往 公司-> 公司信息中查看。</strong></p>
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
    },
    formatStar(x){
      if(x==1) return '一星矿区';
      if(x==2) return '二星矿区';
      if(x==3) return '三星矿区';
      if(x==4) return '四星矿区';
      if(x==5) return '五星矿区';
    },
    formatModel(x){
      if(x==1) return 'A';
      if(x==2) return 'Z';
      if(x==3) return 'C';
      if(x==4) return 'S';
    },
    formatLevel(x){
      if(x==1) return '投契级';
      if(x==2) return '机构级';
      if(x==3) return '投资级';
      if(x==4) return '地标级';
    },
    formatDigger(x){
      if(x==1) return 'A1型挖掘机';
      if(x==2) return 'A2型挖掘机';
      if(x==3) return 'D型挖掘机';
      if(x==1) return 'E型挖掘机';
      if(x==2) return 'R型挖掘机';

    }
  },
  methods: {
    showMyCompete() {
    //获取自己公司竞拍情况
    let company_id=JSON.parse(window.sessionStorage.getItem('userinfo'))[0].company_id
    let s=`${app.data().globleUrl}/transaction?judge=8&company_id=${company_id}`
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

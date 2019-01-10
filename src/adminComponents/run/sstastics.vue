<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h4 class="pull-left page-title">赛事运营</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Sway商战大赛-参赛公司资产情况</h3>
          </div>
          <div class="panel-body">
            <div class="table-responsive">
              <table class="table table-striped table-hover" style id="datatable-editable">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>财年</th>
                    <th>公司名称</th>
                    <th>流动资金</th>
                    <th>固定资金</th>
                    <th>总资产</th>
                    <th>品牌价值</th>
                    <th>更新日期</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="gradeX" v-for="(item,index) in showItems" :key="index">
                    <td>{{index}}</td>
                    <td>{{item.Yearid}}</td>
                    <td v-if="item.company">{{item.company.name}}</td>
                    <td v-else></td>
                    <td>{{item.float}}w</td>
                    <td>{{item.fixed}}w</td>
                    <td>{{item.total}}w</td>
                    <td>{{item.brand}}</td>
                    <td>{{item.updated_at|formatTime}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p><strong>注意:上图所示价格单位均为万元。</strong></p>
          </div>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
const s_alert = require("../../utils/alert");
const ses = require("../../utils/ses");
const req = require("../../utils/axios");
const print = require("../../utils/print");
const apis = require("../../utils/api/apis");

import app from "../../App.vue";
const moment = require("moment");
var App = app;

export default {
  name: "stransaction",
  data() {
    return {
      company_id:'',
      showTransaction: '',
      company:'',
      showItems:''
    };
  },
  beforeMount() {

  },
  mounted() {
    this.init()
  },
  filters:{
    formatTime(x) {
      return moment(x).format("YYYY-MM-DD HH:mm:ss");
    }
  },
  methods: {
    init(){
      this.showAllStastics();
    },
    showAllStastics() {
      apis.getAllStatisticWithCompanyInfo()
      .then(res => {
          print.log(res.data);
          this.showItems = res.data;
      })
    }
  }
};
</script>

<style>
</style>

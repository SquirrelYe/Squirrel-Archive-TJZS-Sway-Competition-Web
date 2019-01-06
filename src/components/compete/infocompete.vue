<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h4 class="pull-left page-title">竞拍管理</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Sway商战大赛-竞拍情况</h3>
          </div>
          <div class="panel-body">
            <div class="table-responsive">
              <table class="table table-striped" style id="datatable-editable">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>财年</th>
                    <th>物品种类</th>
                    <th>物品id</th>
                    <th>竞拍价</th>
                    <th>状态</th>
                    <th>更新时间</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="gradeX" v-for="(item,index) in showCompete" :key="item.name">
                    <td>{{index}}</td>
                    <td>{{item.Yearid}}</td>
                    <td>{{item.type|formatType}}</td>
                    <td>{{item.thingid}}</td>
                    <td>{{item.auction}}</td>
                    <td>{{item.condition | formatCondition}}</td>
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
const ses = require("../../utils/ses");
const req = require("../../utils/axios");
const print = require("../../utils/print");
const apis = require("../../utils/api/apis");


import app from "../../App.vue";
const moment = require("moment");
var App = app;

export default {
  name: "infocompete",
  data() {
    return {
      showCompete: ""
    };
  },
  beforeMount() {
    var ses = window.sessionStorage;
    this.userinfo = JSON.parse(ses.getItem("userinfo"));
  },
  mounted() {
    this.showMyCompete();
  },
  filters:{
    formatTime(val) {
      return moment(val).format("YYYY-MM-DD HH:mm:ss");
    },
    formatCondition(val){
      if(val==-2) return '竞拍未开始'
      if(val==-1) return '产品流拍'
      if(val==0) return '竞拍中'
      if(val==1) return '竞拍已结束'
      if(val==2) return '定向公司发送'
    },
    formatType(x){
      if(x==1) return '矿区'
      if(x==2) return '工业用地'
      if(x==3) return '商业用地'
    }
  },
  methods: {
    showMyCompete() {
      //获取自己公司竞拍情况
      req.post_Param('api/compete',{
        'judge':6,
        'company_id':JSON.parse(ses.getSes('userinfo')).company_id
      })
        .then(res => {
          console.log(res.data);
          this.showCompete = res.data;
        })
    }
  }
};
</script>

<style>
</style>

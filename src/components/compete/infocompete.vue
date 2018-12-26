<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h4 class="pull-left page-title">公司管理</h4>
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
                    <td>{{item.type}}</td>
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
      //console.log(val)
      return moment(val).format("YYYY-MM-DD HH:mm:ss");
    },
    formatCondition(val){
      if(val==-2) return '竞拍未开始'
      if(val==-1) return '产品流拍'
      if(val==0) return '竞拍中'
      if(val==1) return '竞拍已结束'
      if(val==2) return '定向公司发送'
    }
  },
  methods: {
    showMyCompete() {
      //获取自己公司竞拍情况
      let userinfo=JSON.parse(window.sessionStorage.getItem('userinfo'))
      let s=`${app.data().globleUrl}/compete?judge=6&company_id=${userinfo[0].company_id}`
        console.log(s)
        this.axios({
        method: "post",
        url: s
        })
        .then(res => {
          console.log(res.data);
          this.showCompete = res.data;
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

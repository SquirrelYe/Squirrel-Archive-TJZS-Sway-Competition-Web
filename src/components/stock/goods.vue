<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h4 class="pull-left page-title">库存管理</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-9">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Sway商战大赛-产品研发情况</h3>
          </div>
          <div class="panel-body">
            <div class="table-responsive">
              <table class="table table-striped" style id="datatable-editable">
                <thead>
                  <tr>
                    <th>产品ID</th>
                    <th>产品名称</th>
                    <th>产品原理</th>
                    <th>产品介绍</th>
                    <th>申请状态</th>
                    <th>单价</th>
                    <th>默认最高单价</th>
                    <th>所属商业用地</th>
                    <th>创建日期</th>
                    <th>最后更新日期</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="gradeX" v-for="(item,index) in showGood" :key="index">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.function}}</td>
                    <td>{{item.introduction}}</td>
                    <td>{{item.condition | formatCondition}}</td>
                    <td>{{item.price}}</td>
                    <td>{{item.maxprice}}</td>
                    <td>{{item.commerland_id}}</td>
                    <td>{{item.created_at | formatTime}}</td>
                    <td>{{item.updated_at | formatTime}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Sway商战大赛-产品研发原料组成</h3>
          </div>
          <div class="panel-body">
            <div class="table-responsive">
              <table class="table table-striped" style id="datatable-editable">
                <thead>
                  <tr>
                    <th>产品ID</th>
                    <th>金</th>
                    <th>木</th>
                    <th>水</th>
                    <th>火</th>
                    <th>土</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="gradeX" v-for="(item,index) in showGood" :key="index">
                    <td>{{item.id}}</td>
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

  </div>
</template>

<script>
const s_alert = require("../../utils/alert");
import app from "../../App.vue";
const moment = require("moment");
var App = app;

export default {
  name: "good",
  data() {
    return {
      showGood: "",
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
    formatTime(val){
      //console.log(val)
      return moment(val).format('YYYY-MM-DD HH:mm:ss')
    },
    formatCondition(val){
      if(val==0) return '产品提交审核中'
      if(val==1) return '产品审核通过'
      if(val==-1) return '产品审核未通过'
    }
  },
  methods: {
    showMyCompete() {
    //获取自己公司竞拍情况
    let that=this
    let userinfo=JSON.parse(window.sessionStorage.getItem('userinfo'))
    let s=`${app.data().globleUrl}/ass/commerresearch_commerland?judge=3&company_id=${userinfo[0].company_id}`
    console.log(s)
    that.axios({
    method: "post",
    url: s
    })
    .then(res => {
        console.log(res.data);
        let arr=[] 
        res.data.forEach(e => {
          e.commerresearches.forEach(element => {
            arr.push(element)
            console.log(element)
          });
        });
        this.showGood = arr;
        console.log(arr)
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

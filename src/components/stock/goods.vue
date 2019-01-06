<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h4 class="pull-left page-title">公司信息</h4>
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
                    <th>创建日期</th>
                    <th>产品代工授权</th>
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
                    <td>{{item.created_at | formatTime}}</td>
                    <td>
                      <a class="on-default" data-toggle="modal" data-target="#oem" @click="getAllCompany()">
                        <i class="fa  fa-link" data-toggle="tooltip" data-placement="top" title="授权此产品"></i>
                      </a>
                    </td>
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

    <!-- company -->
    <div id="oem" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title" id="myModalLabel">产品授权</h4>
            </div>
            <!-- 内容 -->
            <div class="modal-body" align='center'>
              <div class="row">
                <div class="col-sm-12">
                    <div class="panel panel-default">
                        <div class="panel-heading"><h4>授权指定公司代工生产</h4></div>
                        <div class="panel-body">
                            <form class="form-horizontal" role="form">                                    
                                <div class="form-group">
                                    <label class="col-md-2 control-label">公司名称</label>
                                    <div class="col-md-10">
                                        <select class="form-control" v-model="company_id">
                                            <option v-for="(item,index) in company" :key="index" :value="item.id">{{item.name}}</option>
                                        </select>
                                    </div>
                                </div>                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>         
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary waves-effect waves-light" data-dismiss="modal" @click="sendOemToCompany()">授权到公司</button>
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
  name: "good",
  data() {
    return {
      showGood: '',
      company:'',
      company_id:''
    };
  },
  beforeMount() {
    var ses = window.sessionStorage;
    this.userinfo = JSON.parse(ses.getItem("userinfo"));
  },
  mounted() {
      this.showMyCompete()
  },
  updated() {    
    $(function () { $("[data-toggle='tooltip']").tooltip(); });
  },
  filters:{
    formatTime(val){
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
    //获取自己公司产品研发情况
    apis.getOneGoodByCompanyId(JSON.parse(ses.getSes('userinfo')).company_id)
    .then(res => {
        print.log(res.data);
        this.showGood = res.data
    })
  },
    getAllCompany(){
        //获取公司列表
        apis.getAllCompany()
        .then(res => {
          this.company = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    sendOemToCompany(){
      print.log(this.company_id)
    }
  }
};
</script>

<style>
</style>

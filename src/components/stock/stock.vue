<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h4 class="pull-left page-title">库存管理</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Sway商战大赛-产品库存情况</h3>
          </div>
          <div class="panel-body">
            <div class="table-responsive">
              <table class="table table-striped" style id="datatable-editable">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>产品名称</th>
                    <th>库存</th>
                    <th>创建时间</th>
                    <th>最后更新时间</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="gradeX" v-for="(item,index) in showStock" :key="index" v-if="item.sum>0">
                    <td>{{index}}</td>
                    <td v-if="item.commerresearch">{{item.commerresearch.name}}</td><td v-else></td>                    
                    <td>{{item.sum}}</td>
                    <td>{{item.created_at|formatTime}}</td>
                    <td>{{item.updated_at|formatTime}}</td>
                    <td class="actions" align="center" @click="chooseGoodItem(item)">
                      <a class="waves-effect waves-light" data-toggle="tooltip" data-placement="top" title="产品上架">
                        <i class="fa fa-tags" data-toggle="modal" data-target="#myModal1"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- model -->
    <div id="myModal1" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title" id="myModalLabel">产品操作</h4>
            </div>
            <!-- 内容 -->
            <div class="modal-body" align='center'>
              <div class="modal-content p-0">
                <ul class="nav nav-tabs navtab-bg nav-justified">
                    <li class="active"> 
                        <a href="#profile-2" data-toggle="tab" aria-expanded="true"> 
                            <span class="visible-xs"><i class="fa fa-user"></i></span> 
                            <span class="hidden-xs" style="font-size:23px;">普通产品上架</span> 
                        </a> 
                    </li> 
                </ul> 
                <div class="tab-content"> 
                    <div class="tab-pane active" id="profile-2" v-if="currentShowGoodItem">
                      <address class="ng-scope" align='center' v-if="currentShowGoodItem.commerresearch">
                        <strong>产品名称:</strong>{{currentShowGoodItem.commerresearch.name}}<br>
                        <strong>产品单价:</strong>{{currentShowGoodItem.commerresearch.price}}<br> 
                        <strong>产品配方:</strong><br> 
                        <strong>
                            金：{{currentShowGoodItem.commerresearch.s1|sumSource(1)}}
                            木：{{currentShowGoodItem.commerresearch.s2|sumSource(1)}}
                            水：{{currentShowGoodItem.commerresearch.s3|sumSource(1)}}
                            火：{{currentShowGoodItem.commerresearch.s4|sumSource(1)}}
                            土：{{currentShowGoodItem.commerresearch.s5|sumSource(1)}}
                        </strong><br>
                        <strong>产品库存:</strong>{{currentShowGoodItem.sum}}<br> 
                      </address>
                    </div> 
                </div> 
              </div>             
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">关闭</button>            
            <button type="button" class="btn btn-primary waves-effect waves-light" data-dismiss="modal" @click="toPublic(currentShowGoodItem)" v-if="currentShowGoodItem.sum>0">产品上架</button>
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
  name: "resource",
  data() {
    return {
      showStock: '',
      judgeShow:0,
      currentShowGoodItem:'',
    };
  },
  beforeMount() {
    
  },
  mounted() {
      this.init()
  },
  updated() {    
    $(function () { $("[data-toggle='tooltip']").tooltip(); });
  },
  filters:{
    formatTime(val) {
      return moment(val).format("YYYY-MM-DD HH:mm:ss");
    },
    formatIsPublic(val){
      if(val==0) return '产品未上架';
      if(val==1) return '产品已上架';
    },
    judgeType(val){
      if(val==0) return '普通产品';
      if(val==1) return '代工产品';
    },
    sumSource(x,y) {
      return x * y
    },
  },
  methods: {
    init(){
      this.showMyCompete()
    },
    //获取自己的 industryyield_commerresearch 的产品
    showMyCompete() {
      req.post_Param('api/ass/industryyield_commerresearch',{
        'judge':3,
        'company_id':JSON.parse(ses.getSes('userinfo')).company_id,
      })
      .then(res => {
          print.log(res.data);
          this.showStock = res.data;
      })
    },
    // 选择产品
    chooseGoodItem(item){
      this.currentShowGoodItem=item
    },
    // 上架
    toPublic(model){
      print.log(model)
      let company_id=JSON.parse(ses.getSes('userinfo')).company_id
      let Yearid=JSON.parse(ses.getSes('gameinfo')).Yearid
      req.post_Param('api/transaction',{
        'judge':1,
        'Yearid':Yearid,
        'inout':1,
        'type':2,
        'kind':2,
        'price':model.commerresearch.price,
        'number':model.sum,
        'me':company_id,
        'commerresearch_id':model.commerresearch_id
      })
      .then(res => {
        console.log(res.data);
        s_alert.Success("产品上架成功", "正在加载……", "success");
        this.updateSumToZero(model)
      })
    },
    // 更新库存
    updateSumToZero(model){
      req.post_Param('api/industryyield',{
        'judge':2,
        'id':model.id,
        'sum':0
      })
      .then(res => {        
        this.init()
        s_alert.Success("库存更新成功", "正在加载……", "success");
      })
    }
  }
};
</script>

<style>
</style>

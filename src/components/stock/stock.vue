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
                    <!-- <th>产品类型</th> -->
                    <th>库存</th>
                    <th>创建时间</th>
                    <th>最后更新时间</th>
                    <!-- <th>是否上架</th> -->
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="gradeX" v-for="(item,index) in showStock" :key="item.name" v-if="item.sum!=0">
                    <td>{{index}}</td>
                    <td>{{item.commerresearch.name}}</td>
                    <!-- <td>{{item.kind|judgeType}}</td> -->
                    <td>{{item.sum}}</td>
                    <td>{{item.created_at|formatTime}}</td>
                    <td>{{item.updated_at|formatTime}}</td>
                    <!-- <td>{{item.ispublic|formatIsPublic}}</td> -->
                    <td class="actions" align="center" @click="chooseGoodItem(item.kind,index)">
                      <a class="waves-effect waves-light" data-toggle="modal" data-target="#myModal1">
                        <i class="fa  fa-tags"></i>
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
                            <span class="hidden-xs" style="font-size:23px">普通产品上架</span> 
                        </a> 
                    </li> 
                </ul> 
                <div class="tab-content"> 
                    <div class="tab-pane active" id="profile-2" v-if="currentShowGoodItem">
                      <!-- <h5> {{currentShowGoodItem}}</h5> -->
                      <address class="ng-scope" align='center'>
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
import app from "../../App.vue";
const moment = require("moment");
var App = app;

export default {
  name: "resource",
  data() {
    return {
      showStock: "",
      judgeShow:0,
      currentShowGoodItem:'',
      Func:0,
      giveToOEM:0
    };
  },
  beforeMount() {
    var ses = window.sessionStorage;
    this.userinfo = JSON.parse(ses.getItem("userinfo"));
  },
  mounted() {
      this.init()
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
    showMyCompete() {
      //获取自己的 industryyield_commerresearch 的产品
      let that=this
      let userinfo=JSON.parse(window.sessionStorage.getItem('userinfo'))
      let s=`${app.data().globleUrl}/ass/industryyield_commerresearch?judge=3&company_id=${userinfo[0].company_id}`
      console.log(s)
      that.axios({
      method: "post",
      url: s
      })
      .then(res => {
          console.log(res.data);
          this.showStock = res.data;
      })
      .catch(err => {
          console.log(err);
      });
    },
    chooseGoodItem(kind,index){
      this.judgeShow=kind
      this.currentShowGoodItem=this.showStock[index]
      console.log(kind,this.showStock[index])
    },
    chooseFunc(x){
      this.Func=x;
    },
    toPublic(model){
      console.log(model)
      let userinfo=JSON.parse(window.sessionStorage.getItem('userinfo'))
      if(model.commerresearch.company_id!=userinfo[0].company_id){
        let s=`${app.data().globleUrl}/transaction?judge=1&Yearid=${1}&inout=1&type=2&kind=2&price=${model.commerresearch.price}&number=${model.sum}&me=${userinfo[0].company_id}&commerresearch_id=${model.commerresearch_id}`
        console.log(s)
        this.axios({
        method: "post",
        url: s
        })
        .then(res => {
          console.log(res.data);
          s_alert.Success("产品上架成功", "正在加载……", "success");
          this.updateSumToZero(model)
          this.init()
        })
        .catch(err => {
          console.log(err);
        });
      }else{
        s_alert.Success("不能与自己进行交易", "正在加载……", "warning");
      }
    },
    updateSumToZero(model){
      let s=`${app.data().globleUrl}/industryyield?judge=2&id=${model.id}&sum=0`
      console.log(s)
      this.axios({
      method: "post",
      url: s
      })
      .then(res => {        
        this.init()
        this.chooseFactoryIndex(this.factoryIndex) //更新页面
        s_alert.Success("库存更新成功", "正在加载……", "success");
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

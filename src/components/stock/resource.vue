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
            <h3 class="panel-title">Sway商战大赛-原料库存情况</h3>
          </div>
          <div class="panel-body">
            <div class="table-responsive">
              <table class="table table-striped" style id="datatable-editable">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>矿区</th>
                    <th>原料联系</th>
                    <th>所属公司</th>
                    <th>总量</th>
                    <th>创建时间</th>
                    <th>最后更新时间</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="gradeX" v-for="(item,index) in showMiniYield" :key="item.name">
                    <td>{{index}}</td>
                    <td>{{item.mining_id}}</td>
                    <td>{{item.source_id}}</td>
                    <td>{{item.company_id}}</td>
                    <td>{{item.sum}}</td>
                    <td>{{item.created_at|formatTime}}</td>
                    <td>{{item.updated_at|formatTime}}</td>
                    <td class="actions" align="center" @click="openSetting(item,index)">
                      <!-- @click="chooseGoodItem(item.kind,index)" -->
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
            <h4 class="modal-title" id="myModalLabel">原料操作</h4>
            </div>

            <div class="modal-body" align='center'>
              <div class="modal-content p-0">
                <ul class="nav nav-tabs navtab-bg nav-justified">
                    <li class="active"> 
                        <a href="#profile-2" data-toggle="tab" aria-expanded="true"> 
                            <span class="visible-xs"><i class="fa fa-user"></i></span> 
                            <span class="hidden-xs" style="font-size:23px">原料上架</span> 
                        </a> 
                    </li> 
                </ul> 
                <div class="tab-content"> 
                    <div class="tab-pane active" id="profile-2" v-if="currentChooseditem">
                      <address class="ng-scope" align='center'>
                        <strong>原料ID:</strong>{{currentChooseditem.source_id}}<br>
                        <strong>原料名称:</strong>{{currentChooseditem.source.name}}<br> 
                        <strong>产品库存:</strong>{{currentChooseditem.sum}}<br> 
                      </address>
                    </div> 
                </div> 
              </div>             
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">关闭</button>      
              <button type="button" class="btn btn-primary waves-effect waves-light" data-dismiss="modal" @click="toPublic(currentChooseditem)" v-if="currentChooseditem.sum>0">产品上架</button>
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
      showMiniYield: "",
      currentChooseditem:''
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
  },
  methods: {
    init(){
      this.showMyCompete()
    },
    showMyCompete() {
      //获取自己的 industryyield_commerresearch 的产品
      let that=this
      let userinfo=JSON.parse(window.sessionStorage.getItem('userinfo'))
      let s=`${app.data().globleUrl}/miniyield?judge=4&company_id=${userinfo[0].company_id}`
      console.log(s)
      that.axios({
      method: "post",
      url: s
      })
      .then(res => {
        console.log(res.data);
        that.showMiniYield = res.data;
      })
      .catch(err => {
          console.log(err);
      });
    },
    openSetting(item,index){
      this.currentChooseditem=item
      console.log(item,index)
    },
    toPublic(model){
      console.log(model)
      let userinfo=JSON.parse(window.sessionStorage.getItem('userinfo'))
      if(model.company_id==userinfo[0].company_id){
        let s=`${app.data().globleUrl}/transaction?judge=1&Yearid=${1}&inout=1&type=2&kind=1&price=${model.source.price}&number=${model.sum}&me=${userinfo[0].company_id}&source_id=${model.source.id}`
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
      let s=`${app.data().globleUrl}/miniyield?judge=2&id=${model.id}&sum=0`
      console.log(s)
      this.axios({
      method: "post",
      url: s
      })
      .then(res => {        
        this.init()
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

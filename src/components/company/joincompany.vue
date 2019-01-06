<template>
  <div class="wrapper">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h4 class="page-title">公司列表</h4>
        </div>
      </div>

      <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Sway商战大赛-已有公司列表</h3>
          </div>
        <!-- 外层div 判断是否隐藏 主list -->
        <div v-if="mainList" style="margin-top:20px">
          <div class="panel-body">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="table-responsive">
                  <table class="table table-bordered table-striped" style id="datatable-editable">
                    <thead>
                      <tr>
                        <th>
                          <i>#</i>
                        </th>
                        <th>公司ID</th>
                        <th>公司名称</th>
                        <th>公司法人</th>
                        <th>统一社会信用代码</th>
                        <th>经营范围</th>
                        <th>人数</th>
                        <th>状态</th>
                        <th>创建日期</th>
                        <th>选择加入</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="gradeX" v-for="(item,index) in showItems" :key="index">
                        <td>{{index}}</td>
                        <td>{{item.id}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.legal}}</td>
                        <td>{{item.code}}</td>
                        <td>{{item.area}}</td>
                        <td>3</td>
                        <td>{{item.condition}}</td>
                        <td>{{item.created_at | formatTime}}</td>
                        <td class="actions" align="center">
                          <a class="on-default edit-row" @click="joinCompany(item)" data-toggle="tooltip" data-placement="top" title="加入此公司">
                            <i class="fa fa-paper-plane-o"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="dataTables_info float-left" id="datatable-editable_info" role="status" aria-live="polite" >展示 {{PageShowSum}} 总共 {{items.length}} 项</div>
            </div>
            <div class="col-sm-6">
              <div class="dataTables_paginate paging_simple_numbers" id="datatable-editable_paginate" >
                <ul class="pagination" style="float:right">
                  <li class="paginate_button previous" :class="{ disabled: currentPage=='0' }">
                    <a href="javascript:void(0)" @click="previousPage()">上一页</a>
                  </li>
                  <li class="paginate_button" v-for="(item,index) in sumPage" :key="index" :class="{ active: currentPage==index }" >
                    <a href="javascript:void(0)" @click="switchPage(index)">{{++index}}</a>
                  </li>
                  <li class="paginate_button next" :class="{ disabled: currentPage==sumPage-1 }">
                    <a href="javascript:void(0)" @click="nextPage()">下一页</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-top:100px"></div>
  </div>
</template>

<script>
const s_alert = require("../../utils/alert");
const ses = require("../../utils/ses");
const req = require("../../utils/axios");
const print = require("../../utils/print");
const apis = require("../../utils/api/apis");

const async=require('async')
const notify = require("bootstrap-notify");

import app from "../../App.vue";
const moment = require('moment');
var App = app;

export default {
  name: "doclist",
  data() {
    return {
      items: [],
      showItems: [],
      searchItems: [],
      select: [],
      isSelectedAll: false,
      PageShowSum: 10,
      currentPage: "0",
      sumPage: null,
      doSearchText: null,

      mainList: true,
      searchList: false
    };
  },
  mounted() {
    this.init()
  },
  updated() {    
    $(function () { $("[data-toggle='tooltip']").tooltip(); });
  },
  filters:{
    formatTime(val){
      return moment(val).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  methods: {
    init(){
      this.getAllCompany();
    },    
    //获取所有公司列表
    getAllCompany() {
      apis.getAllCompany()
      .then(res => {
        print.log('获取到 公司列表信息',res.data);
        this.items = res.data;
        // 初始化显示列表
        this.show();
      })
    },
    //加入公司流程
    joinCompany(item) {
      this.judgeBlong(item);
    },
    // 判断是否已有公司
    judgeBlong(item){
      let uid=JSON.parse(ses.getSes('userinfo')).id
      req.post_Param('/api/sway',{
        'judge':9,
        'sway_id':uid
      })
      .then(res => {
        print.log(res.data)
        if(res.data.success) this.enterCompany(item,uid);
        else s_alert.Timer("加入失败，只能加入一个公司……");
      })
    },
    // 加入公司
    enterCompany(item,uid){
      req.post_Param('/api/ass/company_sway',{
        'judge':0,
        'sway_id':uid,
        'company_id':item.id
      })
      .then(res => {
        if(res.data.success){
          this.updateUserInfoSession(uid)
        }else{
          s_alert.Timer("加入失败，请检查……");
        }
      })
    },
    // 更新用户 session信息
    updateUserInfoSession(uid){
        apis.getOneSwayById(uid)
        .then(res=>{
            ses.setSes("userinfo", JSON.stringify(res.data));
            s_alert.Success("用户信息更新成功", "2秒后自动跳转到公司……", "success");
            setTimeout(() => {                
                this.$router.push({name:'infocompany'})
            }, 2000);
        })
    },

    // -----------------------------------------------------------分页模板-------------------------------------------------------------
    show() {
      this.sumPage = Math.ceil(this.items.length / this.PageShowSum);
      //页面加载完成，默认加载第一页
      let p = Number(this.currentPage) + 1;
      this.showEachPage(p);
      console.log("当前数据总页为：--->", this.sumPage);
    },
    switchPage(page) {
      let p = page - 1;
      this.currentPage = `${p}`;
      console.log("当前-->", page);
      this.showEachPage(page);
    },
    showEachPage(page) {
      let all = this.items;
      this.showItems = [];
      for (
        let i = (page - 1) * this.PageShowSum;
        i < page * this.PageShowSum;
        i++
      ) {
        if (all[i] == null) {
          break;
        } else {
          this.showItems.push(all[i]);
        }
      }
    },
    nextPage() {
      if (this.currentPage == this.sumPage - 1) {
        s_alert.basic("已经到达最后一页了……");
      } else {
        let p = Number(this.currentPage) + 1;
        this.currentPage = `${p}`;
        console.log("当前-->", p + 1);
        this.showEachPage(p + 1);
      }
    },
    previousPage() {
      if (this.currentPage == "0") {
        s_alert.basic("已经到达最前面了……");
      } else {
        let p = Number(this.currentPage) - 1;
        this.currentPage = `${p}`;
        console.log("当前-->", p + 1);
        this.showEachPage(p + 1);
      }
    },
    deleteItem(index) {
      // alert('delete'+index)
      var j = confirm("确认删除吗？");
      if (j) {
        this.showItems.splice(index, 1);
        this.items.splice(this.currentPage * this.PageShowSum + index, 1);
        this.show();
      }
    },
    changePageShowSum() {
      this.currentPage = "0";
      this.show();
    },
    doSearch(e) {
      console.log(this.doSearchText);
      if (this.doSearchText.length == 0) {
        this.mainList = true;
        this.searchList = false;
      } else {
        this.mainList = false;
        this.searchList = true;

        this.searchItems = [];
        for (let i = 0; i < this.items.length; i++) {
          if (String(this.items[i].plantid).indexOf(this.doSearchText) == -1) {
            // console.log(String(this.items[i].plantid).indexOf(this.doSearchText))
          } else {
            this.searchItems.push(this.items[i]);
          }
        }
      }
    }
  }
};
</script>

<style scoped>

</style>
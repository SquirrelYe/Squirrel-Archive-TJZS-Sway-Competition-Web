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
                  <tr class="gradeX" v-for="(item,index) in showItems" :key="item.name">
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
      showCompete: "",
      // 分页数据
      items: [],
      showItems: [],
      PageShowSum: 10,
      currentPage: "0",
      sumPage: null,
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
          // 分页
          this.currentPage='0'
          this.show(res.data)
        })
    },
    // -----------------------------------------------------------分页模板-------------------------------------------------------------
    show(items) {
      this.items=items;
      this.sumPage = Math.ceil(this.items.length / this.PageShowSum);
      //页面加载完成，默认加载第一页
      let page = Number(this.currentPage) + 1;
      this.showEachPage(page);
      print.log("当前数据总页为：--->", this.sumPage);
    },
    switchPage(page) {
      let p = page - 1;
      this.currentPage = `${p}`;
      print.log("当前-->", page);
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
        print.log("当前-->", p + 1);
        this.showEachPage(p + 1);
      }
    },
    previousPage() {
      if (this.currentPage == "0") {
        s_alert.basic("已经到达最前面了……");
      } else {
        let p = Number(this.currentPage) - 1;
        this.currentPage = `${p}`;
        print.log("当前-->", p + 1);
        this.showEachPage(p + 1);
      }
    }
    //结束分页
  }
};
</script>

<style>
</style>

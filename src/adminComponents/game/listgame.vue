<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h4 class="pull-left page-title">公司管理</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Sway商战大赛-赛事列表</h3>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="table-responsive">
                  <table class="table table-bordered table-striped" style id="datatable-editable">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>赛事ID</th>
                        <th>赛事名称</th>
                        <th>开始时间</th>
                        <th>持续时间</th>
                        <th>状态</th>
                        <th>备注</th>
                        <th>创建时间</th>
                        <th>执行操作</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="gradeX" v-for="(item,index) in showItems" :key="item.name">
                        <td>{{index}}</td>
                        <td>{{item.id}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.start}}</td>
                        <td>{{item.stay}}</td>
                        <td>{{item.condition|formatCondition}}</td>
                        <td>{{item.detail}}</td>
                        <td>{{item.created_at|formatTime}}</td>
                        <td class="actions" align='center'>
                          <a class="on-default remove-row" @click="deleteItem(index)">
                            <i class="fa fa-trash-o"></i>
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
      </div>
    </div>  
  </div>
</template>

<script>
const s_alert = require("../../utils/alert");
import app from "../../App.vue";
const moment = require('moment');
var App = app;

export default {
  name: "listgame",
  data() {
    return {
      showItems: "",
    };
  },
  filters:{
    formatTime(x){
      return moment(x).format('YYYY-MM-DD HH:mm:ss')
    },
    formatCondition(x){
      if(x==0) return '比赛未开始';
      if(x==1) return '比赛正在进行';
      if(x==-1) return '比赛已结束';
    },
  },
  mounted() {
      this.init()
  },
  methods: {
    init(){
        this.getshowItems();
    },
    getshowItems() {
      var that = this;
      let userinfo=JSON.parse(window.sessionStorage.getItem('userinfo'))
      let s=`${app.data().globleUrl}/game?judge=0`
      console.log(s)
      that.axios({
        method: "post",
        url: s
        })
        .then(res => {
          console.log(res.data);
          that.showItems = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteItem(index) {
      console.log(index);
      let del=this.showItems[index]
      let that=this
      if(confirm('确定删除吗')){
        that.dele(del)
      }else{

      }      
    },    
    dele(del){
      let that=this
      let s=`${app.data().globleUrl}/game?judge=3&id=${del.id}`
      console.log(s)
      that.axios({
      method: "post",
      url: s
      })
      .then(res => {
        if(res.data.success){
            that.init()
            swal("删除成功!", "", "success");
          }else{
            that.init()
            swal("删除失败!", "请检查", "warning");
          }
      })
      .catch(err => {
        console.log(err);
      });
    }
  }
};
</script>

<style scoped>

</style>
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
            <h3 class="panel-title">Sway商战大赛-参赛者管理</h3>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="table-responsive">
                  <table class="table table-bordered table-striped" style id="datatable-editable">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>参赛者ID</th>
                        <th>用户名</th>
                        <th>中文名</th>
                        <th>密码</th>
                        <th>所在公司</th>
                        <th>创建时间</th>
                        <th>执行操作</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="gradeX" v-for="(item,index) in showItems" :key="item.name">
                        <td>{{index}}</td>
                        <td>{{item.id}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.cname}}</td>
                        <td>{{item.pass}}</td>
                        <td v-if="item.company">{{item.company.name}}</td>
                        <td v-else>未加入公司</td>
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
  name: "sway",
  data() {
    return {
      showItems: "",
      select: [],
      isSelectedAll: false,
      //显示在修改栏
      model:'',
      office:''
    };
  },
  filters:{
    formatTime(val){
      return moment(val).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  mounted() {
      this.init()
  },
  methods: {
    init(){
        this.getSway();
    },
    getSway() {
      var that = this;
      let userinfo=JSON.parse(window.sessionStorage.getItem('userinfo'))
      let s=`${app.data().globleUrl}/ass/company_sway?judge=3`
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
      let s=`${app.data().globleUrl}/sway?judge=6&id=${del.id}`
      console.log(s)
      that.axios({
      method: "post",
      url: s
      })
      .then(res => {
        if(res.data.success){
            that.init()
            swal("删除成功!", "你开除了一名成员", "success");
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
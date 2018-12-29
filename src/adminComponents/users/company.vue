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
            <h3 class="panel-title">Sway商战大赛-公司管理</h3>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="table-responsive">
                  <table class="table table-bordered table-striped" style id="datatable-editable">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>公司ID</th>
                        <th>公司名称</th>
                        <th>公司法人</th>
                        <th>统一社会信用代码</th>
                        <th>经营范围</th>
                        <th>状态</th>
                        <th>创建时间</th>
                        <th>操作</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="gradeX" v-for="(item,index) in showItems" :key="item.name">
                        <td>{{index}}</td>
                        <td>{{item.id}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.legal}}</td>
                        <td>{{item.code}}</td>
                        <td>{{item.area}}</td>
                        <td>{{item.condition}}</td>
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
        this.getCompany();
    },
    getCompany() {
      var that = this;
      let userinfo=JSON.parse(window.sessionStorage.getItem('userinfo'))
      let s=`${app.data().globleUrl}/company?judge=0`
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
      let s=`${app.data().globleUrl}/company?judge=3&id=${del.id}`
      console.log(s)
      that.axios({
      method: "post",
      url: s
      })
      .then(res => {
        if(res.data.success){
            swal("删除成功!", "你成功删除了一个公司", "success");
            that.init()
          }else{
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
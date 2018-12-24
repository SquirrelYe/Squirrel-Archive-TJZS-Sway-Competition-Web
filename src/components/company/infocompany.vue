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
            <h3 class="panel-title">Sway商战大赛-公司组成管理</h3>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="table-responsive">
                  <table class="table table-bordered table-striped" style id="datatable-editable">
                    <thead>
                      <tr>
                        <th>
                          <a @click="selcetAll()" href="javascript:void(0)">#</a>
                        </th>
                        <th>成员ID</th>
                        <th>姓名</th>
                        <th>职务</th>
                        <!-- <th>创建时间</th> -->
                        <th>执行操作</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="gradeX" v-for="(item,index) in showItems" :key="item.name">
                        <td>{{index}}</td>
                        <td>{{item.id}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.office}}</td>
                        <!-- <td>{{item.created_at}}</td> -->
                        <td class="actions" align='center'>
                          <a class="on-default edit-row" data-toggle="modal" data-target="#myModal" @click="editItem(index)">
                            <i class="fa fa-pencil"></i>
                          </a>
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

    <!-- StandardModal -->
    <div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title" id="myModalLabel">公司信息更新表</h4>
            </div>
            <!-- 内容 -->
            <div class="modal-body" align='center'>
              <h4>公司成员信息介绍</h4>  
              <!-- <h5> {{model}}</h5> -->
              <address class="ng-scope">
                <strong>成员ID:</strong>{{model.id}}<br>
                <strong>成员姓名:</strong>{{model.name}}<br> 
                <strong>成员职务:</strong>{{model.office}}<br> 
                <!-- <strong>加入时间:</strong>{{model.created_at}}<br> -->
                <hr>
                <strong>更改职务信息：</strong><input type="text" v-model="office"><br>
                备注：常见的公司职位有：CEO、CMO、CTO、CFO、COO
                
              </address>             
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary waves-effect waves-light" data-dismiss="modal" @click="send()">确认修改</button>
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
  name: "infocompany",
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
  mounted() {
    this.mocks();
  },
  methods: {
    mocks() {
      var that = this;
      let userinfo=JSON.parse(window.sessionStorage.getItem('userinfo'))
      let s=`${app.data().globleUrl}/sway?judge=10&company_id=${userinfo[0].company_id}`
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
    send(){
      var that = this;
      let s=`${app.data().globleUrl}/sway?judge=11&sway_id=${that.model.id}&office=${that.office}`
      console.log(s)
      that.axios({
        method: "post",
        url: s
        })
        .then(res => {
          console.log(res.data);
          that.mocks()
        })
        .catch(err => {
          console.log(err);
        });

    },
    editItem(index) {
      this.model=this.showItems[index]
      console.log(this.model);
    },
    deleteItem(index) {
      console.log(index);
      let del=this.showItems[index]
      let that=this
      if(confirm('确定删除吗')){
        that.dele(del)
      }else{

      }
      // swal({
      //       title: '确定删除吗',
      //       text: '删除之后可以重新加入公司',
      //       type: "warning",
      //       showCancelButton: true,
      //       cancelButtonText:'取消',
      //       confirmButtonColor: "#DD6B55",
      //       confirmButtonText: "我知道了",
      //       closeOnConfirm: false
      //   }, function () {          
      //     swal("删除成功!", "你开除了一名成员", "success");
      // });
    },
    
    dele(del){
      let that=this
      let s=`${app.data().globleUrl}/ass/company_sway?judge=1&sway_id=${del.id}`
      console.log(s)
      that.axios({
      method: "post",
      url: s
      })
      .then(res => {
        console.log(res.data);
        that.mocks()
        swal("删除成功!", "你开除了一名成员", "success");
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
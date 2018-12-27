<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h4 class="pull-left page-title">交易管理</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Sway商战大赛-公司资金流动情况</h3>
          </div>
          <div class="panel-body">
            <div class="table-responsive">
              <table class="table table-striped" style id="datatable-editable">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>金额</th>
                    <th>收支情况</th>
                    <th>备注</th>
                    <th>创建时间</th>
                    <th>最后更新时间</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="gradeX" v-for="(item,index) in showCompete" :key="item.name">
                    <td>{{index}}</td>
                    <td>{{item.mining_id}}</td>
                    <td>{{item.source_id}}</td>
                    <td>{{item.company_id}}</td>
                    <td>{{item.created_at}}</td>
                    <td>{{item.updated_at}}</td>
                    <td class="actions" align="center">
                      <a
                        class="waves-effect waves-light"
                        data-toggle="modal"
                        data-target="#con-close-modal"
                      >
                        <i class="fa fa-tags"></i>
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
      showCompete: "",
    };
  },
  beforeMount() {
    var ses = window.sessionStorage;
    this.userinfo = JSON.parse(ses.getItem("userinfo"));
  },
  mounted() {
      this.showMyCompete()
  },
  methods: {
    showMyCompete() {
    //获取自己公司竞拍情况
    this.axios
    .post("/resource/api")
    .then(res => {
        console.log(res.data);
        this.showCompete = res.data;
    })
    .catch(err => {
        console.log(err);
    });
},
  }
};
</script>

<style>
</style>

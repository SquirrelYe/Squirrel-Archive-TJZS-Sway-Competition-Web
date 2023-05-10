<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h4 class="pull-left page-title">赛事管理</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Sway商战大赛-当前赛事信息</h3>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="table-responsive">
                  <table
                    class="table table-bordered table-striped"
                    style
                    id="datatable-editable"
                  >
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
                      <tr class="gradeX">
                        <td>#</td>
                        <td>{{ showItem.id }}</td>
                        <td>{{ showItem.name }}</td>
                        <td>{{ showItem.start }}</td>
                        <td>{{ showItem.stay }}</td>
                        <td style="font-weight: bolder; color: black">
                          {{ showItem.condition | formatCondition }}
                        </td>
                        <td>{{ showItem.detail }}</td>
                        <td>{{ showItem.created_at | formatTime }}</td>
                        <td class="actions" align="center">
                          <a
                            class="waves-effect waves-light"
                            @click="updateCondition(-2)"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="暂停赛事"
                          >
                            <i class="fa fa-pause"></i>
                          </a>
                          <a
                            class="waves-effect waves-light"
                            @click="updateCondition(-1)"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="赛事未开始"
                          >
                            <i class="fa fa-bookmark"></i>
                          </a>
                          <a
                            class="waves-effect waves-light"
                            @click="updateCondition(0)"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="赛事准备中"
                          >
                            <i class="fa fa-play"></i>
                          </a>
                          <a
                            class="waves-effect waves-light"
                            @click="updateCondition(1)"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="赛事进行中"
                          >
                            <i class="fa fa-circle-o-notch"></i>
                          </a>
                          <a
                            class="waves-effect waves-light"
                            @click="updateCondition(2)"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="结束赛事"
                          >
                            <i class="fa fa-stop"></i>
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
const ses = require("../../utils/ses");
const req = require("../../utils/axios");
const print = require("../../utils/print");
const apis = require("../../utils/api/apis");

import app from "../../App.vue";
const moment = require("moment");
var App = app;

export default {
  name: "currentgame",
  data() {
    return {
      game_id: JSON.parse(ses.getSes("gameinfo")).id,
      showItem: {},
    };
  },
  filters: {
    formatTime(x) {
      return moment(x).format("YYYY-MM-DD HH:mm:ss");
    },
    formatCondition(x) {
      if (x == -2) return "赛事暂停";
      if (x == -1) return "赛事未开始";
      if (x == 0) return "赛事准备中";
      if (x == 1) return "赛事正在进行";
      if (x == 2) return "赛事已结束";
    },
  },
  mounted() {
    this.init();
  },
  updated() {
    $(function () {
      $("[data-toggle='tooltip']").tooltip();
    });
  },
  methods: {
    init() {
      this.getCurrentGame();
    },
    // 获取当前赛事信息
    getCurrentGame() {
      apis.getOneGameById(this.game_id).then((res) => {
        print.log(res.data);
        this.showItem = res.data;
      });
    },
    // 更新赛事状态
    updateCondition(condition) {
      req
        .post_Param("api/game", {
          judge: 2,
          id: this.game_id,
          condition,
        })
        .then((res) => {
          if (res.data.success)
            swal("赛事状态更新成功!", "操作成功", "success");
          else swal("赛事状态更新失败!", "请检查", "warning");
          this.init();
        });
    },
  },
};
</script>

<style scoped></style>

<template>
  <div class="wrapper">
    <div class="topbar">
      <div class="topbar-left">
        <div class="text-center" style="background-color: white">
          <a href="javascript:void(0)" class="logo">
            <i class="md md-terrain"></i>
            <span>Sway 商业模拟挑战赛</span>
          </a>
        </div>
      </div>
      <div class="navbar navbar-default" role="navigation">
        <div class="container">
          <div>
            <ul class="nav navbar-nav navbar-right pull-right">
              <li class="dropdown">
                <a
                  href
                  class="dropdown-toggle profile"
                  data-toggle="dropdown"
                  aria-expanded="true"
                >
                  <img :src="icon_src" alt="user-img" class="img-circle" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="container" style="margin-top: 100px">
      <!-- Start content -->
      <div class="content">
        <div class="row">
          <div class="col-sm-12">
            <div class="btn-group pull-left">
              <button
                type="button"
                class="btn btn-info dropdown-toggle waves-effect waves-light"
                aria-expanded="false"
                data-toggle="modal"
                data-target="#company"
              >
                创建赛事
                <span class="m-l-5">
                  <i class="fa fa-pencil"></i>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <h4 class="pull-left page-title">近期比赛列表</h4>
          </div>
        </div>

        <!-- SECTION FILTER
                ==================================================-->
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="portfolioFilter">
              <a
                href="javascript:void(0)"
                :class="{ current: condition == -3 }"
                @click="getGame(-3)"
                >所有赛事</a
              >
              <a
                href="javascript:void(0)"
                :class="{ current: condition == -2 }"
                @click="getGame(-2)"
                >已暂停</a
              >
              <a
                href="javascript:void(0)"
                :class="{ current: condition == -1 }"
                @click="getGame(-1)"
                >未开始</a
              >
              <a
                href="javascript:void(0)"
                :class="{ current: condition == 0 }"
                @click="getGame(0)"
                >准备中</a
              >
              <a
                href="javascript:void(0)"
                :class="{ current: condition == 1 }"
                @click="getGame(1)"
                >正在进行</a
              >
              <a
                href="javascript:void(0)"
                :class="{ current: condition == 2 }"
                @click="getGame(2)"
                >已结束</a
              >
            </div>
            <br />备注：选择你此次参加的比赛，若未发现此次参加的赛事信息，请联系组委会。无法加入未开始或已结束比赛，比赛开始前请加入准备中赛事，正式开始后请加入正在进行赛事。
          </div>
        </div>

        <div class="row port">
          <div
            class="portfolioContainer"
            style="position: relative; height: 843.282px"
          >
            <div
              class="col-sm-6 col-lg-3 col-md-4"
              v-for="(item, index) in items"
              :key="index"
            >
              <div class="gal-detail thumb" @click="chooseGame(item)">
                <a href="javascript:void(0)" class="image-popup">
                  <img
                    src="static/images/gallery/2.jpg"
                    class="thumb-img"
                    alt="work-thumbnail"
                  />
                </a>
                <h5 class="text-center">
                  赛事名称：{{ item.name }}
                  <br />
                  赛事说明：{{ item.detail }}
                  <br />
                  开始时间：{{ item.start }}
                  <br />
                  <!-- 持续财年：{{item.Yearid}}<br>
                                    单个财年：{{item.stay}}<br>-->
                  <!-- 创建时间：{{item.updated_at|formatTime}} -->
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 创建比赛提示框 -->
    <div
      id="company"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              ×
            </button>
            <h4 class="modal-title" id="myModalLabel">创建赛事</h4>
          </div>
          <!-- 内容 -->
          <div class="modal-body" align="center">
            <div class="row">
              <div class="col-sm-12">
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4>创建新赛事</h4>
                  </div>

                  <div class="panel-body">
                    <form class="form-horizontal" role="form">
                      <div class="form-group">
                        <label class="col-md-2 control-label">赛事名称</label>
                        <div class="col-sm-10">
                          <input
                            placeholder="xx赛事"
                            type="text"
                            class="form-control"
                            v-model="name"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">开始时间</label>
                        <div class="col-sm-10">
                          <input
                            type="text"
                            class="form-control"
                            v-model="start"
                            placeholder="xx年xx月xx日"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">持续时间</label>
                        <div class="col-sm-10">
                          <input
                            type="text"
                            class="form-control"
                            v-model="stay"
                            placeholder="xx小时"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-sm-2 control-label">备注信息</label>
                        <div class="col-sm-10">
                          <input
                            type="text"
                            class="form-control"
                            v-model="detail"
                            placeholder="备注"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-default waves-effect"
              data-dismiss="modal"
            >
              关闭
            </button>
            <button
              type="button"
              class="btn btn-primary waves-effect waves-light"
              data-dismiss="modal"
              @click="submitForm()"
            >
              创建
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const s_alert = require("../utils/alert");
const ses = require("../utils/ses");
const req = require("../utils/axios");
const print = require("../utils/print");
const apis = require("../utils/api/apis");

const async = require("async");
const notify = require("bootstrap-notify");
const moment = require("moment");

export default {
  name: "game",
  data() {
    return {
      icon_src: "static/images/users/avatar-6.jpg",
      items: "",
      condition: -3,
      // 创建赛事信息
      name: null,
      start: null,
      stay: null,
      detail: "",
    };
  },
  mounted() {
    this.init();
    if (ses.getSes("userinfo") == null) {
      s_alert.basic("登录会话过期，请重新登录！");
      this.$router.push({ name: "login" });
    }
  },
  updated() {
    $(function () {
      $("[data-toggle='tooltip']").tooltip();
    });
  },
  filters: {
    formatTime(val) {
      return moment(val).format("YYYY-MM-DD HH:mm:ss");
    },
  },
  methods: {
    init() {
      this.getAllGame();
      this.condition = -3;
    },
    //获取所有公司列表
    getAllGame() {
      apis.getAllGame().then((res) => {
        print.log("获取到 赛事列表信息", res.data);
        this.items = res.data;
      });
    },
    // 选择赛事
    async chooseGame(item) {
      print.log("选择赛事", item);
      apis.getOneGameById(item.id).then((res) => {
        ses.setSes("gameinfo", JSON.stringify(res.data));
        s_alert.Success(
          `加入成功，赛事：${item.name}`,
          "2秒后自动跳转到赛事界面……",
          "success"
        );
        setTimeout(() => {
          this.$router.push({ name: "menu" });
        }, 2000);
      });
    },
    // 选择不同状态赛事
    getGame(index) {
      this.condition = index;
      if (index == -3) {
        this.getAllGame();
      } else {
        apis.getGameByCondition(index).then((res) => {
          this.items = res.data;
        });
      }
    },
    // 检查创建信息
    submitForm() {
      if (!this.name || !this.start || !this.stay || !this.detail) {
        s_alert.basic("某一项输入为空！");
      } else {
        this.submit();
      }
    },
    // 提交赛事信息
    submit() {
      req
        .post_Param("api/game", {
          judge: 1,
          id: 0,
          name: this.name,
          Yearid: 1,
          start: this.start,
          stay: this.stay,
          detail: this.detail,
          condition: -1,
        })
        .then((res) => {
          if (res.data.success) {
            s_alert.Success("赛事创建成功", "正在加载……", "success");
            this.init();
          } else {
            s_alert.Timer("赛事创建失败", "请检查");
          }
        });
    },
  },
};
</script>

<style scoped></style>

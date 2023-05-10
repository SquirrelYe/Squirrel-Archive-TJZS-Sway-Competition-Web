<template>
  <div class="wrapper-page">
    <div class="ex-page-content text-center">
      <h1>赛事暂停!</h1>
      <h2>请稍等组委会开启赛事</h2>
      <br />
    </div>
  </div>
</template>

<script>
const s_alert = require("../utils/alert");
const ses = require("../utils/ses");
const req = require("../utils/axios");
const print = require("../utils/print");
const apis = require("../utils/api/apis");

export default {
  name: "pause",
  data() {
    return {
      userinfo: {},
      gameinfo: {},
      fresh: null,
    };
  },
  mounted() {
    this.userinfo = JSON.parse(ses.getSes("userinfo"));
    this.gameinfo = JSON.parse(ses.getSes("gameinfo"));
    if (ses.getSes("userinfo") == null) {
      s_alert.basic("登录会话过期，请重新登录！");
      this.$router.push({ name: "login" });
      return;
    }
    this.fresh = setInterval(() => {
      // 实时更新赛事信息
      this.refreshGameInfo();
    }, 15000);
    this.refreshGameInfo();
  },
  methods: {
    // 获取赛事信息
    async refreshGameInfo() {
      // 参赛者
      if (ses.getSes("type") == 0) {
        let res = await apis.getOneGameById(this.gameinfo.id);
        let ginfo = JSON.stringify(res.data);
        ses.setSes("gameinfo", ginfo);
        // 游戏状态
        console.log("游戏状态", res.data.condition);
        const { condition } = res.data;
        // 游戏暂停
        if (condition == 1) {
          clearInterval(this.fresh);
          s_alert.Timer("游戏恢复中", "请稍等", 1000);
          setTimeout(() => {
            // history.back();
            this.$router.push({ name: "menu" });
          }, 1500);
        }
      }
    },
  },
};
</script>

<style scoped></style>

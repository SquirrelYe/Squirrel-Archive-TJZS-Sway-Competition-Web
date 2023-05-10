<template>
  <div class="wrapper-page">
    <div class="ex-page-content text-center">
      <h1>赛事结束!</h1>
      <h2>请稍等组委会统计成绩</h2>
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
  name: "end",
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
  },
  methods: {},
};
</script>

<style scoped></style>

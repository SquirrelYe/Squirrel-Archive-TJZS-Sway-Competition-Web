<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
const async=require('async')
const notify = require("bootstrap-notify");
const s_alert = require("./utils/alert");

export default {
  name: "App",
  data() {
    return {
      globleUrl1: "http://localhost:11111",
      globleUrl1: "http://10.5.66.248:11111",
      globleUrl1: "http://192.168.43.131:11111",
      globleUrl1: "https://www.yexuan.site/api",
      globleUrl: "http://10.0.53.241:11111",
    };
  },
  mounted() {
    
  },
  beforeRouteUpdate(to, from, next) {
      next();
  },
  methods: {
    
  },

  components: {
    remote: {
      render: function(createElement) {
        var self = this;
        return createElement("script", {
          attrs: {
            type: "text/javascript",
            src: this.src
          }
        });
      },
      props: {
        src: {
          type: String,
          required: true
        }
      }
    }
  }
};
</script>

<style>
th {
  text-align: center; /** 设置水平方向居中 */
  vertical-align: middle; /** 设置垂直方向居中 */
}
td {
  text-align: center; /** 设置水平方向居中 */
  vertical-align: middle; /** 设置垂直方向居中 */
}
</style>

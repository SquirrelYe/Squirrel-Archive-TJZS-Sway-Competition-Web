<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      globleUrl: "http://localhost:11111",
      globleUrl1: "http://10.5.66.248:11111",
      globleUrl1: "http://192.168.43.131:11111",
      globleUrl1: "http://192.168.43.131:11111",
      globleUrl1: "http://10.0.53.241:11111",
      name: "yexuan"
    };
  },
  //页面加载调用获取cookie值
  mounted() {
    //this.getCookie();
  },
  methods: {
    show: function() {
      alert("测试APP.VUE...");
    },
    router(uid) {
      this.$router.push({ path: `/login/${uid}` });
    },
    setGlobleUrlq(url){
      this.globleUrl=url;
      console.log(this.globleUrl)
      return this.globleUrl
    }
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
  // beforeRouteUpdate(to, from, next) {
  //     next();
  // }
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

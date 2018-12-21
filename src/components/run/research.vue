<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h4 class="pull-left page-title">公司运营</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Sway商战大赛-商业用地研发管理</h3>            
          </div>
          <div class="panel panel-body"> 
            <div class="tabs-vertical-env"> 
                <ul class="nav tabs-vertical"> 
                    <li class="" v-for="(item,index) in showCompeteCommerland" :key="index" :class="{'active' : index==1}">
                        <a :href="'#'+index" data-toggle="tab" aria-expanded="false">商业用地ID{{item.id}}</a>
                    </li> 
                </ul> 
                <div class="tab-content"> 
                    <div class="tab-pane" :id="index" v-for="(item,index) in showCompeteCommerland" :key="index" :class="{'active' : index==1}"> 
                        {{item}}
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
const moment = require("moment");
const notify = require("bootstrap-notify");
import app from "../../App.vue";
var App = app;

export default {
  name: "exploit",
  data() {
    return {
      showCompeteCommerland:''
    };
  },
  beforeMount() {
    var ses = window.sessionStorage;
    this.userinfo = JSON.parse(ses.getItem("userinfo"));
  },
  mounted() {
    this.showMyResearch();
  },
  filters: {
    formatTime(val) {
      //console.log(val)
      return moment(val).format("YYYY-MM-DD HH:mm:ss");
    }
  },
  //s_alert.Success("加入成功，请去公司信息查看", "正在加载……", "success");
  methods: {
    showMyResearch() {
      //显示已购 商业用地
      this.axios
        .post("/compete/api")
        .then(res => {
          let arr=[]
          res.data.forEach(element => {
              if(element.type==2){
                  arr.push(element);
              }
          });
          this.showCompeteCommerland=arr;
          console.log(this.showCompeteCommerland)
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>

</style>

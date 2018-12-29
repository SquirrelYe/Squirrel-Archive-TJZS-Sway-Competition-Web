<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h4 class="pull-left page-title">赛事运营</h4>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">Sway商战大赛-财年管理</h3>
                    </div>
                    <!-- 财年管理 -->
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <div class="table-responsive">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">财年设置</h3>
                                    </div>
                                    <table
                                        class="table table-bordered table-striped"
                                        style
                                        id="datatable-editable"
                                    >
                                        <thead>
                                            <tr>
                                                <th>当前赛事</th>
                                                <th>财年持续时间(分钟)</th>
                                                <th>当前财年</th>
                                                <th>执行操作</th>
                                            </tr>
                                        </thead>
                                        <tbody v-if="showGameItems">
                                            <tr>
                                                <td>{{showGameItems.name}}</td>
                                                <td>{{showGameItems.stay}}</td>
                                                <td style="color:red">{{showGameItems.Yearid}}</td>
                                                <td class="actions" align="center">
                                                    <a
                                                        class="on-default remove-row font-weight-bold"
                                                        @click="nextYear(showGameItems)"
                                                    >进入下一财年</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 资金流清算 -->
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <div class="table-responsive">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">参赛者资产清算</h3>
                                    </div>
                                    <table
                                        class="table table-bordered table-striped"
                                        style
                                        id="datatable-editable"
                                    >
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>公司名称</th>
                                                <th>流动资金</th>
                                                <th>固定资金</th>
                                                <th>总资产</th>
                                                <th>品牌价值</th>
                                                <th>更新时间</th>
                                                <th>执行操作</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="gradeX" v-for="(item,index) in showStasticsItems" :key="index">
                                                <td>{{index}}</td>
                                                <td>{{item.company.name}}</td>
                                                <td>{{item.float}}</td>
                                                <td>{{item.fixed}}</td>
                                                <td>{{item.total}}</td>
                                                <td>{{item.brand}}</td>
                                                <td>{{item.updated_at|formatTime}}</td>
                                                <td class="actions" align="center">
                                                    <a class="waves-effect waves-light" data-toggle="modal" data-target="#myModal2" @click="tran(item)">
                                                        <i class="fa  fa-tags"></i>
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
        <!-- 指向公司转账 -->
        <div id="myModal2" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 class="modal-title" id="myModalLabel">指向公司转账</h4>
                </div>
                <div class="modal-body" align='center'>
                <!-- <h4>商业用地情况介绍</h4>   -->
                <address class="ng-scope">                    
                    <strong>请输入转入该公司的金额:</strong><input type="number" v-model="givePrice" placeholder="正值转入，负值扣款"><strong>万元</strong>                   
                </address>               
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary waves-effect waves-light" data-dismiss="modal" @click="updateMoney()">提交出价</button>
                </div>
            </div>
        </div>
        </div>
        <!-- <button @click="updateRelief">测试</button> -->
    </div>
</template>

<script>
const s_alert = require("../../utils/alert");
import app from "../../App.vue";
const async=require('async')
const notify = require("bootstrap-notify");

export default {
  name: "syear",
  data() {
    return {
      userinfo: "",
      showGameItems: "",
      showStasticsItems: "",
      givePrice:0,

      // 计算折旧
      diggerDeprelief:0,
      lineDeprelief:0
    };
  },
  beforeMount() {
    var ses = window.sessionStorage;
    this.userinfo = JSON.parse(ses.getItem("userinfo"));
  },
  mounted() {
    this.init();
  },
  filters: {
    formatTime(val) {
      return moment(val).format("YYYY-MM-DD HH:mm:ss");
    }
  },
  methods: {
    init() {
      this.getshowGameItems();
      this.getStasticsItems();
    },
    getshowGameItems() {
      let s = `${app.data().globleUrl}/game?judge=4&id=1`;
      console.log(s);
      this
        .axios({
          method: "post",
          url: s
        })
        .then(res => {
          console.log(res.data);
          this.showGameItems = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    nextYear(showGameItems) {
      if (confirm("你确定要进入下一财年？这将对参赛者资产进行清算！")) {
        this.init()
        this.updateYear(showGameItems);
      }
    },
    updateYear(showGameItems) {
      let next=showGameItems.Yearid+1
      let s = `${app.data().globleUrl}/game?judge=2&Yearid=${next}&id=1`;
      console.log(s);
      this
        .axios({
          method: "post",
          url: s
        })
        .then(res => {
          console.log(res.data);
          this.showGameItems = res.data;
          if(res.data.success){
            swal("更新财年信息成功!", "参赛者资产信息更新成功", "success");
            this.updateRelief()
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getStasticsItems() {
      let userinfo = JSON.parse(window.sessionStorage.getItem("userinfo"));
      let s = `${app.data().globleUrl}/ass/company_statistic?judge=4`;
      console.log(s);
      this
        .axios({
          method: "post",
          url: s
        })
        .then(res => {
          console.log(res.data);
          this.showStasticsItems = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    tran(model){
        console.log('currentStastics',model)
        this.currentStastics=model
    },
    updateMoney(){
        let float=Number(this.givePrice)+Number(this.currentStastics.float);
        let total=Number(this.givePrice)+Number(this.currentStastics.total);
        let s = `${app.data().globleUrl}/statistic?judge=2&id=1&float=${float}&total=${total}`;
        console.log(s);
        this
        .axios({
          method: "post",
          url: s
        })
        .then(res => {
            console.log(res.data);
            swal("资金信息更新成功!", "参赛者资产信息更新成功", "success");
            this.init()
        })
        .catch(err => {
          console.log(err);
        });
    },
    // ---------------------------------------------------计算折旧---------------------------------------------------
    updateRelief(){
        
        this.getStasticsItems() //初始化资产列表
        for (let i = 0; i < this.showStasticsItems.length; i++) {
            //对折旧价值初始化
            this.diggerDeprelief=0
            this.lineDeprelief=0
            //循环计算折旧价值
            const re = this.showStasticsItems[i];
            let cid=re.company_id;
            //计算挖掘机折旧
            // this.getMiningDigger(cid);
            // 计算生产线折旧
            // this.getInduslandFactory(cid);
            let that=this
            async.parallel([//并行同时执行
                function(callback) {                
                    that.getMiningDigger(cid,callback);
                },
                function(callback) {
                    that.getInduslandFactory(cid,callback);
                }],
                function(err, results) {
                    //等上面两个执行完返回结果
                    console.log(results)
                    that.updateFixedMoney(re,results)
                })
        }
    },
    // 获取 矿区 - 挖掘机
    getMiningDigger(cid,callback){
        let s = `${app.data().globleUrl}/ass/mining_digger?judge=5&company_id=${cid}`;
        // console.log(s);
        this
        .axios({
          method: "post",
          url: s
        })
        .then(res => {
            // console.log('矿区 - 挖掘机',res.data)
            for (let i = 0; i < res.data.length; i++) {  //对矿区 循环，找到某一个矿区
                const w = res.data[i];
                let kdepre=w.deprelief; //找到某一矿区 折旧减免值
                for (let j = 0; j < w.diggers.length; j++) {  //对挖掘机 进行循环，找到某一类挖掘机
                    const wjj = w.diggers[j];
                    let totalDepre=(1-kdepre)*wjj.deprelief*wjj.mining_digger.number*wjj.price;
                    this.diggerDeprelief+=totalDepre
                }
            }
            console.log('totalDiggerDepre',this.diggerDeprelief)   
            callback(null, this.diggerDeprelief);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 获取 工业用地 - 工厂
    getInduslandFactory(cid,callback){
        let s = `${app.data().globleUrl}/ass/indusland_factory?judge=4&company_id=${cid}`;
        // console.log(s);
        this
        .axios({
          method: "post",
          url: s
        })
        .then(res => {
            console.log('工业用地 - 工厂',res.data)
            for (let i = 0; i < res.data.length; i++) {  //对工业用地循环 找到 工业用地-工厂 中间表，从而获取到 对应的生产线
                const w = res.data[i];
                let idepre=w.repurchase; //找到某一工业用地 折旧减免值
                for (let j = 0; j < w.factories.length; j++) {  //对工业用地下的 工厂 进行循环，找到中间表id，从而找到 对应的生产线
                    const infa = w.factories[j].indusland_factory.id;
                    //对找到的 中间表id，寻找生产线，计算折旧
                    // console.log('工业用地 - 工厂、中间表id',infa)
                    //逐层回调，找到最终结果
                    if(i==res.data.length-1 && j==w.factories.length-1){
                        this.getLineDepre(infa,idepre,callback,true);
                    }else{
                        this.getLineDepre(infa,idepre,callback,false);
                    }
                }
            }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 获取 工业用地 - 工厂 - 生产线
    getLineDepre(infa,idepre,callback,sure){  //infa,idepre 分别为 中间表id与 工业用地 折旧减免值
        let s = `${app.data().globleUrl}/ass/indusland_factory_line?judge=8&indusland_factory_id=${infa}`;
        // console.log(s);
        this
        .axios({
          method: "post",
          url: s
        })
        .then(res => {
            // console.log('工业用地 - 工厂 - 生产线',res.data)
            for (let i = 0; i < res.data.length; i++) {  //对中间表-生产线 信息 循环，从而获取到 对应的生产线 & 数量
                const w = res.data[i];
                for (let j = 0; j < w.lines.length; j++) {  //对工业用地 - 工厂 - 生产线 进行循环，找到生产线，从而找到 对应的生产线 折旧率
                    const line = w.lines[j];
                    let totalDepre=(1-idepre)*line.relief*line.indusland_factory_line.number*line.price;
                    this.lineDeprelief+=totalDepre
                }
            }
            if(sure){
                console.log('totalLineDepre',this.lineDeprelief)   
                callback(null, this.lineDeprelief);
            }
        })
        .catch(err => {
          console.log(err);
        });
    },
    updateFixedMoney(re,result){
        console.log(re,result)
        let fixed=Number(re.fixed)-Number(result[0]);
        let total=Number(re.total)-Number(result[1]);
        // console.log(fixed,total)
        let s = `${app.data().globleUrl}/statistic?judge=2&id=1&fixed=${fixed}&total=${total}`;
        console.log(s);
        this
        .axios({
          method: "post",
          url: s
        })
        .then(res => {
            if(res.data.success){
                $.notify(
                    {message: `${re.company.name}->公司资产更新成功！`},
                    {type: "success"}
                );
                this.init()
            }else{
                $.notify(
                    {message: `${re.company.name}->资产更新失败！请检查！！`},
                    {type: "warning"}
                );
                this.init()
            }
        })
        .catch(err => {
          console.log(err);
            swal(`${re.company.name}->资产更新失败！请检查！！`, "资产更新失败", "warning");
        });
    },

  }
};
</script>

<style>

</style>

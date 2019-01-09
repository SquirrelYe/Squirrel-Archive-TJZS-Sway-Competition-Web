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
                                                        href="javascript:void(0)"
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
                                            <tr class="gradeX" v-for="(item,index) in showItems" :key="index">
                                                <td>{{index}}</td>
                                                <td>{{item.company.name}}</td>
                                                <td>{{item.float}}</td>
                                                <td>{{item.fixed}}</td>
                                                <td>{{item.total}}</td>
                                                <td>{{item.brand}}</td>
                                                <td>{{item.updated_at|formatTime}}</td>
                                                <td class="actions" align="center">
                                                    <a class="waves-effect waves-light" data-toggle="tooltip" data-placement="top" title="转账到此公司"  @click="tran(item)">
                                                        <i class="fa  fa-tags" data-toggle="modal" data-target="#myModal2" ></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="dataTables_info float-left" id="datatable-editable_info" role="status" aria-live="polite" >展示 {{PageShowSum}} 总共 {{items.length}} 项</div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="dataTables_paginate paging_simple_numbers" id="datatable-editable_paginate" >
                                        <ul class="pagination" style="float:right">
                                            <li class="paginate_button previous" :class="{ disabled: currentPage=='0' }">
                                            <a href="javascript:void(0)" @click="previousPage()">上一页</a>
                                            </li>
                                            <li class="paginate_button" v-for="(item,index) in sumPage" :key="index" :class="{ active: currentPage==index }" >
                                            <a href="javascript:void(0)" @click="switchPage(index)">{{++index}}</a>
                                            </li>
                                            <li class="paginate_button next" :class="{ disabled: currentPage==sumPage-1 }">
                                            <a href="javascript:void(0)" @click="nextPage()">下一页</a>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
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
const ses = require("../../utils/ses");
const req = require("../../utils/axios");
const print = require("../../utils/print");
const apis = require("../../utils/api/apis");

import app from "../../App.vue";
const async=require('async')
const notify = require("bootstrap-notify");

export default {
  name: "syear",
  data() {
    return {
      company_id:'',
      Yearid:'',
      
      showGameItems: "",
      showStasticsItems: "",
      givePrice:0,

      // 计算折旧
      diggerDeprelief:0,
      lineDeprelief:0,

      // 分页数据
      items: [],
      showItems: [],
      PageShowSum: 10,
      currentPage: "0",
      sumPage: null,
    };
  },
  beforeMount(){
    this.company_id = JSON.parse(ses.getSes("userinfo")).company_id;
    this.Yearid = JSON.parse(ses.getSes("gameinfo")).Yearid;
  },
  mounted() {
      this.init()
  },
  updated() {    
    $(function () { $("[data-toggle='tooltip']").tooltip(); });
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
    // 显示比赛信息
    getshowGameItems() {
        req.post_Param('api/game',{
            'judge':5,
            'condition':1
        })
        .then(res => {
            print.log('显示比赛信息',res.data);
            this.showGameItems = res.data;
        })
    },
    // 点击进入下一财年
    nextYear(showGameItems) {
        print.log('当前比赛信息',showGameItems)
      if (confirm("你确定要进入下一财年？这将对参赛者资产进行清算！")) {
        this.init()
        this.updateYear(showGameItems);
      }
    },
    // 更新财年信息
    updateYear(showGameItems) {
        req.post_Param('api/game',{
            'judge':2,
            'Yearid':showGameItems.Yearid+1,
            'id':showGameItems.id
        })
        .then(res => {
          print.log(res.data);
          if(res.data.success){
            swal("更新财年信息成功!", "参赛者资产信息更新成功", "success");
            this.init()
            this.updateRelief()
          }
        })
    },
    // 获取参赛公司资产信息
    getStasticsItems() {
        req.post_Param('api/ass/company_statistic',{'judge':4})
        .then(res => {
          print.log(res.data);
          this.showStasticsItems=res.data
          // 分页
          this.currentPage='0'
          this.show(res.data)
        })
    },
    // 点击转账到此公司，中转信息
    tran(model){
        print.log('当前选中转移资产公司资产信息',model)
        this.currentStastics=model
    },
    // 转账
    updateMoney(){
        let float=Number(this.givePrice)+Number(this.currentStastics.float);
        let total=Number(this.givePrice)+Number(this.currentStastics.total);
        // 更新资产信息
        req.post_Param('api/statistic',{
            'judge':2,
            'id':this.currentStastics.id,
            'float':float,
            'total':total
        })
        .then(res => {
            print.log(res.data);
            swal("资金信息更新成功!", "参赛者资产信息更新成功", "success");
            this.init()
        })
    },
    // ---------------------------------------------------计算折旧---------------------------------------------------
    updateRelief(){
        
        this.getStasticsItems() //初始化资产列表
        print.log('最新统计资产信息',this.showStasticsItems)
        for (let i = 0; i < this.showStasticsItems.length; i++) {
            print.log('执行公司资产信息更新--->',this.showStasticsItems[i])
            //对折旧价值初始化
            this.diggerDeprelief=0
            this.lineDeprelief=0
            //循环计算折旧价值
            const re = this.showStasticsItems[i];
            let cid=re.company_id;
            let that=this
            async.series([
                //串行同时执行
                function(callback) {          
                    //计算挖掘机折旧      
                    that.getMiningDigger(cid,callback);
                },
                function(callback) {
                    // 计算生产线折旧
                    that.getInduslandFactory(cid,callback);
                }],
                function(err, results) {
                    //等上面两个执行完返回结果
                    print.log('更新固定资产统计信息',results)
                    that.updateFixedMoney(cid,re,results)
                })
        }
    },
    // 获取 矿区 - 挖掘机
    getMiningDigger(cid,callback){
        req.post_Param('api/ass/mining_digger',{
            'judge':5,
            'company_id':cid
        })
        .then(res => {
            // print.log('矿区 - 挖掘机',res.data)
            this.diggerDeprelief=0
            for (let i = 0; i < res.data.length; i++) {  //对矿区 循环，找到某一个矿区
                const w = res.data[i];
                let kdepre=w.deprelief; //找到某一矿区 折旧减免值
                for (let j = 0; j < w.diggers.length; j++) {  //对挖掘机 进行循环，找到某一类挖掘机
                    const wjj = w.diggers[j];
                    let totalDepre=(1-kdepre)*wjj.deprelief*wjj.mining_digger.number*wjj.price;
                    this.diggerDeprelief+=totalDepre
                }
            }
            print.log('统计所有的挖掘机折旧',this.diggerDeprelief)   
            callback(null, this.diggerDeprelief);
        })
    },
    // 获取 工业用地 - 工厂
    getInduslandFactory(cid,callback){
        req.post_Param('api/ass/indusland_factory',{
            'judge':4,
            'company_id':cid
        })
        .then(res => {
            print.log('工业用地 - 工厂',res.data)
            this.lineDeprelief=0
            if(res.data.length>0){      //如果存在工业用地
                let judgeHaveFactory=0;
                for (let i = 0; i < res.data.length; i++) {  //对工业用地循环 找到 工业用地-工厂 中间表，从而获取到 对应的生产线
                    const w = res.data[i];
                    let idepre=w.repurchase; //找到某一工业用地 折旧减免值
                    // 判定有工业用地 是否有 工厂                    
                    if( w.factories.length!=0){            // 有工厂
                        judgeHaveFactory++;
                        for (let j = 0; j < w.factories.length; j++) {  //对工业用地下的 工厂 进行循环，找到中间表id，从而找到 对应的生产线
                            let judgeHaveLine=0;
                            if(w.factories[j].indusland_factory!=null){     //有生产线
                                judgeHaveLine++;
                                const infa = w.factories[j].indusland_factory.id;
                                //对找到的 中间表id，寻找生产线，计算折旧
                                // print.log('工业用地 - 工厂、中间表id',infa)
                                //逐层回调，找到最终结果
                                if(i==res.data.length-1 && j==w.factories.length-1){
                                    this.getLineDepre(infa,idepre,callback,true);
                                }else{
                                    this.getLineDepre(infa,idepre,callback,false);
                                }
                            }else{
                                if(j==w.factories.length-1 && judgeHaveLine==0){
                                    this.lineDeprelief=0
                                    callback(null,this.lineDeprelief)
                                }
                            }
                            
                        }
                    }else{          // 无工厂
                        if(i==res.data.length-1 && judgeHaveFactory==0){
                            this.lineDeprelief=0
                            callback(null,this.lineDeprelief)
                        }
                    }
                    
                }
            }else{      //如果不存在工业用地
                callback(null, this.lineDeprelief);
            }
        })
    },
    // 获取 工业用地 - 工厂 - 生产线
    getLineDepre(infa,idepre,callback,sure){  //infa,idepre 分别为 中间表id与 工业用地 折旧减免值
        req.post_Param('api/ass/indusland_factory_line',{
            'judge':8,
            'indusland_factory_id':infa
        })
        .then(res => {
            // print.log('工业用地 - 工厂 - 生产线',res.data)
            for (let i = 0; i < res.data.length; i++) {  //对中间表-生产线 信息 循环，从而获取到 对应的生产线 & 数量
                const w = res.data[i];
                for (let j = 0; j < w.lines.length; j++) {  //对工业用地 - 工厂 - 生产线 进行循环，找到生产线，从而找到 对应的生产线 折旧率
                    const line = w.lines[j];
                    let totalDepre=(1-idepre)*line.relief*line.indusland_factory_line.number*line.price;
                    this.lineDeprelief+=totalDepre
                }
            }
            if(sure){
                print.log('统计所有的生产线折旧',this.lineDeprelief)   
                callback(null, this.lineDeprelief);
            }
        })
    },
    // 更新公司资产
    updateFixedMoney(cid,re,result){
        print.log(re,result)
        let fixed=Number(re.fixed)-(Number(result[0])+Number(result[1]));
        let total=Number(re.total)-(Number(result[0])+Number(result[1]));
        // 更新个人资产
        req.post_Param('api/statistic',{
            'judge':4,
            'company_id':cid,
            'fixed':fixed,
            'total':total
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
    },
    // -----------------------------------------------------------分页模板-------------------------------------------------------------
    show(items) {
      this.items=items;
      this.sumPage = Math.ceil(this.items.length / this.PageShowSum);
      //页面加载完成，默认加载第一页
      let page = Number(this.currentPage) + 1;
      this.showEachPage(page);
      print.log("当前数据总页为：--->", this.sumPage);
    },
    switchPage(page) {
      let p = page - 1;
      this.currentPage = `${p}`;
      print.log("当前-->", page);
      this.showEachPage(page);
    },
    showEachPage(page) {
      let all = this.items;
      this.showItems = [];
      for (
        let i = (page - 1) * this.PageShowSum;
        i < page * this.PageShowSum;
        i++
      ) {
        if (all[i] == null) {
          break;
        } else {
          this.showItems.push(all[i]);
        }
      }
    },
    nextPage() {
      if (this.currentPage == this.sumPage - 1) {
        s_alert.basic("已经到达最后一页了……");
      } else {
        let p = Number(this.currentPage) + 1;
        this.currentPage = `${p}`;
        print.log("当前-->", p + 1);
        this.showEachPage(p + 1);
      }
    },
    previousPage() {
      if (this.currentPage == "0") {
        s_alert.basic("已经到达最前面了……");
      } else {
        let p = Number(this.currentPage) - 1;
        this.currentPage = `${p}`;
        print.log("当前-->", p + 1);
        this.showEachPage(p + 1);
      }
    }
    //结束分页

  }
};
</script>

<style>

</style>

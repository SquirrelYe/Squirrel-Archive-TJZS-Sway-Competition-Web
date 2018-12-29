<template>
  <div class="container">
    <!-- Page-Title -->
    <div class="row">
      <div class="col-sm-12">
        <h4 class="pull-left page-title">资产管理</h4>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Sway商战大赛-矿区配置</h3>
          </div>

          <div class="panel-body">
            <div class="col-lg-12">
                  <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      
                      <div class="row">
                            <div class="col-lg-4" v-for="(item1,index) in showCompeteMining" :key="index">
                                <div class="panel panel-fill" :class="{'panel-inverse' : index%3==0,'panel-purple' : index%3==1,'panel-success' : index%3==2}">
                                    <div class="panel-heading" style="height:40px"> 
                                        <h3 class="panel-title" style="float:left">矿区编号  {{item1.id}}</h3> 
                                        <i class="fa fa-pencil" style="float:right"  data-toggle="modal" data-target="#accordion-modal" @click="openSetting(index)">配置</i>
                                    </div> 
                                    <div class="panel-body"> 
                                      <div class="row">           
                                        <div class="col-lg-12">
                                          <div v-if="item1.diggers!=''">已配置挖掘机信息如下：<br>  </div>
                                          <div v-if="item1.diggers==''">暂未配置挖掘机<br>  </div>
                                          <div class="btn-group" v-for="(item,index) in showCompeteMining[index].diggers" :key="index">
                                              <button type="button" class="btn dropdown-toggle waves-effect" data-toggle="dropdown" aria-expanded="false" :class="{'btn-default' : index%4==0,'btn-success' : index%4==1,'btn-warning' : index%4==2,'btn-primary' : index%4==3}">
                                                {{item.id}} 
                                                <span class="caret"></span>
                                              </button>
                                              <ul class="dropdown-menu" role="menu">
                                                  <li>
                                                    <a>
                                                      <div align='center'>
                                                        <p>
                                                          <strong>挖掘机型号：</strong>{{item.model}}<br>
                                                          <strong>购置价格：</strong>{{item.price}}<br>
                                                          <strong>挖掘效率：</strong>{{item.efficient}}<br>
                                                          <strong>价值折旧：</strong>{{item.deprelief}}<br>
                                                          <strong>挖机数量：</strong>{{item.mining_digger.number}}<br>
                                                          <strong style="color:red" data-toggle="modal" data-target="#company" @click="move(item1,item,item.mining_digger.number)">移动挖掘机至其他矿区</strong>
                                                        </p>  
                                                      </div>
                                                    </a>
                                                  </li>
                                              </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div> 
                                </div>
                            </div>
                        </div>                 

                      <div class="panel-body">
                      </div>
                    </div>
                  </div>
                  <hr>
                  <p>
                    <strong>注意</strong>：拍卖过程分为
                    <strong>明拍</strong>与
                    <strong>暗拍</strong>两种，以上单位均为
                    <strong>万元</strong>。
                  </p>
                </div>
          </div>
        </div>
      </div>
    </div>

    
    <!-- <button class="btn btn-primary waves-effect waves-light" data-toggle="modal" data-target="#myModal">StandardModal</button> -->
    <!-- Modal Content is Responsive -->
    <div id="accordion-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none">
      <div class="modal-dialog">
          <div class="modal-content p-0">
              <div class="panel-group panel-group-joined" id="accordion-test"> 

                  <div class="panel  panel-default" v-for="(item,index) in showDiggerItems" :key="index" > 
                    <div class="panel-heading"> 
                        <h4 class="panel-title"> 
                            <a data-toggle="collapse" data-parent="#accordion-test" :href="'#'+index" class="collapsed">
                                挖掘机编号 # {{item.id}}
                            </a> 
                        </h4> 
                    </div> 
                    <div :id="index" class="panel-collapse collapse" :class="{'in' : index==1}"> 
                        <div class="modal-body" align="center">
                          <table class="table table-bordered table-striped" style id="datatable-editable">
                            <thead>
                              <tr>
                                <th>挖掘机型号</th>
                                <th>价格</th>
                                <th>挖掘效率</th>
                                <th>价值折旧</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="gradeX" >
                                <td>{{item.model}}</td>
                                <td>{{item.price}}</td>
                                <td>{{item.efficient}}</td>
                                <td>{{item.deprelief}}</td>
                              </tr>
                            </tbody>
                          </table>
                          <strong>订单总额为:</strong><strong style='color:green'>{{number|sumPrice(item.price)}}万元</strong><br>
                          <strong>请输入配置数量:</strong><input type="number" v-model="number" @input="checkMaxNumber()"><strong>台</strong><br>
                          <strong style="color:red">此矿区当前已配置挖掘机数量：{{haveNumber}}</strong><br>
                        </div>

                        <div class="modal-footer">
                          <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">关闭</button>
                          <button
                            type="button"
                            class="btn btn-primary waves-effect waves-light"
                            data-dismiss="modal"
                            @click="sendPrice(index,number*item.price,number,item.id)"
                            v-if="number!='' && number>0 && Number(number)+Number(haveNumber)<=4"
                          >提交订单</button>
                        </div>
                    </div> 
                  </div> 

              </div>
          </div>
      </div>
    </div>
    <!-- company -->
    <div id="company" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title" id="myModalLabel">转移挖掘机</h4>
            </div>
            <!-- 内容 -->
            <div class="modal-body" align='center'>
              <div class="row">
                <div class="col-sm-12">
                    <div class="panel panel-default">
                        <div class="panel-heading"><h4>转移挖掘机到其他矿区</h4></div>
                        <div class="panel-body">
                            <form class="form-horizontal" role="form">                             
                                <div class="form-group">
                                    <label class="col-md-3 control-label" >目的矿区编号</label>
                                    <div class="col-md-9">
                                        <input type="number" class="form-control" v-model="kqbh">
                                    </div>
                                    <label class="col-md-3 control-label">目的挖机数量</label>
                                    <div class="col-md-9">
                                        <input type="number" class="form-control" v-model="wjjsl">
                                    </div>
                                </div>          
                                <div style="color:red">注意：每个矿区只能容纳四台挖掘机，转移前请检查矿区挖掘机数量。</div>              
                            </form>
                        </div>
                    </div>
                </div>
            </div>         
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary waves-effect waves-light" data-dismiss="modal" @click="moveDigger()">转移到矿区</button>
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
  name: "mine",
  data() {
    return {
      showCompeteMining:'',
      showDiggerItems:'',
      //购买挖掘机
      haveNumber:0,
      number: "",
      temp:'',

      //
      kqbh:'',
      wjjsl:'',
      m1:'',
      m2:'',
      m3:0,
    };
  },
  beforeMount() {
    var ses = window.sessionStorage;
    this.userinfo = JSON.parse(ses.getItem("userinfo"));
  },
  mounted() {
    this.init()
  },
  filters: {
    formatTime(val) {
      //console.log(val)
      return moment(val).format("YYYY-MM-DD HH:mm:ss");
    },
    sumPrice(x, y) {
      return x * y;
      console.log(x, y);
    },
    formatDiggerNumber(x){
      // console.log(x)
      if(x==null) return '暂未配置挖掘机';
      else return x;
    }
  },
  //s_alert.Success("加入成功，请去公司信息查看", "正在加载……", "success");
  methods: {
    init(){
      this.showMyMining();
      this.showDigger()
    },
    openSetting(index) {
      this.number=0
      this.haveNumber=0
      this.temp=this.showCompeteMining[index]
      console.log('--->当前配置清单',this.temp)
      this.showDigger()
      this.getHaveNumber(index)
    },
    getHaveNumber(index){
      //获取当前 矿区 已有挖掘机数量
      let that=this
      let s=`${app.data().globleUrl}/ass/mining_digger?judge=7&mining_id=${this.temp.id}`
        console.log(s)
        that.axios({
        method: "post",
        url: s
        })
        .then(res => {   
          console.log(res.data)
          let n=0
          res.data.rows.forEach(e => {
            n+=e.number
          });
          that.haveNumber=n  //当前矿区已配置挖掘机数量
          
        })
        .catch(err => {
          console.log(err)
        });
    },
    move(item1,item,number){
      console.log(item1,item)
      this.m1=item1;
      this.m2=item;
      this.m3=number;
    },
    moveDigger(){
        this.axios({
        method: 'post',
        url: `${app.data().globleUrl}/ass/mining_digger?judge=6&mining_id=${this.m1.id}&digger_id=${this.m2.id}&number=${this.wjjsl-this.m3}`,
        })

        this.axios({
        method: 'post',
        url: `${app.data().globleUrl}/ass/mining_digger?judge=10&mining_id=${this.kqbh}&digger_id=${this.m2.id}&id=1&number=${this.wjjsl}`,
        }).then(res=>{
          console.log('lala',res.data)

            let number=Number(res.data[0].number)+Number(this.wjjsl)
            console.log(`${app.data().globleUrl}/ass/mining_digger?judge=6&mining_id=${res.data[0].mining_id}&digger_id=${res.data[0].digger_id}&number=${number}`)
            if(!res.data[1]){
              this.axios({
              method: 'post',
              url: `${app.data().globleUrl}/ass/mining_digger?judge=6&mining_id=${res.data[0].mining_id}&digger_id=${res.data[0].digger_id}&number=${number}`
              })
            }
        })        
    },
    sendPrice(index,money,number,digger_id) {
      //购买挖掘机 绑定 到矿区
      let that=this
      let s=`${app.data().globleUrl}/ass/mining_digger?judge=1&mining_id=${this.temp.id}&digger_id=${this.showDiggerItems[index].id}`
        console.log(s)
        that.axios({
        method: "post",
        url: s
        })
        .then(res => {          
          // s_alert.Success("下单成功", "正在加载……", "success");
          that.init()
          that.sendNumber(index)

            let company_id=JSON.parse(window.sessionStorage.getItem('userinfo'))[0].company_id
            this.axios({
            method: "post",
            url: `${app.data().globleUrl}/statistic?judge=5&company_id=${company_id}`
            })
            .then(res => {
              let float=res.data[0].float-money;
              let fixed=res.data[0].fixed+money;

              let s = `${app.data().globleUrl}/statistic?judge=4&float=${float}&fixed=${fixed}&company_id=${company_id}`;   
              console.log(s);
              this.axios({
                method: "post",
                url: s
                })

              let year=window.sessionStorage.getItem('year')
              let e=`${app.data().globleUrl}/transaction?judge=1&id=0&Yearid=${year}&inout=1&type=4&kind=3&price=${money}&number=${number}&me=${company_id}&digger_id=${digger_id}`;   
              console.log(e)
              this.axios({
                method: "post",
                url: e
                })
            })
          .catch(err => {
              console.log(err);
          });
        })
    },
    sendNumber(index) {
      //更改 挖掘机 数量
      try {
        let addNumber= Number(this.temp.diggers[index].mining_digger.number) + Number(this.number)
        console.log('-->',addNumber)
        let s=`${app.data().globleUrl}/ass/mining_digger?judge=6&mining_id=${this.temp.id}&digger_id=${this.showDiggerItems[index].id}&number=${addNumber}`
        console.log(s)
        this.axios({
        method: "post",
        url: s
        })
        .then(res => {       
          console.log(res.data)   
          if(res){
            s_alert.Success("下单成功", "正在加载……", "success");
            this.init()
          }else{
            s_alert.Success("下单失败", "正在加载……", "success");
          }
        })
      } 
      catch (error) {
        let addNumber= Number(this.number)
        console.log(addNumber)
        let s=`${app.data().globleUrl}/ass/mining_digger?judge=6&mining_id=${this.temp.id}&digger_id=${this.showDiggerItems[index].id}&number=${addNumber}`
        console.log(s)
        this.axios({
        method: "post",
        url: s
        })
        .then(res => {       
          console.log(res.data)   
          if(res){
            s_alert.Success("下单成功", "正在加载……", "success");
            this.init()
          }else{
            s_alert.Success("下单失败", "正在加载……", "success");
          }
        })
      }

    },
    checkMaxNumber(){
      console.log(Number(this.number)+Number(this.haveNumber))
      if(Number(this.number)+Number(this.haveNumber)>4){
          s_alert.Success("矿区挖掘机数量不超过4个", "正在加载……", "warning");
      }
    },

    showMyMining() {
      //显示已购 矿区
      let userinfo=JSON.parse(window.sessionStorage.getItem('userinfo'))
      let s=`${app.data().globleUrl}/ass/mining_digger?judge=5&company_id=${userinfo[0].company_id}`
        console.log(s)
        this.axios({
        method: "post",
        url: s
        })
        .then(res => {
          this.showCompeteMining=res.data;
          console.log(this.showCompeteMining)
        })
        .catch(err => {
          console.log(err);
        });
    },
    showDigger() {
      //显示 挖掘机 信息
      let s=`${app.data().globleUrl}/digger?judge=0`
        console.log(s)
        this.axios({
        method: "post",
        url: s
        })
        .then(res => {
          console.log(res.data);
          this.showDiggerItems = res.data;
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

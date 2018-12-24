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
            <h3 class="panel-title">Sway商战大赛-工业用地配置</h3>
          </div>

          <div class="panel-body">
            <div class="col-lg-12">
                  <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">                      
                      <div class="row">
                            <div class="col-lg-6" v-for="(item,index) in showCompeteIndusland" :key="index">
                              <div class="panel panel-fill panel-inverse">
                                  <div class="panel-heading" style="height:40px"> 
                                      <h3 class="panel-title" style="float:left">工业用地编号  {{item.id}}、面积{{item.measure}}</h3> 
                                      <i class="fa fa-pencil" style="float:right"  data-toggle="modal" data-target="#accordion-modal" @click="openSetting(null,index,0)">配置</i>
                                  </div> 
                                  <div class="panel-body"> 
                                    <!-- <p>
                                      暂未配置工厂
                                    </p> -->
                                    <div class="col-lg-4" v-for="(item1,index1) in showCompeteIndusland[index].factories" :key="index1">
                                      <div class="panel panel-fill panel-default">
                                          <div class="panel-heading" style="height:40px"> 
                                              <h3 class="panel-title" style="float:left">工厂编号  {{item1.id}}</h3> 
                                              <i class="fa fa-pencil" style="float:right"  data-toggle="modal" data-target="#accordion-modal" @click="openSetting(index,index1,1)">配置</i>
                                          </div> 
                                          <div class="panel-body"> 
                                            <div class="row">           
                                              <div class="col-lg-12">
                                                <div v-for="(item2,index2) in showInduslandFactoryLineItem" :key="index2">
                                                  <div v-if="item2.indusland_id==item.id && item2.factory_id==item1.id">
                                                    <!-- 根据 生产线与工业用地&工厂对应关系的indusland_id和factory_id 来匹配 显示 -->
                                                    <div v-if="item2.lines!=''">生产线信息如下：<br>  </div>
                                                    <div v-if="item2.lines==''">暂未配置生产线信息：<br>  </div>
                                                    <div class="btn-group"  v-for="(item3,index3) in item2.lines" :key="index3">
                                                      <button type="button" class="btn dropdown-toggle waves-effect" data-toggle="dropdown" aria-expanded="false" :class="{'btn-default' : index3%4==0,'btn-success' : index3%4==1,'btn-warning' : index3%4==2,'btn-primary' : index3%4==3}">
                                                      {{item3.id}} 
                                                      <span class="caret"></span>
                                                      </button>
                                                      <ul class="dropdown-menu" role="menu">
                                                        <li>
                                                          <a>
                                                            <div align='center'>
                                                              <p>
                                                                <strong>生产线型号：</strong>{{item3.id}}<br>
                                                                <strong>产能：</strong>{{item3.id}}<br>
                                                                <strong>产线价值折旧：</strong>{{item3.id}}<br>
                                                                <strong>良品率：</strong>{{item3.id}}<br>
                                                                <strong>购置价格：</strong>{{item3.id}}<br>
                                                                <strong>建设要求：</strong>{{item3.id}}<br>
                                                                <strong>数量：</strong>{{item3.indusland_factory_line.number}}<br>
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
                                    </div>

                                  </div> 
                              </div>
                            </div>
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

    <!-- 工业用地-工厂 -->
    <div id="accordion-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none">
      <div class="modal-dialog">
          <div class="modal-content p-0">
              <div class="panel-group panel-group-joined" id="accordion-test"> 

                <!-- 配置工厂 -->
                <div v-if="Number(chooseFunction)==0">
                  <div class="panel panel-default" v-for="(item,index) in showFactoryItem" :key="index"> 
                    <div class="panel-heading"> 
                        <h4 class="panel-title"> 
                            <a data-toggle="collapse" data-parent="#accordion-test" :href="'#'+index" class="collapsed">
                                工厂编号 # {{item.id}}
                            </a> 
                        </h4> 
                    </div> 
                    <div :id="index" class="panel-collapse collapse" :class="{'in' : index==1}"> 
                        <div class="modal-body" align="center">
                          <table class="table table-bordered table-striped" style id="datatable-editable">
                            <thead>
                              <tr>
                                <th>工厂型号</th>
                                <th>占用面积</th>
                                <th>容纳生产线</th>
                                <th>建设成本</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="gradeX" >
                                <td>{{item.model}}</td>
                                <td>{{item.measure}}</td>
                                <td>{{item.includeline}}</td>
                                <td>{{item.price}}</td>
                              </tr>
                            </tbody>
                          </table>
                          <strong>订单总额为:</strong><strong style='color:green'>{{number|sumPrice(item.price)}}万元</strong><br>
                          <strong>请输入配置数量:</strong><input type="number" v-model="number"><strong>台</strong><br>
                          <div v-for="(item,index) in currentIndustryHaveFactory.rows" :key="index">                            
                            <strong>当前矿区已有工厂编号：{{item.factory_id}}</strong>                        
                            <strong>、工厂数量：{{item.number}}</strong><br>
                          </div>
                          <strong>当前工业用地面积已使用:{{currentIndustryHaveUsedTotalMeasure}}</strong><br>
                        </div>

                        <div class="modal-footer">
                          <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">关闭</button>
                          <button
                            type="button"
                            class="btn btn-primary waves-effect waves-light"
                            data-dismiss="modal"
                            @click="sendPriceToFactory(index)"
                            v-if="number!='' && number>0 && number*item.measure+currentIndustryHaveUsedTotalMeasure<=temp.measure"
                          >提交订单</button>
                        </div>
                    </div> 
                  </div> 
                </div>

                <!-- 配置生产线 -->
                <div v-if="Number(chooseFunction)==1">
                  <div class="panel panel-default" v-for="(item,index) in showLineItem" :key="index"> 
                    <div class="panel-heading"> 
                        <h4 class="panel-title"> 
                            <a data-toggle="collapse" data-parent="#accordion-test1" :href="'#'+index" class="collapsed">
                                生产线编号 # {{item.id}}
                            </a> 
                        </h4> 
                    </div> 
                    <div :id="index" class="panel-collapse collapse" :class="{'in' : index==1}"> 
                        <div class="modal-body" align="center">
                          <table class="table table-bordered table-striped" style id="datatable-editable">
                            <thead>
                              <tr>
                                <th>型号</th>
                                <th>产能</th>
                                <th>产线价值折旧折旧</th>
                                <th>良品率</th>
                                <th>价值</th>
                                <th>建设要求</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="gradeX" >
                                <td>{{item.model}}</td>
                                <td>{{item.capacity}}</td>
                                <td>{{item.relief}}</td>
                                <td>{{item.yield}}</td>
                                <td>{{item.price}}</td>
                                <td>{{item.conrequire}}</td>
                              </tr>
                            </tbody>
                          </table>
                          <strong>订单总额为:</strong><strong style='color:green'>{{number|sumPrice(item.price)}}万元</strong><br>
                          <strong>请输入配置数量:</strong><input type="number" v-model="number"><strong>条</strong><br>
                          <!-- <div v-for="(item,index) in currentIndustryHaveFactory.rows" :key="index">                            
                            <strong>当前矿区已有工厂编号：{{item.factory_id}}</strong>                        
                            <strong>、工厂数量：{{item.number}}</strong><br> -->
                          </div>
                          <!-- <strong>当前工业用地面积已使用:{{currentIndustryHaveUsedTotalMeasure}}</strong><br> -->
                        </div>

                        <div class="modal-footer">
                          <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">关闭</button>
                          <button
                            type="button"
                            class="btn btn-primary waves-effect waves-light"
                            data-dismiss="modal"
                            @click="sendPriceToLine(index)"
                            v-if="number!='' && number>0"
                          >提交订单</button>
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
  name: "industry",
  data() {
    return {
      showCompeteIndusland:'',
      showLineItem:'',
      showFactoryItem:'',
      showInduslandFactoryLineItem:'',
      //处理选择 配置工厂 or 生产线
      chooseFunction:'',
      //暂存 工业用地-工厂 中间表 id
      tempInduslandFactoryId:'',
      // 购买清单
      number: "",
      temp:'',
      currentIndustryHaveFactory:'',
      currentIndustryHaveUsedTotalMeasure:''
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
      return moment(val).format("YYYY-MM-DD HH:mm:ss");
    },
    sumPrice(x, y) {
      return x * y;
      console.log(x, y);
    }
  },
  methods: {
    init(){
      this.showMyIndusland();
      this.showInduslandFactoryLine();
    },
    //配置工厂 & 生产线
    openSetting(index,index1,choose) {
      if(Number(choose)==0){
        //处理选择 配置工厂 or 配置生产线
        this.chooseFunction=0

        this.number=0
        this.haveNumber=0
        this.temp=this.showCompeteIndusland[index1]
        console.log(this.temp)
        this.showAllFactory()  //获取工厂列表
        this.getCurrentIndustryHaveFactory(index1)
      }else if(Number(choose)==1){
        console.log('定位工业用地&工厂-->',this.showCompeteIndusland[index].id,this.showCompeteIndusland[index].factories[index1].id)
        //处理选择 配置工厂 or 配置生产线
        this.chooseFunction=1

        this.number=0
        this.haveNumber=0
        this.temp=this.showInduslandFactoryLineItem[index]
        console.log(this.showInduslandFactoryLineItem)
        console.log(this.temp)
        this.showAllLine();   //获取生产线列表
        this.getInduslandFactoryId(this.showCompeteIndusland[index].id,this.showCompeteIndusland[index].factories[index1].id) //获取工业用地-工厂 中间表id，来配置新生产线
      }
    },
    getCurrentIndustryHaveFactory(index) {
      //查询 当前 工业用不同工厂数量
      let s=`${app.data().globleUrl}/ass/indusland_factory?judge=6&indusland_id=${this.showCompeteIndusland[index].id}`
      console.log(s)
      this.axios({
      method: "post",
      url: s
      })
      .then(res => {       
        console.log(res.data)  
        this.currentIndustryHaveFactory=res.data
        //获取面积使用情况
        let tempMeasure=0;
        res.data.rows.forEach(e => {
          this.temp.factories.forEach(el => {
            if(el.id==e.factory_id) {
              tempMeasure+=el.measure*e.number;
            }
          });
        });
        console.log('------------------->',tempMeasure)
        this.currentIndustryHaveUsedTotalMeasure=tempMeasure
      })
      .catch(err => {

      });
    },
    sendPriceToFactory(index) {
      //购买工厂 绑定 到工业用地
      let that=this
      let s=`${app.data().globleUrl}/ass/indusland_factory?judge=1&indusland_id=${this.temp.id}&factory_id=${this.showFactoryItem[index].id}`
        console.log(s)
        that.axios({
        method: "post", 
        url: s
        })
        .then(res => {
          if(res){
            that.init()
            that.sendNumber(index)
          }else{
            s_alert.Success("下单失败", "正在加载……", "success");
          }
        })

    },
    sendNumber(index) {
      //更改 工厂 数量
      let that=this
      try {
        let addNumber= Number(that.temp.factories[index].indusland_factory.number) + Number(that.number)
        console.log(addNumber)
        let s=`${app.data().globleUrl}/ass/indusland_factory?judge=1&indusland_id=${that.temp.id}&factory_id=${that.showFactoryItem[index].id}&number=${addNumber}`
        console.log(s)
        that.axios({
        method: "post",
        url: s
        })
        .then(res => {       
          console.log(res.data)   
          if(res){
            s_alert.Success("下单成功", "正在加载……", "success");
          }else{
            s_alert.Success("下单失败", "正在加载……", "success");
          }
        })
      } catch (error) {
        let addNumber= Number(that.number)
        console.log(addNumber)
        let s=`${app.data().globleUrl}/ass/indusland_factory?judge=5&indusland_id=${that.temp.id}&factory_id=${that.showFactoryItem[index].id}&number=${addNumber}`
        console.log(s)
        that.axios({
        method: "post",
        url: s
        })
        .then(res => {       
          console.log(res.data)   
          if(res){
            s_alert.Success("下单成功", "正在加载……", "success");
          }else{
            s_alert.Success("下单失败", "正在加载……", "success");
          }
        })
      }     
    },
    getInduslandFactoryId(indusland_id,factory_id) {
      ////获取工业用地-工厂 中间表id，来配置新生产线
      let that=this
      let s=`${app.data().globleUrl}/ass/indusland_factory?judge=7&indusland_id=${indusland_id}&factory_id=${factory_id}`
        console.log(s)
        that.axios({
        method: "post", 
        url: s
        })
        .then(res => {
          if(res){
            //console.log(res.data)
            this.tempInduslandFactoryId=res.data.id
          }else{
            s_alert.Success("获取工业用地-工厂 中间表id失败", "正在加载……", "warning");
          }
        })
    },
    sendPriceToLine(index) {
      //购买生产线 绑定 到工厂
      let that=this
      let s=`${app.data().globleUrl}/ass/indusland_factory_line?judge=1&indusland_factory_id=${this.tempInduslandFactoryId}&line_id=${this.showLineItem[index].id}`
        console.log(s)
        that.axios({
        method: "post", 
        url: s
        })
        .then(res => {
          if(res){
            that.init()
            that.sendLineNumber(index)
          }else{
            s_alert.Success("下单失败", "正在加载……", "success");
          }
        })
    },
    sendLineNumber(index) {
      //更改 工厂 数量
      let that=this      
      // this.showInduslandFactoryLineItem.forEach(e => {
      //   if(e.id==this.tempInduslandFactoryId) 
      // });
      let tid=null;
      for (let i = 0; i < this.showInduslandFactoryLineItem.length; i++) {
        const e = this.showInduslandFactoryLineItem[i];
        if(e.id==this.tempInduslandFactoryId) {
          tid=i; 
        }    
      }
      console.log('tid',tid)
      try {
        let addNumber= Number(that.temp.lines[tid].indusland_factory_line.number) + Number(that.number)
        console.log(addNumber)
        let s=`${app.data().globleUrl}/ass/indusland_factory_line?judge=6&indusland_factory_id=${this.tempInduslandFactoryId}&line_id=${this.showLineItem[index].id}&number=${addNumber}`
        console.log(s)
        that.axios({
        method: "post",
        url: s
        })
        .then(res => {       
            that.init()
          console.log(res.data)   
          if(res){
            s_alert.Success("下单成功", "正在加载……", "success");
          }else{
            s_alert.Success("下单失败", "正在加载……", "success");
          }
        })
      } catch (error) {
        let addNumber= Number(that.number)
        console.log(addNumber)
        let s=`${app.data().globleUrl}/ass/indusland_factory_line?judge=6&indusland_factory_id=${this.tempInduslandFactoryId}&line_id=${this.showLineItem[index].id}&number=${addNumber}`
        console.log(s)
        that.axios({
        method: "post",
        url: s
        })
        .then(res => {          
            that.init()
          console.log(res.data)   
          if(res){
            s_alert.Success("下单成功", "正在加载……", "success");
          }else{
            s_alert.Success("下单失败", "正在加载……", "success");
          }
        })
      }
      

    },
    showMyIndusland() {
      //显示已购 工业用地
      let userinfo=JSON.parse(window.sessionStorage.getItem('userinfo'))
      let s=`${app.data().globleUrl}/ass/indusland_factory?judge=4&company_id=${userinfo[0].company_id}`
        console.log(s)
        this.axios({
        method: "post",
        url: s
        })
        .then(res => {          
          this.showCompeteIndusland=res.data;
          console.log('工业用地-工厂 对应关系',this.showCompeteIndusland)
        })
        .catch(err => {
          console.log(err);
        });
    },
    showAllFactory() {
      //显示 工厂
      let userinfo=JSON.parse(window.sessionStorage.getItem('userinfo'))
      let s=`${app.data().globleUrl}/factory?judge=0`
        console.log(s)
        this.axios({
        method: "post",
        url: s
        })
        .then(res => {
          console.log('不同种类的生产线',res.data);
          this.showFactoryItem = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    showAllLine() {
      //显示 生产线 
      let userinfo=JSON.parse(window.sessionStorage.getItem('userinfo'))
      let s=`${app.data().globleUrl}/line?judge=0`
        console.log(s)
        this.axios({
        method: "post",
        url: s
        })
        .then(res => {
          console.log('不同种类的生产线',res.data);
          this.showLineItem = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    showInduslandFactoryLine() {
      //显示 生产线  (工业用地-工厂 对应的 生产线 汇总信息)
      let userinfo=JSON.parse(window.sessionStorage.getItem('userinfo'))
      let s=`${app.data().globleUrl}/ass/indusland_factory_line?judge=5`
        console.log(s)
        this.axios({
        method: "post",
        url: s
        })
        .then(res => {
          console.log('工业用地-工厂对应 生产线',res.data);
          this.showInduslandFactoryLineItem = res.data;
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

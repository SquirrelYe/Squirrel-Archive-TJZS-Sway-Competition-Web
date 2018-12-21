import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from '@/components/register'
import recoverypw from '@/components/recoverypw'
import menu from '@/components/menu'
import resetpwd from '@/components/resetPwd'
// test
import init from '@/components/test/init'
import welcome from '@/components/test/welcome'
import ceshi from '@/components/test/ceshi'
// manage
import index from '@/components/mange/index'
import map from '@/components/mange/map'
// document
import docCreate from '@/components/document/docCreate'
import docSupport from '@/components/document/docSupport'
import docList from '@/components/document/docList'
// -------------------------------用户端-------------------------------------
// company
import creatCompany from '@/components/company/creatcompany'
import joinCompany from '@/components/company/joincompany'
import infoCompany from '@/components/company/infocompany'
// compete
import doCompete from '@/components/compete/docompete'
import infoCompete from '@/components/compete/infocompete'
// asset
import mine from '@/components/asset/mine'
import industry from '@/components/asset/industry'
import commer from '@/components/asset/commer'
// run
import exploit from '@/components/run/exploit'
import product from '@/components/run/product'
import research from '@/components/run/research'
// stock
import goods from '@/components/stock/goods'
import stock from '@/components/stock/stock'
import resource from '@/components/stock/resource'
// transaction
import toCompany from '@/components/transaction/tocompany'
import toMarket from '@/components/transaction/tomarket'
import loan from '@/components/transaction/loan'
import showtransaction from '@/components/transaction/showtransaction'
// ---------------------------------管理员端-----------------------------------
// users
import sway from '@/adminComponents/users/sway'
import admin from '@/adminComponents/users/admin'
import company from '@/adminComponents/users/company'
// game
import creatgame from '@/adminComponents/game/creatgame' 
import listgame from '@/adminComponents/game/listgame'
// run
import scompete from '@/adminComponents/run/scompete' 
import stransation from '@/adminComponents/run/stransation'
import sstastics from '@/adminComponents/run/sstastics'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/init',
      name: 'init',
      component: init
    },
    {
      path: '/login/:id',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'login',
      component: login,
      meta: {
        needLogin: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/recoverypw/',
      name: 'recoverypw',
      component: recoverypw
    },
    {
      path:'/resetpwd/:id',
      name:'resetpwd',
      component:resetpwd
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/ceshi',
      name: 'ceshi',
      component: ceshi
    },
    {
      path: '/menu',
      name: 'menu',
      component: menu,
      children:[
        {
          path:'index',
          component:index
        },
        // ----------------------------------
        {
          path:'creatcompany',  //创建公司
          name:'creatcompany',
          component:creatCompany
        },
        {
          path:'joincompany',  //加入公司
          name:'joincompany',
          component:joinCompany
        },
        {
          path:'infocompany',  //公司简介
          name:'infocompany',
          component:infoCompany
        },
        // ----------------------------------
        {
          path:'docompete', //开始竞拍
          name:'docompete',
          component:doCompete
        },
        {
          path:'infocompete', //竞拍结果
          name:'infocompete',
          component:infoCompete
        },
        // ----------------------------------
        {
          path:'mine',  //矿区配置
          name:'mine',
          component:mine
        },
        {
          path:'industry',  //工业用地配置
          name:'industry',
          component:industry
        },
        {
          path:'commer',  //商业用地配置
          name:'commer',
          component:commer
        },
        // ----------------------------------
        {
          path:'exploit',   //矿区-挖掘机-开采
          name:'exploit',
          component:exploit
        },
        {
          path:'product',   //工业用地-厂房-生产线-生产
          name:'product',
          component:product
        },
        {
          path:'research',    //商业用地-研究所-研发
          name:'research',
          component:research
        },
        // ----------------------------------
        {
          path:'goods',   //公司产品 
          name:'goods',
          component:goods
        },
        {
          path:'stock',   //产品库存
          name:'stock',
          component:stock
        },
        {
          path:'resource',     //原料库存
          name:'resource',
          component:resource
        },
        // ----------------------------------
        {
          path:'tocompany',   //指向 公司 交易
          name:'tocompany',
          component:toCompany
        },
        {
          path:'tomarket',    //市场交易
          name:'tomarket',
          component:toMarket
        },
        {
          path:'loan',    //贷款
          name:'loan',
          component:loan
        },
        {
          path:'showtransaction',    //订单详情
          name:'showtransaction',
          component:showtransaction
        },
        // -----------------------------------管理员端---------------------------------
        {
          path:'sway',    //参赛者管理
          name:'sway',
          component:sway
        },
        {
          path:'admin',    //管理员管理
          name:'admin',
          component:admin
        },
        {
          path:'company',    //公司管理
          name:'company',
          component:company
        },
        {
          path:'creatgame',    //新建比赛
          name:'creatgame',
          component:creatgame
        },
        {
          path:'listgame',   //赛事列表
          name:'listgame',
          component:listgame
        },
        {
          path:'scompete',   //竞拍管理
          name:'scompete',
          component:scompete
        },
        {
          path:'stransation',   //交易管理
          name:'stransation',
          component:stransation
        },
        {
          path:'sstastics',   //赛事数据
          name:'sstastics',
          component:sstastics
        },
      ]
    }
  ]
})

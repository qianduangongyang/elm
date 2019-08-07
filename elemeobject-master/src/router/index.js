import Vue from 'vue'
import Router from 'vue-router'
import city from '@/components/city'
import Cmessage from '@/components/Cmessage'
import Denglu from '@/components/denglu'
import reset from '@/components/reset'
import home from '@/components/yonglei/home'
import search from '@/components/yonglei/search'
import order from '@/components/yonglei/order'
import me from '@/components/yonglei/me'
// import sec from '@/components/yonglei/sec'
import ord from '@/components/yonglei/ord'
import hom from '@/components/yonglei/hom'
import home2 from '@/components/yonglei/home2'
import xiangqing from '@/components/yonglei/xiangqing'
import shangjiamsg from '@/components/yonglei/shangjiamsg'
import safety from '@/components/yonglei/safety'
import xiadan from '@/components/yonglei/xiadan'

// -------------------------------deyu
import MY from '@/components/deyu/MY'
// import home from '@/components/deyu/home'
// import me from '@/components/deyu/me'
// import order from '@/components/deyu/order'
// import search from '@/components/deyu/search'
import usermessage from '@/components/deyu/usermessage'
import gaiming from '@/components/deyu/gaiming'
import ccpassword from '@/components/deyu/ccpassword'
import jifen from '@/components/deyu/jifen'
import fuwu from '@/components/deyu/fuwu'
import quanyi from '@/components/deyu/quanyi'
import xiazai from '@/components/deyu/xiazai'
import VIP from '@/components/deyu/VIP'
import youhui from '@/components/deyu/youhui'
import zhifu from '@/components/deyu/zhifu'
import duihuanvip from '@/components/deyu/duihuanvip'
import shopjilv from '@/components/deyu/shopjilv'
import mybalance from '@/components/deyu/mybalance'
import mypoints from '@/components/deyu/mypoints'
import address from '@/components/deyu/address'
import newaddress from '@/components/deyu/newaddress'
import yueshuoming from '@/components/deyu/yueshuoming'
import jifenshuoming from '@/components/deyu/jifenshuoming'
import Searchaddress from '@/components/deyu/Searchaddress'
import mydiscount from '@/components/deyu/mydiscount'
import shopcoupon from '@/components/deyu/shopcoupon'
import historyhongbao from '@/components/deyu/historyhongbao'
import redshuoming from '@/components/deyu/redshuoming'
import converthongbao from '@/components/deyu/converthongbao'
import tuijian from '@/components/deyu/tuijian'
import shangjiadai from '@/components/deyu/shangjiadai'
import cityren from '@/components/deyu/cityren'
import search_one from '@/components/kunkun/search'

// ----------------------------------
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'city',
      component: city
    },
    {
      path: '/city',
      name: 'city',
      component: city
    },
    {
      path: '/Cmessage',
      name: 'Cmessage',
      component:Cmessage
    },
    {
      path: '/reset',
      name: 'reset',
      component:reset
    },
    {
      path:'/home',
      name:"home",
      component:home,
      redirect:"/home/hom",
      children:[
        {
          path:'hom',
          name:'hom',
          component:hom
        }
      ]
    },
    {
      path:'/search',
      name:'search',
      component:search,
      children:[
        {
          path:"/",
          name:"search_one",
          component:search_one
        }
      ]
    },
    {
      path:'/order',
      name:'order',
      component:order,
      redirect:"/ord",
      children:[
        {
          path:'/ord',
          name:'/ord',
          component:ord
        }
      ]
    },
    {
      path:'/me',
      name:me,
      component:me,
      redirect:"/me/MY",
      children:[{
        path: '/',
        name: 'MY',
        component: MY
      },]
    },
    {
      path:'/home2',
      name:'home2',
      component:home2
    },
    {
      path:'/xiangqing',
      name:'xiangqing',
      component:xiangqing
    },
    {
      path:'/shangjiamsg',
      name:'shangjiamsg',
      component:shangjiamsg
    },
    {
      path:'/safety',
      name:'safety',
      component:safety
    },
      {
        path: '/denglu',
        name: 'denglu',
        component: Denglu
      },
      {
        path: '/reset',
        name: 'reset',
        component: reset
      },
      
      {
        path: '/home',
        name: 'home',
        component: home
      },
      {
        path: '/usermessage',
        name: 'usermessage',
        component: usermessage,
      },
      {
        path: '/gaiming',
        name: 'gaiming',
        component: gaiming,
      },
      {
       path:'/ccpassword',
       name:'ccpassword',
       component:ccpassword,
      },
      {
        path:'/jifen',
        name:'jifen',
        component:jifen,
       },
       {
        path:'/fuwu',
        name:'fuwu',
        component:fuwu,
       },
       {
        path:'/quanyi',
        name:'quanyi',
        component:quanyi,
       },
       {
        path:'/xiazai',
        name:'xiazai',
        component:xiazai,
       },
       {
        path:'/VIP',
        name:'VIP',
        component:VIP,
       },
       {
        path:'/duihuanvip',
        name:'duihuanvip',
        component:duihuanvip,
       },
       {
        path:'/shopjilv',
        name:'shopjilv',
        component:shopjilv,
       },
       {
        path:'/yueshuoming',
        name:'yueshuoming',
        component:yueshuoming,
       },
       {
        path:'/redshuoming',
        name:'redshuoming',
        component:redshuoming,
       },
       {
        path:'/shopcoupon',
        name:'shopcoupon',
        component:shopcoupon,
       },
       {
        path:'/Searchaddress',
        name:'Searchaddress',
        component:Searchaddress,
       },
       {
        path:'/historyhongbao',
        name:'historyhongbao',
        component:historyhongbao,
       },
       {
        path:'/jifenshuoming',
        name:'jifenshuoming',
        component:jifenshuoming,
       },
       {
        path:'/shangjiadai',
        name:'shangjiadai',
        component:shangjiadai,
       },
       {
        path:'/mydiscount',
        name:'mydiscount',
        component:mydiscount,
       },
       {
        path:'/cityren',
        name:'cityren',
        component:cityren,
       },
       {
        path:'/converthongbao',
        name:'converthongbao',
        component:converthongbao,
       },
       {
        path:'/tuijian',
        name:'tuijian',
        component:tuijian,
       },
       {
        path:'/mybalance',
        name:'mybalance',
        component:mybalance,
       },
       {
        path:'/address',
        name:'address',
        component:address,
       },
       {
        path:'/newaddress',
        name:'newaddress',
        component:newaddress,
       },
       {
        path:'/mypoints',
        name:'mypoints',
        component:mypoints,
       },
       {
        path:'/youhui',
        name:'youhui',
        component:youhui,
       },
       {
        path:'/zhifu',
        name:'zhifu',
        component:zhifu,
       },
      
      
      {
        path: '/order',
        name: 'order',
        component: order
      },
      {
        path: '/search',
        name: 'search',
        component: search
      },
      {
        path:'/xiadan',
        name:'xiadan',
        component:xiadan
      }
    ]
})

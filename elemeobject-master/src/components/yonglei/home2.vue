<template>
  <div>
    
    <div class="dh">
        <div id="header">
      <img src="../../assets/back.png" style="width:0.3rem;" @click="ht()">
      <span>{{title}}</span>
        </div>
      <ul class="daohang">
        <li @click="xs=!xs;xs1=false;xs2=false">
          {{title}}
          <van-icon name="arrow-down" />
        </li>
        <li @click="xs=false;xs1=!xs1;xs2=false">
          排序
          <van-icon name="arrow-down" />
        </li>
        <li @click="xs=false;xs1=false;xs2=!xs2">
          筛选
          <van-icon name="arrow-down" />
        </li>
      </ul>
      <el-collapse-transition>
        <div class="class_1" v-if="xs" style="float:left">
          <ul>
            <li :key="i" v-for="(v,i) in spArr" class="spcl" @click="add(v.sub_categories,v.id)">
              <p>
                <i class="el-icon-shopping-bag-1"></i>
                <span>{{v.name}}</span>
              </p>
              <p class="spcount">
                <span>{{v.count}}</span>
                <i class="el-icon-arrow-right"></i>
              </p>
            </li>
          </ul>
          <ul>
            <li :key="i" v-for="(v,i) in splbArr" class="splb_1" @click="getT2(v)">{{v}}</li>
          </ul>
        </div>
      </el-collapse-transition>
      <el-collapse-transition>
        <div class="class_2" v-if="xs1">
          <ul>
            <li>
              <span style="color:blue"><van-icon name="ascending"/></span>
              <span @click="paixu(4)">智能排序</span>
            </li>
            <li>
              <span style="color:green"><van-icon name="location-o"/></span>
              <span @click="paixu(5)">距离最近</span>
            </li>
            <li>
              <span style="color:red"><van-icon name="fire-o"/></span>
              <span @click="paixu(6)">销量最高</span>
            </li>
            <li>
              <span style="color:orange"><van-icon name="after-sale"/></span>
              <span @click="paixu(1)">起送价最低</span>
            </li>
            <li>
              <span style="color:blue"><van-icon name="logistics"/></span>
              <span @click="paixu(2)">配送速度最快</span>
            </li>
            <li>
              <span style="color:orange"><van-icon name="star-o"/></span>
              <span @click="paixu(3)">评分最高</span>
            </li>
          </ul>
        </div>
      </el-collapse-transition>
      <el-collapse-transition>
        <div class="class_3" v-if="xs2">
          <p style="color:gray">配送方式</p>
          <div class="peisong">
            <img src="../../assets/fengniao.png" style="width:0.2rem">
            <span class="shuxing1">蜂鸟专送</span>
          </div>
          <p style="margin-top:0.1rem;color:gray;font-size:0.14rem">商家属性（可以多选）</p>
          <div class="ps_1">
            <div class="peisong">
              <span class="shuxing" style="border:0.01rem solid aqua" v-if="pin" @click="btn_cf++;pin=!pin" >品</span>
              <span class="shuxing" style="border:0.01rem solid aqua;color:blue" v-else  @click="btn_cf--;pin=!pin">√</span>
              <span class="shuxing1">品牌商家</span>
            </div>
            <div class="peisong">
             <span class="shuxing" style="border:0.01rem solid gray" v-if="bao" @click="btn_cf++;bao=!bao" >宝</span>
              <span class="shuxing" style="border:0.01rem solid gray;color:blue" v-else  @click="btn_cf--;bao=!bao">√</span>
              <span class="shuxing1">外卖宝</span>
            </div>
            <div class="peisong">
              <span class="shuxing" style="border:0.01rem solid aqua" v-if="zhun" @click="btn_cf++;zhun=!zhun" >准</span>
              <span class="shuxing" style="border:0.01rem solid aqua;color:blue" v-else  @click="btn_cf--;zhun=!zhun">√</span>
              <span class="shuxing1">准时达</span>
            </div>
            <div class="peisong">
              <span class="shuxing" style="border:0.01rem solid orange" v-if="xin" @click="btn_cf++;xin=!xin" >新</span>
              <span class="shuxing" style="border:0.01rem solid orange;color:blue" v-else  @click="btn_cf--;xin=!xin">√</span>
              <span class="shuxing1">新店</span>
            </div>
            <div class="peisong">
              <span class="shuxing" style="border:0.01rem solid red" v-if="fu" @click="btn_cf++;fu=!fu" >付</span>
              <span class="shuxing" style="border:0.01rem solid red;color:blue" v-else  @click="btn_cf--;fu=!fu">√</span>
              <span class="shuxing1">在线支付</span>
            </div>
            <div class="peisong">
              <span class="shuxing" style="border:0.01rem solid gray" v-if="piao" @click="btn_cf++;piao=!piao" >票</span>
              <span class="shuxing" style="border:0.01rem solid gray;color:blue" v-else  @click="btn_cf--;piao=!piao">√</span>
              <span class="shuxing1">开发票</span>
            </div>
          </div>
          <div class="ps_btn">
            <el-button class="btn_c" @click="pin=true;bao=true;zhun=true;xin=true;fu=true;piao=true;btn_cf=0;xs2=false">取消</el-button>
            <el-button type="success" class="btn_c" @click="xs2=false">
              确定
              <span v-if="btn_cf>0">({{btn_cf}})</span>
            </el-button>
          </div>
        </div>
      </el-collapse-transition>
    </div>
    <div id="commmodity">
      <ul>
        <li :key="i" v-for="(v,i) in shangpuLB" class="shangpuLB" @click="getBus(v)">
            <img :src="'https://elm.cangdu.org/img/'+v.image_path" class="splogo">
            <span class="pinpai">品牌</span>
            <span class="spname">{{v.name}}</span>
            <div class="promise">
              <span
                class="promiseS"
                :key="j"
                v-for="(k,j) in v.supports"
                style="color:darkgrey"
              >{{k.icon_name}}</span>
            </div>
           <div class="rate">
                      <van-rate
  v-model="v.rating"
  allow-half
  void-icon="star"
  void-color="#eee"
  size="0.13rem"
/><span style="color:orange">{{v.rating}}</span>
            </div>
            <span class="ys">月售{{v.recent_order_num}}单</span>
            <span class="song">￥{{v.float_minimum_order_amount}}元起送 / 配送费约￥{{v.float_delivery_fee}}</span>
            <div class="fengniao">
              <span class="fn">蜂鸟专送</span>
              <span class="zs">准时达</span>
            </div>
            <div class="songtime">
              <span class="distance">{{v.distance}} /</span>
              <span class="order_lead_time">{{v.order_lead_time}}</span>
            </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "home2",
  data() {
    return {
      btn_cf: 0,
      title: "",
      spArr: [],
      splbArr: [],
      xs: false,
      xs1: false,
      xs2: false,
      //商家列表
      shangpuLB: [],
      //餐馆分类的id
      restaurant_category_id:"",
      //餐馆支持特权的id
      support_ids:"",
      //配送方式id
      delivery_mode:"",
    //   排序方式
      order_by:"",
      pin:true,
      bao:true,
      zhun:true,
      xin:true,
      fu:true,
      piao:true
    };
  },
  created() {
    this.getT();
    this.getSP();
    this.shangpu();
  },
  methods: {
    getBus(v){
          this.$store.commit("getBusiness",v)
          this.$router.push({
            name:'xiangqing'
          })
    },
      paixu(v){
          this.order_by = v;
          this.xs1 = false;
          this.shangpu();
      },
    ht() {
      this.$router.back();
    },
    getT() {
      this.title = this.$route.query.title;
    },
    getT2(v) {
      this.title = v;
      this.xs = false;
      this.shangpu();
      // console.log(this.restaurant_category_ids);
    },
    getSP() {
      const api = "https://elm.cangdu.org/shopping/v2/restaurant/category";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        // console.log(res.data);
        this.spArr = res.data;
      });
    },
    add(v,b) {
      this.splbArr = [];
      for (var i = 0; i < v.length; i++) {
        this.splbArr.push(v[i].name);
      }
      this.restaurant_category_id=b;
    },
    shangpu() {
      const api =
        "https://elm.cangdu.org/shopping/restaurants?latitude=" +this.latitude + "&longitude=" +this.longitude+"&order_by="+this.order_by+"&restaurant_category_id="+this.restaurant_category_id;
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        // console.log(res.data);
        this.shangpuLB = res.data;
      });
    }
  }
};
</script>
<style scoped>
#header {
  position: relative;
  background-color: rgb(48, 144, 232);
  font-size: 0.16rem;
  color: white;
  padding: 0.07rem;
}
#header span {
  font-size: 0.2rem;
  /* font-weight:bold; */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.daohang {
  /* border: 1px solid red; */
  padding: 0.1rem;
  background-color: white;
  display: flex;
  justify-content: space-around;
}
.daohang li {
  padding: 0 0.2rem;
  font-size: 0.16rem;
}
.daohang li:nth-child(2) {
  border-left: 0.01rem solid darkgray;
  border-right: 0.01rem solid darkgray;
}
.class_1 {
  background-color: whitesmoke;
  height: 3.3rem;
  width: 3.75rem;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
}
.class_1 ul {
  width: 50%;
  height: 100%;
}
.class_1 ul:nth-child(2) {
  overflow-y: scroll;
  background-color: white;
  padding-left: 0.1rem;
  padding-right: 0.1rem;
}
.class_1 ul:nth-child(2)::-webkit-scrollbar {
  display: none;
}
.spcl {
  color: gray;
  font-size: 0.15rem;
  padding: 0.1rem;
  width: 1.7rem;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
}
.spcount span {
  padding: 0.02rem;
  font-size: 0.1rem;
  border-radius: 0.05rem;
  color: white;
  background-color: darkgray;
}
.splb_1 {
  border-bottom: 0.01rem solid grey;
  background-color: white;
  color: gray;
  font-size: 0.15rem;
  padding: 0.1rem;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
}
.class_2 {
  width: 100%;
  color: rgb(85, 84, 84);
  font-size: 0.18rem;
  padding: 0.2rem;
  background-color: whitesmoke;
}
.class_2 li {
  width: 100%;
  padding: 0.2rem;
  border-bottom: 0.01rem solid rgb(85, 84, 84);
  padding-left: 0;
}
.class_3 {
  position: relative;
  padding: 0.15rem;
  /* border: 1px solid red; */
  background-color: white;
}
.peisong {
  height: 0.25rem;
  position: relative;
  margin-top: 0.2rem;
  padding: 0.05rem;
  width: 0.9rem;
  border: 0.01rem solid grey;
  border-radius: 0.05rem;
}
.shuxing1 {
  font-size: 0.15rem;
  position: absolute;
  bottom: 0.1rem;
  left: 0.35rem;
}
.ps_1 {
  /* border: 1px solid red; */
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
}
.shuxing {
  position: absolute;
  left: 0.05rem;
  font-size: 0.18rem;
  padding: 0.03rem;
  border-radius: 0.05rem;
}
.ps_btn {
  /* width: 100%; */
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-around;
}
.btn_c {
  margin-top: 0.1rem;
  font-size: 0.2rem;
  width: 1.7rem;
}
.dh {
  width: 100%;
  position: fixed;
  top: 0rem;
  left: 0;
  z-index: 2;
}

/* 商家列表 */

#commmodity {
  /* border: 1px solid red; */
  /* padding-bottom: 1.5rem; */
  background-color: white;
  padding: 0.05rem;
  margin-top: 0.1rem;
  margin-top: 0.7rem;
}
.splogo {
  height: 100%;
}
.shangpuLB {
  position: relative;
  padding: 0.1rem;
  /* border: 1px solid red; */
  height: 0.8rem;
  border-bottom: 0.01rem solid darkgray;
}
.pinpai {
  border-radius: 0.03rem;
  padding: 0.03rem;
  position: absolute;
  top: 0.1rem;
  left: 1rem;
  color: black;
  background-color: orange;
}
.spname {
  color: black;
  font-size: 0.15rem;
  font-weight: bold;
  position: absolute;
  left: 1.4rem;
  top: 0.13rem;
}
.rate{
  /* border: 1px solid red; */
  /* width: 1.rem; */
  display: flex;
  justify-content: space-between;
 position: absolute;
 left: 1rem;
 bottom: 0.35rem;
}
.ys {
  font-size: 0.1rem;
  color: darkgray;
  position: absolute;
  left: 1rem;
  bottom: 0.25rem;
}
.promiseS {
  border-radius: 0.05rem;
  font-size: 0.1rem;
  margin-left: 0.02rem;
  border: 1px solid darkgray;
  padding: 0.02rem;
}
.promise {
  position: absolute;
  right: 0.02rem;
  top: 0.13rem;
}
.song {
  color: darkgray;
  font-size: 0.05rem;
  position: absolute;
  left: 1rem;
  bottom: 0.1rem;
}
.fn {
  color: white;
  border-radius: 0.05rem;
  font-size: 0.08rem;
  margin-left: 0.02rem;
  background-color: #3190e8;
  padding: 0.01rem;
}
.zs {
  color: #3190e8;
  border-radius: 0.05rem;
  font-size: 0.08rem;
  margin-left: 0.02rem;
  border: 0.01rem solid #3190e8;
  padding: 0.01rem;
}
.fengniao {
  position: absolute;
  right: 0.02rem;
  top: 0.45rem;
}
.distance {
  color: darkgray;
  border-radius: 0.05rem;
  font-size: 0.12rem;
  margin-left: 0.02rem;
  padding: 0.01rem;
}
.order_lead_time {
  color: #3190e8;
  border-radius: 0.05rem;
  font-size: 0.12rem;
  margin-left: 0.02rem;
  padding: 0.01rem;
}
.songtime {
  position: absolute;
  bottom: 0.1rem;
  right: 0.05rem;
}
</style>

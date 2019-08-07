<template>
  <!-- 我的优惠 -->
  <div id="wrap">
   
      <div id="top">
           <router-link to="/me">
         <img src="../../assets/back.png">
           </router-link>
  
    
        <p>我的优惠</p>
      </div>
    
    <div id="title1">
      <p style="margin-top:0.05rem;
      color: rgb(48, 144, 232);" >红包</p>
      <p style="margin-top:0.05rem;" @click="shopcoupon()">商家代金券</p>
    </div>
    <div id="title2">
      <span style="font-size:0.1rem;
      margin-left:0.1rem;
       color: #555; ">有</span>
      <span>{{this.$store.state.hongbaolength}}</span>
      <span style="font-size:0.1rem;
       color: #555;">个红包即将过期</span>
      <router-link style="color:rgb(48, 144, 232)" to="/redshuoming">
        <div id="tit2">
          <img src="../../assets/wenhao.png" alt="">
          <p>红包说明</p>
        </div>
      </router-link>
      <ul>
        <li :key="i" v-for="(v,i) in datas">
          <div id="center">
            <div id="centerleft">
              <p>￥</p>
              <p>{{v.amount.toFixed(1)}}</p>
              <p style="color:gray">{{v.description_map.sum_condition}}</p>
            </div>
            <div id="centercenter2">
              <p style="color: #555;" >{{v.name}}</p>
              <p style="color:gray">{{v.description_map.validity_periods}}</p>
              <p style="color:gray">{{v.description_map.phone}}</p>
            </div>
            <div id="centerright">
              <p>{{v.description_map.validity_delta}}</p>
            </div>
          </div>
        </li>
      </ul>
      <div id="xianpin">
        <p>限品类:快餐便当,特色菜系,小吃夜宵,甜品饮品,异国料理</p>
      </div>
    </div>
    <router-link style="color:gray" to="/historyhongbao">
    <div id="bottom2">
      <p>查看历史红包</p>
      <img src="../../assets/right.png" alt="">
    </div>
    </router-link>
    <div id="bottom">
      <!-- converthongbao -->
      <router-link  style="color: #555;" to="/converthongbao"><p>兑换红包</p></router-link>
      <router-link  style="color: #555;" to="/tuijian"><p>推荐有奖</p></router-link>
    </div>
    
    
  </div>
</template>
<script >
export default {
  name: "mydiscount",
  data() {
    return {
      datas: "",
      user_id: 1
    };
  },
  created() {
    this.datas = this.$store.state.detail;
    // this.getdata();
  },
  methods: {
      back(){
this.$router.back();
      },
    redpak() {
      this.$router.push({
        name: "preference"
      });
    },
    shopcoupon() {
      this.$router.push({
        name: "shopcoupon"
      });
    },

    
  }
};
</script>

<style scoped >
#wrap {
  width: 3.75rem;
  height: 100vh;
  position: relative;
  /* overflow: hidden; */
  
}
#top {
  width: 3.75rem;
  height: 0.55rem;
 background-color: rgb(48, 144, 232);
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
}
#top img {
  height: 0.25rem;
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#top p {
  font-size: 0.2rem;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#title1 {
  /* margin-top: 0.55rem; */
  padding-top: 0.55rem;
  width: 3.75rem;
  height: 0.45rem;
  background-color: white;
  font-size: 0.18rem;
  position: relative;
}
#title1 p:nth-child(1) {
  position: absolute;
  left: 0.5rem;
  top: 0.6rem;
  color: rgb(48, 144, 232);
  padding-bottom: 0.02rem;
  border-bottom: 0.03rem solid rgb(48, 144, 232);
}
#title1 p:nth-child(2) {
  position: absolute;
  right: 0.45rem;
  top: 0.6rem;
}
#title2 {
  width: 3.75rem;
  height: 0.35rem;
  line-height: 0.35rem;
  font-size: 0.15rem;
  position: relative;
}
#title2 span:nth-child(2) {
  color: red;
}
#tit2 {
  height: 0.35rem;
  line-height: 0.35rem;
  position: absolute;
  right: 0.25rem;
  top: 0;
}
#tit2 img:nth-child(1) {
  margin: 0.115rem 0 0 0.04rem;
  float: left;
  width: 0.15rem;
}
#tit2 p:nth-child(2) {
  font-size: 0.12rem;
  display: inline;
}
#center {
  background-color: white;
  width: 3.75rem;
  height: 0.85rem;
  border-top: 0.01rem solid red;
  display: flex;
  margin-top: 0.1rem;
}
#centerleft {
  width: 1rem;
  height: 0.85rem;
  position: relative;
}
#centerleft p:nth-child(1) {
  color: red;
  font-size: 0.2rem;
  position: absolute;
  left: 0.1rem;
  top: 0.2rem;
}
#centerleft p:nth-child(2) {
  color: red;
  font-size: 0.3rem;
  position: absolute;
  left: 0.28rem;
  top: 0.2rem;
}
#centerleft p:nth-child(3) {
  font-size: 0.1rem;
  position: absolute;
  left: 0.1rem;
  top: 0.5rem;
}
#centercenter2 {
  width: 2.2rem;
  position: relative;
}
#centercenter2 p:nth-child(1) {
  font-size:0.2rem;
  position: absolute;
  left: 0.1rem;
  top: 0.15rem;
}
#centercenter2 p:nth-child(2) {
  font-size: 0.1rem;
  position: absolute;
  left: 0.1rem;
  top: 0.35rem;
}
#centercenter2 p:nth-child(3) {
  font-size: 0.1rem;
  position: absolute;
  left: 0.1rem;
  top: 0.55rem;
}
#centerright {
  width: 0.75rem;
  position: relative;
}
#centerright p {
  font-size: 0.18rem;
  color: red;
  position: absolute;
  right: 0.1rem;
  top: 0.2rem;
}
#xianpin {
    color: gray;
  margin-top: 0.2rem;
  margin-left: 0.3rem;
  font-size: 1em;
}
#bottom2 p{
  position: absolute;
  left: 1.5rem;
  bottom: 1rem;
  font-size: 0.12rem;
}
#bottom2 img{

  width: 0.07rem;
  position: absolute;
  left: 2.34rem;
  bottom: 0.99rem;
}
#bottom{
  width: 3.75rem;
  height: 0.45rem;
  background-color: white;
  line-height: 0.45rem;
  font-size: 0.18rem;
  text-align: center;
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
}
#bottom p:nth-child(1){
  width: 1.85rem;
  height: 0.45rem;
  border: 0.01rem solid gainsboro;
  
}
#bottom p:nth-child(2){
  width: 1.85rem;
  height: 0.45rem;
  border: 0.01rem solid gainsboro;
}
</style>

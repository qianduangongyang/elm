<template>
  <div>
    <header>
      <router-link to="/search">
        <img src="../../assets/fangdajing.png">
      </router-link>
      <router-link to="/city" style="color:white">
        <span id="headSpan">{{nearbyadd}}</span>
      </router-link>
      <img v-if="sss" @click="wode()" class="dengluzhuce" src="../../assets/aaa.png" alt="" style="height:0.25rem">
      <span v-else @click="denglu()" class="dengluzhuce" style="font-size:0.16rem;color:white">登录/注册</span>
    </header>
    <div style="background-color:white">
      <swiper
        v-if="arr1.length>0"
        :options="swiperOption"
        ref="mySwiper"
        style="border-bottom:0.01rem solid darkgray;margin-top:0.45rem"
      >
        <!-- slides -->
        <swiper-slide>
          <ul class="lunbo">
            <li :key="i" v-for="(v,i) in arr1">
              <router-link :to="'/home2?title='+v.title" style="color:gray">
                <img :src="'https://fuss10.elemecdn.com/'+v.image_url" alt>
                <p>{{v.title}}</p>
              </router-link>
            </li>
          </ul>
        </swiper-slide>
        <swiper-slide>
          <ul class="lunbo">
            <li :key="i" v-for="(v,i) in arr2">
              <router-link :to="'/home2?title='+v.title" style="color:gray">
                <img :src="'https://fuss10.elemecdn.com/'+v.image_url" alt>
                <p>{{v.title}}</p>
              </router-link>
            </li>
          </ul>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
        <!-- <div class="swiper-button-next" slot="button-next"></div> -->
        <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
      </swiper>
    </div>
    <div id="commmodity">
      <p style="color:gray">
        <van-icon name="shop-o" />
        <span>附近商家</span>
      </p>
      <ul>
        <li :key="i" v-for="(v,i) in shangpuLB" class="shangpuLB" @click="getBus(v)">
            <img :src="'https://elm.cangdu.org/img/'+v.image_path" class="splogo">
            <span class="pinpai">品牌</span>
            <span class="spname">{{v.name}}</span>
            <div class="promise">
              <span class="promiseS" :key="j" v-for="(k,j) in v.supports" style="color:darkgrey">{{k.icon_name}}</span>
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
  <span class="distance">{{v.distance}} / </span>
<span class="order_lead_time">{{v.order_lead_time}}</span>
</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "hom",
  data() {
    return {
      sss:'',
      name: "",
      geohash:this.$store.state.jingwei,
      arr1: [],
      arr2: [],
      nearbyadd:"",
      latitude:this.$store.state.jing,
      longitude:this.$store.state.wei,
      shangpuLB:[],
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  created() {
    // console.log(this.jing+","+this.wei);
    this.recommend();
    this.nearby();
    this.shangpu();
    if (localStorage.username) {
      this.sss = true;
    }else{
      this.sss = false;
    }
  },
  methods: {
    denglu(){
         this.$router.push({
             name:'denglu'
           })
    },
    wode(){
           this.$router.push({
             name:'MY'
           })
    },
    getBus(v){
          this.$store.commit("getBusiness",v)
          this.$router.push({
            name:'xiangqing'
          })
    },
    nearby(){
      const api = "https://elm.cangdu.org/v2/pois/"+this.latitude+","+this.longitude;
      this.$http({
        url:api,
        method:"get"
      }).then(res => {
        // console.log(res.data)
        this.nearbyadd = res.data.address;
      })
    },
    recommend() {
      const api = "https://elm.cangdu.org/v2/index_entry";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        // console.log(res.data);
        for (var i = 0; i < res.data.length; i++) {
          if (i < 8) {
            this.arr1.push(res.data[i]);
          } else {
            this.arr2.push(res.data[i]);
          }
        }
      });
    },
    shangpu(){
      const api = "https://elm.cangdu.org/shopping/restaurants?latitude="+this.latitude+"&longitude="+this.longitude;
      this.$http({
        url:api,
        method:'get'
      }).then(res =>{
        // console.log(res.data)
        this.shangpuLB = res.data
      })
    }
  }
};
</script>
<style scoped>
header {
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 0.45rem;
  overflow: hidden;
  line-height: 0.45rem;
  /* text-align: center; */
  padding-left: 0.1rem;
  padding-right: 0.1rem;
  /* box-sizing: border-box;
  display: flex;
  justify-content: space-between; */
}
header img {
  height: 0.3rem;
  position: absolute;
  top: 0.08rem;
}

#headSpan {
  width: 40%;
  /* width: 1.5rem; */
  font-size: 0.16rem;
  /* font-weight:bold; */
  position: absolute;
  left: 50%;
  top: 50%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transform: translate(-50%, -50%);
}
.dengluzhuce{
  position: absolute;
  right: 0.3rem;
}
.lunbo {
  padding: 0.1rem;
  padding-bottom: 0.2rem;
  /* border: 1px solid red; */
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
}
.lunbo li {
  /* border: 1px solid red; */
  width: 23%;
  text-align: center;
}
.lunbo li img {
  /* border: 1px solid red; */
  width: 80%;
}
#commmodity{
  
  /* border: 1px solid red; */
   /* padding-bottom: 1.5rem; */
  background-color: white;
  padding: 0.05rem;
  margin-top: 0.1rem;
  margin-bottom: 0.5rem
}
.splogo{
  height: 100%
}
.shangpuLB{
  position: relative;
  padding: 0.1rem;
  /* border: 1px solid red; */
  height: 0.8rem;
  border-bottom: 0.01rem solid darkgray;
}
.pinpai{
  border-radius: 0.03rem;
  padding: 0.03rem;
  position: absolute;
  top:0.1rem;
  left: 1rem;
  color: black;
  background-color:orange;
}
.spname{
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
.ys{
  font-size: 0.1rem;
  color: darkgray;
  position: absolute;
  left: 1rem;
  bottom: 0.25rem;
}
.promiseS{
  border-radius: 0.05rem;
  font-size: 0.1rem;
  margin-left: 0.02rem;
  border: 1px solid darkgray;
  padding: 0.02rem;
}
.promise{
  position: absolute;
  right: 0.02rem;
  top: 0.13rem;
}
.song{
  color: darkgray;
  font-size: 0.05rem;
  position: absolute;
  left: 1rem;
  bottom: 0.1rem;
}
.fn{
  color: white;
  border-radius: 0.05rem;
  font-size: 0.08rem;
  margin-left: 0.02rem;
  background-color: #3190e8;
  padding: 0.01rem;
}
.zs{
  color: #3190e8;
  border-radius: 0.05rem;
  font-size: 0.08rem;
  margin-left: 0.02rem;
  border: 0.01rem solid #3190e8;
  padding: 0.01rem;
}
.fengniao{
  position: absolute;
  right: 0.02rem;
  top: 0.45rem;
}
.distance{
  color: darkgray;
  border-radius: 0.05rem;
  font-size: 0.12rem;
  margin-left: 0.02rem;
  padding: 0.01rem;
}
.order_lead_time{
  color: #3190e8;
  border-radius: 0.05rem;
  font-size: 0.12rem;
  margin-left: 0.02rem;
  padding: 0.01rem;
}
.songtime{
  position: absolute;
  bottom: 0.1rem;
  right: 0.05rem;
}
</style>

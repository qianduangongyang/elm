<template>
    <div id="wrap">

       <div id="header">
      <router-link to="/xiangqing"><img src="../../assets/back.png" style="width:0.3rem;"></router-link>
      <span>商家详情</span>
        </div>
        <div id="huodong">
        <p class="hd">活动与属性</p>
        <ul>
            <li :key="i" v-for="(v,i) in sjMsg.supports" class="baozhunpiao">
                <span :style="'background-color:#'+v.icon_color">{{v.icon_name}}</span>
                <span>{{v.description}}(app专享)</span>
            </li>
        </ul>
      </div>
      <div id="Secure">
          <router-link to="/safety" style="color:black"><p class="spjs"><span>食品监督安全公示</span><span>企业认证详情＞</span></p></router-link>
          <img src="../../assets/12.png" alt="" style="width:1.2rem">
          <p class="jieguo">监督检查结果：<span style="color:rgb(126,211,31)">良好</span></p>
          <p class="jieguotime">检查时间：</p>
      </div>
      <div id="sjMsg">
          <p class="hd">商家信息</p>
          <p class="xg">效果演示</p>
          <p class="xg" style="font-size:0.14rem">地址:{{sjMsg.address}}</p>
          <p class="xg" style="font-size:0.14rem">营业时间:[{{sjMsg.opening_hours[0]}}]</p>
          <p class="xg" @click="xianimg(true)"><span>营业执照</span><span>></span></p>
          <p class="xg" @click="xianimg(true)"><span>餐饮服务许可证</span><span>></span></p>
      </div>
      <div class="tu" @click="xianimg(false)" v-if="xiantu">
          <img src="../../assets/12.png" style="width:100%">
      </div>
    </div>
</template>
<script>
export default {
    name:'shangjiamsg',
    data() {
        return {
            sjMsg:[],
            xiantu:false
        }
    },
    created() {
        this.sjMsg = this.$store.state.business;
        // console.log(this.sjMsg)
    },
    methods: {
        xianimg(v){
            this.xiantu = v;
        }
    },
}
</script>
<style scoped>
#header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
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
#huodong{
    background-color: white;
    margin-top: 0.45rem;
    border-bottom: 0.02rem solid rgb(235, 235, 238);
}
.hd{
    font-size: 0.18rem;
    padding: 0.1rem;
    border-bottom: 0.01rem solid rgb(222, 222, 223);
}
.baozhunpiao{
    padding: 0.1rem;
}
.baozhunpiao span:nth-child(1){
    font-size: 0.15rem;
    border-radius: 0.05rem;
    padding: 0 0.03rem;
}
.baozhunpiao span:nth-child(2){
    font-size: 0.13rem;
    border-radius: 0.05rem;
    color: gray;
    margin-left: 0.05rem;
}
#Secure{
    position: relative;
    background-color: white;
    margin-top: 0.1rem;
    border-bottom: 0.02rem solid rgb(235, 235, 238);
}
.spjs{
    border-bottom: 0.01rem solid rgb(235, 235, 238);
    display: flex;
    justify-content: space-between;
    font-size: 0.18rem;
    padding: 0.1rem;
}
.spjs span:nth-child(2){
    color: gray;
}
.jieguo{
 position: absolute;
 font-size: 0.13rem;
 left: 1.3rem;
 top: 0.7rem;
}
.jieguotime{
 position: absolute;
 font-size: 0.13rem;
 left: 1.3rem;
 top: 0.9rem;
}
#sjMsg{
    background-color: white;
    margin-top: 0.1rem;
    border-bottom: 0.02rem solid rgb(235, 235, 238);
}
.xg{
    font-size: 0.16rem;
    color: gray;
    padding: 0.15rem 0.1rem;
     border-bottom: 0.01rem solid rgb(219, 219, 219);
     display: flex;
     justify-content: space-between;
}
.tu{
    z-index: 1;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    left: 0;
    width: 3.75rem;
    top: 0
}
</style>

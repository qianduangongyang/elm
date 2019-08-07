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
      <p @click="redpak()">红包</p>
      <p @click="shopcoupon()">商家代金券</p>
    </div>
    <div id="title2">
        <router-link style="color:rgb(48, 144, 232)" to="/shangjiadai">
          <div id="tit2">
          <img id="a1" src="../../assets/wenhao.png" alt="">
            <span id="b1">商家代金券说明</span>
        </div>
        </router-link>
        <div id="content">
            <img src="../../assets/wuwuwu.png" alt="">
            <p>无法使用代金券</p>
            <p>非客户端或客户端版本过低</p>
            <router-link to="/xiazai">
                <button style="outline: none;">下载或升级客户端</button>
            </router-link>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "shopcoupon",
  data() {
    return {};
  },
  methods: {
    redpak(){
      this.$router.push({
        name:"mydiscount"
      })
    },
    shopcoupon(){
      this.$router.push({
        name:"shopcoupon"
      })
    },
    //返回上一级
    back() {
      this.$router.back();
    }
  }
};
</script>

<style scoped >
#wrap {
  width: 3.75rem;
  position: relative;
}
#top {
  width: 100%;
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
#title1{
  margin-top: 0.55rem;
  width: 3.75rem;
  height: 0.45rem;
  background-color: white;
  font-size: 0.18rem;
  position: relative;
}
#title1 p:nth-child(1){
  position: absolute;
  left: 0.55rem;
  top: 0.1rem; 
}
#title1 p:nth-child(2){
  position: absolute;
  right: 0.55rem;
  top: 0.12rem;
  color: rgb(48, 144, 232);
  padding-bottom: 0.02rem;
  border-bottom: 0.03rem solid rgb(48, 144, 232);
}
#title2{
    width: 3.75rem;
    height: 0.35rem;
    line-height: 0.35rem;
    font-size: 0.15rem;
    position: relative;
}
#tit2{
    height: 0.35rem;
    line-height: 0.35rem;
    position: absolute;
    right: 0.25rem;
    top: 0.08rem;
}
#a1{
    margin-right: 0.02rem;
    width: 0.17rem;
    color: white;
    background-color: rgb(48, 144, 232) ;
}
#b1{
  float: right;
  /* margin-top: 0.2rem; */
    font-size: 0.12rem;
    /* display: inline; */
}
#content {
  /* overflow: hidden; */
    position: relative;
}
#content img{
    width: 0.65rem;
    position: absolute;
    left: 1.45rem;
    top: 1.8rem;
}
#content p:nth-child(2){
    font-size: 0.2rem;
    position: absolute;
    left: 1.1rem;
    top: 2.55rem;
}
#content p:nth-child(3){
    font-size: 0.12rem;
    color: gray;
    position: absolute;
    left: 1.05rem;
    top: 2.82rem;
}
#content button{
  outline: none;
    /* width: 1.5rem; */
    height: 0.45rem;
    background-color: rgb(86, 209, 118);
    color: white;
    font-size: 0.15rem;
    position: absolute;
    left: 1.05rem;
    top: 3.2rem;
    border-radius: 0.08rem;
}
</style>

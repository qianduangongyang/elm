
<template>
    <div>
        <div id="wdye">
       <img @click="back()" id="zj"  src="../../assets/back.png" alt="">
        <p style="margin-top:0.12rem">我的积分</p>
        <div id="dqye">
         <p style="color:gray">当前积分</p>
         <router-link to="/jifenshuoming">
         <img style="height:0.2rem" id="tp" src="../../assets/jifenshuoming.jpg" alt="">
         </router-link>
        <p>0</p>
        <p>分</p>
        <p @click="nnn()" id="tx">积分兑换商品</p>
         </div>
        </div>
        <div id="jymx">
         <p>最近30天积分记录</p>
         <img src="../../assets/wu.png" alt="">
         <p>最近30天无积分记录</p>
         <p>快去下单赚取大量积分吧</p>
        </div>
         <div  class="shouAPP animated heartBeat 0.4s" v-if="kkk">
      <img src="../../assets/pipe.png" alt="">
      <p>快去下单赚取大量积分吧</p>
      <button style="outline: none;" @click="nnn()">确认</button>
    </div>
    </div>
</template>
<script>
export default {
    name:"mypoints",
    data() {
        return {
            kkk:false
        }
    },
    methods: {
        back(){
            this.$router.back();
        },
        nnn(){
            this.kkk =!this.kkk
        }
      
    },
}
</script>
<style scoped>
.shouAPP {
    border-radius: 0.05rem;
  z-index: 55555555;
  text-align: center;
  position: absolute;
  background-color: white;
  width: 3rem;
  /* border:0.001rem solid red; */
  margin: -3.2rem 0 0 0.35rem;
}
.shouAPP img {
  margin: 0.2rem 0 0 0.1rem;
  width: 1rem;
}
.shouAPP p {
  margin: 0.1rem 0 0 0.1rem;
}
.shouAPP button {
  outline: none;
  /* outline: none; */
  height: 0.5rem;
  font-size: 0.21rem;
  color: white;
  width: 3rem;
  margin: 0.15rem 0 0rem 0rem;
  background-color: rgb(76, 217, 100);
  border-radius: 0.12rem;
}
#wdye{
     background-color: rgb(49, 144, 232);
    overflow: hidden;
    height: 2.2rem;
}
#zj{
height: 0.2rem;
margin: 0.1rem 0 0 0.08rem;
float: left;
}
#wdye>p:nth-child(2){
    color: white;
    font-size: 0.2rem;
    float: left;
    margin-left: 1rem
}
#dqye{
    background-color: white;
    height: 1.5rem;
    width: 3.55rem;
    overflow: hidden;
    margin-left: 0.1rem;
    margin-top: 0.45rem;
    border-radius: 0.02rem;
}
#dqye>p{
float: left;
margin: 0.1rem;
}
#tp{
    float: right;
    margin: 0.1rem;
}
#dqye>p:nth-child(3){
   color: black;
    font-size: 0.35rem;
    float: left;
     margin-left: -0.7rem;
     margin-top: 0.35rem;
}
#dqye>p:nth-child(4){
    color: black;
    font-size: 0.15rem;
    float: left;
   margin-left: -0.45rem;
     margin-top: 0.51rem;
}
#tx{
    font-size: 0.22rem;
    background-color:rgb(254, 109, 71);
    float: left;
    color: white;
    width: 90%;
    border-radius: 0.05rem;
    text-align: center;
    height: 0.45rem;
    line-height: 0.45rem;
    padding-left:0.1rem; 
    margin-top: 1rem;
}
#jymx>p{
color: gray;
margin: 0.1rem;
}
#jymx>img:nth-child(2){
    text-align: center;
    width: 1rem;
    margin:0.5rem 0 0 1.5rem;
}
#jymx>p:nth-child(3){
    font-size: 0.22rem;
    text-align: center;
    /* width: 1rem; */
    margin:0.17rem 0 0 0.1rem;
}
#jymx>p:nth-child(4){
    /* font-size: 0.22rem; */
    text-align: center;
    /* width: 1rem; */
    margin:0.17rem 0 0 0.1rem;
}
</style>

<template>
    <div>
        <div id="wdye">
       <img @click="back()" id="zj"  src="../../assets/back.png" alt="">
        <p style="margin-top:0.12rem">我的余额</p>
        <div id="dqye">
         <p style="color:gray">当前余额</p>
         <router-link to="/yueshuoming">
         <img id="tp" src="../../assets/yueshuoming.png" alt="">
         </router-link>
        <p>0.00</p>
        <p>元</p>
        <p id="tx">提现</p>
         </div>
        </div>
        <div id="jymx">
         <p>交易明细</p>
         <img src="../../assets/wu.png" alt="">
         <p>暂无明细记录</p>
        </div>
    </div>
</template>
<script>
export default {
    name:"mybalance",
    data() {
        return {
            
        }
    },
    methods: {
        back(){
            this.$router.back();
        }
      
    },
}
</script>
<style scoped>
#wdye{
     background-color: rgb(49, 144, 232);
    overflow: hidden;
    height: 2.2rem;
}
#zj{
height: 0.2rem;
/* padding: 0.1rem; */
margin: 0.1rem 0 0 0.08rem;
float: left;
}
#wdye>p:nth-child(2){
    color: white;
    font-size: 0.2rem;
    float: left;
    margin-left: 1.1rem
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
     margin-left: -0.75rem;
     margin-top: 0.35rem;
}
#dqye>p:nth-child(4){
    color: black;
    font-size: 0.15rem;
    float: left;
   margin-left: -0.03rem;
     margin-top: 0.51rem;
}
#tx{
    font-size: 0.22rem;
    background-color:rgb(204, 204, 204);
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
    width: 1rem;
    margin:0.5rem 0 0 1.5rem;
}
#jymx>p:nth-child(3){
    width: 1rem;
    margin:0.15rem 0 0 1.5rem;
}
</style>
<template>
  <div style="overflow:hidden" id="wrap">
    <div id="top" @click="back()">
      <img src="../../assets/back.png" alt="">
      <p>我的优惠</p>
    </div>
    <div style="color:gray" id="tex1">
        尊敬的用户，随着会员体系逐渐完善，自2016年10月10日起，饿了么会员权益将做如下优化： 购卡后31天内，累积享有30单减免配送费服务（每日最多3单，每单最高减免4元）。 注：已购买的会员服务不受影响，当前会员服务失效前无法购买新卡。
    </div>
    <div id="tex2">
        <p class="tit">Q1: 特权介绍</p>
        <p style="color:gray;
        margin-top:0.15rem">身份标识：饿了么会员服务有效期内，享有专属皇冠标识。</p>
        <p style="color:gray;margin-top:0.1rem">减免配送费： 饿了么会员卡自绑定账户之日起31天内，在「蜂鸟专送」标识商家下单，享有30次减免配送费特权，每日最多减免3单，每单最高可减4元。</p>
        <p style="color:gray">更多特权，敬请期待！</p>
    </div>
    <div id="tex3">
         <p class="tit">Q2: 资费介绍</p>
         <p style="color:gray;margin-top:0.15rem">饿了么会员卡：20元</p>
    </div>
    <div id="tex4">
         <p class="tit">Q3: 使用说明</p>
         <p style="color:gray;margin-top:0.15rem">当用户满足以下任一条件，会员服务自动失效：</p>
         <div id="content">
             <p style="color:gray">自绑定之日起超过31天；</p>
         <p style="color:gray">在31天内累计使用减免配送费的蜂鸟订单数量达到30单；</p>
         </div>
    </div>
    <div id="tex5">
         <p class="tit">Q4: 购卡说明</p>
         <p style="color:gray;margin-top:0.15rem">在线购买：饿了么App>我的>饿了么会员卡</p>
    </div>
    <div id="tex6">
         <p class="tit">Q5: 温馨提示</p>
         <p style="color:gray;margin-top:0.15rem">用户在当前会员服务失效前，无法购买新卡。</p>
         <p style="color:gray;margin-top:0.1rem">请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "youhui",
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
#wrap {
  width: 3.75rem;
  position: relative;
}
#top {
  width: 100%;
  height: 0.55rem;
  background-color: rgb(49, 144, 232);
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
#tex1{
    margin-top: 0.65rem;
    width: 3rem;
    font-size: 0.15rem;
    margin-left: 0.375rem;
}
.tit{
    font-size: 0.18rem;
    font-weight: bold;
}
#tex2,#tex3,#tex4,#tex5,#tex6{
    width: 3.55rem;
    margin-left: 0.1rem;
    font-size: 0.15rem;
    margin-top: 0.12rem;
}
#tex2 p:nth-child(2),#tex2 p:nth-child(3),#tex2 p:nth-child(4){
    margin-top: 0.05rem;
}
#content{
     width: 3.1rem;
    margin-left: 0.54rem;
    font-size: 0.15rem;
    margin-top: 0.12rem;
}
</style>

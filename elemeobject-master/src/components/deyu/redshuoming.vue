<template>
  <div>
    <header>
      <img @click="back()" src="../../assets/back.png" alt>
      <p>红包说明</p>
    </header>
    <div class="center">
      <p class="a1">Q1:怎么获得红包?</p>
      <p class="b1">通过邀请好友获得</p>
      <p class="b1">在下单返红包的商家下单获得</p>
      <p class="b1">抢微信朋友分享的红包获得</p>
      <p class="a1">Q2:红包可以做什么?</p>
       <p class="b1">可以抵扣在线支付时的实际支付金额</p>
         <p class="a1">Q3: 红包的门槛金额按照什么金额计算？</p>
         <p class="b1">红包的的门槛金额按照（选购菜品折后价＋餐盒费）的金额作为计算门槛，即购物车显示的金额（7.3以上版本）。假设红包满30可用，只要选购的菜品现价（折后价）＋餐盒费超过30，就可以使用红包。</p>
          <p class="a1">Q4: 一个红包能拆开多次使用吗？</p>
          <p class="b1">不能，一个红包只能一次性使用，不能分开使用。</p>
            <p class="a1">Q5: 下单的时候使用了红包，但是后来订单取消了，红包还会返还吗？</p>
            <p class="b1">会的，订单无效后红包会自动返还到您的账户里。</p>
              <p class="a1">Q6: 红包兑换码怎样兑换成红包，怎样查看红包？</p>
     <p class="b1">在个人中心 > 我的红包 > 兑换红包，输入兑换码进行兑换。</p>
 <p class="a1">Q7: 邀请好友了，为什么没获得红包？</p>
 <p class="b1">先检查下您是否在同一设备上进行的邀请？或者被邀请人是否通过您发给对方的链接进行注册？而非自己复制链接注册的。同一设备上邀请或没有按照点击发送的链接邀请都是无效邀请。如果您是正常邀请没获得红包，可以致电客服进行查实。</p>
 <p class="a1">Q8: 预订早餐、预订午餐的红包怎么使用？在哪里查询？</p>
 <p class="b1">预订早餐、预订午餐的红包暂时不支持直接点外卖使用，并且当前点外卖的红包也暂时不支持在预订早餐、预订午餐时使用。</p>
  <p class="b1">预订早餐、预订午餐的红包从APP首页点击“预订早餐”按钮进入后在右上角的个人中心中查找预订早餐、预订午餐的红包。</p>
  <p class="a1">Q9: 互斥红包怎么使用？</p>
 <p class="b1">互斥红包不与其他优惠活动（包含但不限于：新用户专享、满X元减X元、满X元赠XX）同时使用。</p>
 <p class="a1">Q10: 返红包活动， 红包领取规则是什么?</p>
 <p class="b1">同一个手机号一天限领取三个。</p>
  <p class="b1">同一注册用户一天限领取三个。</p>
   <p class="b1">注册用户红包直接发送至用户账户里。</p>
  <p class="b1">非注册用户红包以兑换码短信的形式发送至用户手机，注册后凭兑换码兑换即可。</p>
   <p class="b1">红包的使用周期为1周，自红包发放的第2天开始计算。</p>
  <p class="b1">同一个手机号一天最多使用两个红包。</p>
   <p class="b1">未收到红包短信的用户注意查看手机里的拦截短信。</p>
  <p class="b1">有任何问题请拨打客服电话：10105757。</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "redshuoming",
  data() {
      return {
          
      }
  },
    methods: {
        back(){
            this.$router.back();
        }
      
    },
  };
</script>
<style scoped>
header{
  width: 100%;
  height: 0.55rem;
  background-color: rgb(48, 144, 232);
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
}
header img {
  height: 0.25rem;
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translate(-50%, -50%);
}
header p{
  font-size: 0.2rem;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.center{
    margin: 0.7rem 0 0 0.1rem;
}
.a1{
    font-size: 0.21rem;
    margin: 0.1rem 0 0.15rem 0;
}
.b1{
    color: grey;
    font-size: 0.15rem;
    margin: 0.1rem 0 0.1rem 0;
    }
</style>

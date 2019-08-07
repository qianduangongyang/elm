<template>
  <div id="wrap">
    <div id="top" @click="back()">
      <img src="../../assets/back.png">
      <p>兑换会员</p>
    </div>
    
    <div id="member">
      <p style="color:gray">成功兑换后将关联到当前账户:<span style="margin-left:0.1rem;
      color:black">{{yonghu}}</span></p>
    </div>
    <input @input="che()" maxlength="10" v-model="kahao" style="border-bottom:0.01rem solid gray"  class="inp" type="text" placeholder="请输入10位卡号">
    <input @input="che()" maxlength="6" class="inp" v-model="kami" type="text" placeholder="请输入6位卡密">
    <!-- 兑换按钮 -->
    <p @click="dianji2()" :style="{backgroundColor:color1}" id="exchange">兑换</p>
    <div class="zanbu animated heartBeat 0.4s" v-if="dianji">
      <img src="../../assets/pipe.png" alt>
      <p>暂不开放支付功能</p>
      <button style="backgroundColor: rgb(76,217,100);"  @click="dianji2">确认</button>
    </div>
    <div>
        <p id="prompt">——温馨提示——</p>
        <div id="bottex">
        <p>新兑换的会员服务，权益以「会员说明」为准。</p>
        <p>月卡：30次减免配送费。</p>
        <p>季卡：90次减免配送费。</p>
        <p>年卡：360次减免配送费。</p>
        <p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "duihuanvip",
  data() {
    return {
      yonghu:"",
      dianji:false,
      kahao:"",
      kami:"",
      color1:"rgb(204,204,204)"
    }
  },
  created() {
    this.yonghu = localStorage.username;
  },
  methods: {
    che(){
      if(/^[0-9]{10}$/.test(this.kahao)&&/^[0-9]{6}$/.test(this.kami)){
        this.color1="rgb(76,217,100)"
      }else{
        this.color1="rgb(204,204,204)"
      }
    },
    back() {
      this.$router.back();
    },
    dianji2(){
       if(/^[0-9]{10}$/.test(this.kahao)&&/^[0-9]{6}$/.test(this.kami)){
 this.dianji =! this.dianji
       }
     
    }

  }
};
</script>
<style scoped>
.zanbu {
  z-index: 5555;
  text-align: center;
  position: absolute;
  background-color: white;
  width: 3rem;
  /* border:0.001rem solid red; */
  margin: -0.7rem 0 0 0.35rem;
}
.zanbu img {
  z-index: 5555;
  margin: 0.2rem 0 0 0.1rem;
  width: 1rem;
}
.zanbu p {
  z-index: 5555;
  margin: 0.1rem 0 0 0.1rem;
}
.zanbu button {
  outline: none;
  z-index: 5555;
  height: 0.5rem;
  font-size: 0.21rem;
  color: white;
  width: 3rem;
  margin: 0.15rem 0 0rem 0rem;
  /* background-color: rgb(76, 217, 100); */
  border-radius: 0.12rem;
}
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
#member {
  margin-top: 0.56rem;
  height: 0.45rem;
  font-size: 0.15rem;
  padding-left: 0.1rem;
  line-height: 0.45rem;
}
.inp{
    text-indent: 1em;
    width: 3.7rem;
    height: 0.45rem;
    font-size: 0.15rem;
}
#exchange{
    width: 3.45rem;
    height: 0.4rem;
    background-color:rgb(204, 204, 204);
    color: white;
    font-size: 0.2rem;
    text-align: center;
    line-height: 0.4rem;
    margin-top: 0.2rem;
    margin-left: 0.15rem;
}
#prompt{
    font-size: 0.18rem;
    margin-left: 1.25rem;
    margin-top: 0.25rem;
    color: grey;
}
#bottex p{
    font-size: 0.12rem;
    margin-left: 0.45rem;
    margin-top: 0.04rem;
    color: grey;
}
</style>

<template>
  <div id="wrap">
    <div id="top" @click="back()">
      <img src="../../assets/back.png" alt>
      <p>在线支付</p>
    </div>
    <!-- 支付倒计时 -->
    <div id="pay">
      <p>支付剩余时间</p>
      <!-- 倒计时 -->
      <p>00:{{minute}}:{{second}}</p>
    </div>
    <div id="tex1">选择支付方式</div>
    <div class="icon">
      <!-- <img src="../../assets/dianl.png" alt=""> -->
      <img src="../../assets/zhifubao.png" alt>
      <span>支付宝</span>
      <img @click="ADD()" :src="srcB" alt>
      <!-- <img src="../../static/dianl.png" alt=""> -->
      <!-- <img src="../../static/dianliang.png" alt=""> -->
    </div>
    <div class="icon">
      <img src="../../assets/weixin.png" alt>
      <span>微信</span>
      <img @click="APP()" :src="srcA" alt>
    </div>
    <div @click="nnn()" id="confirm">确认支付</div>
    <div class="shouAPP animated heartBeat 0.4s" v-if="kkk">
      <img src="../../assets/pipe.png" alt>
      <p>当前环境无法支付,请打开官方APP进行付款</p>
      <button style="outline: none;" @click="nnn1()">确认</button>
    </div>
    <div class="zanbu animated heartBeat 0.4s" v-if="dianji">
      <img src="../../assets/pipe.png" alt>
      <p>暂不开放支付功能</p>
      <button style="outline: none;" @click="dianji2">确认</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "zhifu",
  data() {
    return {
      minutes: 15,
      seconds: 0,
      srcA: require("../../assets/dianl.png"),
      srcB: require("../../assets/dianliang.png"),
      kkk: false,
      dianji:true,
    };
  },
  mounted() {
    this.add();
  },
  methods: {
    dianji2(){
    this.dianji = ! this.dianji
    },
    nnn() {
      this.kkk = !this.kkk;
      if (this.kkk == true) {
        return;
      }
    },
    nnn1(){
       this.$router.push({
          name: "order"
        });
    },

    ADD() {
      (this.srcB = require("../../assets/dianliang.png")),
        (this.srcA = require("../../assets/dianl.png"));
    },
    APP() {
      (this.srcB = require("../../assets/dianl.png")),
        (this.srcA = require("../../assets/dianliang.png"));
    },
    // 倒计时
    num: function(n) {
      return n < 10 ? "0" + n : "" + n;
    },
    add: function() {
      var _this = this;
      var time = window.setInterval(function() {
        if (_this.seconds === 0 && _this.minutes !== 0) {
          _this.seconds = 59;
          _this.minutes -= 1;
        } else if (_this.minutes === 0 && _this.seconds === 0) {
          _this.seconds = 0;
          window.clearInterval(time);
        } else {
          _this.seconds -= 1;
        }
      }, 1000);
    },
    back() {
      this.$router.back();
    }
  },
  watch: {
    second: {
      handler(newVal) {
        this.num(newVal);
      }
    },
    minute: {
      handler(newVal) {
        this.num(newVal);
      }
    }
  },
  computed: {
    second: function() {
      return this.num(this.seconds);
    },
    minute: function() {
      return this.num(this.minutes);
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
  margin: -3.2rem 0 0 0.35rem;
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
  z-index: 5555;
  height: 0.5rem;
  font-size: 0.21rem;
  color: white;
  width: 3rem;
  margin: 0.15rem 0 0rem 0rem;
  background-color: rgb(76, 217, 100);
  border-radius: 0.12rem;
}
.shouAPP {
  z-index: 55555555555;
  text-align: center;
  position: absolute;
  background-color: white;
  width: 3rem;
  border-radius: 0.08rem;
  margin: -3.2rem 0 0 0.32rem;
}
.shouAPP img {
  z-index: 55555555555;
  margin: 0.2rem 0 0 0.1rem;
  width: 1rem;
}
.shouAPP p {
  z-index: 55555555555;
  margin: 0.1rem 0 0 0.1rem;
}
.shouAPP button {
  z-index: 55555555555;
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
#pay {
  height: 1.35rem;
  background-color: white;
  margin-top: 0.58rem;
  font-size: 0.25rem;
  position: relative;
}
#pay p:nth-child(1) {
  font-size: 0.18rem;
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);
}
#pay p:nth-child(2) {
  font-size: 0.38rem;
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
}
#tex1 {
  height: 0.45rem;
  font-size: 0.18rem;
  padding-left: 0.2rem;
  padding-top: 0.18rem;
}
.icon {
  height: 0.85rem;
  background-color: white;
  position: relative;
  border: 0.01rem solid gainsboro;
}
.icon img:nth-child(1) {
  width: 0.5rem;
  position: absolute;
  left: 0.15rem;
  top: 0.2rem;
}
.icon span:nth-child(2) {
  font-size: 0.2rem;
  position: absolute;
  left: 0.7rem;
  top: 0.28rem;
}
.icon img:nth-child(3) {
  z-index: 5;
  height: 0.35rem;
  width: 0.35rem;
  position: absolute;
  right: 0.2rem;
  top: 0.28rem;
}
#confirm {
  border-radius: 0.08rem;
  margin: 0.25rem 0 0 0.2rem;
  width: 3.4rem;
  line-height: 0.45rem;
  height: 0.45rem;
  background-color: rgb(76, 217, 100);
  color: white;
  font-size: 0.2rem;
  text-align: center;
}
</style>

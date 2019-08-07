<template>
  <div  id="wrap">
    <div id="top" @click="back()">
      <img src="../../assets/back.png" alt="">
      <p>兑换红包</p>
    </div>
    <div id="wrap1">
      <input @input="che()" maxlength="6" v-model="exchange_code" placeholder="请输入兑换码" type="text">
      <br>
      <div id="captcha">
        <input @input="che()" maxlength="4" v-model="codeNumber" placeholder="验证码" type="text">
        <img :src="code" alt>
        <div id="text">
          <p>看不清</p>
          <p @click="getCode()">换一张</p>
        </div>
      </div>
    </div>
    <button @click="login()" :style="{backgroundColor:color1}">兑换</button>
    <div class="frame animated heartBeat 0.4s" v-show="outshow1">
      <img src="../../assets/pipe.png" alt>
      <p>无效的兑换码</p>
      <p @click="falsetool1()">确认</p>
    </div>
    
  </div>
</template>
<script>
// import { mapState } from "vuex";
export default {
  name: "converthongbao",
  data() {
    return {
      user_id:"",
      code: "", //存储验证码base64图片
      exchange_code: "",
      codeNumber: "" ,//存储验证码输入框的值
      outshow1:false,
      color1:"rgb(204,204,204)",
      // a:""
    };
  },
  //创建完成之后未被挂载
  created() {
    //首先，获取验证码
    this.getCode();
    this.getname();
  },
  methods: {
  che(){
      if(/^[0-9]{6}$/.test(this.exchange_code)&&/^[0-9]{4}$/.test(this.codeNumber)){
        this.color1="rgb(76,217,100)"
        // this.login();
        
      }else{
        this.color1="rgb(204,204,204)"
        // this.hong=true
      }
    },
   getname() {
      this.user_id=this.$store.state.username;
      return ;
    },
    falsetool1() {
      this.outshow1 = false;
    },
    getCode() {
      const api = "https://elm.cangdu.org/v1/captchas";
      this.$http({
        url: api,
        method: "post",
        //用于表示用户代理是否应该在跨域请求的情况下从其它域发送cookies --- 不使用缓存数据
        withCredentials: true
      }).then(res => {
        // console.log("验证码数据");
        // console.log(res);
        this.code = res.data.code;
      });
    },
    login(){
       if(/^[0-9]{6}$/.test(this.exchange_code)&&/^[0-9]{4}$/.test(this.codeNumber)){
          this.outshow1 = true;
        }
      this.$store.commit("getname", this.exchange_code);
      const api =
        "https://elm.cangdu.org/v1/users/" + this.user_id + "/hongbao/exchange";
      this.$http({
        url: api,
        method: "post",
        withCredentials: true,
        data: {
          user_id: this.user_id,
          exchange_code: this.exchange_code,
          captcha_code: this.codeNumber
        }
      }).then(res => {

      });
    },
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
  background-color:rgb(48, 144, 232);
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
#wrap1 {
  margin-top: 0.75rem;
  text-align: center;
}
#wrap1 input {
    border-radius: 0.09em;
  width: 3.55rem;
  height: 0.45rem;
  font-size: 0.2rem;
}
#captcha {
    border-radius: 0.08rem;
    margin: 0.1rem 0 0.2rem 0.08rem;
  width: 3.55rem;
  height: 0.45rem;
  background-color: white;
  position: relative;
}
#captcha img {
  position: absolute;
  right: 15%;
  top: 20%;
}
#text {
  position: absolute;
  right: 2%;
  top: 5%;
  font-size: 0.15rem;
}
#text p:nth-child(2) {
  margin-top: 0.05rem;
  color: rgb(48, 144, 232);
}
#text2 {
  font-size: 0.15rem;
  color: red;
}
#text2 p {
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
}
#wrap > button {
  outline: none;
    margin-left: 0.1rem;
    color: white;
  font-size: 0.15rem;
  width: 3.45rem;
  height: 0.45rem;
  border-radius: 0.1rem;
  /* background-color: ; */
}

.frame{
  border-radius: 0.08rem;
  width: 2.75rem;
  height: 2rem;
  background-color: white;
  /* border:0.01rem solid gray; */
  position: absolute;
  left: 0.5rem;
  top: 1.2rem;
  /* animation: jello 100s; */
}
.frame img{
  width: 1rem;
  position: absolute;
  left: 0.85rem;
  top: 0.05rem;
}
.frame p:nth-child(2) {
  font-size: 0.2rem;
  position: absolute;
  left: 0.7rem;
  top: 1.2rem;
}
.frame p:nth-child(3) {
  width: 2.75rem;
  height: 0.45rem;
  background-color: rgb(76,217,100);
  color: white;
  text-align: center;
  line-height: 0.45rem;
  font-size: 0.2rem;
  position: absolute;
  left: 0;
  bottom: 0;
  border-radius: 0.08rem;
}
</style>

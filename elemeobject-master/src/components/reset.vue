<template>
  <div id="wrap">
    <header>
      
        <img id="back" @click="shang()" src="../assets/back.png" alt>
      
      <p>重置密码</p>
    </header>
    <div id="wrap1">
      <input v-model="username" placeholder="账号" type="text">
      <br>
       <input v-model="oldpassWord" placeholder="旧密码" type="text">
      <br>
      <input v-model="newpassword" placeholder="请输入密码" type="text">
      <br>
       <input v-model="confirmpassword" placeholder="请确认密码" type="text">
      <br>
      <div id="captcha">
        <input v-model="captcha_code" placeholder="验证码" type="text">
        <img :src="code" alt>
        <div id="text">
          <p>看不清</p>
          <p @click="getCode()">换一张</p>
        </div>
      </div>
    </div>
    <button style="outline: none;" @click="reset()">确认修改</button>

  </div>
</template>
<script>
export default {
  name: "reset",
  data() {
    return {
      code: "", //存储验证码base64图片
      username: "",
      oldpassWord:"",
      newpassword:"",
      confirmpassword:"",
      captcha_code: "" //存储验证码输入框的值
    };
  },
  created() {
    //首先，获取验证码
    this.getCode();
  },
  methods: {
     shang(){
            //   返回上一个历史记录
                //   this.$router.go(-1);
                // 或者
                  this.$router.back();
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
    reset() {
      const api = "https://elm.cangdu.org/v2/changepassword";
      this.$http({
        url: api,
        method: "post",
        withCredentials: true,
        data: {
          username: this.username,
          oldpassWord: this.oldpassWord,
          newpassword:this.newpassword,
          confirmpassword:this.confirmpassword,
          captcha_code: this.captcha_code
        }
      }).then(res => {
        // console.log("login数据");
        // console.log(res);
        if (res.data.message) {
          alert(res.data.message); //登陆失败
        } 
        else {
          //登陆成功，跳转到首页,编程式路由跳转，传值query或者params传值
          this.$router.push({
            name: "MY",
             query:{
               username:this.username,
               newpassword:this.newpassword,
             }
          });
        }
      });
    }
  }
};
</script>
<style scoped>
header {
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
header p {
  font-size: 0.2rem;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#wrap {
  /* background-color: gainsboro; */
  overflow: hidden;
}
#back{
  /* height: 0.2rem ; */
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#wrap1 {
  margin-top: 0.7rem;
}
#wrap1 input {
  width: 3.75rem;
  height: 0.45rem;
  font-size: 0.2rem;
   text-indent: 1em;
   border-bottom: 0.01rem solid grey;
}
#captcha {
  width: 3.75rem;
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
  margin-top: 0.03rem;
  color: rgb(48, 144, 232);
}

#wrap > button {
  outline: none;
    border-radius: 0.1rem;
    margin-left: 0.05rem;
  font-size: 0.15rem;
  margin-top: 0.16rem;
  width: 3.6rem;
  height: 0.45rem;
  color:white;
  background-color: rgb(76,217, 100);
}
</style>

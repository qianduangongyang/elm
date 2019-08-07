<template>
  <div>
    <div id="header">
      <router-link to="/city"><img
        style="width:0.4rem;
        height:0.3rem;
       float: left;
       margin-top:0.06rem;"
        src="../assets/back.png"
        alt
      ></router-link>
      <p>密码登录</p>
    </div>
    <div  id="xinxi">
       <input id="inp1" v-model="username" placeholder="账号" type="text">
       <input id="inp2" v-model="password" placeholder="密码" :type="miwen">
      <div @click="dianj()" class="zxc"><el-switch v-model="kkk" active-color="#13ce66" inactive-color="#ff4949" ></el-switch></div>
       <div id="yanzheng">
        <input id="inp3" v-model="codeNumber" placeholder="验证码" type="text">
        <img :src="code&&code">
        <div
          style="width:0.7rem;
          height:0.5rem;background-color:white;
          float: right;
          "
          @click="getCode()"
        >
         <p style="margin-top:0.05rem">看不清</p>
        <p style="color:rgb(48, 144, 232);
        margin-top:0.05rem">换一张</p>
        </div>
      </div>
       <div id="wenzi">
        <p style="margin-top:0.1rem">温馨提示:未注册过的账号，登录时将自动注册</p>
        <p style="margin:0.1rem 0 0.1rem 0">注册过的用户可凭账号密码登录</p>
      </div>
       <button  id="dengA" @click="login()">登录</button>
       <div id="chongzhi">
        <router-link style="color:rgb(48, 144, 232)" to="./reset">
          <p>重置密码?</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "denglu",
  data() {
    return {
      kkk:false,
      code: "", //存储验证码base64图片
      username: "",
      password: "",
      codeNumber: "", //存储验证码输入框的值,
      miwen:"password"

    };
  },
  created() {
    //首先，获取验证码
    this.getCode();
    // this.login();
   
  },
  methods: {
     shang() {
      this.$router.back();
    },
    getCode() {
      const api = "https://elm.cangdu.org/v1/captchas";
      this.$http({
        url: api,
        method: "post",
        //用于表示用户代理是否应该在跨域请求的情况下从其他域发送cookies--不使用缓存
        withCredentials: true
      }).then(res => {
        // console.log("验证码数据");
        // console.log(res);
        this.code = res.data.code;
      });
    },
    dianj(){
     if (this.kkk) {
       this.miwen = "text"  
     } else {
       this.miwen ="password"
     }
    },
    login() {
      // if (/^[a-zA-Z][a-zA-Z\u4E00-\u9FA5]{5,17}$/.test(this.username)==false) {
      //   return alert("请输入有效的用户名,亲!")
      // }
      // if (/^[a-zA-Z]\w{5,15}/.test(this.password) == false) {
      //   return alert("请输入有效的密码,亲!")
      // }
      // console.log(this.username);
      localStorage.username = this.username;
      const api = "https://elm.cangdu.org/v2/login";
      this.$http({
        url: api,
        method: "post",
        withCredentials: true,
        data: {
          username: this.username,
          password: this.password,
          captcha_code: this.codeNumber
        }
      }).then(res => {
        // console.log("login数据");
        // console.log(res);
        if (res.data.message) {
          // localStorage.clear();
          if (localStorage.username2 && v) {
            localStorage.username2 += "," + v;
          } else {
            // localStorage.username2 = "" + v;
          }
        } else {
          this.$store.commit("getlogin", res.data);
          //登陆成功，跳转到首页,编程式路由跳转，传值query或者params传值
          this.$router.push({
            name: "cityren"
          });
        }
      });
      
    }
  }
};
</script>
<style scoped>
#header {
  width: 3.75rem;
  height: 0.5rem;
  background-color: rgb(48, 144, 232);
  font-size: 0.2rem;
  color: white;
  text-align: center;
  line-height: 0.45rem;
  position: relative;
}
#header p {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
#inp1,
#inp2 {
  font-size: 0.17rem;
  width: 3.75rem;
  text-indent: 1em;
  height: 0.5rem;
  border-bottom: 0.01rem solid darkgray;
}
#inp3 {
  font-size: 0.17rem;
  width: 50%;
  height: 0.5rem;
  text-indent: 1em;
}
#xinxi {
  margin-top: 0.2rem;
}
#yanzheng {
  width: 3.75rem;
  border-bottom: 0.01rem solid darkgray;
  overflow: hidden;
  background-color: white;
}
#wenzi {
  color: red;
  font-size: 0.15rem;
  text-indent: 1em;
}
#dengA {
  width: 3.62rem;
  color: white;
  height: 0.5rem;
  font-size: 0.2rem;
  border-radius: 0.1rem;
  /* text-indent: 1em; */
  background-color: rgb(76, 217, 100);
  margin-left: 0.06rem;
  outline: none;
}
#chongzhi {
  margin: 0.2rem 0.2rem 0 0;
  float: right;
}
.zxc{
  position: absolute;
  right: 0.2rem;
  top: 1.38rem;
}
</style>

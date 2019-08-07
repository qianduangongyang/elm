<template>
  <div  style="overflow:hidden">
    <header>
      <img @click="keya()" src="../../assets/back.png" alt>
      <p>账户信息</p>
    </header>
    <div id="center">
      <div id="touxiang">
        <span>头像</span>
        <img style="margin-top:0.3rem" class="yj" src="../../assets/right.png" alt>
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img id="img1" v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <div @click="chuanzhi()" id="yonghu">
        <span>用户名</span>

        <img class="yj" src="../../assets/right.png" alt>
        <span id="chaunzhi">{{yonghu2}}</span>
      </div>
      <router-link to="/address">
        <div id="dizhi">
          <span style="color:black">收获地址</span>
          <img class="yj" src="../../assets/right.png" alt>
        </div>
      </router-link>
    </div>
    <div class="aa">账号绑定:</div>

    <div id="bangdin" @click="nnn()">
      <i class="el-icon-mobile"></i>
      <span>手机</span>
      <img class="yj" src="../../assets/right.png" alt>
    </div>
    <div  class="shouAPP animated heartBeat 0.4s" v-if="kkk">
      <img src="../../assets/pipe.png" alt="">
      <p>请在手机APP中设置</p>
      <button style="outline: none;" @click="nnn()">确认</button>
    </div>
    <div class="aa">安全设置：</div>
    <router-link style="color=gray" to="/reset">
      <div id="anquan">
        <span style="color:black">登陆密码</span>

        <img class="yj" src="../../assets/right.png" alt>
        <span id="xiu">修改</span>
      </div>
    </router-link>

    <button id="dengA" @click="tool()">退出登录</button>
    <div class="frame animated heartBeat 0.4s" v-show="outshow">
      <img src="../../assets/pipe.png" alt>
      <p>是否退出登录</p>
      <p @click="falsetool()">再等等</p>
      <p @click="leave()">退出登录</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "usermessage",
  data() {
    return {
      yonghu2: "",
      imageUrl: require("../../assets/touxingl.jpg"),
      outshow: false,
      kkk:false,
    };
  },
  created() {
    this.yonghu2 = localStorage.username;
    this.getImg();
  },
  methods: {
    getImg(){
       const api =
        "https://elm.cangdu.org/v1/user/"+this.$store.state.login.user_id;
      this.$http({
        url: api,
        methods: "get",
        data: {}
      }).then(res => {
          this.imageUrl="https://elm.cangdu.org/img/"+res.data.avatar;
      });
    },
    tool() {
      this.outshow = true;
    },
    falsetool() {
      this.outshow = false;
    },
    leave() {
      this.$store.commit("gethongbaolength",0);
          localStorage.clear();
          this.$store.state.login="";
        this.$router.push({
          name: "MY"
        });
    },
    nnn(){
             this.kkk =!this.kkk;
    },
    shang() {
      this.$router.back();
    },
    chuanzhi() {
      this.$router.push({
        name: "gaiming"
      });
    },
    keya() {
      this.$router.push({
        name: "MY",
        query: { username: this.yonghu2 }
      });
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      // this.$store.commit("getimg1",this.imageUrl);

   var file = file.raw;
      var formdata1 = new FormData(); // 创建form对象
      formdata1.append("file", file, file.name); // 通过append向form对象添加数据,可以通过append继续添加数据
      //或formdata1.append('img',file);
      let config = {
        headers: { "Content-Type": "multipart/form-data" }
      }; //添加请求头
      this.axios.post(`https://elm.cangdu.org/eus/v1/users/${this.$store.state.login.user_id}/avatar`, formdata1, config).then(response => {
        //这里的/xapi/upimage为接口
        // console.log(response.data);
      });


    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    loging() {
      (this.$store.state.username = ""),
        this.$router.push({
          name: "MY"
        });
    }
  }
};
</script>
<style scoped>
.shouAPP {
  border-radius: 0.05rem;
  z-index: 555555;
  text-align: center;
  position: absolute;
  left: 0.4rem;
  top:1.6rem;
  background-color: white;
  width: 3rem;
  /* border:0.001rem solid red; */
 
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
.avatar-uploader {
  position: absolute;
  right: 0.35rem;
  top: 0.66rem;
}
#img1 {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  float: right;
  margin: 0.05rem 0rem 0 0;
}
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
#center {
  margin-top: 0.65rem;
  font-size: 0.15rem;
  width: 3.75rem;
  background-color: white;
}
#touxiang {
  text-indent: 1em;
  width: 3.75rem;
  line-height: 0.7rem;
  border: 0.001rem solid darkgrey;
  margin-top: 0.15rem;
  height: 0.7rem;
}

#yonghu {
  text-indent: 1em;
  line-height: 0.5rem;
  border: 0.001rem solid darkgrey;
  /* margin-top: 0.15rem; */
  height: 0.5rem;
}
#chaunzhi {
  float: right;
  color: grey;
  margin: 0 0.2rem 0 0;
  font-size: 0.18rem;
  /* margin: 0.05rem 0.15rem 0 0; */
}
.aa {
  text-indent: 1em;
  margin: 0.12rem 0 0.12rem 0;
  height: 0.2rem;
  color: darkgrey;
}
#dizhi {
  text-indent: 1em;
  line-height: 0.5rem;
  border: 0.001rem solid darkgrey;
  /* margin-top: 0.15rem; */
  height: 0.5rem;
}
#bangdin {
  text-indent: 0.6em;
  line-height: 0.5rem;
  border: 0.001rem solid darkgrey;
  /* margin-top: 0.15rem; */
  height: 0.5rem;
  background-color: white;
}
#anquan {
  text-indent: 1em;
  line-height: 0.5rem;
  border: 0.001rem solid darkgrey;
  /* margin-top: 0.15rem; */
  height: 0.5rem;
  background-color: white;
}
#xiu {
  float: right;
  color: grey;
  margin: 0 0.15rem 0 0;
  font-size: 0.2rem;
}
.yj {
  float: right;
  margin: 0.15rem 0.15rem 0 0;
}
#dengA {
  outline: none;
  width: 3.62rem;
  color: white;
  height: 0.5rem;
  font-size: 0.2rem;
  border-radius: 0.1rem;
  /* text-indent: 1em; */
  background-color: rgb(216,88,74);
  margin: 0.2rem 0 0 0.05rem;
}
.frame {
  width: 3.25rem;
  height: 2.25rem;
  background-color: white;
  border: 0.01rem solid gray;
  position: absolute;
  left: 0.25rem;
  top: 1.6rem;
}
.frame img {
  width: 1.2rem;
  position: absolute;
  left: 0.95rem;
  top: 0.05rem;
}
.frame p:nth-child(2) {
  font-size: 0.2rem;
  position: absolute;
  left: 1rem;
  top: 1.365rem;
}
.frame p:nth-child(3) {
  width: 0.95rem;
  height: 0.35rem;
  text-align: center;
  line-height: 0.35rem;
  background-color: gray;
  color: white;
  font-size: 0.15rem;
  position: absolute;
  left: 0.45rem;
  top: 1.8rem;
  border-radius: 5%;
}
.frame p:nth-child(4) {
  width: 0.95rem;
  height: 0.35rem;
  text-align: center;
  line-height: 0.35rem;
  background-color:  rgb(216,88,74);
  color: white;
  font-size: 0.15rem;
  position: absolute;
  left: 1.6rem;
  top: 1.8rem;
  border-radius: 5%;
}
</style>

<template>
  <div style="overflow:hidden">
    <div id="hed">
      <div id="toubu">
        <router-link to="/cityren">
          <img src="../../assets/back.png" alt>
        </router-link>

        <p>我的</p>
      </div>
      <div @click="app()" id="xinxi">
        <img :src="img1" alt>
        <div id="yonghu">
          <p>{{yonghu||zhuce}}</p>
          <p>📱暂无绑定手机号</p>
        </div>
        <img id="img1" src="../../assets/right.png" alt>
      </div>
    </div>
    <div id="youhui">
      <div id="yue">
        <router-link style="color:black" to="/mybalance">
          <div class="a1">
            <span>0.00</span>
            <span>元</span>
          </div>

          <p>我的余额</p>
        </router-link>
      </div>

      <div id="you">
        <router-link style="color:black" to="/mydiscount">
          <div class="a1">
            <span>{{length}}</span>
            <span>个</span>
          </div>

          <p>我的优惠</p>
        </router-link>
      </div>

      <div id="jifen">
        <router-link style="color:black" to="/mypoints">
          <div class="a1">
            <span>0</span>
            <span>分</span>
          </div>

          <p>我的积分</p>
        </router-link>
      </div>
    </div>
    <div id="center">
      <router-link style="color:black" to="/order">
        <div id="dingdan">
          <img
            style="height:0.16rem;width:0.16rem;margin:0.14rem 0.17rem 0 0.15rem
          "
            src="../../assets/bbb.png"
            alt
          >
          <span>我的订单</span>
          <img class="yj" src="../../assets/right.png" alt>
        </div>
      </router-link>
      <router-link style="color:black" to="/jifen">
        <div id="shangcheng">
          <img src="../../assets/ccc.png" alt>
          <span>积分商城</span>
          <img class="yj" src="../../assets/right.png" alt>
        </div>
      </router-link>

      <div @click="VIP()" id="huiyuan">
        <img src="../../assets/huangguan.png" alt>
        <span>饿了么会员卡</span>
        <img class="yj" src="../../assets/right.png" alt>
      </div>
    </div>
    <div id="center2">
      <router-link style="color:black" to="/fuwu">
        <div id="fuwu">
          <img src="../../assets/diqiu.png" alt>
          <span>服务中心</span>
          <img class="yj" src="../../assets/right.png" alt>
        </div>
      </router-link>

      <div id="eee">
        <router-link style="color:black" to="/xiazai">
          <img src="../../assets/eliaomo.png" alt>
          <span>下载饿了么APP</span>
          <img class="yj" src="../../assets/right.png" alt>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { Loading } from "element-ui";
let loadingInstance;
export default {
  name: "MY",
  data() {
    return {
      yonghu: "",
      img1: "",
      zhuce: "登录/注册",
      // img2: "",
      arrC: [],
      length: "",
      count: 0
    };
  },
  created() {
    if(this.img1==""){
      this.img1=require("../../assets/touxingl.jpg");
    }
    if(this.$store.state.login!=""){
      this.getImg();
    }
    loadingInstance = Loading.service({
      fullscreen: true,
      text: "拼命加载中..."
    });
    this.length = this.$store.state.hongbaolength;
    this.getdata();
    this.yonghu = localStorage.username;
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
          this.img1="https://elm.cangdu.org/img/"+res.data.avatar;
      });
    },
    app() {
      if (this.yonghu) {
        this.$router.push({
          name: "usermessage"
        });
      } else {
        // three:0;
        this.$router.push({
          name: "denglu"
        });
      }
    },
    VIP() {
      this.$router.push({
        name: "VIP"
      });
    },
    getdata() {
      const api =
        "https://elm.cangdu.org/promotion/v2/users/1/hongbaos?limit=20&offset=0";
      this.$http({
        url: api,
        methods: "get",
        data: {}
      }).then(res => {
        this.count++;
        if (this.count == 1) {
          loadingInstance.close();
          this.count = 0;
        }
        this.$store.commit("gethongbaolength", res.data.length);
        this.$store.commit("getdata", res.data);
        // console.log(this.length);
      });
    }
  }
};
</script>
<style scoped>
#hed {
  width: 3.75rem;
  height: 0.92rem;
  background-color: rgb(49, 144, 232);
}
#toubu {
  width: 100%;
  height: 0.55rem;
  background-color: rgb(48, 144, 232);
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
}
#toubu img {
  height: 0.25rem;
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#toubu p {
  font-size: 0.2rem;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#xinxi {
  overflow: hidden;
  border-top: 0.01rem solid white;
  margin-top: 0.55rem;
}
#xinxi img:nth-child(1) {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  margin: 0.15rem 0 0 0.12rem;
  float: left;
}
#yonghu {
  float: left;
  width: 2rem;
  overflow: hidden;
  color: white;
  font-size: 0.2rem;
  margin: 0.2rem 0 0 0.1rem;
}
#yonghu p:nth-child(2) {
  margin-top: 0.1rem;
  font-size: 0.15rem;
}
#img1 {
  float: right;
  margin: 0.35rem 0.15rem 0 0;
}
#youhui {
  width: 3.75rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
}
#yue {
  width: 33%;
  text-align: center;
  /* height: 1rem; */
  border-right: 0.01rem solid grey;
}
.a1 {
  margin-top: 0.17rem;
}
#youhui p {
  margin-top: 0.1rem;
  color: gray;
}
#yue span:nth-child(1) {
  color: orange;
  font-size: 0.3rem;
}
#you {
  width: 33%;
  text-align: center;
  /* height: 1rem; */
  border-right: 0.01rem solid grey;
}
#you span:nth-child(1) {
  color: red;
  font-size: 0.3rem;
}
#jifen {
  width: 33%;
  text-align: center;
  /* height: 1rem; */
  margin-bottom: 0.2rem;
}
#jifen span:nth-child(1) {
  color: green;
  font-size: 0.3rem;
}
#center {
  margin-top: 0.1rem;
  width: 3.75rem;
  background-color: white;
}
#dingdan {

  float: left;
  line-height: 0.45rem;
  font-size: 0.17rem;
  width: 3.75rem;
  height: 0.45rem;
  border-bottom: 0.01rem solid gray;
  background-color: white;
}
#dingdan img:nth-child(1) {
  float: left;
  margin: 0.07rem 0 0 0.07rem;
  width: 0.4rem;
  height: 0.4rem;
}
.yj {
  float: right;
  margin: 0.15rem 0.15rem 0 0;
}
#shangcheng {
  float: left;
  line-height: 0.45rem;
  font-size: 0.17rem;
  background-color: white;
  width: 3.75rem;
  height: 0.45rem;
  border-bottom: 0.01rem solid gray;
}
#shangcheng img:nth-child(1) {
  float: left;
  margin-top: -0.07rem;
  width: 0.45rem;
  height: 0.55rem;
}
#huiyuan {
  float: left;
  line-height: 0.45rem;
  font-size: 0.17rem;
  width: 3.75rem;
  background-color: white;
  height: 0.45rem;
  border-bottom: 0.01rem solid gray;
}
#huiyuan img:nth-child(1) {
  float: left;
  margin: 0.1rem 0.08rem 0 0.1rem;
  width: 0.25rem;
  height: 0.25rem;
}
#center2 {
  width: 3.75rem;
  background-color: white;
}
#fuwu {
  margin-top: 0.1rem;
  float: left;
  line-height: 0.45rem;
  font-size: 0.17rem;
  width: 3.75rem;
  height: 0.45rem;
  border-bottom: 0.01rem solid gray;
  background-color: white;
}
#fuwu img:nth-child(1) {
  float: left;
  margin: 0.1rem 0.07rem 0 0.12rem;
  width: 0.25rem;
  height: 0.25rem;
}
.yj {
  float: right;
  margin: 0.15rem 0.15rem 0 0;
}
#eee {
  float: left;
  line-height: 0.45rem;
  font-size: 0.17rem;
  width: 3.75rem;
  height: 0.45rem;
  border-bottom: 0.01rem solid gray;
  background-color: white;
}
#eee img:nth-child(1) {
  float: left;
  margin: 0.1rem 0.07rem 0 0.12rem;
  width: 0.25rem;
  height: 0.25rem;
}
</style>

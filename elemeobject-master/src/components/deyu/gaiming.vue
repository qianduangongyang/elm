<template>
  <div  style="overflow:hidden">
    <header>
      <img @click="shang()" src="../../assets/back.png" alt>
      <p>修改用户名</p>
    </header>
    <div style="margin-top:0.65rem">
 <input style="background:rgb(242,242,242);" v-model="newuser" :style="{border:color2}" @input="che()" id="shuru" type="text" placeholder="输入用户名">
    <div v-if="long" :style="{color:a}" id="wenzi">{{yong}}</div>
    <!-- <p></p> -->
    <button @click="keya()" id="getA">确认修改</button>
    </div>
   
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "gaiming",
  data() {
    return {
      newuser: "",
      color2: "0.001rem solid gray",
      long: true,
      a:"",
      yong:"用户名只能修改一次(5-24字符之间)"
    //  bol:true
    //   panduan:true
    };
  },
  created() {
   
    // localStorage.username=newuser;
  },
  methods: {
    che() {
      if (/^[A-Za-z1-9]{5}/.test(this.newuser)) {
        this.color2 = "0.01rem solid gray";
        this.yong ="用户名只能修改一次(5-24字符之间)" ;
        this.a="grey"
         localStorage.clear();
      } else {
        this.color2 = "0.01rem solid red";
        this.yong="用户名长度在5到24位之间"
         this.a="red"
      }
    },
    shang() {
      this.$router.back();
    },
    keya(a) {
      localStorage.username = this.newuser;
      if (/^\w{5,25}$/.test(this.newuser) == false) {
        return;
      } else {
        this.$router.push({
          name: "usermessage"
          // query:{username:this.newuser},
        });
        this.$store.commit("getName", a);
      }
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
#shuru {
  margin: 0.07rem 0 0 0.12rem;
  width: 3.55rem;
  height: 0.5rem;
  /* color: rgb(243, 243, 243); */
  line-height: 0.5rem;
  font-size: 0.2rem;
}
#wenzi {
  color: darkgrey;
  margin: 0.17rem 0 0.2rem 0.16rem;
  font-size: 0.14rem;
}
#getA {
  outline: none;
  width: 3.52rem;
  height: 0.5rem;
  color: white;
  font-size: 0.18rem;
  background-color: rgb(48, 144, 232);
  margin-left: 0.12rem;
}
</style>

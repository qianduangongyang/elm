<template>
  <div  style="overflow:hidden">
    <header>
      <router-link to="/address">
        <img src="../../assets/back.png" alt>
      </router-link>

      <p>新增地址</p>
    </header>
    <div id="center">
      <input v-model="name" class="a" placeholder="请填写你的姓名" type="text">
      <router-link to="/Searchaddress">
        <input v-model="username2" class="a" placeholder="小区/写字楼/学校等" type="text">
      </router-link>

      <input :style="{border:color2}" @input="chi()"  v-model="address_detail" class="a" placeholder="请填写详细送餐地址" type="text">
      <p  v-if="long" style="color:red; 
      margin:0.08rem 0rem 0 0.1rem;
     ">{{a}}</p>
      <input maxlength="11"  :style="{border:color}" v-model="phone" @input="che()" class="a" placeholder="请填写能够联系到您的手机号" type="text">
      <p  v-if="hong" style="color:red;
      margin:0.08rem 0rem 0 0.1rem">{{b}}</p>
      <input maxlength="11"  :style="{border:color1}" @input="zhe()"
        v-model="phone_bk"
        style="margin-bottom:0.1rem"
        class="a"
        placeholder="备用联系电话(选填)"
        type="text"
      >
      <p  v-if="kong" style="color:red;
      margin:0rem 0rem 0 0.1rem">请输入正确的手机号</p>
    </div>

    <button style="outline: none;" @click="addt()" id="dizhi">新增地址</button>
  </div>
</template>
<script>
export default {
  name: "newaddress",
  data() {
    return {
      a:"送餐地址太短了，不能辨别",
      b:"请输入正确的手机号",
      username2: "",
      user_id: "",
      address: "",
      address_detail: "",
      geohash: "",
      name: "",
      phone: "",
      tag: "",
      sex: "",
      phone_bk: "",
      tag_type: "",
      color:"0",
      hong:false,
      kong:false,
      color1:"0",
      color2:"0",
      long:false
    };
  },
  created() {
    this.addt();
    this.username2 = this.$store.state.sousuo;
  },
  methods: {
    che(){
       if (this.phone=="") {
        this.b="手机号不能为空"
      }else{
     this.b="请输入正确的手机号"
      }
      if(/^1[3|4|5|8][0-9]\d{8}$/.test(this.phone)){
        this.color=0;
        this.hong=false;
      }else{
        this.color="0.01rem solid red"
        this.hong=true
      }
    },
    zhe(){
if(/^1[3|4|5|8][0-9]\d{8}$/.test(this.phone_bk)){
        this.color1=0;
        this.kong=false
      }else{
        this.color1="0.01rem solid red"
        this.kong=true
      }
      
    },
      chi(){
       if (this.address_detail=="") {
        this.a="送餐地址太短了,不能辨别"
      }else{
     this.a="请详细填写送餐地址"
      }
      // ([\u4e00-\u9fa5]{2,4})
if(/[\u4e00-\u9fa5]{2,4}/.test(this.address_detail)){
        this.color2=0;
        this.long=false
       
      }else{
        this.color2="0.01rem solid red"
        this.long=true
          
      }
    },
    back() {
      this.$router.back();
    },
    addt() {
      
      this.$http({
        method: "post",
        url:
          "https://elm.cangdu.org/v1/users/" +
          this.$store.state.login.user_id +
          "/addresses",
        data: {
          address: this.username2,
          geohash: this.$store.state.jingwei,
          address_detail: this.address_detail,
          phone: this.phone,
          phone_bk: this.phone_bk,
          name: this.name,
          tag: "21515",
          sex: 1,
          tag_type: 2
        }
      }).then(res => {
          if (/^1[3|4|5|8][0-9]\d{8}$/.test(this.phone) == false) {
            return  
          }
          if (/^1[3|4|5|8][0-9]\d{8}$/.test(this.phone_bk) == false) {
            // return alert("请输入有效的手机号，亲！")
          }
        // console.log(res);
        if (res.data.message) {
          //alert(res.data.message)
        } else {
          //登陆成功，跳转到首页,编程式路由跳转，传值query或者params传值
          this.$router.push({
            name: "address"
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
#center {
  /* text-align: center; */
  background-color: white;
  margin-top: 0.7rem;
}
.a {
  font-size: 0.15rem;
  background-color: rgb(242, 242, 242);
  margin: 0.1rem 0 0 0.1rem;
  /* border:0.01rem solid darkgrey; */
  width: 3.5rem;
  height: 0.4rem;
}
#dizhi {
  /* margin: 0 auto; */
  width: 3.5rem;
  height: 0.4rem;
  color: white;
  background-color: rgb(76, 218, 100);
  margin: 0.15rem 0 0 0.1rem;
  border-radius: 0.08rem;
}
</style>

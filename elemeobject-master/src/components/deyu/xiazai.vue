<template>
    <div style="overflow:hidden">
        <header>
            <img @click="shang()" src="../../assets/back.png" alt="">
            <p>下载</p>
        </header>
        <div id="center">
            <img src="../../assets/eliaomo.png" alt="">
            <p>下载饿了么APP</p>
        </div>
        <button @click="dianji()" id="getA">下载</button>
         <div  class="shouAPP animated heartBeat 0.4s" v-if="kkk">
      <img src="../../assets/pipe.png" alt="">
      <p id="a">IOS用户请前往AppStore下载</p>
      <p id="b" @click="dianji()">确认</p>
    </div>
    </div>
</template>
<script>
export default {
   name:"xiazai" ,
   data() {
     return {
       kkk:false,
     }
   },
  methods: {
     dianji(){
             this.kkk =!this.kkk;
    },
    shang() {
      //   返回上一个历史记录
      //   this.$router.go(-1);
      // 或者
      this.$router.back();
    }
  }
   }

</script>
<style scoped>
.shouAPP{
  text-align: center;
  border-radius: 0.15rem;
  position: absolute;
  background-color: white;
  width: 3rem;
  margin: -1.5rem 0 0 0.35rem
}
.shouAPP img{
  margin: 0.2rem 0 0 0rem;
  width: 1rem;
}
#a{
  margin: 0.1rem 0 0 0rem;
}
#b{
  border-radius: 0.08rem;
  height: 0.45rem;
  font-size: 0.21rem;
  color: white;
  width: 3rem;
  line-height: 0.45rem;
  margin: 0.15rem 0 0rem 0rem;
  background-color: rgb(76,217,100);
}
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
header p {
  font-size: 0.2rem;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#center{
    text-align: center;
    margin-top: 0.9rem;
}
#center p{
    margin-top: 0.2rem;
    font-size: 0.2rem;
    color: gray;
    margin-bottom: 0.2rem;
}
#getA{
  outline: none;
    width: 3.62rem;
    color: white;
    height: 0.5rem;
    font-size: 0.2rem;
    border-radius: 0.1rem;
     /* text-indent: 1em; */
    background-color: rgb(76,217, 100);
    margin-left: 0.07rem;
}
</style>

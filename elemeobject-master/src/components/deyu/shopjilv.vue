<template>
  <div style="background-color: white" id="wrap">
    <div id="top" @click="back()">
      <img src="../../assets/back.png" alt="">
      <p>购买记录</p>
    </div>
    <div id="content">
        <img src="../../assets/wu.png" alt="">
        <p>没有购买记录</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "shopjilv",
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
#wrap {
height: 100vh;
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
#content{
    padding-top: 2.25rem;
}
#content img{
    width: 1.25rem;
    margin-left: 1.25rem;
}
#content p{
    color: gray;
    font-size: 0.15rem;
    margin-top: 0.15rem;
    margin-left: 1.38rem;
}
</style>

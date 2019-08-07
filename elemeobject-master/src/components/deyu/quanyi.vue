<template>
  <div>
    <div id="top">
      <img @click="shang()" src="../../assets/back.png" alt>
      <p>{{b}}</p>
    </div>
    <div id="wenzi">
      <p>{{ck}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "quanyi",
  data() {
    return {
      b: "",
      ck: ""
    };
  },
  created() {
    this.add();
  },
  methods: {
    add() {
      this.b = this.$route.query.a;
      this.ck = this.$route.query.ke;
      // console.log(this.$route.query.a)
    },
    shang() {
      //   返回上一个历史记录
      //   this.$router.go(-1);
      // 或者
      this.$router.back();
    }
  }
};
</script>
<style scoped>
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
#wenzi {
  margin: 0 auto;
  width: 90%;
  color: gray;
  margin-top: 0.6rem;
  font-size: 0.25rem;
}
</style>

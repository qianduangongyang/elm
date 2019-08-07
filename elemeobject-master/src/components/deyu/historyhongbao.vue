<template>
  <div id="wrap">
    <div id="top" @click="back()">
      <img src="../../assets/back.png">
      <p>历史红包</p>
    </div>
    <div id="title2">
      <ul>
        <li :key="i" v-for="(v,i) in datas">
          <div style="color:#999;" id="center">
            <div id="centerleft">
              <p>￥{{v.amount}}.0</p>
              <p>{{v.description_map.sum_condition}}</p>
            </div>
            <div id="centercenter">
              <p style="color: #666;">{{v.name}}</p>
              <p>{{v.description_map.validity_periods}}</p>
              <p>{{v.description_map.phone}}</p>
            </div>
            <div id="centerright">
              <img src="../../assets/guoqi.png" alt="">
            </div>
          </div>
          <div id="centerbottom">
            <!-- <p>{{v.limit_map}}</p> -->
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "historyhongbao",
  data() {
    return {
      datas: "",
      user_id: "1"
    };
  },
  created() {
    this.getdata();
  },
  methods: {
    getdata() {
      const api =
        "https://elm.cangdu.org/promotion/v2/users/" +
        this.user_id +
        "/expired_hongbaos?limit=20&offset=0";
      this.$http({
        url: api,
        methods: "get",
        data: {}
      }).then(res => {
        this.datas = res.data;
        // console.log(this.datas);
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
  background-color:  rgb(48, 144, 232);
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
#title2 {
  margin-top: 0.75rem;
  width: 3.75rem;
  height: 0.35rem;
  line-height: 0.35rem;
  font-size: 0.15rem;
  position: relative;
}
#center {
  background-color: white;
  width: 3.75rem;
  height: 0.85rem;
  border-top: 0.01rem solid gray;
  display: flex;
  margin-top: 0.1rem;
}
#centerleft {
  width: 1rem;
  /* height: 2rem; */
  position: relative;
}
#centerleft p:nth-child(1) {
  color: gray;
  font-size: 0.2rem;
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
}
#centerleft p:nth-child(2) {
  font-size: 0.1rem;
  position: absolute;
  left: 0.17rem;
  top: 0.5rem;
}
#centercenter {
  width: 2.2rem;
  position: relative;
}
#centercenter p:nth-child(1) {
  font-size: 0.2rem;
  position: absolute;
  left: 0.1rem;
  top: 0.15rem;
}
#centercenter p:nth-child(2) {
  font-size: 0.1rem;
  position: absolute;
  left: 0.1rem;
  top: 0.35rem;
}
#centercenter p:nth-child(3) {
  font-size: 0.1rem;
  position: absolute;
  left: 0.1rem;
  top: 0.55rem;
}
#centerright {
  width: 0.75rem;
  position: relative;
}

#centerright img {
  position: absolute;
  right: 0.1rem;
  top: 0.1rem;

  width: 0.65rem;
}
#centerbottom {
  width: 3.75rem;
}
#centerbottom p {
  font-size: 0.18rem;
}
</style>

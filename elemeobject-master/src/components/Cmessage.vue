<template>
  <div>
    <header>
      <img src="../assets/back.png" alt style="width:0.3rem;height:0.3rem" @click="ht()" />
      <h3>{{name}}</h3>
      <span @click="ht()">切换城市</span>
    </header>
    <div id="search">
      <input @input="asd()" type="text" placeholder="输入学校、商务楼、地址" v-model="keyword" />

      <br />
      <button id="btn" @click="search()">提交</button>
      <ul id="food" v-if="foodclass">
        <li
          :key="i"
          class="l1"
          v-for="(v,i) in food"
          @click="cunchu(v.geohash,v.latitude,v.longitude);ah(v.name,v.address,v.latitude,v.longitude)"
        >
          <h3>{{v.name}}</h3>
          <p>{{v.address}}</p>
        </li>
      </ul>
    </div>
    <div id="sty">
      <ul id="dis" v-if="dis" style="text-align:left">
        <p>搜索历史</p>
        <li :key="i" v-for="(vl,i) in nameArr" @click="ahTwo(i)">
          <h3>{{vl}}</h3>
          <p>{{adArr[i]}}</p>
        </li>
      </ul>
      <button id="rem" v-if="rem" @click="remove()">清空历史记录</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cmessage",
  data() {
    return {
      id: "",
      name: "",
      keyword: "",
      food: [],
      foodName: "",
      foodSrc: "",
      shops: [],
      ob: "",
      dis: false,
      rem: false,
      arrName: [],
      nameArr: [],
      adArr: [],
      latArr: [],
      lonArr: [],
      foodclass: true
    };
  },
  created() {
    this.addId();
    this.forestall();
    this.verdict();
  },
  methods: {
    cunchu(a, b, c) {
      this.$store.commit("cunchu", a);
      this.$store.commit("cunchujing", b);
      this.$store.commit("cunchuwei", c);
      this.$router.push({
        name: "home"
      });
      // console.log(this.$store.state.jingwei)
      // console.log(this.$store.state.jing)
      // console.log(this.$store.state.wei)
    },
    addId() {
      this.id = this.$route.query.cityId;
      this.name = this.$route.query.cityName;
    },
    ht() {
      this.$router.back();
    },
    search() {
      if (this.keyword == "") {
        return;
      } else {
        const api =
          "https://elm.cangdu.org/v1/pois?city_id=" +
          this.id +
          "&keyword=" +
          this.keyword +
          "&type=search";
        this.$http({
          url: api,
          method: "get"
        }).then(res => {
          // console.log(res.data)
          this.food = res.data;
          if (this.food.length == 0) {
            this.food.push({ name: "抱歉，无搜索结果", address: "" });
          }
        });
      }
      this.rem = false;
      this.dis = false;
      this.foodclass = true;
    },
    asd() {
      if (this.keyword == "" && this.nameArr.length != 0) {
        this.rem = true;
        this.dis = true;
        this.foodclass = false;
      }
    },
    ah(a, b, d, e) {
      localStorage.cityName = a;
      localStorage.latitude = d;
      localStorage.longitude = e;
      if (localStorage.nme) {
        if (localStorage.nme.indexOf(a) == -1) {
          localStorage.nme += "," + a;
          localStorage.adres += "," + b;
          localStorage.lat += "," + d;
          localStorage.lon += "," + e;
        }
      } else {
        localStorage.nme = a;
        localStorage.adres = b;
        localStorage.lat = d;
        localStorage.lon = e;
      }
      this.$router.push({
        name: "home"
      });
    },
    ahTwo(i) {
      localStorage.latitude = this.latArr[i];
      localStorage.longitude = this.lonArr[i];
      this.$store.commit("cunchujing", this.latArr[i]);
      this.$store.commit("cunchuwei", this.lonArr[i]);
      this.$router.push({
        name: "home"
      });
    },
    forestall() {
      if (localStorage.nme) {
        this.nameArr = localStorage.nme.split(",");
        this.adArr = localStorage.adres.split(",");
        this.latArr = localStorage.lat.split(",");
        this.lonArr = localStorage.lon.split(",");
      } else {
        return;
      }
    },
    remove() {
      localStorage.removeItem("lon");
      localStorage.removeItem("nme");
      localStorage.removeItem("lat");
      localStorage.removeItem("adres");
      localStorage.removeItem("latitude");
      localStorage.removeItem("longitude");
      this.nameArr = "";
      this.verdict();
    },
    verdict() {
      if (this.nameArr.length == 0) {
        this.rem = false;
        this.dis = false;
      } else {
        this.rem = true;
        this.dis = true;
      }
    }
  }
};
</script>
<style scoped>
header {
  height: 0.45rem;
  background-color: rgb(48, 144, 232);
  font-size: 0.16rem;
  color: white;
  line-height: 0.45rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.1rem 0 0.1rem;
}
header img {
  margin-top: 0.06rem;
}
#search {
  width: 100%;
  margin-top: 0.1rem;
  text-align: center;
}

#search input {
  width: 90%;
  padding: 2px;
  font-size: 0.16rem;
  height: 0.3rem;
    border-radius:0.03rem;
}
#btn {
  color: white;
  margin-top: 0.1rem;
  border-radius: 0.1rem;
  width: 90%;
  font-size: 0.16rem;
  padding: 0.05rem;
  background-color: rgb(48, 144, 232);
}
#food li {
  text-align: left;
  padding: 0.2rem;
  border-top: 0.01rem solid grey;
}
#food h3 {
  color: black;
}
#food li p {
  margin-top: 0.05rem;
  color: gray;
}
#food {
  margin-top: 0.2rem;
}
#sty > p {
  height: 4vh;
  line-height: 4vh;
  padding-left: 2vw;
  margin-top: 1vh;
  background-color: rgba(128, 128, 128, 0.247);
  font-size: 0.2rem;
}
a {
  color: black;
}
#dis > li {
  padding-left: 0.05rem;
  text-align: left;
  background-color: #fff;
  margin-top: 1vh;
  color: black;
}
#dis > li > h3 {
  margin-top: 0.8vh;
  padding-top: 0.8vh;
}
#dis > li > p {
  margin-top: 0.8vh;
  padding-bottom: 0.8vh;
}
#sty button {
  color: white;
  margin-top: 0.1rem;
  border-radius: 0.1rem;
  width: 90%;
  font-size: 0.16rem;
  padding: 0.05rem;
  background-color: rgb(48, 144, 232);
}
#sty {
  text-align: center;
}
</style>


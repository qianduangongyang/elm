<template>
  <div id="wrap" style="overflow-y:scroll">
    <div id="head" v-if="classBol_1==true">
      <div class="header_business">
        <router-link to="/home">
          <span class="el">
            <van-icon name="arrow-left" />
          </span>
        </router-link>
        <img
          v-if="businessArr.image_path"
          :src="'https://elm.cangdu.org/img/'+businessArr.image_path"
        />
        <span class="name">{{businessArr.name}}</span>
        <span class="float_delivery_fee">商家配送/分钟送达/配送费￥{{businessArr.float_delivery_fee}}</span>
        <span class="promotion_info">公告：{{businessArr.promotion_info}}</span>
        <span class="er">
          <router-link to="/shangjiamsg" style="color:white">
            <van-icon name="arrow" />
          </router-link>
        </span>
      </div>
      <div class="sp">
        <span :class="sp_class_1" @click="hclass(true)">商品</span>
        <span :class="sp_class_2" @click="hclass(false)">评价</span>
      </div>
    </div>
    <div id="foodclass" v-if="classBol&&classBol_1==true">
      <ul class="ulone">
        <li :key="i" v-for="(v,i) in spclass" class="foodsclass_1">
          <a :href="'#'+v.id" style="color:black">{{v.name}}</a>
          <span v-if="v.__ob__.vmCount>0" class="totalnum">{{v.__ob__.vmCount}}</span>
        </li>
      </ul>
      <ul class="ultwo">
        <li :key="i+1000" v-for="(v,i) in spclass" class="foodsclass_2">
          <div class="rexiao">
            <span :id="v.id">{{v.name}}</span>
            <span class="description">{{v.description}}</span>
          </div>
          <ul style="max-width:100%">
            <li :key="index+10000" v-for="(value,index) in v.foods" class="foodsxq">
              <img
                v-if="value.image_path"
                :src="'https://elm.cangdu.org/img/'+value.image_path"
                class="foodimg"
                @click="foodMsg(value);classBol_1=false"
              />
              <h4 class="foodname">{{value.name}}</h4>
              <span class="description_1">{{value.description}}</span>
              <span class="month_sales">月售{{value.month_sales}}份</span>
              <span v-if="value.activity" class="image_text">{{value.activity.image_text}}</span>
              <span class="price">￥{{value.specfoods[0].price}}</span>
              <span v-if="value.attributes"></span>
              <span
                v-if="value.__v>0"
                class="redeceshop"
                @click="value.__v--;pricedel(value.specfoods[0].price);v.__ob__.vmCount--"
              >-</span>
              <span v-if="value.__v>0" class="__v">{{value.__v}}</span>
              <span
                class="addshop"
                @click="value.__v++;priceadd(value.specfoods[0].price);v.__ob__.vmCount++"
              >+</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="head_1" v-if="classBol_1==false">
      <div id="head_1">
        <img src="../../assets/back.png" style="width:0.3rem;" @click="classBol_1=true" />
        <span>{{foodMsgs.name}}</span>
      </div>
      <img :src="'https://elm.cangdu.org/img/'+foodMsgs.image_path" style="width:3.75rem;" />
      <h4>{{foodMsgs.name}}</h4>
      <span>{{foodMsgs.description}}</span>
      <span>月售{{foodMsgs.month_sales}}份</span>
      <span v-if="foodMsgs.activity">{{foodMsgs.activity.image_text}}</span>
      <span>￥{{foodMsgs.specfoods[0].price}}</span>
      <span v-if="foodMsgs.attributes"></span>
    </div>
    <footer v-if="classBol">
      <p class="shop_icon" :id="gwbj" @click="gouwuBol=!gouwuBol">
        <van-icon name="shopping-cart" />
        <span v-if="totalNum>0" class="totalnum">{{totalNum}}</span>
      </p>
      <p class="total">￥{{this.price}}</p>
      <p class="peisongprice">配送费￥5</p>
      <p class="jiesuan" :id="jsbj" @click="jstz()">{{jiesuan}}</p>
      <div class="gouwuche" v-if="gouwuBol">
        <h3>
          购物车
          <span style="font-size:0.16rem;" @click="qingkong()">
            <i class="el-icon-delete"></i>清空
          </span>
        </h3>
        <ul>
          <li :key="i+1000*2" v-for="(v,i) in spclass">
            <ul>
              <li
                :key="index+10000"
                v-if="value.__v>0"
                v-for="(value,index) in v.foods"
                class="gouwuclass"
              >
                <span>{{value.name}}</span>
                <div class="jiajian">
                  <span class="gouwuprice">￥{{value.specfoods[0].price*value.__v}}</span>
                  <span
                    class="gouwunumR"
                    @click="value.__v--;price-=value.specfoods[0].price;totalNum--;v.__ob__.vmCount--"
                  >-</span>
                  <span>{{value.__v}}</span>
                  <span
                    class="gouwunumA"
                    @click="value.__v++;price+=value.specfoods[0].price;totalNum++;v.__ob__.vmCount++"
                  >+</span>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
    <div id="pingjia" v-else>
      <div id="pingjia_1">
        <h1 class="rating">{{businessArr.rating}}</h1>
        <p class="zhrating">综合评价</p>
        <span class="gy">高于周边商家{{(pjScore.compare_rating*100).toFixed(1)}}%</span>
        <span class="xingfont_1">服务态度</span>
        <div class="xing_1">
          <van-rate v-model="severScore" allow-half void-icon="star" void-color="#eee" size="0.13rem"/>
          <span>{{severScore}}</span>
        </div>
        <span class="xingfont_2">菜品评价</span>
        <div class="xing_2">
          <van-rate v-model="foodScore" allow-half void-icon="star" void-color="#eee" size="0.13rem"/>
          <span>{{foodScore}}</span>
        </div>
        <span class="deliver_time">送达时间{{pjScore.deliver_time}}分钟</span>
      </div>
      <div id="pingjia_2">
        <ul>
          <li :key="i" v-for="(v,i) in PjClass" class="pjclass">{{v.name+'('+v.count+')'}}</li>
        </ul>
      </div>
      <div class="pjlb">
        <ul>
          <li :key="i" v-for="(v,i) in pjMsg" class="pingjiali">
            <div class="touxiang">
              <img
                v-if="v.avatar"
                :src="'https://fuss10.elemecdn.com/'+v.avatar+'.jpeg'"
                style="width:100%"
              />
              <img v-else src="../../assets/touxiang-kong.png" style="width:100%" />
            </div>
            <p class="username">{{v.username}}</p>
            <p class="rated_at">{{v.rated_at}}</p>
            <van-rate
              v-model="v.rating_star"
              allow-half
              void-icon="star"
              void-color="#eee"
              size="0.13rem"
              class="rating_star_1"
            />
            <p class="time_spent_desc">{{v.time_spent_desc}}</p>
            <ul class="foodimg_1">
              <li :key="index+1000" v-for="(value,index) in v.item_ratings">
                <img
                  v-if="value.image_hash"
                  :src="'https://fuss10.elemecdn.com/'+value.image_hash+'.jpeg'"
                  style="width:100%"
                />
                <p>{{value.food_name}}</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "xiangqing",
  data() {
    return {
      businessArr: [],
      classBol: true,
      classBol_1: true,
      gouwuBol: false,
      sp_class_1: "span_1",
      sp_class_2: "span_2",
      id: "",
      spclass: [],
      foodsArr: [],
      price: 0,
      totalNum: 0,
      jiesuan: "还差￥20起送",
      gwbj: "gw_2",
      jsbj: "js_2",
      pjScore: [],
      severScore: 0,
      foodScore: 0,
      pjMsg: [],
      PjClass: [],
      touxiang: "",
      foodMsgs: []
    };
  },
  created() {
    this.businessArr = this.$store.state.business;
    // console.log(this.businessArr);
    this.id = this.$store.state.business.id;
    this.getshipin();
    this.getPjScore();
    this.getPjMsg();
    this.getPjClass();
  },
  methods: {
    jstz() {
      if (this.price < 20) {
        return;
      } else {
        this.$router.push({
          name: "xiadan"
        });
      }
    },
    qingkong() {
      for (let i = 0; i < this.spclass.length; i++) {
        this.spclass[i].__ob__.vmCount = 0;
        for (let j = 0; j < this.spclass[i].foods.length; j++) {
          this.spclass[i].foods[j].__v = 0;
        }
      }
      this.totalNum = 0;
      this.price = 0;
      this.gouwuBol = false;
      this.jiesuan = "还差￥20起送";
      this.jsbj = "js_2";
    },
    foodMsg(value) {
      this.$store.commit("getfoodMsg", value);
      this.foodMsgs = this.$store.state.foodMsg;
      //  console.log(this.foodMsgs)
    },
    pricedel(p) {
      this.price -= p;
      this.totalNum--;
      if (this.price < 20) {
        this.jsbj = "js_2";
        this.jiesuan = "还差￥20起送";
      } else {
        this.jsbj = "js_1";
        this.jiesuan = "去结算";
      }
      if (this.totalNum == 0) {
        this.gwbj = "gw_2";
      } else {
        this.gwbj = "gw_1";
      }
    },
    priceadd(p) {
      this.price += p;
      this.totalNum++;
      if (this.price < 20) {
        this.jsbj = "js_2";
        this.jiesuan = "还差￥" + (20 - this.price) + "起送";
      } else {
        this.jsbj = "js_1";
        this.jiesuan = "去结算";
      }
      if (this.totalNum == 0) {
        this.gwbj = "gw_2";
      } else {
        this.gwbj = "gw_1";
      }
    },
    hclass(bol) {
      this.classBol = bol;
      if (this.classBol == true) {
        this.sp_class_1 = "span_1";
        this.sp_class_2 = "span_2";
      } else {
        this.sp_class_1 = "span_2";
        this.sp_class_2 = "span_1";
      }
    },
    getshipin() {
      const api =
        "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=" + this.id;
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        // console.log(res.data);
        this.spclass = res.data;
        // console.log(this.spclass);
      });
    },
    getPjScore() {
      const api =
        "https://elm.cangdu.org/ugc/v2/restaurants/" +
        this.businessArr.id +
        "/ratings/scores";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        // console.log("score");
        // console.log(res.data);
        this.pjScore = res.data;
        this.severScore = Number(res.data.service_score.toFixed(1));
        this.foodScore = Number(res.data.food_score.toFixed(1));
      });
    },
    getPjMsg() {
      const api =
        "https://elm.cangdu.org/ugc/v2/restaurants/" +
        this.businessArr.id +
        "/ratings?offset=0&limit=10";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        // console.log("评价信息");
        // console.log(res.data);
        this.pjMsg = res.data;
      });
    },
    getPjClass() {
      const api =
        "https://elm.cangdu.org/ugc/v2/restaurants/" +
        this.businessArr.id +
        "/ratings/tags";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        // console.log(res.data);
        this.PjClass = res.data;
      });
    }
  }
};
</script>
<style scoped>
#wrap {
  height: 100vh;
  /* border: 3px solid red; */
  overflow: hidden;
}
#head {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 1.6rem;
  z-index: 1;
  /* border: 0.01rem solid red; */
}
.header_business {
  height: 0.9rem;
  position: relative;
  background-color: rgb(178, 179, 197);
  padding: 0.1rem;
}
.header_business img {
  width: 0.9rem;
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
}
.name {
  position: absolute;
  top: 0.12rem;
  left: 1.1rem;
  color: white;
  font-size: 0.2rem;
}
.float_delivery_fee {
  font-size: 0.12rem;
  color: whitesmoke;
  position: absolute;
  left: 1.1rem;
  bottom: 0.35rem;
}
.promotion_info {
  font-size: 0.12rem;
  color: whitesmoke;
  position: absolute;
  left: 1.1rem;
  bottom: 0.1rem;
}
.el {
  position: absolute;
  left: 0rem;
  top: 0rem;
  color: white;
  font-size: 0.3rem;
  z-index: 1;
}
.er {
  color: white;
  position: absolute;
  right: 0.1rem;
  top: 0.4rem;
  font-size: 0.3rem;
}
.sp {
  font-size: 0.2rem;
  height: 0.5rem;
  background-color: white;
  display: flex;
  justify-content: space-around;
}
.span_1 {
  color: rgb(18, 150, 219);
  height: 0.3rem;
  line-height: 0.4rem;
  padding-bottom: 0.05rem;
  border-bottom: 0.03rem solid rgb(18, 150, 219);
}
.span_2 {
  color: black;
  height: 0.3rem;
  line-height: 0.4rem;
  padding-bottom: 0.05rem;
  border-bottom: 0.03rem solid white;
}
#foodclass {
  padding-top: 1.6rem;
  padding-bottom: 0.5rem;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.ulone {
  width: 30%;
  height: 100%;
  overflow-y: scroll;
  /* border: 1px solid red; */
  overflow-x: hidden;
}
.ulone::-webkit-scrollbar {
  display: none;
}
.ultwo {
  width: 70%;
  height: 100%;
  overflow-y: scroll;
  /* border: 1px solid red; */
  overflow-x: hidden;
}
.foodsclass_1 {
  position: relative;
  width: 100%;
  border-top: 0.005rem solid gray;
  /* padding: 0.2rem 0.2rem 0.2rem 0.1rem; */
  box-sizing: border-box;
}
.foodsclass_1 a {
  display: inline-block;
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  /* padding: 0.2rem 0.2rem 0.2rem 0.1rem; */
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ultwo::-webkit-scrollbar {
  display: none;
}
.foodsclass_2 {
  width: 100%;
  /* border: 0.01rem solid red; */
  background-color: white;
  /* box-sizing: border-box; */
}
.rexiao {
  padding: 0.15rem;
  background-color: rgb(245, 245, 245);
}
.rexiao span:nth-child(1) {
  font-size: 0.2rem;
  color: gray;
}
.rexiao span:nth-child(2) {
  font-size: 0.1rem;
  color: gray;
}

/* 每个食物 */
.foodsxq {
  height: 1rem;
  padding: 0.1rem;
  /* border: 3px solid red; */
  border-top: 0.01rem solid darkgray;
  position: relative;
}
.foodimg {
  width: 0.45rem;
}
.foodname {
  position: absolute;
  left: 0.57rem;
  top: 0.1rem;
}
.description_1 {
  position: absolute;
  font-size: 0.12rem;
  color: gray;
  left: 0.57rem;
  top: 0.3rem;
}
.month_sales {
  font-size: 0.13rem;
  color: black;
  position: absolute;
  top: 0.5rem;
  left: 0.57rem;
}
.image_text {
  font-size: 0.12rem;
  color: #f1884f;
  border: 0.01rem solid #f1884f;
  border-radius: 30%;
  position: absolute;
  top: 0.67rem;
  left: 0.57rem;
}
.price {
  color: #f1884f;
  font-size: 0.16rem;
  font-weight: bold;
  position: absolute;
  top: 0.85rem;
  left: 0.55rem;
}
.addshop {
  width: 0.2rem;
  height: 0.2rem;
  text-align: center;
  line-height: 0.18rem;
  display: inline-block;
  background-color: rgb(49, 144, 232);
  color: white;
  font-weight: bold;
  font-size: 0.2rem;
  border-radius: 50%;
  position: absolute;
  top: 0.85rem;
  right: 0.2rem;
}
.redeceshop {
  width: 0.18rem;
  height: 0.18rem;
  text-align: center;
  line-height: 0.16rem;
  display: inline-block;
  border: 0.01rem solid rgb(49, 144, 232);
  color: rgb(49, 144, 232);
  font-weight: bold;
  font-size: 0.2rem;
  border-radius: 50%;
  position: absolute;
  top: 0.85rem;
  right: 0.6rem;
}
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.5rem;
  background-color: rgb(61, 61, 63);
}
.shop_icon {
  border: 0.03rem solid rgb(68, 68, 68);
  position: absolute;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  font-size: 0.4rem;
  text-align: center;
  line-height: 0.5rem;
  font-weight: bold;
  color: white;
  background-color: rgb(61, 61, 63);
  left: 0.2rem;
  top: -0.2rem;
  z-index: 1;
}
.__v {
  font-size: 0.15rem;
  position: absolute;
  top: 0.88rem;
  right: 0.45rem;
}
.total {
  font-size: 0.2rem;
  color: white;
  position: absolute;
  left: 0.8rem;
  top: 0.05rem;
}
.totalnum {
  padding: 0.03rem;
  text-align: center;
  line-height: 0.13rem;
  display: inline-block;
  background-color: red;
  color: white;
  font-size: 0.15rem;
  border-radius: 50%;
  position: absolute;
  top: 0rem;
  right: 0rem;
}
.peisongprice {
  font-size: 0.13rem;
  color: white;
  position: absolute;
  left: 0.8rem;
  bottom: 0.05rem;
}
#gw_1 {
  background-color: rgb(49, 144, 232);
}
#gw_2 {
  background-color: rgb(61, 61, 63);
}
.jiesuan {
  text-align: center;
  height: 100%;
  line-height: 0.5rem;
  position: absolute;
  width: 1.3rem;
  font-size: 0.18rem;
  color: white;
  background-color: rgb(83, 83, 86);
  top: 0;
  right: 0;
}
#js_1 {
  background-color: rgb(76, 217, 100);
}
#js_2 {
  background-color: rgb(83, 83, 86);
}
#pingjia {
  margin-top: 1.6rem;
}
#pingjia_1 {
  padding: 0.1rem;
  position: relative;
  height: 1.2rem;
  background-color: white;
  /* border: 1px solid red; */
}
.rating {
  position: absolute;
  left: 0.8rem;
  top: 0.2rem;
  color: orange;
}
.zhrating {
  font-size: 0.18rem;
  color: gray;
  position: absolute;
  top: 0.6rem;
  left: 0.55rem;
}
.gy {
  position: absolute;
  font-size: 0.12rem;
  color: gray;
  left: 0.4rem;
  top: 0.9rem;
}
.xingfont_1 {
  position: absolute;
  left: 1.5rem;
  top: 0.2rem;
  color: gray;
  font-size: 0.16rem;
}
.xingfont_2 {
  position: absolute;
  left: 1.5rem;
  top: 0.5rem;
  color: gray;
  font-size: 0.16rem;
}
.xing_1 {
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0.16rem;
  left: 2.2rem;
}
.xing_2 {
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0.45rem;
  left: 2.2rem;
}
.deliver_time {
  font-size: 0.14rem;
  color: gray;
  position: absolute;
  top: 0.75rem;
  left: 1.5rem;
}
.pjclass {
  border-radius: 10%;
  margin-top: 0.05rem;
  margin-left: 0.05rem;
  padding: 0.05rem;
  background-color: rgb(235, 245, 255);
  float: left;
}
#pingjia_2 {
  overflow: hidden;
  border-bottom: 0.02rem solid rgb(175, 175, 175);
  background-color: whitesmoke;
  padding: 0.1rem;
}
.pingjiali {
  height: 2rem;
  position: relative;
  border-bottom: 0.02rem solid gainsboro;
}
.touxiang {
  width: 0.5rem;
}
.username {
  font-size: 0.13rem;
  position: absolute;
  left: 0.6rem;
  top: 0.1rem;
}
.rated_at {
  position: absolute;
  right: 0.1rem;
  top: 0.1rem;
  font-size: 0.13rem;
}
.rating_star_1 {
  position: absolute;
  left: 0.55rem;
  top: 0.4rem;
}
.time_spent_desc {
  position: absolute;
  font-size: 0.14rem;
  top: 0.45rem;
  left: 1.75rem;
}
.foodimg_1 {
  position: absolute;
  left: 0.55rem;
  top: 0.6rem;
  width: 1.8rem;
  padding: 0.1rem;
  /* border: 1px solid blue; */
  display: flex;
  justify-content: space-between;
}
.foodimg_1 li {
  /* border: 1px solid red; */
  width: 0.8rem;
}
.foodimg_1 li p {
  width: 100%;
  /* border: 1px solid red; */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#head_1 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: rgb(48, 144, 232);
  font-size: 0.16rem;
  color: white;
  padding: 0.07rem;
}
#head_1 span {
  font-size: 0.2rem;
  /* font-weight:bold; */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.gouwuche {
  max-height: 4rem;
  overflow: scroll;
  position: absolute;
  bottom: 0.5rem;
  width: 100%;
  font-size: 0.16rem;
}
.gouwuche h3 {
  color: gray;
  padding: 0.1rem;
  background-color: rgb(224, 224, 224);
  display: flex;
  justify-content: space-between;
}
.gouwuclass {
  display: flex;
  justify-content: space-between;
  font-size: 0.18rem;
  padding: 0.2rem;
  background-color: white;
}
.gouwuprice {
  color: rgb(241, 136, 79);
}
.gouwunumR {
  width: 0.18rem;
  height: 0.18rem;
  text-align: center;
  line-height: 0.16rem;
  display: inline-block;
  border: 0.01rem solid rgb(49, 144, 232);
  color: rgb(49, 144, 232);
  font-weight: bold;
  font-size: 0.2rem;
  border-radius: 50%;
}
.gouwunumA {
  width: 0.2rem;
  height: 0.2rem;
  text-align: center;
  line-height: 0.18rem;
  display: inline-block;
  background-color: rgb(49, 144, 232);
  color: white;
  font-weight: bold;
  font-size: 0.2rem;
  border-radius: 50%;
}
</style>

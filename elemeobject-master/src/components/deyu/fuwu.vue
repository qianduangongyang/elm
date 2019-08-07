<template>
  <div id="wrap">
    <div id="top" @click="back()">
      <img src="../../assets/back.png" />
      <p>服务中心</p>
    </div>
    <!-- 在线客服部分 -->
    <div id="kefu">
      <div id="kefu1">
        <img src="../../assets/kefu.png" alt />
        <p>在线客服</p>
      </div>
      <div id="kefu2">
        <a style="color:black" href="tel:18657173438">
          <img src="../../assets/dianhua.png" alt />
          <p>在线客服</p>
        </a>
      </div>
    </div>
    <!-- 热门问题 -->
    <div id="hotquestion">热门问题</div>
    <div @click="chuanzhi1()" class="other">
      <P>{{datas.supervipCaption}}</P>
      <img src="../../assets/right.png" alt />
    </div>

    <div @click="chuanzhi2()" class="other">
      <P>{{datas.signCaption}}</P>
      <img src="../../assets/right.png" alt />
    </div>

    <div @click="chuanzhi3()" class="other">
      <P>{{datas.rankCaption}}</P>
      <img src="../../assets/right.png" alt />
    </div>

    <div @click="chuanzhi4()" class="other">
      <P>{{datas.pointtextCaption}}</P>
      <img src="../../assets/right.png" alt />
    </div>

    <div @click="chuanzhi5()" class="other">
      <P>{{datas.phototutorialCaption}}</P>
      <img src="../../assets/right.png" alt />
    </div>

    <div @click="chuanzhi6()" class="other">
      <P>{{datas.paymentCaption}}</P>
      <img src="../../assets/right.png" alt />
    </div>

    <div @click="chuanzhi7()" class="other">
      <P>{{datas.otherCaption}}</P>
      <img src="../../assets/right.png" alt />
    </div>

    <div @click="chuanzhi8()" class="other">
      <P>{{datas.ontimeCaption}}</P>
      <img src="../../assets/right.png" alt />
    </div>

    <div @click="chuanzhi10()" class="other">
      <P>{{datas.memberTimesCaption}}</P>
      <img src="../../assets/right.png" alt />
    </div>

    <div @click="chuanzhi11()" class="other">
      <P>{{datas.memberCaption}}</P>
      <img src="../../assets/right.png" alt />
    </div>

    <div @click="chuanzhi12()" class="other">
      <P>{{datas.hongbaoCaption}}</P>
      <img src="../../assets/right.png" alt />
    </div>

    <div @click="chuanzhi13()" class="other">
      <P>{{datas.freshmanCaption}}</P>
      <img src="../../assets/right.png" alt />
    </div>

    <div @click="chuanzhi14()" class="other">
      <P>{{datas.forgotCaption}}</P>
      <img src="../../assets/right.png" alt />
    </div>

    <div @click="chuanzhi15()" class="other">
      <P>{{datas.discountCaption}}</P>
      <img src="../../assets/right.png" alt />
    </div>

    <div @click="chuanzhi16()" class="other">
      <P>{{datas.disclaimerCaption}}</P>
      <img src="../../assets/right.png" alt />
    </div>

    <div @click="chuanzhi17()" class="other">
      <P>{{datas.couponCaption}}</P>
      <img src="../../assets/right.png" alt />
    </div>

    <div @click="chuanzhi18()" class="other">
      <P>{{datas.businessCaption}}</P>
      <img src="../../assets/right.png" alt />
    </div>

    <div @click="chuanzhi19()" class="other">
      <P>{{datas.balanceCaption}}</P>
      <img src="../../assets/right.png" alt />
    </div>

    <div @click="chuanzhi20()" class="other">
      <P>{{datas.awesomeRestaurantCaption}}</P>
      <img src="../../assets/right.png" alt />
    </div>

    <div @click="chuanzhi21()" class="other">
      <P>{{datas.anonymousBuyCaption}}</P>
      <img src="../../assets/right.png" alt />
    </div>

    <div @click="chuanzhi22()" class="other">
      <P>{{datas.activityCaption}}</P>
      <img src="../../assets/right.png" alt />
    </div>
  </div>
</template>
<script>
export default {
  name: "fuwu",
  data() {
    return {
      datas: ""
    };
  },
  created() {
    this.getData();
  },
  methods: {
    chuanzhi1() {
      this.$router.push({
        name: "quanyi",
        query: {
          a: this.datas.supervipCaption,
          ke: this.datas.supervipContent
        }
      });
    },
    chuanzhi2() {
      this.$router.push({
        name: "quanyi",
        query: {
          a: this.datas.signCaption,
          ke: this.datas.signContent
        }
      });
    },
    chuanzhi3() {
      this.$router.push({
        name: "quanyi",
        query: {
          a: this.datas.rankCaption,
          ke: this.datas.rankContent
        }
      });
    },
    chuanzhi4() {
      this.$router.push({
        name: "quanyi",
        query: {
          a: this.datas.pointtextCaption,
          ke: this.datas.pointtextContent
        }
      });
    },
    chuanzhi5() {
      this.$router.push({
        name: "quanyi",
        query: {
          a: this.datas.phototutorialCaption,
          ke: this.datas.memberContent
        }
      });
    },
    chuanzhi6() {
      this.$router.push({
        name: "quanyi",
        query: {
          a: this.datas.paymentCaption,
          ke: this.datas.paymentContent
        }
      });
    },
    chuanzhi7() {
      this.$router.push({
        name: "quanyi",
        query: {
          a: this.datas.otherCaption,
          ke: this.datas.otherContent
        }
      });
    },
    chuanzhi8() {
      this.$router.push({
        name: "quanyi",
        query: {
          a: this.datas.ontimeCaption,
          ke: this.datas.ontimeContent
        }
      });
    },
    // chuanzhi9() {
    //   this.$router.push({
    //     name: "quanyi",
    //     query: {
    //       a: this.datas.memberTimesCaption,
    //       ke: this.datas.memberTimesContent
    //     }
    //   });
    // },
    chuanzhi10() {
      this.$router.push({
        name: "quanyi",
        query: {
          a: this.datas.memberPartCutCaption,
          ke: this.datas.memberPartCutContent
        }
      });
    },
    chuanzhi11() {
      this.$router.push({
        name: "quanyi",
        query: {
          a: this.datas.memberCaption,
          ke: this.datas.memberContent
        }
      });
    },
    chuanzhi12() {
      this.$router.push({
        name: "quanyi",
        query: {
          a: this.datas.hongbaoCaption,
          ke: this.datas.hongbaoContent
        }
      });
    },
    chuanzhi13() {
      this.$router.push({
        name: "quanyi",
        query: {
          a: this.datas.freshmanCaption,
          ke: this.datas.freshmanContent
        }
      });
    },
    chuanzhi14() {
      this.$router.push({
        name: "quanyi",
        query: {
          a: this.datas.forgotCaption,
          ke: this.datas.forgotContent
        }
      });
    },
    chuanzhi15() {
      this.$router.push({
        name: "quanyi",
        query: {
          a: this.datas.discountCaption,
          ke: this.datas.discountContent
        }
      });
    },
    chuanzhi16() {
      this.$router.push({
        name: "quanyi",
        query: {
          a: this.datas.disclaimerCaption,
          ke: this.datas.disclaimerContent
        }
      });
    },
    chuanzhi17() {
      this.$router.push({
        name: "quanyi",
        query: {
          a: this.datas.couponCaption,
          ke: this.datas.couponContent
        }
      });
    },
    chuanzhi18() {
      this.$router.push({
        name: "quanyi",
        query: {
          a: this.datas.businessCaption,
          ke: this.datas.memberContent
        }
      });
    },
    chuanzhi19() {
      this.$router.push({
        name: "quanyi",
        query: {
          a: this.datas.balanceCaption,
          ke: this.datas.balanceContent
        }
      });
    },
    chuanzhi20() {
      this.$router.push({
        name: "quanyi",
        query: {
          a: this.datas.awesomeRestaurantCaption,
          ke: this.datas.memberContent
        }
      });
    },
    chuanzhi21() {
      this.$router.push({
        name: "quanyi",
        query: {
          a: this.datas.anonymousBuyCaption,
          ke: this.datas.memberContent
        }
      });
    },
    chuanzhi22() {
      this.$router.push({
        name: "quanyi",
        query: {
          a: this.datas.activityCaption,
          ke: this.datas.activityContent
        }
      });
    },
    getData() {
      const api = "https://elm.cangdu.org/v3/profile/explain";
      this.$http({
        url: api,
        methods: "get",
        data() {}
      }).then(res => {
        this.datas = res.data;
        // console.log(this.datas);
      });
    },

    //返回上一级
    back() {
      this.$router.back();
    }
  }
};
</script>
<style>
#wrap {
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
/* 在线客服部分 */
#kefu {
  width: 3.75rem;
  height: 0.8rem;
  margin-top: 0.55rem;
  display: flex;
  justify-content: space-between;
}
#kefu1,
#kefu2 {
  width: 1.875rem;
  background-color: ghostwhite;
  border: 0.01rem solid gainsboro;
  position: relative;
}
#kefu1 img,
#kefu2 img {
  width: 0.4rem;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
}
#kefu1 p,
#kefu2 p {
  font-size: 0.15rem;
  position: absolute;
  left: 50%;
  top: 80%;
  transform: translate(-50%, -50%);
}
#hotquestion {
  height: 0.6rem;
  line-height: 0.6rem;
  padding-left: 0.2rem;
  border: 0.01rem solid gainsboro;
  background-color: ghostwhite;
  font-size: 0.18rem;
  color: black;
}
.other {
  height: 0.4rem;
  line-height: 0.4rem;
  border: 0.01rem solid gainsboro;
  background-color: ghostwhite;
  position: relative;
}
.other p {
  font-size: 0.15rem;
  position: absolute;
  left: 0.1rem;
  top: 0;
}
.other img {
  float: right;
  margin: 0.15rem 0.15rem 0 0;
}
</style>

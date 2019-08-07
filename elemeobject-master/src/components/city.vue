<template>
  <div>
    <header>
      <router-link to="" style="color:white"><p>ele.me</p></router-link>
      <router-link to="/denglu" style="color:white"><p>登陆/注册</p></router-link>
    </header>
    <div id="loction">
      <span>当前定位城市:</span>
      <span>定位不正确，请在城市列表中选择</span>
    </div>
    <router-link to="/Cmessage">
      <div id="lCity" @click="add(lcityData.id,lcityData.name)">
        <span>{{lcityData.name}}</span>
        <span>></span>
      </div>
    </router-link>
    <div id="hotCity">
      <p>热门城市</p>
      
        <ul>
          <li :key="i" v-for="(v,i) in hotCitys" >
              <router-link :to="'/Cmessage?cityId=' + v.id + '&cityName='+v.name" style="color:rgb(48, 144, 232)">
              {{v.name}}
               </router-link>
              </li>
        </ul>
     
    </div>
    <!-- <p>A(按字母排序)</p> -->
    <div id="Acity">
      <div class="eryblock">
        <div style="background-color: white;" :key="key" v-for="(value,key) in groupCities">
          <h3 style="background-color: white;
          line-height: 0.4rem;
          margin-top:0.15rem;
          padding-left:0.1rem;">
            {{key}}
            <span style="color:darkgrey" v-if="key=='A'">(按字母排序)</span>
          </h3>
          <ul>
              <li  class="cities" :key="i" v-for="(v,i) in value">
                   <router-link style="color:gray" :to="'/Cmessage?cityId=' + v.id + '&cityName='+v.name">
                  {{v.name}}
                  </router-link>
                  </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { Loading } from 'element-ui';
// let loadingInstance;
export default {
  name: "city",
  data() {
    return {
      lcityData: "",
      hotCitys: [],
      groupCities: {},
      count:0
    };
  },
  created() {
    this.lCity();
    this.hotCity();
    this.a();
    // loadingInstance = Loading.service({fullscreen:true});
  },
  methods: {
    
      add(a,b){
             this.$router.push({name:'Cmessage',query:{id:a,cityName:b}})
            //  console.log(a)
      },
    lCity() {
      const api = "https://elm.cangdu.org/v1/cities?type=guess";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        this.lcityData = res.data;
        // this.count++;
        // if (this.count == 3) {
          
        //   loadingInstance.close();
        //   this.count = 0;
        // }
      });
    },
    hotCity() {
      const api = "https://elm.cangdu.org/v1/cities?type=hot";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        this.hotCitys = res.data;
        // this.count++;
        // if (this.count == 3) {
          
        //   loadingInstance.close();
        //   this.count = 0;
        // }
      });
    },
    // Acity(){
    //     const api ="https://elm.cangdu.org/v1/cities?type=group";
    //     this.$http({
    //         url:api,
    //         method:"get",
    //     }).then(res =>{
    //         this.allcity =res.data.A;
    //     })
    // }
    a() {
      const api = "https://elm.cangdu.org/v1/cities?type=group";
      this.$http({
        url: api,
        method: "get"
      }).then(res => {
        // console.log(res);
        var arr = [];
        //先排序,再给数据源赋值
        for (const key in res.data) {
          arr.push(key);
        }
        arr.sort();
        // console.log(arr);
        for (var i = 0; i < arr.length; i++) {
          // this.groupCities[arr[i]] = res.data[arr[i]];
          this.$set(this.groupCities, arr[i], res.data[arr[i]]);
        }
        // this.groupCities = res.data;
        // var arr = [];
        // this.count++;
        // if (this.count == 3) {
          
        //   loadingInstance.close();
        //   this.count = 0;
        // }
      });
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
#loction {
  font-size: 0.12rem;
  height: 0.45rem;
  line-height: 0.45rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.05rem 0 0.05rem;
  color: gray;
  background-color: white;
  border-bottom: 0.01rem solid darkgray;
}
#loction span:nth-child(1){
    color: black;
}
#lCity {
  /* font-size: 0.1rem; */
  height: 0.4rem;
  line-height: 0.4rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.1rem 0 0.1rem;
  color: darkgrey;
  background-color: white;
  border-bottom: 0.01rem solid darkgray;
}
#lCity span:nth-child(1) {
  color: rgb(48, 144, 232);
}
#hotCity {
  margin-top: 0.1rem;
  background-color: white;
}
#hotCity p {
  font-size: 0.15rem;
  padding: 0.1rem;
  border-top: 0.01rem solid darkgrey;
  color: gray;
}
#hotCity ul {
  overflow: hidden;
}
#hotCity ul li {
  padding: 0.1rem;
  float: left;
  width: 25%;
  text-align: center;
  box-sizing: border-box;
  border: 0.01rem solid darkgrey;
  background-color: white;
  color: rgb(48, 144, 232);
}
#Acity {
  overflow: hidden;
}
/* #zimu {
  margin-top: 0.1rem;
  height: 0.4rem;
  background-color: white;
  
} */
#Acity ul li {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 0.5rem;
  line-height: 0.5rem;
  float: left;
  width: 25%;
  text-align: center;
  box-sizing: border-box;
  border: 0.01rem solid darkgrey;
  background-color: white;
  color: gray;
}
.eryblock ul {
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
}
.cities {
  width: 25%;
  height: 0.4rem;
  color: black;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 0.3rem;
  text-align: center;
  border: 0.01rem solid gray;
  box-sizing: border-box;
}
</style>

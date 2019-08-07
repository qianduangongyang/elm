<template>
    <div>
        <header>
            <img @click="back()" src="../../assets/back.png" alt="">
            <p>搜索地址</p>
        </header>
        <div id="inp">
            <input style="outline: none;" v-model="keyword" placeholder="请输入小区/写字楼/学校等" type="text">
            <button @click="search()">确认</button>
        </div>
        <div id="text">
            <P>为了满足商家的送餐要求,建议您从列表中选择地址</P>
        </div>
        <div v-if="kkk" id="text2">
            <p>找不到地址?</p>
            <p>请尝试输入小区,写字楼或学校名</p>
            <p>详细地址,(如门牌号)可稍后输入哦</p>
        </div>
   <div id="xinxi">
       <ul>
          <li :key="i" v-for="(v,i) in food"  @click="chuanzhi(i)">
               <p>{{v.name}}</p>
               <p style="color:gray">{{v.address}}</p>
               </li>
       </ul>
   </div>
    </div>
</template>
<script>
export default {
    name:"Searchaddress",
    data() {
        return {
            keyword:"",
            food:[],
            kkk:true
        }
    },
    methods: {
        back(){
            this.$router.back();
        },
        search(){
            if (this.keyword == "") {
                return;
            } else {
                this.kkk =false
                const api ="https://elm.cangdu.org/v1/pois?city_id="+this.id+"&keyword="+this.keyword+"&type=search";
            this.$http({
                url:api,
                method:'get',
            }).then(res => {
                
                this.food=res.data;
                // console.log(this.food);
                if (this.food.length == 0) {
                    this.food.push({name:"抱歉，无搜索结果"})
                }
            })
            }
        },
        chuanzhi(i){
           this.$store.commit("getsousuo",this.food[i].name),
            this.$router.push({
                name:"newaddress",
                
            })
            // console.log(a.name)
        }
        
        
    },
    
}
</script>
<style scoped>
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
#inp{
    height: 0.65rem;
    background-color: white;
    /* border: 0.01rem solid red; */
    margin-top: 0.55rem;
}
#inp input{
    background-color: rgb(242,242,242);
    width: 75%;
    height: 0.45rem;
    border-radius: 0.06rem;
    margin: 0.08rem 0 0 0.08rem;
}
#inp button{
    outline: none;
    background-color: rgb(48, 144, 232);
    color: white;
    float: right;
    font-size: 0.1rem;
    width: 17%;
    height: 0.45rem;
    border-radius: 0.08rem;
    margin: 0.08rem 0.12rem 0 0 ;
}
#text{
    height: 0.3rem;;
    background: #fff6e4;
    color: #ff883f;
    font-size: 0.155rem;
    line-height: 0.3rem;
    text-align: center;
}
#text2{
    margin-top: 1.3rem;
    color: gray;
    font-size: 0.18rem;
    text-align: center
}
#text2 p:nth-child(2){
margin: 0.15rem 0 0.15rem 0;
}
li{
    color: gray;
    padding-left: 0.1rem;
 border-bottom: 0.01rem solid gray;
}
li p:nth-child(1){
     /* padding: 0.2rem; */
     margin-top: 0.15rem;
     /* background-color:white; */
    
}
li p:nth-child(2) {
    margin: 0.1rem 0 0.1rem 0;
}
</style>

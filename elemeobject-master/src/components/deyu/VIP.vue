<template>
    <div style="overflow:hidden">
        <header>
            <img @click="shang()" src="../../assets/back.png" alt="">
            <p>会员中心</p>
        </header>
        <div id="zhanghu">
<span  style="color:gray;
">为账户</span><span style="margin:0 0.1rem 0 0.1rem">{{yonghu}}</span><span  style="color:gray;">购买会员</span>
        </div>
        <div id="center">
            <router-link to="/youhui">
             <div class="tequan">
<span style="color:black">会员特权</span><span>会员说明</span><img src="../../assets/right.png" alt="">
            </div>
            </router-link>
           
            <div class="peisong">
                <div class="img1">
  <img src="../../assets/yewutubiaosheng.png" alt="">
                </div>
             <div class="wenzi">
<p>减免配送费</p>
               <p>每月减免30单,每日可减免3单,每单最高减4元</p>
               <p>蜂鸟转送专享</p>
             </div>
               
            </div>
            <div class="peisong">
                <div class="img1">
 <img src="../../assets/yewutubiaosheng.png" alt="">
                </div>
              <div class="wenzi">
<p>减免配送费</p>
               <p>每月减免30单,每日可减免3单,每单最高减4元</p>
               <p>蜂鸟转送专享</p>
              </div>
               
            </div>
        </div>
        <div id="kaitong">
            <div id="kai">
                <p>开通会员</p>
            </div>
            
             <div id="goumai">
<span>一个月</span><span>￥20</span>
<router-link style=" border-radius: 0.05rem;
    border: 0.01rem solid orangered;
    color: orangered;
    padding: 0.05rem;" to="/zhifu">
<span>购买</span>
</router-link>

            </div>
            
           
              </div>
              <router-link to="/duihuanvip">
               <div id="duihuan">
                <span style="color:black">兑换会员</span>
                <span>使用卡号卡密</span>
                <img src="../../assets/right.png" alt="">
            </div>
              </router-link>
           <router-link to="/shopjilv">
           <div id="jilv">
                <span style="color:black">购买记录</span>
                <span>开发票</span>
                <img src="../../assets/right.png" alt="">
            </div>
           </router-link>
            
      
       
    </div>
</template>
<script>
export default {
    name:"VIP",
    data() {
        return {
           yonghu:"" 
        }
    },

    created() {
        this.yonghu = localStorage.username;
        // this.add();
    },
    methods: {
        // add(){
        //     this.yonghu = this.$route.query.username
        // },
        shang(){
            //   返回上一个历史记录
                //   this.$router.go(-1);
                // 或者
                  this.$router.back();
        }
    },

}
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
#zhanghu{
   text-indent: 1em;
    height: 0.4rem;
    margin-top: 0.7rem;
}
#center{
    background-color: white;
}
.tequan{
    height: 0.5rem;
    font-size: 0.18rem;
    text-indent: 1em;
    line-height: 0.5rem;
    border-bottom: 0.001rem solid gray;
}
.tequan span:nth-child(2){
    color: gray;
    margin-left: 1.7rem;
}
.tequan img{
    width: 0.08rem;
    margin:0 0 0 0.1rem;
}
.peisong{
    border-bottom:0.01rem solid gray;
    height: 1rem;
}
.img1{
    width: 20.8%;
    float: left;
    height: 1rem;
}
.img1 img{
    width: 0.5rem;
    height: 0.5rem;
    margin: 0.2rem 0 0 0.15rem;
}
.wenzi{
    margin: 0.15rem 0 0 0rem;
    width: 78%;
    float: left;
}
.wenzi p:nth-child(1){
     font-size: 0.18rem;
}
.wenzi p:nth-child(2){
    color:gray;
     font-size: 0.14rem;
     margin-top: 0.07rem;
}
.wenzi p:nth-child(3){
    color:gray;
     font-size: 0.14rem;
     margin-top: 0.07rem;
}
#kaitong{
    background-color: white;
    margin-top: 0.15rem;
}
#kai{
    font-size: 0.18rem;
    text-indent: 1em;
    line-height: 0.5rem;
    height: 0.5rem;
    border-bottom: 0.01rem solid gray;
}
#goumai{
    font-size: 0.18rem;
    text-indent: 1em;
    line-height: 0.5rem;
    height: 0.5rem;
    /* border-bottom: 0.01rem solid gray; */
}
#goumai span:nth-child(2){
    color:orangered;
    margin: 0 1.8rem 0 0.1rem;
    
}
#duihuan{
    margin-top: 0.15rem;
    background-color: white;
    height: 0.5rem;
    font-size: 0.18rem;
    text-indent: 1em;
    line-height: 0.5rem;
    /* border-bottom: 0.001rem solid gray; */
}
#duihuan span:nth-child(2){
    font-size: 0.15rem;
    color: gray;
    margin-left: 1.5rem;
}
#duihuan img{
    width: 0.08rem;
    margin:0 0 0 0.07rem;
}
#jilv{
    margin-top: 0.15rem;
    background-color: white;
    height: 0.5rem;
    font-size: 0.18rem;
    text-indent: 1em;
    line-height: 0.5rem;
    /* border-bottom: 0.001rem solid gray; */
}
#jilv span:nth-child(2){
    font-size: 0.15rem;
    color: gray;
    margin-left: 1.94rem;
}
#jilv img{
    width: 0.08rem;
    margin:0 0 0 0.07rem;
}

</style>

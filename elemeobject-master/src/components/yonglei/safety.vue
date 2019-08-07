<template>
    <div>
        <div id="header">
      <router-link to="/shangjiamsg"><img src="../../assets/back.png" style="width:0.3rem;"></router-link>
      <span>食品监督安全公示</span>
        </div>
        <div id="Secure">
          <p class="spjs"><span>食品监督安全公示</span></p>
          <img src="../../assets/12.png" alt="" style="width:1.2rem">
          <p class="jieguo">监督检查结果：<span style="color:rgb(126,211,31)">良好</span></p>
          <p class="jieguotime">检查时间：</p>
      </div>
      <div class="dengji">
          <p class="spjs">工商登记信息</p>
          <ul>
            <li>企业名称</li>
            <li>工商执照注册号</li>
            <li>注册资本</li>
            <li>注册地址</li>
            <li>属地监管所</li>
            <li>法定代表人</li>
            <li>经营范围</li>
          </ul>
      </div>
      <div class="dengji">
          <p class="spjs">餐饮许可证</p>
          <ul>
              <li>营业范围</li>
              <li>许可证有效期</li>
              <li>许可证号</li>
              <li>发证时间</li>
          </ul>
      </div>
    </div>
</template>
<script>
export default {
    name:'safety'
}
</script>
<style scoped>
#header {
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
#header span {
  font-size: 0.2rem;
  /* font-weight:bold; */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#Secure{
    position: relative;
    margin-top: 0.4rem;
    background-color: white;
    /* margin-top: 0.1rem; */
    border-bottom: 0.02rem solid rgb(235, 235, 238);
}
.spjs{
    border-bottom: 0.01rem solid rgb(235, 235, 238);
    font-size: 0.18rem;
    padding: 0.1rem;
}
.djp{
    border-bottom: 0.01rem solid rgb(235, 235, 238);
    font-size: 0.18rem;
    padding: 0.1rem;
}
.jieguo{
 position: absolute;
 font-size: 0.13rem;
 left: 1.3rem;
 top: 0.7rem;
}
.jieguotime{
 position: absolute;
 font-size: 0.13rem;
 left: 1.3rem;
 top: 0.9rem;
}
.dengji{
    margin-top: 0.02rem;
    /* border: 1px solid red; */
    background-color: white;
}
.dengji ul{
    padding: 0 0.2rem 0.2rem 0.2rem;
}
.dengji ul li{
    font-size: 0.14rem;
    margin-top: 0.2rem;
    color: gray;
}
.zheng{
    margin-top: 0.02rem;
    background-color: white;
}
</style>

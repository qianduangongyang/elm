<template>
    <div>
        <div id="header">
         <img src="../../assets/back.png" style="width:0.3rem;" @click="ht()">
         <span>搜索</span>
        </div>
        <div id="sousuo">
            <el-input v-model="input" placeholder="请输入商家或者食品名称" style="width:80%"></el-input>
            <el-button type="primary" style="width:18.5%">提交</el-button>
        </div>
    </div>
</template>
<script>
export default {
    name:'sec',
    data() {
        return {
            input:""
        }
    },
    methods: {
        ht(){
            this.$router.back()
        }
    },
}
</script>
<style scoped>
#header {
    position: relative;
  background-color: rgb(48, 144, 232);
  font-size: 0.16rem;
  color: white;
  padding:0.07rem;
}
#header span{
    font-size:0.2rem;
    /* font-weight:bold; */
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%)
}
#sousuo{
    padding: 0.15rem;
    background-color: white;
}
</style>

<template>
    <div>
        <header>
            <p @click="shang()">请重新进入</p>
            <p>请返回后重新进入积分商城</p>
            <img  src="../../assets/retrylogin[1].png" alt="">
        </header>
    </div>
</template>
<script>
export default {
    name:"jifen",
    data() {
        return {
            
        }
    },
    methods: {
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
header{
    margin-top: 1.8rem;
    text-align: center
}
header p:nth-child(1){
    color: rgb(48, 144, 232);
    font-size: 0.3rem;
}
header p:nth-child(2){
    margin-top: 0.2rem;
    color: gray;
    font-size: 0.15rem;
}
header img{
    margin-top: 0.2rem;
    width: 1.7rem;
}
</style>

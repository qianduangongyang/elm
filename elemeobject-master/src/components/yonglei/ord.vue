<template>
    <div>
        <div id="toubuu">
         <img src="../../assets/back.png" style="width:0.3rem;" @click="ht()">
         <p>订单列表</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'ord',
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
#toubuu {
  width: 100%;
  height: 0.55rem;
  background-color: rgb(48, 144, 232);
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
}
#toubuu img {
  height: 0.25rem;
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#toubuu p {
  font-size: 0.2rem;
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>

<template>
    <div id="home">
        <footer>
            <div>
                <router-link to="">
                <img src="../../assets/homeT.png" alt=""><br>
                <span>外卖</span>
            </router-link>
            </div>
            <div>
                <router-link to="/search">
                <img src="../../assets/searchF.png" alt=""><br>
                <span>搜素</span>
            </router-link>
            </div>
            <div>
                <router-link to="/order">
                <img src="../../assets/orderF.png" alt=""><br>
                <span>订单</span>
            </router-link>
            </div>
            <div>
                <router-link to="/me">
                <img src="../../assets/meF.png" alt=""><br>
                <span>我的</span>
            </router-link>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    name:'home',
    data() {
        return {
            
        }
    },
    created() {
    },
    methods: {
        
    },
}
</script>
<style scoped>
 footer{
     width: 3.75rem;
     border:0.01rem solid red;
     position: fixed;
     bottom: 0;
     display: flex;
     justify-content: space-around;
 }
 footer div img{
     width: 0.35rem;
 }
 footer div{
     text-align: center;
 }
</style>

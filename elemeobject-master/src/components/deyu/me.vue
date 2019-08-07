<template>
    <div id="me">
             <router-view></router-view>
        <footer>
            <div>
                <router-link to="/home">
                <img src="../../assets/homeF.png" alt=""><br>
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
                <img src="../../assets/meT.png" alt=""><br>
                <span>我的</span>
            </router-link>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    name:'me',
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
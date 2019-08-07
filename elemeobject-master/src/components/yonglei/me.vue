<template>
    <div id="me">
         <router-view></router-view>
        <footer>
            <div>
                <router-link to="/home" style="color:gray">
                <img src="../../assets/homeF.png" alt=""><br>
                <span>外卖</span>
            </router-link>
            </div>
            <div>
                <router-link to="/search" style="color:gray">
                <img src="../../assets/searchF.png" alt=""><br>
                <span>搜索</span>
            </router-link>
            </div>
            <div>
                <router-link to="/order" style="color:gray">
                <img src="../../assets/orderF.png" alt=""><br>
                <span>订单</span>
            </router-link>
            </div>
            <div>
                <router-link to="/me" style="color:gray">
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
     background-color: white;
     padding:0.05rem;
     width: 3.75rem;
     /* border: 1px solid red; */
     position: fixed;
     bottom: 0;
     display: flex;
     justify-content: space-around;
 }
 footer div img{
     width: 0.30rem;
 }
 footer div{
     text-align: center;
 }
</style>
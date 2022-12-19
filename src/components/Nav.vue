<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const routeTo = (urlName)=>{
    router.push({name:urlName});
}
    
    
</script>

<template>
    <div class="nav">
        <div>
            <div class="title" @click="routeTo('Home')">
                <img src="http://blog.benxiongxiong.top/img/benbenxiong.84c36980.png" alt="">
                <span>benbenxiong</span>
            </div>
        </div>
        
        <div class="menu">
            <div class="title" @click="routeTo('ArticleList')">
            <span>技术&文章</span>
            </div>   
            <div class="title">
                <span>随笔日记</span>
            </div>      

            <div class="title">
                <span>留言板</span>
            </div>
            <div class="title">
                <span>个人介绍</span>
            </div>        
        </div>

        
    </div>       
</template>

<style lang="scss">
.nav{
    width: 100%;
    display: flex;
    background: #fff;
    justify-content: space-around;
    align-items: center;
    flex-wrap: nowrap;
    position: absolute;
    top: 0;
    left: 0; 
    padding: 20px; 
    opacity: 0.9;  

    .menu{
        display: flex;
    }

    .title{
        width: 200px;
        padding: 5px;
        font-size: 20px;

        img{
            vertical-align: middle;
            width: 40px;
        }
    }
}
</style>
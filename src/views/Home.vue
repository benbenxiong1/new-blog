<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const routeTo = (urlName)=>{
    router.push({name:urlName});
}
    
</script>

<template>
    <div class="home">
       <div class="nav">
           
            <div class="title" @click="routeTo('Home')">
                <img src="http://blog.benxiongxiong.top/img/benbenxiong.84c36980.png" alt="">
                <span>benbenxiong</span>
            </div>   
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

<style lang="scss" >
.home{

    .nav{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: nowrap;
        flex-direction: row;
        align-content: center;
        background-color: #fff;
        opacity: 0.8;
        height: 80px;
        line-height: 80px;
        border-radius: 10px;

        .title{
            width: 250px;
            padding: 5px;
            font-size: 30px;

            img{
                vertical-align: middle;
                width: 40px;
            }
        }
    }
}

</style>
// 路由文件
import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: ()=>import("../views/Home.vue"),
        meta: {
              title: '首页'
        }
            
    },
    {
        path: '/article-list',
        name: 'ArticleList',
        component: ()=>import("../views/article/list.vue"),
        meta: {
              title: '文章列表'
        }
            
    },
    {
        path: '/article-edit',
        name: 'ArticleEdit',
        component: ()=>import("../views/article/edit.vue"),
        meta: {
              title: '文章详情'
        }
            
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


// 路由发生变化
router.beforeEach((to,from)=>{
    // if(to.meta.requireAuth) {
    //     let token = localStorage.getItem('auth-system-token');
    //     let isLogin = localStorage.getItem('auth-system-login');
    //     if(!token||!isLogin){
    //         return {
    //             path: '/login'
    //         }
    //     }
    // }

    /* 路由发生变化修改页面title */

    if (to.meta.title) {
        document.title = "笨笨熊-"+to.meta.title
    }

})

export default router;

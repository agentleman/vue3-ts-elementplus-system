import {createRouter, createWebHashHistory, createWebHistory,RouteRecordRaw} from "vue-router";

import Home from "../views/home.vue";

const routes:any = [
    // {
    //     path: '/',
    //     redirect: '/login',
    // },
    {
        path: "/",
        name: "Login",
        meta: {
            title: '登录'
        },
        component: () => import("../views/login.vue")
    },
    {
        path:'/home',
        name:'home',
        component:() => import("../views/home.vue")
    }
]

const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes
});

router.beforeEach((to,from,next) => {
    const role = localStorage.getItem('ms_username');
    console.log(to.path)
    // if(!role){
    //     next('/login')
    // }
    next()


})



export default router;

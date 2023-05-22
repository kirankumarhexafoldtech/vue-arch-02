import { createRouter,createWebHistory } from "vue-router";


const routes=[
    {
        path:"/",
        component:()=>import("@/presentation/views/HomeView.vue")
    },
    {
        path:"/login",
        component:()=>import("@/presentation/views/LoginView.vue")
    },
    {
        path:"/signup",
        component:()=>import("@/presentation/views/SignupView.vue")
    }
]


const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router;
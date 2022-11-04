import { createApp } from 'vue';
import {createRouter, createWebHistory } from "vue-router"

import Home from "@/components/Home/index";
import Profile from "@/components/Profile/index";
import Login from "@/components/Login/index";
import Auth from "@/components/Auth/index";
import ChangePwd from "@/components/ChangePwd";
import Test from "@/components/Test";

const routes = [
    {path: "/",component: Home},
    {path: "/profile", component: Profile},
    {path: "/login", component: Login},
    {path: "/auth", component: Auth},
    {path: "/changepwd",component: ChangePwd},
    {path: "/test",component: Test},


];

const router = createRouter({
    history: createWebHistory(),
    routes
})
import App from './App.vue';





createApp(App).use(router).mount('#app')

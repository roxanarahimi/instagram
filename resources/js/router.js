import {createRouter, createWebHistory} from 'vue-router'

import Login from "./components/panel/admin/Login";

import UserEdit from "./components/panel/user/UserEdit";
import Profile from "./components/panel/admin/Profile";
import Error404 from "./components/panel/error/Error404";

const routes = [
    //panel

    {
        path: "/panel",
        // name: "Home",
        component: () => import(/* webpackChunkName: "home" */ '../js/components/panel/Home'),

    },
    {
        path: "/panel/categories",
        //     component: () => import(/* webpackChunkName: "test" */ '../js/components/panel/product/Categories'),
        // name: "Categories",
        component: () => import(/* webpackChunkName: "Categories" */ '../js/components/panel/Categories'),
        props: true,
        params: true
    },





    {
        path: "/panel/user/:id",
        name: "User",
        component: () => import(/* webpackChunkName: "User" */ '../js/components/panel/user/User'),

        // component: User,
    },
    {
        path: "/panel/users",
        component: () => import(/* webpackChunkName: "userAllData" */  './components/panel/allData'),
        name: 'userAllData',
        params: true,
        props: true,

    },
    {
        path: "/panel/edit/user/:id",
        name: "UserEdit",
        component: UserEdit,
        params: true
    },
    {
        path: "/",
        name: 'Login0',
        component: Login,
    },
    {
        path: "/panel/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/panel/profile",
        name: "Profile",
        component: Profile,
    },


    {
        path: "/panel/infos",
        component: () => import(/* webpackChunkName: "infoAllData" */ './components/panel/allData'),
        name: "infoAllData",
        params: true,
        props: true
    },
    {
        path: "/panel/new/info",
        name: "InfoCreate",
        component: () => import(/* webpackChunkName: "InfoCreate" */ '../js/components/panel/info/InfoCreate'),
        params: true
    },
    {
        path: "/panel/edit/info/:id",
        name: "InfoEdit",
        component: () => import(/* webpackChunkName: "InfoEdit" */ '../js/components/panel/info/InfoEdit'),

        params: true
    },
    {
        path: "/panel/info/:id",
        name: "Info",
        component: () => import(/* webpackChunkName: "Info" */ '../js/components/panel/info/Info'),
        params: true
    },

    {
        path: "/panel/admins",
        component: () => import(/* webpackChunkName: "adminAllData" */  './components/panel/allData'),
        name: "adminAllData",
        params: true,
        props: true

    },

    {
        path: "/panel/finance",
        component: () => import(/* webpackChunkName: "financeAllData" */  './components/panel/allData'),
        name: "financeAllData",
        params: true,
        props: true
    },

    // {
    //     path: "/sample",
    //     name: "sample",
    //     component: () => import(/* webpackChunkName: "sample" */ './components/panel/report/catSample'),
    // },
    // {
    //     path: "/chart",
    //     name: "chart",
    //     component: () => import(/* webpackChunkName: "chart" */ './components/panel/report/Chart'),
    // },
    {
        path: "/:catchAll(.*)",
        name: "Error404",
        component: Error404,
    } ,

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

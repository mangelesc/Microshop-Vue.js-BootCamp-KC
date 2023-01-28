import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import tokenUser from "./role-guard";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        beforeEnter: [tokenUser],
        component: HomeView,
    },
    {
        path: "/about",
        name: "about",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
    {
        path: "/profile",
        name: "profile",
        beforeEnter: [tokenUser],
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/ProfileView.vue"),
    },
    {
        path: "/detail/:id",
        name: "detail",
        beforeEnter: [tokenUser],
        component: () =>
            import(/*webpackChunkName: detail*/ "../views/DetailView.vue"),
        props: (route) => {
            const id = Number(route.params.id);
            const userRole = localStorage.getItem("userRole");
            return isNaN(id) ? { id: null, userRole } : { id, userRole }; // id == id:id
        },
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
    },
    {
        path: "/:pathMatch(.*)",
        component: import(
            /*webpackChunkName: notFound*/ "../views/NotFound.vue"
        ),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;

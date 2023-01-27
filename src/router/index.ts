import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
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
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/ProfileView.vue"),
    },
    {
        path: "/detail/:id",
        name: "detail",
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

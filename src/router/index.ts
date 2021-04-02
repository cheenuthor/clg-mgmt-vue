import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import NotFound from "../components/NotFound.vue";
import Chats from "../views/Chats.vue";
import Login from '../views/Login.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    name: "Chat",
    path: "/chats",
    component: Chats,
    props: true,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  { name: "unknown", path: "/:notFound(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

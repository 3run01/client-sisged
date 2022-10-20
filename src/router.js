import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import RecoverPassword from "@/views/RecoverPassword";
import Login from "@/views/Login";
import CallbackLogin from "@/views/CallbackLogin"

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/callback",
    name: "callback",
    component: CallbackLogin,
  },
  {
    path: "/recuperar-senha",
    name: "recoverPassword",
    component: RecoverPassword,
  },
  {
    path: "/",
    name: "home",
    component: Home,
    children: [],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

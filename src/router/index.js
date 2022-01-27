import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Profile from "../components/Profile.vue";
import NotFound from "../components/NotFound.vue";
import Courses from "../components/Courses.vue";
import MainCourse from "../components/MainCourse.vue";
import React from "../components/React.vue";
import Vue from "../components/Vue.vue";
import Users from "../components/Users.vue";
import Product from "../components/Product.vue";
function myGaurd(to,from,next){
  let isAuthenticated = false;
  if(localStorage.getItem('uid')) {
    isAuthenticated = true;
  }else{
    isAuthenticated = false;
  }
  if(isAuthenticated) {
    next();
  }else {
    alert('you are not a prime number');
    next('/');
  }
  
}

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      default:Home,
      a:React,
      b:Vue
    }
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/profile/:id",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
  {
    path: "/courses",
    name: "Courses",
    beforeEnter:myGaurd,
    component: Courses,
    children: [
      {path:"",component: MainCourse},
      {path:"/courses/react",component: React},
      {path:"/courses/vue",component: Vue},
    ]
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
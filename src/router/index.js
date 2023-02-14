import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import ContactIndex from "../views/contact-index.vue"
import ContactDetails from "../views/contact-details.vue"
import ContactEdit from "../views/contact-edit.vue"
import Chart from "../views/chart.vue"
import Signup from "../views/login.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/signup",
      name: "signup",
      component: Signup,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/contact",
      component: ContactIndex,
    },
    {
      path: "/contact/:_id",
      component: ContactDetails,
    },
    {
      path: "/contact/edit/:_id?",
      component: ContactEdit,
    },
    {
      path: "/charts",
      component: Chart,
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.path === "/") {
    next("/signup")
  } else {
    next()
  }
})

export default router

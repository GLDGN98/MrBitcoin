import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import ContactIndex from "../views/contact-index.vue"
import ContactDetails from "../views/contact-details.vue"
import Chart from "../views/chart.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
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
      path: "/charts",
      component: Chart,
    },
  ],
})

export default router

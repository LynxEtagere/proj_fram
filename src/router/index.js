import { createRouter, createWebHistory } from "vue-router";

import Home from "../App.vue";
import Details from "../components/Details.vue";
import Servants from "../components/Servants.vue";
import Acceuil from "../components/Acceuil.vue";
import PageNotFound from "../components/PageNotFound.vue"
// Nous créons d'abord nos Routes
const routes = [
  {
    path: "/",
    component: Acceuil,
  },

  {
    name: "Details",
    path: "/Details/:name?",
    component: Details,
    props: true,
  },
  {
    path: "/Servants",
    component: Servants,
  },
  {
    path:'/:pathMatch(.*)*',
    component: PageNotFound,
  }
];


export default createRouter({
  history: createWebHistory(),
  routes,
});

// export default router;

// app.use(router)
// app.mount("#app")

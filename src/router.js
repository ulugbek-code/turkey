import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import TwentyFive from "./pages/TwentyFive.vue";
// import TheHundred from "./pages/TheHundred.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/valid.php.Guid=7fcae9d7-d9a0-11eb-9744-0358549",
      component: TwentyFive,
    },
    // {
    //   path: " ",
    //   component: TheHundred,
    // },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
// valid.php?Guid=7fcae9d7-d9a0-11eb-9744-0358549

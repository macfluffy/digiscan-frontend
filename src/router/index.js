import { createRouter, createWebHistory } from "vue-router";

import FrontPage from "../pages/frontPage/frontPage.vue";
import Sets from "../pages/sets/sets.vue";

const routes = [
    { path: "/", component: FrontPage },
    { path: "/sets", component: Sets },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
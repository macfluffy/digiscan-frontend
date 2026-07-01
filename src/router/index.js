import { createRouter, createWebHistory } from "vue-router";

import FrontPage from "../pages/frontPage/frontPage.vue";
import AdvancedSearch from "../pages/advancedSearch/advancedSearch.vue";
import Sets from "../pages/sets/sets.vue";

const routes = [
    { path: "/", component: FrontPage },
    { path: "/advancedSearch", component: AdvancedSearch },
    { path: "/sets", component: Sets },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
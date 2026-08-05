import { createRouter, createWebHistory } from "vue-router";

import AdvancedSearch from "../pages/advancedSearch/advancedSearch.vue";
import Card from "../pages/card/card.vue";
import FrontPage from "../pages/frontPage/frontPage.vue";
import SearchResults from "../pages/searchResults/searchResults.vue";
import Set from "../pages/set/set.vue";
import Sets from "../pages/sets/sets.vue";

const routes = [
    { path: "/", component: FrontPage },
    { path: "/advancedSearch", component: AdvancedSearch },
    { path: "/card/:cardSet/:cardNumber/:cardName", component: Card },
    { path: "/search", component: SearchResults },
    { path: "/set/:setNumber", component: Set },
    { path: "/sets", component: Sets },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
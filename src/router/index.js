import { createRouter, createWebHistory } from "vue-router";

import AdvancedSearch from "../pages/advancedSearch/advancedSearch.vue";
import Card from "../pages/card/card.vue";
import FrontPage from "../pages/frontPage/frontPage.vue";
import SearchResults from "../pages/searchResults/searchResults.vue";
import Set from "../pages/set/set.vue";
import Sets from "../pages/sets/sets.vue";

const routes = [
    { 
        path: "/", 
        component: FrontPage, 
        meta: { layout: "HomeLayout" }
    },
    { 
        path: "/advancedSearch", 
        component: AdvancedSearch, 
        meta: { layout: "DefaultLayout" }
    },
    { 
        path: "/card/:cardSet/:cardNumber/:cardName", 
        component: Card, 
        meta: { layout: "DefaultLayout" }
    },
    { 
        path: "/search", 
        component: SearchResults, 
        meta: { layout: "DefaultLayout" }
    },
    { 
        path: "/set/:setNumber", 
        component: Set, 
        meta: { layout: "DefaultLayout" }
    },
    { 
        path: "/sets", 
        component: Sets, 
        meta: { layout: "DefaultLayout" }
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
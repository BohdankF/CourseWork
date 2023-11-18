import {createRouter, createWebHistory} from 'vue-router'
import MainPage from "@/pages/MainPage.vue";
import ContactsPage from "@/pages/ContactsPage.vue";
import ReportsPage from "@/pages/ReportsPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: MainPage,
        },
        {
            path: '/contacts',
            component: ContactsPage,
        },
        {
            path: '/reports',
            component: ReportsPage,
        },
    ],
})

export default router
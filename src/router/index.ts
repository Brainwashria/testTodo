import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../pages/MainPage.vue'

const routes = [
    {
        path: '/',
        component: MainPage,
        name: 'Main'
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router;
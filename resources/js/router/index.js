import { createRouter, createWebHistory } from 'vue-router';
const HomeComponent = () => import('../views/HomeComponent.vue');
const routes = [
    { path: '/home', name: 'home', component: HomeComponent },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});
export default router;
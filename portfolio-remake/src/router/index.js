import Vue from 'vue';
import Router from 'vue-router';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Inspiration from '../views/Inspiration.vue';
import Projects from '../views/Projects.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'about',
            component: About
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/inspiration',
            name: 'inspiration',
            component: Inspiration
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        }
    ]
});

export default router;
import Vue from 'vue';
import Router from 'vue-router';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Inspiration from '../views/Inspiration.vue';
import Projects from '../views/Projects.vue';
import DungeonGenerator from '../views/Projects/DungeonGenerator.vue';
import PigLatinTranslator from '../views/Projects/PigLatinTranslator.vue';
import Tenmo from '../views/Projects/Tenmo.vue';
import VendingMachine from '../views/Projects/VendingMachine.vue';
import XTourney from '../views/Projects/XTourney.vue';

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
        },
        {
            path: '/projects/dungeongenerator',
            name: 'dungeongenerator',
            component: DungeonGenerator
        },
        {
            path: '/projects/piglatintranslator',
            name: 'piglatintranslator',
            component: PigLatinTranslator
        },
        {
            path: '/projects/tenmo',
            name: 'tenmo',
            component: Tenmo
        },
        {
            path: '/projects/vendingmachine',
            name: 'vendingmachine',
            component: VendingMachine
        },
        {
            path: '/projects/xtourney',
            name: 'xtourney',
            component: XTourney
        },
    ]
});

export default router;
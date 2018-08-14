"use strict";

import Vue from 'vue';

import app from './app.vue';
import editor from './components/editor.vue';
import writer from './components/writer.vue';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import 'vue-material/dist/vue-material.js';
Vue.use(VueMaterial);

import VueRouter from 'vue-router';
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/editor', component: editor },
        { path: '/writer', component: writer },
        { path: '/test', component: require('./components/test.vue')}
    ]
});

import store from './store.js';
import { sync } from 'vuex-router-sync';
sync(store, router);

/* eslint-disable no-new */
new Vue({
    router,
    store,
    render: h => h(app),
}).$mount('#app');


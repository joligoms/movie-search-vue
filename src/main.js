import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import BaseView from './BaseView.vue';
import './assets/style.css';
import routes from './routes.js';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(BaseView)
  .use(router)
  .mount('#app')

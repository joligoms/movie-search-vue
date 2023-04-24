import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import './assets/style.css';
import routes from './routes.js';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App)
  .use(router)
  .mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../dist/css/style-main.css';
import store from './components/cache/StoreCache.vue';


createApp(App).use(router).use(store).mount('#app')

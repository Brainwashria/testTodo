import { createApp } from 'vue'
import router from './router/index';
import App from './App.vue'
import store from './store/index'

const app = createApp(App).use(router).use(store)

router.isReady().then(() => app.mount('#app'))
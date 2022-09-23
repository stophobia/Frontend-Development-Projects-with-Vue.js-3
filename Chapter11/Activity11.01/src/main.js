import { createApp } from 'vue'
import { createPinia, setActivePinia } from 'pinia'
import App from './App.vue'
import router from './router';

const app = createApp(App);
app.use(createPinia());
app.use(router);
router.isReady().then(() => {
	app.mount('#app');
});
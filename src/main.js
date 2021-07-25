import { createApp } from 'vue'
import App from './App.vue'
import './global.css';
// // Only import what you need!








import router from "./router";
const app = createApp(App);
app.use(router);
app.mount("#app");
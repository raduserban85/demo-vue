import {App, createApp} from 'vue'
import axios from "axios";
import { createPinia, type Pinia } from "pinia";

import './style.css'
import MyApp from './MyApp.vue'

axios.defaults.headers.common["Content-Type"] = "application/json";

const pinia: Pinia = createPinia();
const app: App<Element> = createApp(MyApp);

app.use(pinia);
app.mount('#app');

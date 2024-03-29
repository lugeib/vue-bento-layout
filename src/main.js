import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import vueBento from './vue-bento'

const app = createApp(App);
app.use(vueBento);
app.mount('#app')

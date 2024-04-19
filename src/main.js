import { createApp } from 'vue'
import App from './App.vue'

import vueBentoLayout from './vue-bento-layout'

const app = createApp(App);
app.use(vueBentoLayout);
app.mount('#app')

import bentoGrid from "./components/bento-grid.vue";
import bentoCard from "./components/bento-card.vue";
import bentoGallery from "./components/bento-gallery.vue";

import '../public/sass/main.scss'
export default {
    install:(app, options)=>{
        app.component('bento-grid',bentoGrid);
        app.component('bento-card',bentoCard);
        app.component('bento-gallery', bentoGallery);
    }
}
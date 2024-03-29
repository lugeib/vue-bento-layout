import bentoGrid from "./components/bento-grid.vue";
import bentoCard from "./components/bento-card.vue";
export default {
    install:(app, options)=>{
        app.component('bento-grid',bentoGrid)
        app.component('bento-card',bentoCard)
    }
}
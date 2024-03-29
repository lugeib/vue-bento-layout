<template>
    <section class="vue-bento-grid" :style="gridStyle" >
        <slot />
    </section>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
    backgroundColor: {default: 'transparent', type: String},
    gap:{default:0.75, type: Number}
});

const gridStyle = ref({
    backgroundColor: props.backgroundColor,
    gap: `${props.gap}em`
})
</script>
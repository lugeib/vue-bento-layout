<template>
    <bento-grid class="bento-gallery">
        <bento-card v-for="(img,index) in images" :key="index" :class="[`wide-${img.wide}x`, `tall-${img.tall}x`,{'hovereable': img.hovereable || props.imagesAreHovereable}]" >
            <img :src="img.url" >
        </bento-card>
    </bento-grid>
</template>

<script setup>
const props = defineProps({
    images: {
        type:Array,
        required: true
    },
    imagesAreHovereable: {
        type: Boolean,
        default: false,
        requried: false
    }
})
</script>
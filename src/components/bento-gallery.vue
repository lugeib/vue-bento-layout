<template>
    <bento-grid class="bento-gallery">
        <transition-group :appear="props.animate" @beforeEnter="beforeEnterAnimation" @enter="enterAnimation">
            <bento-card v-for="(source,index) in props.sourceList" :key="index" :class="[`wide-${source.wide}x`, `tall-${source.tall}x`,{'hovereable': source.hovereable || props.sourcesAreHovereable}]" :data-index = "index" >
                <img v-if="source.type =='image'" :src="source.url" >

                <div class="video" v-if="source.type == 'video'">
                    <span :id="`playback-control-${index}`" class="playback-control" @click="togglePlayBack(index)">
                        <span class="play-button play-button-before"></span>
                        <span class="play-button play-button-after"></span>
                    </span>
                    <video :id="`video${index}`" :src="`${source.url}#t=5`" :muted="source.muted" />
                </div>
            </bento-card>
        </transition-group>
    </bento-grid>
</template>

<script setup>
import gsap from 'gsap';
import * as scssVariables from '../../public/sass/_variables.scss';

const cardHoverScaleValue = scssVariables.cardHoverScale;

const props = defineProps({
    sourceList: {
        type:Array,
        required: true
    },
    sourcesAreHovereable: {
        type: Boolean,
        default: false,
        requried: false
    },
    animate: {
        type: Boolean,
        default: false,
        required: false
    },
    animationDurationInSeconds:{
        type: Number,
        default: 0.75,
        required: false
    },
    animationStaggerDelay:{
        type: Number,
        default: 0.15,
        required: false
    },
    animationInitalState: {
        type: Object,
        default:{
            opacity: 0,
            y: 100,
            x: 0,
        },
        required: false
    },
    animationEndState:{
        type: Object,
        default:{
            opacity: 1,
            y: 0,
            x: 0,
        }
    }
})

const beforeEnterAnimation = (el) => {
    gsap.set(el, props.animationInitalState);
    gsap.set(el, {scale: cardHoverScaleValue})
};

const enterAnimation = (el, done)=>{
    gsap.to(el,{
        ...props.animationEndState,
        duration: props.animationDurationInSeconds,
        delay: el.dataset.index * props.animationStaggerDelay,
        onComplete: done
    })
};

const togglePlayBack = (index)=>{
    document.getElementById(`video${index}`).paused ? document.getElementById(`playback-control-${index}`).classList.add('paused') : document.getElementById(`playback-control-${index}`).classList.remove('paused');
    document.getElementById(`video${index}`).paused ? document.getElementById(`video${index}`).play() : document.getElementById(`video${index}`).pause();
}
</script>
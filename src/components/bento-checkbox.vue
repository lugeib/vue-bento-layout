<template>
    <bento-card :class="{'--selected':props.modelValue}" class="bento-checkbox-card" @click="$emit('update:modelValue', !props.modelValue)" style="background-color: dimgrey; color: whitesmoke;">
        <div class="content">
            <slot />
        </div>
        <svg class="checkmark" v-if="props.modelValue"  viewBox="-33.45 -42.33 82 47" id="Flat" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_iconCarrier"> 
        <path class="path" d="M -15 -14 L 0 0 L 39 -38"></path> 
        </g>
        </svg>
    </bento-card>
</template>

<script setup>
const emits = defineEmits(['update:modelValue']);
const props = defineProps(['modelValue']);
</script>
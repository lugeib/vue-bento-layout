<template>
  <main>
    <section>
      <h2>Basic Bento Layout</h2>
      <bento-grid class="grid-gap-2x">
        <bento-card style="background-color: cornflowerblue;" class="wide-2x tall-3x ">
          <p>Content Inside a bento card 1</p>
        </bento-card>
        <bento-card style="background-color: burlywood;" class="wide-2x tall-2x">
          <p>Content Inside a bento card 2</p>
        </bento-card>
        <bento-card style="background-color: cornflowerblue;" class="tall-3x">
          <p>Content Inside a bento card 3</p>
        </bento-card>
        <bento-card style="background-color: burlywood;" class="tall-2x hovereable hover-scale-2x">
          <p>Hovereable Content Inside a bento card 4</p>
        </bento-card>
        <bento-card style="background-color: cornflowerblue;" class="tall-2x">
          <p>Content Inside a bento card 5</p>
        </bento-card>
        <bento-card style="background-color: burlywood;">
          <p>Content Inside a bento card 6</p>
        </bento-card>
        <bento-card style="background-color: cornflowerblue; color: black;" class="">
          <p>Content Inside a bento card 7</p>
        </bento-card>
        <bento-card style="background-color: cornflowerblue;" class="wide-5x tall-1x">
          <p>Content Inside a bento card 8</p>
        </bento-card>
      </bento-grid>
    </section>
    <section class="gallery">
      <h2>Bento gallery - animate=true</h2>
      <bento-gallery :sourceList="media" :animate="true" />
    </section>
    <section>
      <h2>Bento checkbox {{ checkedValues }}</h2>
      <bento-grid>
        <bento-checkbox v-model="checkedValues[0]">
          <img src="https://plus.unsplash.com/premium_photo-1665929001759-be3a55a0ce3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        </bento-checkbox>
        <bento-checkbox v-model="checkedValues[1]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </bento-checkbox>
        <bento-checkbox v-model="checkedValues[2]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </bento-checkbox>
      </bento-grid>
    </section>
  </main>
</template>
<script setup>
import { ref } from 'vue';
let media = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1665929001759-be3a55a0ce3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    wide:2,
    tall:4,
    hovereable:true,
    type:'image'
  },
  {
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    wide:1,
    tall:2,
    hovereable:true,
    type:'video',
    muted:true
  },
  {
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    wide:1,
    tall:2,
    type:'video'
  },
  {
    url: 'https://images.unsplash.com/photo-1712081024194-bd8d6af8fd68?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    wide:1,
    tall:2,
    hovereable:true,
    type:'image'
  },
  {
    url: 'https://images.unsplash.com/photo-1711997632197-e09b5c59605d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    wide:1,
    tall:2,
    type:'image'
  },
 
  
];


const checkedValues = ref([false, true, false]);
</script>
<style lang="scss" scoped>
  *{
    font-family: 'Franklin Gothic Light', 'Arial Narrow', Arial, sans-serif;
  }
  main > section {
    margin: 0 auto;
    max-width: 1080px;
  }
</style>
<template>
  <main>
    <section>
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
          <p>Content Inside a bento card 4</p>
        </bento-card>
        <bento-card style="background-color: cornflowerblue;" class="tall-2x">
          <p>Content Inside a bento card 5</p>
        </bento-card>
        <bento-card style="background-color: burlywood;" class="wide-2x">
          <p>Content Inside a bento card 6</p>
        </bento-card>
        <bento-card style="background-color: cornflowerblue; color: black;" class="">
          <p>Content Inside a bento card 7</p>
        </bento-card>
        <bento-card style="background-color: cornflowerblue;" class="wide-5x tall-2x">
          <p>Content Inside a bento card 8</p>
        </bento-card>
      </bento-grid>
    </section>
    <section class="gallery">
      <bento-gallery :images="images" :imagesAreHovereable="true" />
    </section>
  </main>
</template>
<script setup>
let images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1665929001759-be3a55a0ce3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    wide:2,
    tall:2,
    hovereable:true
  },
  {
    url: 'https://images.unsplash.com/photo-1712698396006-1996dc7cb2cc?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    wide:2,
    tall:4
  },
  {
    url: 'https://images.unsplash.com/photo-1712081024194-bd8d6af8fd68?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    wide:'',
    tall:''
  },
  {
    url: 'https://images.unsplash.com/photo-1711997632197-e09b5c59605d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    wide:'',
    tall:'2'
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1668708034541-4ba9a33fae3a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    wide:'',
    tall:''
  },
  
];
</script>
<style lang="scss">

  main > section {
    margin: 0 auto;
    max-width: 1080px;
  }
</style>
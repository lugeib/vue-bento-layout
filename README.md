# Vue Bento Layout
## A beginner bento layout helper for vue

vue-bento-layout is a package that helps you (in the most basic way) with creating a bento layout for your app.

- Higly customizable
- Really light
- Super easy to use
- Scalable (As many columns and rows you want for your bento)

## Features

- Simple to use `bento-grid` & `bento-card` global components (so no need to import _here_ and _there_).
- `bento-gallery` global component to bentify your image collections.

## Installation

Simply install with your favorite package manager

```sh
npm i vue-bento-layout
yarn add vue-bento-layout
bun i vue-bento-layout
```

## Initialization

Just import the vue-bento-layout plugin and css file into your `main.js` file and make your vue app use the plugin.
```
import { createApp } from 'vue'
import App from './App.vue'
import vueBentoLayout from 'vue-bento-layout';
import "../node_modules/vue-bento-layout/dist/sass/main.scss"

const app = createApp(App);
app.use(vueBentoLayout);
app.mount('#app'); 
```

## And that's it 🥳! 
 Easy, right ? Now You've got access to the global components and are ready to start bentifying your UI 🍱

# Components

There's only 3 components to learn (in about 5 mins), in Vue Bento Layout
### `<bento-grid>`
 ---
 Bento grid is the one in charge of containing the different rows and columns that you'll configure for your bento.
 Pretty much just a container for styling and well... containment for the next component.

 ### `<bento-card>`
 ---
 The core of the bento layout, a card is the container for whatever content You'd like to put inside of it, these are the elements that'll move around, grow, shrink as you want them to.
 Highly customizable, they come with **NO STYLING**, not more than a little border-radius, some padding and box-shadow when using hovereable class.
 
  ### `<bento-gallery>`
 ---
Bento Gallery is an implementation of bento-grid and bento-cards o create a simple but cool-looking gallery of images (only images for now), simply pass an array of objects to the component and bentify your gallery 🍱

Uses array of objects:
```
{
   url: String, (e.g. 'https://plus.unsplash.com/premium_photo-1665929001759-be3a55a0ce3a')
   wide: Int, (e.g. 2|3|n  depending on Your configuration for the $grid-columns-length-default variable) 
   tall: Int, (e.g. 2|3|n  depending on Your configuration for the $grid-rows-length-default variable)
   hovereable: Boolean (e.g. False | True)
}
```



# Examples of usage 📝

Below You'll find a single file component where you can see how the components are used, **note the *dynamic classes***.
We'll get to that after the example:

``` 
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
    url: 'https://plus.unsplash.com/premium_photo-1665929001759-be3a55a0ce3a',
    wide:2,
    tall:2,
    hovereable:true
  },
  {
    url: 'https://images.unsplash.com/photo-1712698396006-1996dc7cb2cc',
    wide:2,
    tall:4
  },
  {
    url: 'https://images.unsplash.com/photo-1712081024194-bd8d6af8fd68',
    wide:'',
    tall:''
  },
  {
    url: 'https://images.unsplash.com/photo-1711997632197-e09b5c59605d',
    wide:'',
    tall:2
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1668708034541-4ba9a33fae3a',
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
```

# Dynamic classes configuration
If you navigate to the *sass/_variables.scss* file, You'll see a bunch of style configuration variables:

```
$grid-gap-base-unit: 5px;
$grid-gap-max-times-multiplier: 4; //max number of times the base unit will be multiplied for.

$transition-speed-base-unit: 0.05s;
$transition-speed-max-times-multiplier: 5; //max number of times the base unit will be multiplied for.

$card-box_shadow_length-base-unit: 6px;
$card-box_shadow_length-max-times-multiplier: 5; //max number of times the base unit will be multiplied for.

$card-hover-scale-base-unit: 1.05;
$card-hover-scale-base-unit-step: 0.05;
$card-hover-scale-max-times-multiplier: 5; //max number of times the base unit will be multiplied for.

$grid-columns-length-default : 4; //default number of columns for the bento-grid
$grid-rows-length-default : 4; //default number of rows for the bento-grid

```
##### I tried to make these self explanatory, but if You're still a little lost (and I don't blame you 😅), allow me to further explain:

All of the configurable values have a base unit, e.g. $grid-gap-base-unit which is 5px and has a default multiplier of 4, this means that the classes generated for this attribute will range from 2 (because 1x is already in the scss) to 4, giving the result of the following classes: `grid-gap-2x (5px * 2 = 10px), grid-gap-3x (5px * 3 = 15px) & grid-gap-4x (5px * 4 = 20px)`. This allows you to multiply, via classes, the different variables there are for style configuration.

### ⚠️ You'll have to restart your dev server for the scss changes to take effect
### ⚠️ Be careful with your multipliers and base units, You can cause a lot of unwanted behavior/appearance.

# 🧪Experiment, play with it and if you have any suggestions or feedback, please post them on the issues page:
<https://github.com/lugeib/vue-bento-layout/issues>
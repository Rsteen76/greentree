<template>
  <v-carousel hide-delimiters id="carousel1">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ]
      }
    }
  }
</script>

<style scoped>
#carousel1 {
    height: 35vh;
    widows: 100vw;
    overflow: hidden;
    position: relative;
    
}
.b-carousel-slide > item > img {
    /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
    /* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)); */

    /* Set a specific height */
    width: 100%;

    /* Position and center the image to scale nicely on all screens */
    /* background-position: center;
    background-repeat: no-repeat;
    background-size: cover; */
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
}

/* Place text in the middle of the image */
.hero-image > .hero-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    
}

</style>

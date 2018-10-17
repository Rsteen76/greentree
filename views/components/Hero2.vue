<template>
  <v-carousel id = "heroCarousel" hide-delimiters hide-controls mt5>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade"
      transition="fade"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://s3-us-west-2.amazonaws.com/greentreeme/greenTree1.jpg'
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

<style lang="stylus">
  #heroCarousel

  .image
    height: 15vh;
    widows: 100vw;
    overflow: hidden;
    position: relative;

    .fade
      &-enter-active, &-leave-active, &-leave-to
        transition: .3s ease-out
        position: absolute
        top: 0
        left: 0
      &-enter, &-leave, &-leave-to
        opacity: 0
</style>
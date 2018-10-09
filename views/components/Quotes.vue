<template>

<div id="greenBlur"
       :style="{ backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/greentreeme/BG_greenBlur.jpg)' }">
  <v-carousel id = "quotesCarousel" hide-delimiters hide-controls>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade"
      transition="fade"
    ></v-carousel-item>
  </v-carousel>

</div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: ''
          },
          {
            src: ''
          },
          {
            src: ''
          },
          {
            src: ''
          }
        ]
      }
    }
  }
</script>
<style lang="stylus">
  #greenBlur
  .image
    height: 20vh;
    widows: 100vw;
    overflow: hidden;
    position: relative;


  #quotesCarousel
  .image
    height: 20vh;
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
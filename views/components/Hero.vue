<template>
    <div class="hero-image">
        <img :src="images[num]">
        <div class="hero-text">
            <h1>I am John Doe</h1>
            <p>And I'm a Photographer</p>
            <button>Hire me</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Hero',
  data() {
      return {
          num: 0,
          images: [
            "https://images.unsplash.com/photo-1537557436197-445104c17075?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e22e833eb944c01d3a469d1777fe0769&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1530547429276-0b6e470c90b8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e3edf9208d2c6b3efcc2da128db5ae14&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1520011791306-1e702037318c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cbdc35ebff91490d5effe13d82e5e356&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cea32ac97f8ffde3f76df4a646ac8b4d&auto=format&fit=crop&w=500&q=60"
          ]
      }
  },
 
 mounted: function () {
      setInterval(this.nextImage, 5000);
      },
  methods: {
      nextImage() {
          if(this.num < this.images.length -1) {
            this.num ++;
          } else {
            this.num = 0;
          }
          
      }
  }
}
</script>

<style scoped>
.hero-image {
    height: 35vh;
    widows: 100vw;
    overflow: hidden;
    position: relative;
    
}
.hero-image > img {
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

/* base */
.images {
  backface-visibility: hidden;
  z-index: 1;
}

/* moving */
.images-move {
  transition: all 600ms ease-in-out 50ms;
}

/* appearing */
.images-enter-active {
  transition: all 400ms ease-out;
}

/* disappearing */
.images-leave-active {
  transition: all 200ms ease-in;
  position: absolute;
  z-index: 0;
}

/* appear at / disappear to */
.images-enter,
.images-leave-to {
  opacity: 0;
}
.card {
  transition: all 0.5s;

}
.card-enter, .card-leave-to
/* .card-leave-active for <2.1.8 */ {
  opacity: 0;
  transform: scale(0);
}
.card-enter-to {
  opacity: 1;
  transform: scale(1);
}

.card-leave-active {
  /*position: absolute;*/
}

.card-move {
  opacity: 1;
  transition: all 0.5s;
}
</style>

<template>
  <div class="home">
    <Nav py-5 />
    <v-parallax 
      height="100%"
      src="../assets/tree.jpg">
      <v-container fluid>
      <v-layout align-center justify-center>
        <Hero2 />
      </v-layout>
      <v-layout align-center justify-center py-5>
        <About />
      </v-layout>
        <Quotes />
      <v-layout align-center justify-center py-5>
        <Children />
      </v-layout>
      <v-layout align-center justify-center py-5>
        <Calendar />
      </v-layout>
      </v-container>
    </v-parallax>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '../components/Nav.vue'
import Hero2 from '../components/Hero2.vue'
import About from '../components/About.vue'
import Quotes from '../components/Quotes.vue'
import Children from '../components/Children.vue'
import Calendar from '../components/Calendar.vue'

export default {
  name: 'home',
  components: {
    Nav,
    Hero2,
    About,
    Quotes,
    Children,
    Calendar,
  }
}
</script>
<style>

/* .bgimg-2 {
  background-image: url("https://images.unsplash.com/photo-1463595709917-93fb36118407?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3e058f4f463e321effdbc2a75fdad68d&auto=format&fit=crop&w=1350&q=80");
  min-height: 100%;
}

.bgimg-1 {
  background-image: url("https://images.unsplash.com/photo-1440913846014-90f66ff0e334?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bef135fe947dd1212153d722e1c7b02d&auto=format&fit=crop&w=1950&q=80");
  min-height: 400px;
}

.bgimg-3 {
  background-image: url("https://images.unsplash.com/photo-1540275041090-440decb40159?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a65ba6ed82dfcbcf5850cfdb0a15127e&auto=format&fit=crop&w=2739&q=80");
  min-height: 400px;
} */
.parallax {
  perspective: 1px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}
.parallax__layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.parallax__layer--base {
  transform: translateZ(10);
}
.parallax__layer--back {
  transform: translateZ(-1px);
}
</style>

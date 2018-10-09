<template>
<router-view></router-view>
</template>

<script>
// @ is an alias to /src
// import Nav from '../components/Nav.vue'
// import Hero2 from '../components/Hero2.vue'
// import About from '../components/About.vue'
// import Quotes from '../components/Quotes.vue'
// import Children from '../components/Children.vue'
// import Calendar from '../components/Calendar.vue'

export default {
  name: 'home',
  // components: {
  //   Nav,
  //   Hero2,
  //   About,
  //   Quotes,
  //   Children,
  //   Calendar
  // }
}
</script>
<style>
.bgimg-1, .bgimg-2, .bgimg-3 {
  position: relative;
  opacity: 1;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}
.bgimg-2 {
  background-image: url("https://images.unsplash.com/photo-1463595709917-93fb36118407?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3e058f4f463e321effdbc2a75fdad68d&auto=format&fit=crop&w=1350&q=80");
  min-height: 100%;
}

.bgimg-1 {
  background-image: url("https://images.unsplash.com/photo-1440913846014-90f66ff0e334?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bef135fe947dd1212153d722e1c7b02d&auto=format&fit=crop&w=1950&q=80");
  min-height: 400px;
}

.bgimg-3 {
  background-image: url("https://images.unsplash.com/photo-1533234335389-ccaf6c88603d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a35a4c99f0a531c3deba29b9505867fd&auto=format&fit=crop&w=500&q=60");
  min-height: 400px;
}

.caption {
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  text-align: center;
  color: #000;
}

.caption span.border {
  background-color: #111;
  color: #fff;
  padding: 18px;
  font-size: 25px;
  letter-spacing: 10px;
}

h3 {
  letter-spacing: 5px;
  text-transform: uppercase;
  font: 20px "Lato", sans-serif;
  color: #111;
}

/* Turn off parallax scrolling for tablets and phones */
/* @media only screen and (max-device-width: 1024px) {
    .bgimg-1, .bgimg-2, .bgimg-3 {
        background-attachment: scroll;
    }
} */

</style>

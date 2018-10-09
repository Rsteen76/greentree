<template>
<div class="">
  <v-toolbar id="navbar" dense :fixed=false >
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn href="/#/users" flat>Admin</v-btn>
      <v-btn flat>Schedules</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</div>
</template>

<script>
  export default {
    name: 'Component',

    data() {
      return {
        navbar: document.getElementById("navbar"),
        sticky: false
      };
    },
    methods: {
      handleScroll () {

        this.scrolled = window.scrollY > 0;
        console.log(navbar);
        console.log(navbar.getBoundingClientRect());
        if (navbar(screenY) <= 0) {
          this.sticky="false";
        } else {
          this.sticky="false";
        }
        
      },
      myFunction() {
        
      }
    },
    created: function() {
    window.addEventListener('scroll', this.handleScroll);
    },
    destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll);
    }

  };
</script>

<style lang="stylus">



</style>

<template>
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  name: 'Nav',
}
</script>

<style scoped>
$orange: #E59400;
$white: #fdfdfd;

// Navbar
#nav {
  background: rgba(0, 0, 0, .3);
  height: 50px;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  text-align: center;
  
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    display: inline-block;
  }
  
  a {
    color: $white;
    text-decoration: none;
    display: block;
    min-width: 140px;
    height: 50px;
    line-height: 50px;
  }
  
  a:hover {
    border-bottom: 4px solid;
    border-color: $orange;
  }
}

</style>

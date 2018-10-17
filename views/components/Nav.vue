<template>
<div class="topnav">
  <v-toolbar fixed dense>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-text class="title"><strong>Next Meeting {{moment(schedules[1].date).format('MMMM Do YYYY') }} in {{schedules[1].location}}</strong></v-text>

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
  import { http } from "../config/http.js"
  import moment from 'moment'


  export default {
    data: ()  => ({
      schedules: [],
      date: ""
    }),
    methods: {
      // Load all Schedules from database
      load() {
            http
                .get("schedules")
                .then(response => {
                    this.schedules = response.data.schedules;
                })
                .catch(e => {
                    this.errors.push(e);
                });
        },
      moment: function (date) {
        return moment(date);
      },
    },
    mounted() {
      this.load();
    }
  }
</script>

<style>



</style>

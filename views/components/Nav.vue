<template>
  <div class="topnav">
    <v-toolbar fixed dense dark>
      <v-toolbar-title>Green Tree</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text class="title"><strong>Next Meeting {{moment(schedules[1].date).format('MMMM Do') }} in
          {{schedules[1].location}}</strong></v-text>

      <v-spacer></v-spacer>

      <v-toolbar-items  class="hidden-sm-and-down">
        <v-btn v-if="!name" href="/#/login" flat>Login</v-btn>
      </v-toolbar-items>
      <template v-if="auth">
      <v-menu :nudge-width="100">
        <v-toolbar-title slot="activator">
          <span>{{name}}</span>
          <v-icon dark>arrow_drop_down</v-icon>
        </v-toolbar-title>

        <v-list>
          <v-list-tile v-for="item in items" :key="item.title" :to="item.path">
            <v-list-tile-title v-text="item.title">
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-toolbar-items>
        <v-btn @click="logout">Logout</v-btn>
      </v-toolbar-items>
      </template>
    </v-toolbar>
  </div>
</template>

<script>
  import { http } from "../config/http.js"
  import moment from 'moment'


  export default {
    data: ()  => ({
      auth: localStorage.auth,
      name: localStorage.name,
      items: [
        { 
          title: "Schedules", 
          path: "schedules",
        },
        {
          title: "People",
          path: "users",
        }, 
      ],
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
        logout() {
          localStorage.clear()
          this.$router.go({
            name: 'greentree'
          })
        }
    },
    mounted() {
      this.load();
    }
  }
</script>

<style>



</style>

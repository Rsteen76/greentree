<template>
<v-container>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-text-field
      label="Email"
      v-model="user.email"
      :rules="emailRules"
      required
    ></v-text-field>
    <v-text-field
      label="Password"
      v-model="user.password"
      required
    ></v-text-field>
    <v-btn
      @click="submit"
      :disabled="!valid"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
  </v-container>
</template>
<script>
import { http } from "../config/http.js";

export default {
  data: () => ({
    valid: true,
    user: {
      email: "",
      password: ""
    },
    emailRules: [
      v => !!v || "E-mail is required",
      v => /\S+@\S+\.\S+/.test(v) || "E-mail must be valid"
    ]
  }),
  methods: {
    submit() {
      http
        .post("/auth/login", this.user)
        .then(response => {
          console.log(response.data)
          localStorage.setItem("auth", response.data.token);
          localStorage.setItem("name", response.data.name);
          this.$swal("Great!", "You are ready to start!", "success");
          this.$router.push({ name: "greentree" });
        })
        .catch(error => {
          console.log(error);
          const message = error.response.data.message;
          this.$swal("Oh oo!", `${message}`, "error");
          this.$router.push({ name: "login" });
        });
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>

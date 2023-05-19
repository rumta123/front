<template>
    <form @submit.prevent="login">
      <b-form-group label="Email или телефон">
      <b-form-input type="text"  v-model="usernameInput" required></b-form-input>
    </b-form-group>
      <b-form-group label="Пароль">
        <b-form-input type="password" v-model="password" required></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Войти</b-button>
      <p class="mt-3">Нет аккаунта? <b-link @click="$emit('switch-mode')">Зарегистрируйтесь</b-link></p>
    </form>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  export default {
    name: 'LoginForm',
    data() {
      return {
     
        password: '',
        usernameInput: '',
      }
    },
    computed: {
    ...mapState(['usernameInput']),
  },
    watch: {
    usernameInput(newVal) {
      this.$store.dispatch('updateUsername', newVal);
    }
  },
    methods: {
      login() {
        this.$emit('login', { email: this.email, password: this.password })
      },
    },
  }
  </script>
<template>
    <form @submit.prevent="login">
      <b-form-group label="Email">
        <b-form-input type="email" v-model="email" required></b-form-input>
      </b-form-group>
      <b-form-group label="Пароль">
        <b-form-input type="password" v-model="password" required></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Войти</b-button>
      <p class="mt-3">Нет аккаунта? <b-link @click="$emit('switch-mode')">Зарегистрируйтесь</b-link></p>
    </form>
  </template>
  
  <script>
  export default {
    name: 'AdminForm',
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      login() {
        this.$emit('login', { email: this.email, password: this.password })
      },
    },
  }
  </script>
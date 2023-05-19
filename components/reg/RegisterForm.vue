<template>
  <form @submit.prevent="login">
    <b-form-group label="Email или телефон">
      <b-form-input type="text" v-model="usernameInput" required></b-form-input>
    </b-form-group>

    <b-form-group label="Пароль" v-if="showPasswordFieldFlag && isEmail">
      <b-form-input type="password" v-model="password" required></b-form-input>
    </b-form-group>

    <b-form-group label="Код верификации" v-if="showPasswordFieldFlag && isPhone">
      <b-form-input v-model="verificationCode" required></b-form-input>
    </b-form-group>

    <b-button type="submit" variant="primary" @click="showPasswordField">
      {{ showPasswordFieldFlag ? 'Отправить данные' : 'Зарегистрироваться' }}
    </b-button>

    <p class="mt-3">Есть аккаунт? <b-link @click="$emit('switch-mode')">Войдите</b-link></p>
  </form>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
export default {
  name: 'RegisterForm',
  data() {
    return {
      usernameInput: '',
      password: '',
      verificationCode: '',
      isEmail: false,
      isPhone: false,
      showPasswordFieldFlag: false,
      isClicked: false
    };
  },

  methods: {
    login() {
      this.$store.dispatch('updateUsername', this.usernameInput);
      this.$emit('login', {
        usernameInput: this.usernameInput,
        password: this.password,
        verificationCode: this.verificationCode
      });
    },
    showPasswordField() {
      if (this.isClicked) {
        // обработка второго клика
        if (this.isEmail) {
          // обработка ввода пароля для email
          console.log('Введен пароль для email');

          axios
            .post('http://127.0.0.1:8000/api/auth/users/', {
              headers: { 'Content-type': 'aplication/json' },
              username: this.usernameInput,
              password: this.password
            })
            .then(response => {
              console.log(response);
              this.$router.push('http://127.0.0.1:8000/auth/sigin');
            })
            .catch(err => {
              console.error(err);
            });
        } else if (this.isPhone) {
          // обработка ввода кода для телефона
          console.log('Введен код для телефона');
        }
      } else {
        // обработка первого клика
        this.showPasswordFieldFlag = true;
        this.isClicked = true;
      }
    },
    setLogined(token) {
      console.log(token);
      localStorage.setItem('token', token);
    }
  },
  computed: {
    ...mapState(['usernameInput']),
  },
  watch: {
    usernameInput(newValue) {
      this.$store.dispatch('updateUsername', newValue);
      // определяем, введен email или телефон
      if (newValue.includes('@')) {
        this.isEmail = true;
        this.isPhone = false;
      } else {
        this.isEmail = false;
        this.isPhone = true;
      }
    }
  }
};
</script>

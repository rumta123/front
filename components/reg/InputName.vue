<template>
  <div>
    <b-form-group label="Email или телефон">
      <b-form-input type="text" v-model="emailOrPhone" required></b-form-input>
    </b-form-group>

    <b-form-group label="Пароль" v-if="showPasswordFieldFlag && isEmail">
      <b-form-input type="password" v-model="password" required></b-form-input>
    </b-form-group>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { state, mutations } from './RegisterForm';
export default {
  name: 'LoginForm',
  computed: {
    ...mapState('RegisterForm', ['emailOrPhone', 'password', 'showPasswordFieldFlag', 'isEmail'])
  },
  methods: {
    ...mapMutations('RegisterForm', ['updateEmailOrPhone', 'updatePassword']),
  }
}
</script>
<template>

      <b-modal v-model="isModalVisible" hide-footer :title="modalTitle">

        <LoginForm v-if="loginMode" @switch-mode="toggleForm" @submit.prevent="login" />
        <RegisterForm v-else @switch-mode="toggleForm" @submit.prevent="register" />
      </b-modal>

</template>
<script>
import LoginForm from '../reg/LoginForm.vue';
import RegisterForm from '../reg/RegisterForm.vue';
export default {
  name: 'ModalReg',
  components: {

    LoginForm,
    RegisterForm,



  },
  data() {
    return {

     
      name: '',
      email: '',
      password: '',
      isLogin: true,
      modalTitle: 'Вход',
      buttonText: 'Регистрация',
      isModalVisible: false,
      loginMode: true,
      activeForm: 'Войти',
    };
  },



  methods: {
  
   
    switchToRegistration() {
      this.loginMode = false
    },
    switchToLogin() {
      this.loginMode = true
    },
 
    showModal(modalId) {
      this.$bvModal.show(modalId)
    },
 

    toggleForm() {
      this.showForm = !this.showForm;
      this.loginMode = !this.loginMode
      this.modalTitle = this.loginMode ? 'Регистрация' : 'Вход'
      if (this.activeForm === 'LoginForm') {
        this.activeForm = 'RegisterForm'
        this.modalTitle = 'Войти'

      } else {
        this.activeForm = 'LoginForm'
        this.modalTitle = 'Зарегестрироваться'

      }
    }
  }
}
</script>



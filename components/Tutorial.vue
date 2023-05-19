<!-- Please remove this file from your project -->

<template>
  <div>
    <!-- первый экран  -->
    <div class="row main_container">

      <div class="col-4">

        <NuxtLogo></NuxtLogo>
        <my-list1 :items="myItems" />
      </div>


      <div class="col-8">
   

        <div class="block_reg">
          <div class="reg_block">
            <a href="#"
              @click.prevent="isModalVisible = true; loginMode = true; modalTitle = 'Вход'; buttonText = 'Регистрация'">Вход
              / </a>
            <a href="#"
              @click.prevent="isModalVisible = true; loginMode = false; modalTitle = 'Регистрация'; buttonText = 'Войти'">
              Регистрация</a>
          </div>
          <b-modal v-model="isModalVisible" hide-footer :title="modalTitle">

<LoginForm v-if="loginMode" @switch-mode="toggleForm" @submit.prevent="login" @login="updateUsername"/>
<RegisterForm v-else @switch-mode="toggleForm" @submit.prevent="register" @register="updateUsername" />
</b-modal>




          <div class="myform">
            <h3>Трансфер между Абхазией и Россией </h3>
            
            <TransferForm></TransferForm>
          </div>
        </div>

      </div>
    </div>
    <div id="myElement" >
    <MainOpisanie />
  </div>

  </div>

  <!-- конец -->






</div></template>

<script>
import MyList1 from './MyList1.vue';
import NuxtLogo from './NuxtLogo.vue';
import LoginForm from './reg/LoginForm.vue';
import RegisterForm from './reg/RegisterForm.vue';
import MainOpisanie from './MainOpisanie.vue'
import TransferForm from './form/TransferForm.vue';


export default {
  name: 'NuxtTutorial',
  components: {
    MyList1,
    NuxtLogo,
    LoginForm,
    RegisterForm,
    MainOpisanie,
    TransferForm,
  
},
  data() {
    return {

      input1: '',
      input2: '',
      myItems: ['ГЛАВНАЯ', 'СТАТЬ ПЕРЕВОЗЧИКОМ', 'ДЛЯ БИЗНЕСА ', 'ОТЗЫВЫ ', 'ВОПРОСЫ И ОТВЕТЫ ', '+79407777777'],
      name: '',
      email: '',
      password: '',
      isLogin: true,
      modalTitle: 'Вход',
      buttonText: 'Регистрация',
      isModalVisible: false,
      loginMode: true,
      activeForm: 'Войти',
      isRegistered: false,
      username: '',
    };
  },

  computed: {
    showClearIcon1() {
      return this.input1;
    },
    showClearIcon2() {
      return this.input2;
    },
    input1Label() {
      return this.input1 ? this.input1LabelTop : 'Откуда: адрес, аэропорт, отель';
    },
    input1LabelTop() {
      return 'Откуда: адрес, аэропорт, отель';
    },
    input1Label2() {
      return this.input2 ? this.input1LabelTop2 : 'Куда : адрес, аэропорт, отель';
    },
    input1LabelTop2() {
      return 'Куда : адрес, аэропорт, отель';
    },
    siteName(){
     return this.$store.getters.getSiteName
    }
   
  },

  methods: {
    // register() {
    //   // Логика регистрации пользователя
    //   // ...
    //   this.isRegistered = true;
    //   this.username = 'John Doe';
    // },
    onChange() {
      // обновляем класс label в зависимости от значения input
      const label = event.target.previousElementSibling;
      label.classList.toggle('input-filled', event.target.value);
    },
    switchToRegistration() {
      this.loginMode = false
    },
    switchToLogin() {
      this.loginMode = true
    },
 
    showModal(modalId) {
      this.$bvModal.show(modalId)
    },
    clearInput(inputNumber) {
      if (inputNumber === 'input1') {
        this.input1 = '';
      } else if (inputNumber === 'input2') {
        this.input2 = '';
      }
    },
   updateUsername(username) {
      this.username = username;
    },
    swapInputs() {
      const temp = this.input1;
      this.input1 = this.input2;
      this.input2 = temp;
    },
    toggleForm() {
      this.showForm = !this.showForm;
      this.loginMode = !this.loginMode
       this.modalTitle = this.loginMode ? 'Вход' : 'Регистрация'
      if (this.activeForm === 'LoginForm') {
        this.activeForm = 'LoginForm'
      
      } else {
        this.activeForm = 'RegisterForm'
       
      }
    }
  

  }
}
</script>

<style>
.input-wrapper {
  position: relative;
  display: inline-block;
}

.revers p {
  font-size: 30px
}

.clear-input {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s;
}

.clear-input:hover {
  opacity: 1;
}

.myform {
  width: 431px;
}

.clear-input {
  position: relative;
  z-index: 1;
  left: -30px;
}

/* вот такое */
.input-wrapper {
  position: relative;
  display: inline-block;
}

.input-label {
  position: absolute;
  top: 15px;
  left: 10px;
  font-size: 14px;
  color: #aaa;
  pointer-events: none;
  transition: all 0.2s ease-out;
}

.input-filled {
  top: -2px;
  left: 5px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;

  color: #7C7676;


}

input {
  padding: 18px !important;
  width: 400px;
  height: 60px;
}

/* .needs-validation{
  display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    align-items: center;
} */
.revers {
  display: flex;
  align-items: center;
  justify-content: center;
}

h3 {
  /* Трансфер между Абхазией и Россией */



  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;

  color: #000000;


}

.reg a {
  /* Вход/Регистраиця */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #000000;


}

/* .col8 {
  /* background-image: url(); 
} */

.reg {
  width: 200px;
  display: flex;
  justify-content: center;
  margin: 40px;
  padding: 10px;
  /* background: red; */
  border: 1px black solid;
  border-radius: 15px;
  padding: 100p;
  /* border: black; */
  /* display: flex; */
}

.revers p:hover {
  cursor: pointer;
}


.flex-container>div {
  /* background-color: #f1f1f1; */
  width: 250px;
  margin: 10px;
  /* text-align: center; */
  line-height: 25px;
  font-size: 20px;
  font-weight: 700;

}

.flex-container {
  display: flex;
  /* flex-wrap: nowrap;
    background-color: DodgerBlue; */
  /* justify-content: space-around; */
  column-gap: 100px;
  justify-content: center;
}

.flex-container>div.desc {
  /* background-color: #f1f1f1; */
  width: 250px;
  margin: 10px;
  /* text-align: center; */
  line-height: 25px;
  /* font-size: 20px; */
  font-weight: normal;

}
</style>

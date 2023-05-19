<template>
    <form class="needs-validation" novalidate>
        <div class="input-wrapper">
            <label for="from-input1" class="input-label" :class="{ 'input-filled': input1 }">{{ input1Label }}</label>
            <input v-model="input1" @input="onChange" type="text" id="from-input1">
            <span class="clear-input" v-if="showClearIcon1" @click="clearInput('input1')">&#10006;</span>
        </div>
        <div class="revers">
            <p @click.prevent="swapInputs">⟳</p>
        </div>
        <div class="input-wrapper">
            <label for="from-input2" class="input-label" :class="{ 'input-filled': input2 }">{{ input1Label2
            }}</label>
            <input v-model="input2" @input="onChange" type="text" id="from-input2">
            <span class="clear-input" v-if="showClearIcon2" @click="clearInput('input2')">&#10006;</span>
        </div><br /><br />



        <div class="form-group" v-if="showAdditionalFields">
            <div>
                <label for="price">Предложить цену:</label>
                <input type="text" id="price" name="price" v-model="price">
            </div>
            <div>
                <label for="date">Дата рейса:</label>
                <input type="date" id="date" name="date" v-model="date">
            </div>
            <div>
                <label for="time">Время:</label>
                <input type="time" id="time" name="time" v-model="time">
            </div>
            <div>
                <label for="adults">Взрослые:</label>
                <div class="input-group">
                   <button type="button" @click="removeAdult">-</button>
                    <input type="text" id="adults" name="adults" v-model="adults">
                     <button type="button" @click="addAdult">+</button>
                </div>
            </div>
            <div>
                <label for="children">Детские:</label>
                <div class="input-group">
                    <button type="button" @click="removeChild">-</button>
                    <input type="text" id="children" name="children" v-model="children">
                    <button type="button" @click="addChild">+</button>
                </div>
            </div>
            <div>
                <label for="name">Название:</label>
                <input type="text" id="name" name="name" v-model="name">
            </div>
        </div>


        <MyButton :showForm="showForm" @click="buttonAction" id="myButton">{{ btn }}</MyButton>

        <b-modal v-model="isModalVisible" hide-footer :title="modalTitle">

            <LoginForm v-if="loginMode" @switch-mode="toggleForm" @login="updateUsername" @submit.prevent="login" />
            <RegisterForm v-else @switch-mode="toggleForm" @register="updateUsername" @submit.prevent="register" />
        </b-modal>


        <AdditionalFields @form-submitted="handleFormSubmitted" />



    </form>
</template>
<script>
import AdditionalFields from './AdditionalFields.vue';
import MyForm from './MyForm.vue';
import LoginForm from '../reg/LoginForm.vue';
import RegisterForm from '../reg/RegisterForm.vue';
import ModalReg from '../Modal/ModalReg.vue'
export default {
    name: 'TransferForm',
    props: {
        showAdditionalFields: {
      type: Boolean,
      default: false // устанавливаем значение по умолчанию
    },
        buttonLabel: String
    },
    components: {
        AdditionalFields,
        MyForm,
        LoginForm,
        RegisterForm,
        ModalReg,


    },

    data() {
        return {
            input1: '',
            input2: '',
            showForm: false,
            btn: "Получить предложение",
            formSubmitted: false,
            formInputs: {},
            ShowData: false,
            // showAdditionalFields: false,
            isClicked: false,

            isLogin: true,
            modalTitle: 'Вход',
            buttonText: 'Регистрация',
            isModalVisible: false,
            loginMode: true,
            activeForm: 'Войти',


            date: '',
            time: '',
            name: '',
            price: '',
            adults: 0,
            children: 0,
        }
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
    },

    methods: {
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
        toggleForm() {
            this.showForm = true
        },
        swapInputs() {
            const temp = this.input1;
            this.input1 = this.input2;
            this.input2 = temp;
        },

        clearInput(inputName) {
            this[inputName] = '';
        },
        onChange() {
            // обновляем класс label в зависимости от значения input
            const label = event.target.previousElementSibling;
            label.classList.toggle('input-filled', event.target.value);
            this.showClearIcon1 = Boolean(this.input1);
            this.showClearIcon2 = Boolean(this.input2);
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
        },
        buttonAction() {
            if (this.isClicked) {
                // this.btn = 'Кнопка нажата повторно';
                this.isModalVisible = true;
                this.$emit('form-submitted', {
                    date: this.date,
                    time: this.time,
                    name: this.name,
                    price: this.price,
                    adults: this.adults,
                    children: this.children,
                });


            } else {
                this.showAdditionalFields = true;
                this.showForm = !this.showForm;
                this.btn = 'Перейти к заявке';
                document.getElementById("myElement").style.display = "none";
                const myButton = document.getElementById('myButton');
                const myElement = document.getElementById('myElement');
                myElement.style.display = 'none';
                myButton.style.marginBottom = '100px';
                myButton.style.marginTop = '20px';
            }
            this.isClicked = true
        },

        addAdult() {
            this.adults = Math.max(0, this.adults + 1);
        },
        removeAdult() {
            this.adults = Math.max(0, this.adults - 1);
        },
        addChild() {
            this.children = Math.max(0, this.children + 1);
        },
        removeChild() {
            this.children = Math.max(0, this.children - 1);
        },

        showFormInputs() {
            this.formSubmitted = true;
        },
        handleFormSubmitted(inputs) {
            this.formInputs = inputs;
        },
    },
}
</script>
<style scoped>
#additional-fields div {
    margin-bottom: 10px;
}
.input-group{
    flex-wrap: nowrap!important;
}
</style>

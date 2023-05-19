<template>
    <div>
    
      <input type="text" v-model="input1">
      <input type="text" v-model="input2">
      <input type="text" v-model="input3">
      <button @click="submitForm">Показать введенные данные</button>
    </div>
  </template>
  
  <script>
  export default {
    name:'MyForm',
    data() {
      return {
        input1: '',
        input2: '',
        input3: '',
      }
    },
    methods: {
      submitForm() {
        this.$emit('form-submitted', {
          input1: this.input1,
          input2: this.input2,
          input3: this.input3,
        });
      }
    }
  }
  </script>
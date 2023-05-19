<template>
  <button type="button" :class="btnClass" @click="onClick"> <slot>{{ buttonText }}</slot></button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    showForm: {
      type: Boolean,
      required: true
    },
    btn: {
      type: String,
      default: 'btn-success',
    },
  },
  data() {
    return {
      buttonText: 'Получить предложения',
    };
  },
  computed: {
    btnClass() {
      return `btn ${this.btn}`;
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
      this.$emit('update:showForm', true); // при клике на кнопку, обновляем значение пропса showForm
    },
  },
}
</script>

<style scoped>
.btn-success{
  width: 400px;
  height: 42px;
}
</style>

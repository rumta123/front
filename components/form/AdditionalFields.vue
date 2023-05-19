<template>
  <div>
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
        <label for="old">Взрослые:</label>
        <div>
          <button @click="old = old > 0 ? old - 1 : 0">-</button>
          <input type="text" id="old" name="old" v-model.number="old">
          <button @click="old = old + 1">+</button>
        </div>
      </div>
      <div>
        <label for="kinder">Детские:</label>
        <div>
          <button @click="kinder = kinder > 0 ? kinder - 1 : 0">-</button>
          <input type="text" id="kinder" name="kinder" v-model.number="kinder">
          <button @click="kinder = kinder + 1">+</button>
        </div>
      </div>
      <label for="name">Название:</label>
      <input type="text" id="name" name="name" v-model="name">
    </div>

  </div>


</template>
  
<script>
export default {
  name: 'AdditionalFields',
  props: {
    showAdditionalFields: Boolean,
    buttonLabel: String
  },
  data() {
    return {
      date: '',
      time: '',
      name: '',
      price: '',
      old: 0,
      kinder: 0,

    };
  },
  methods: {
    buttonAction() {
      this.$emit('form-submitted', {
        date: this.date,
        time: this.time,
        name: this.name,
        price: this.price,
        old: this.old,
        kinder: this.kinder,
      });
      // Do something when the button is clicked
    }
  }
};
</script>
<style scoped>
.form-group div {
  margin-bottom: 10px;
}

.form-group div {
  margin-bottom: 10px;
}
.input-group button {
  padding: 5px;
  margin: 0 5px;
  background-color: #ccc;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
.input-group input[type="text"] {
  width: 50px;
  text-align: center;
}

.input-group {
    flex-wrap: nowrap!important;;
}
</style>
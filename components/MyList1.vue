<template>
    <ul>
        <li
      v-for="item in items"
      :key="item"
      @click="handleItemClick(item)"
      :class="{ active: activeItem === item }"
    >
      {{ item }}
    </li>
    </ul>
  </template>
  
  <script>
  export default {
    name: 'MyList1',
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    data() {
    return {
      activeItem: null
    }
  },
    methods: {
    handleItemClick(item) {
      // Выполните здесь необходимые действия при клике на элементе списка
      console.log(`Вы кликнули на элемент ${item}`);
    }
  }
  }
  </script>

<style scoped>
  ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  cursor: pointer;


  /* ГЛАВНАЯ */



font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;

color: #000000;
padding-top: 55px;
text-decoration: none; /* Отменяем подчеркивание */

}

li.active {
    text-decoration: underline; 
}
li:hover{
    text-decoration: underline;
}
</style>
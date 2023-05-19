<template>
    <yandex-map :center="[55.751999, 37.617734]" :zoom="10">
      <ymap-marker :geometry="[55.751999, 37.617734]" />
    </yandex-map>
  </template>
  
  <script>
  export default {
    name: 'MyMap'
  }
  </script>
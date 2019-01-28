<template>
    <div class="box">
        <img :src="imageUrl">
        <strong>{{fullName}}</strong>
    </div>
</template>

<style type="text/css">
.box {
    display: flex;
    align-items:center;
}

.box img {
    width: 40px;
    border-radius: 50%; 
    margin-right: 10px
}
</style>

<script>
import teachers from './data';
export default {
    data: function() {
      return {
          fullName: teachers[this.name].name,
          imageUrl: teachers[this.name].avatar,
      }
  },
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
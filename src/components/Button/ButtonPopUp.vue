<template>
  <button @click="showPopUp">
      К покупкам
  </button>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    methods: {
        ...mapMutations(['showPopUp'])
    }
}
</script>

<style scoped>
    button{
        width: 340px;
        height: 70px;
        background: linear-gradient(0deg, #7DB945, #7DB945), #7DB945;
        border-radius: 10px;
        font-family: RotondaC, sans-serif;
        font-weight: bold;
        font-size: 22px;
        line-height: 36px;
        text-align: center;
        letter-spacing: 0.01em;
        color: white;
        border: none;
        cursor: pointer;
    }
</style>
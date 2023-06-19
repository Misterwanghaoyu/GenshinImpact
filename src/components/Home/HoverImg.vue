<template>
  <div class="item" @mouseenter="data.show = true" @mouseleave="data.show = false">
    <img v-show="data.show" :src="src1" alt="">
    <img v-show="!data.show" :src="src2" alt="">
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue'
export default {
  props: {
    src1: {
      type: String,
      required: true
    },
    src2: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const data = reactive({
      show: false,
    })
    const change = () => {
      console.log(props.src1)
      data.show = !data.show
    }
    return {
      data,
      change
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  height: 100%;
  img {
    height: 100%;
  }
}
</style>
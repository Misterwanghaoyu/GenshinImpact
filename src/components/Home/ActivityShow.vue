<template>
  <div class="activity">
    <img :src="ActivityShowProperty.activityimg" alt="" style="width: 20rem;">
    <img :src="ActivityShowProperty.activityintroduceimg" alt="" style="height: 9rem;position:relative;top:3rem">
  </div>
</template>

<script lang="ts">
export default {
  props: {
    ActivityShowProperty: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.activity {
  display: flex;
  width: 47rem;
}
</style>
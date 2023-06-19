<template>
  <div class="activity">
    <img :src="ActivityShowProperty.activityimg" alt="" style="width: 20rem;">
    <img :src="ActivityShowProperty.activityintroduceimg" alt="" style="height: 9rem;position:relative;top:5rem">
  </div>
</template>

<script lang="ts">
  export default {
    props:{
      ActivityShowProperty:{
        type:Object,
        required:true
      }
    },
    setup(){
      return{

      }
    }
  }
</script>

<style lang="scss" scoped>
.activity{
  display: flex;
  position: absolute;
  bottom: 8rem;
  left: 24rem;
}
</style>
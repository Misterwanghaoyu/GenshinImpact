<template>
  <div class="video" @click.self="$emit('closevideo')">
    <img class="bg" :src="bgsrc" alt=""/>
    <video autoplay loop controls :src="videosrc"></video>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    bgsrc:{
      type:String,
      required:false
    },
    videosrc: {
      type: String,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.video {
  width: 100%;
  height: 100%;
  display: flex;
  background: rgba(0, 0, 0, .5);
  position: absolute;
  .bg{
    transform: translate(50%,50%);
    right: 50%;
    bottom: 50%;
    width: 40rem;

    position: absolute;
  }
  video {
    height: 44%;
    margin: auto;
  }
}
</style>
<template>
  <div class="character">
    <div class="characterimg"
      :style="{ background: `url(${CharacterShowProperty.characterimgsrc}) no-repeat center`, backgroundSize: 'cover' }">
    </div>
    <img class="introduce" :src="CharacterShowProperty.characterintroducesrc" />
    <HoverImg @click="$emit('showvideo', CharacterShowProperty.videosrc)" class="videobtn"
      src1="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/c426fec3b94473360c5bac48a1bfe7bc_306132382338603513.png"
      src2="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/6327f3b41241ec13717400eb04df58ca_9016145552190074661.png">
    </HoverImg>
    <div class="cv">
      <HoverImg 
        :src1="CharacterShowProperty.chinesecvsrc.src1"
        :src2="CharacterShowProperty.chinesecvsrc.src2">
      </HoverImg>
      <HoverImg 
        :src1="CharacterShowProperty.japanesecvsrc.src1"
        :src2="CharacterShowProperty.japanesecvsrc.src2">
      </HoverImg>
    </div>
  </div>
</template>

<script lang="ts">
import HoverImg from './HoverImg.vue';

export default {
  //CharacterShowProperty的属性
  //{
  //   characterimgsrc: "",角色图片
  //   characterintroducesrc: "",角色介绍图片
  //   chinesecvsrc: "",中文cv
  //   japanesecvsrc: "",日文cv
  //   videosrc: ""视频url（在该组件无用）
  // }
  props: {
    CharacterShowProperty: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {};
  },
  components: { HoverImg }
}
</script>

<style lang="scss" scoped>
.character {
  position: absolute;
  width: 100%;
  height: 100%;

  .characterimg {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .introduce {
    height: 13rem;
    position: absolute;
    left: 20rem;
    top: 10rem;
  }

  .videobtn {
    height: 4rem;
    right: 29rem;
    top: 10rem;
    position: absolute;
  }
  .cv{
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 21rem;
    bottom: 9rem;
    height: 8.5rem;
    justify-content: space-between;
    align-items: center;
    div{
      height: 3.5rem;
    }
  }
}
</style>
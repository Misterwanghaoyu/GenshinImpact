<template>
  <div style="width: 100%;height:100%;position: relative;"
    :style="{ background: 'url(' + bgSrc + ') no-repeat center', backgroundSize: 'cover' }">
    <ul class="city">
      <Character v-for="item in charactersInfo" :imgSrc="item.imgSrc" :id="item.id"
          :imgNameSrc="item.imgNameSrc" :cv="item.cv" :info="item.info" :property="item.property"></Character>
    </ul>
    <CharacterTab :charactersInfo="charactersInfo"></CharacterTab>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue'
import Character from './Character.vue'
import CharacterTab from './CharacterTab.vue'
export default {
  props: ['bgSrc', 'charactersInfo'],
  setup(){
    const data=reactive({

    })
    return{
      data
    }
  },
  methods: {

  },
  components: { Character, CharacterTab }
}
</script>

<style scoped>
.animation-enter,
.animation-leave-to {
  opacity: 0;
}

.animation-enter-to,
.animation-leave {
  opacity: 1;
}

.animation-enter-active,
.animation-leave-active {
  transition: opacity 0.4s
}
.city {
  position: relative;
  height: 100%;
  width: 100%;
  /*6倍大小*/
  display: flex;
}
</style>

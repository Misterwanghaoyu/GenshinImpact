<template>
  <div class="character_tab">
    <router-link v-for="item in charactersInfo" :to="{query: { char: item.id }}" @click="data.active(item.id)" :class="{active:data.index==item.id}">
      <img :src="item.IconImg" alt="">
      <p class="name">{{ item.name }}</p>
      <div class="border"></div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';

export default {
  props: ['charactersInfo'],
  setup(){
    const data=reactive({
      index:0,
      active:(id:number)=>{
        data.index=id
      }
    })
    return{
      data
    }
    
  }
}
</script>

<style scoped>
.character_tab {
  display: flex;
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
}

.character_tab a {
  color: white;
  background: rgba(0, 0, 0, 0.4);
  margin-right: 20px;
  border-radius: 5px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.name {
  background: rgba(0, 0, 0, 0.6);
  text-align: center;
  line-height: 1.5rem;
}

.border {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 2px solid white;
  opacity: 0;
  box-sizing: border-box;
}

.character_tab a:hover .border {
  opacity: 1;
}


.character_tab .active .name,.character_tab a:hover .name {
  background: rgba(255, 255, 255, 1) !important;
  color: black;
}
</style>

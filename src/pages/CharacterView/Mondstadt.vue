<template>
  <City :bgSrc="data.bgSrc" :charactersInfo="data.charactersInfo"></City>
</template>

<script lang="ts">
import City from '@/components/Character/City.vue'
import { reactive } from 'vue'
export default {
  setup() {
    const data = reactive({
      id: 0,
      name: '蒙德城',
      bgSrc: 'https://uploadstatic.mihoyo.com/contentweb/20200211/2020021114220951905.jpg',
      charactersInfo: [
        {
          id: 0,
          name: '琴',
          imgSrc: 'https://webstatic.mihoyo.com/upload/contentweb/2022/06/30/b51565c6f1298e534e90b6e63332e9c1_6618231443033589469.png',
          IconImg: 'https://uploadstatic.mihoyo.com/contentweb/20220127/2022012718344593599.png',
          imgNameSrc: 'https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620142281505.png',
          cv: '林簌',
          info: `身为西风骑士团的代理团长，琴一直忠于职守，为人们带来安宁。虽然并非天赋异禀，但通过刻苦训练，如今的她已然能够独当一面。<br>
              当风魔龙的威胁开始临近，这位可靠的代理团长早已做好了准备，誓要守护蒙德。`,
          property: 'https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620142687125.png'
        },
        {
          id: 1,
          name: '温迪',
          imgSrc: 'https://webstatic.mihoyo.com/upload/contentweb/2022/06/30/965e940e6caafe8fbd4bf0e17653000b_7797376782783229067.png',
          IconImg: 'https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617031747812.png',
          imgNameSrc: 'https://uploadstatic.mihoyo.com/contentweb/20191122/2019112214234923416.png',
          cv: '喵⭐酱',
          info: `来路不明的吟游诗人，有时唱一些老掉牙的旧诗，有时又会唱出谁也没听过的新歌。<br> 
              喜欢苹果和热闹的气氛，讨厌奶酪和一切黏糊糊的物质。<br> 
              在引导「风」的元素力时，元素的塑形往往外显为羽毛，因为他很中意看上去轻飘飘的东西。`,
          property: 'https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620142687125.png'
        },
        {
          id: 2,
          name: '可莉',
          imgSrc: 'https://webstatic.mihoyo.com/upload/contentweb/2022/06/30/16cff1c00f651f98427fc3fbab7fc855_1013342926215826750.png',
          IconImg: 'https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617033181769.png',
          imgNameSrc: 'https://uploadstatic.mihoyo.com/contentweb/20200103/2020010311085148050.png',
          cv: '花玲',
          info: `西风骑士团，火花骑士！永远伴随闪光与爆炸出现！<br>
              ——然后在琴团长严厉的目光注视下默默消失。<br>
              虽然新炸药的配方，很多都是在被关禁闭的时候想出来的……<br>
              但如果不被关禁闭的话，就更好了。`,
          property: 'https://uploadstatic.mihoyo.com/contentweb/20200103/2020010311085611631.png'
        }
      ]
    })
    return {
      data
    }
  },
  components: { City }
}
</script>

<style></style>

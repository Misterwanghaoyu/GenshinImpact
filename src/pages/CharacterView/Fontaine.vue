<template>
  <City :bgSrc="data.bgSrc" :charactersInfo="data.charactersInfo"></City>
</template>

<script lang="ts">
import City from '@/components/Character/City.vue'
import {reactive} from 'vue'
// import { mapMutations } from 'vuex'
export default {
  setup(){
    const data=reactive({
      id: 4,
      name: '枫丹廷',
      bgSrc: 'https://act-webstatic.mihoyo.com/upload/contentweb/hk4e/34ec75c9ed70f793cdd698ad1a4764e5_731983624099835302.jpg',
      charactersInfo: [
        {
          id: 0,
          name: '林尼',
          imgSrc: 'https://act-webstatic.mihoyo.com/upload/contentweb/hk4e/aed7f3d44289e8f796c19fc4cd13ad9b_5443840253658661899.png',
          IconImg: 'https://act-webstatic.mihoyo.com/upload/contentweb/hk4e/7b47aa8ac8e2a35ae5e7d37d264dcb93_8832500935181332478.png',
          imgNameSrc: 'https://act-webstatic.mihoyo.com/upload/contentweb/hk4e/a23ca4ce4267bf1c561b29be21157f4a_3055085968762220566.png',
          cv: '锦鲤',
          info: `闻名枫丹的天才魔术师，以精妙的手法和言语牵动着观众的心。伶牙俐齿，演技精湛，心思如猫一样难以猜透。`,
          property: 'https://uploadstatic.mihoyo.com/contentweb/20210720/2021072011091174753.png'
        },
        {
          id: 1,
          name: '琳妮特',
          imgSrc: 'https://act-webstatic.mihoyo.com/upload/contentweb/hk4e/631514b481df43070c5d0f06a5d07a61_6900237162378067835.png',
          IconImg: 'https://act-webstatic.mihoyo.com/upload/contentweb/hk4e/c2759cdfc8206689f137d38ca5c6fe98_1943079451542028396.png',
          imgNameSrc: 'https://act-webstatic.mihoyo.com/upload/contentweb/hk4e/3f55e0f41b712148376885f195637899_6317963737015334702.png',
          cv: '可可味',
          info: `总是藏在阴影中的魔术助手，自称「多功能魔术助理机关」。寡言少语，罕有表情，行动如猫一样难以预料。`,
          property: 'https://act-webstatic.mihoyo.com/upload/contentweb/hk4e/4d328d77ee1768135594ba82c14733d8_2085459532628772136.png'
        }
      ]
    })
    return {
      data
    }
  },
  // activated () {
  //   this.CHANGE_CITY_ACTIVE('稻妻城')
  // },
  // methods: {
  //   ...mapMutations(['CHANGE_CITY_ACTIVE'])
  // },
  components: { City }
}
</script>

<style>
</style>

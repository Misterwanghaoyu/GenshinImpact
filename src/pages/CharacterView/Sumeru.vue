<template>
  <City :bgSrc="data.bgSrc" :charactersInfo="data.charactersInfo"></City>
</template>

<script lang="ts">
import City from '@/components/Character/City.vue'
import { reactive } from 'vue'
export default {
  setup() {
    const data = reactive({
      id: 3,
      name: '须弥城',
      bgSrc: 'https://webstatic.mihoyo.com/upload/contentweb/2022/08/15/04d542b08cdee91e5dabfa0e85b8995e_8653892990016707198.jpg',
      charactersInfo: [
        {
          id: 0,
          name: '提纳里',
          imgSrc: 'https://webstatic.mihoyo.com/upload/contentweb/2022/08/19/a15445b2b2e4443398eabf3b479f49e7_8073097535789989508.png',
          IconImg: 'https://webstatic.mihoyo.com/upload/contentweb/2022/08/15/1f88bdae2e99307e68a0bbfedf6cc74f_2882938237707913291.png',
          imgNameSrc: 'https://webstatic.mihoyo.com/upload/contentweb/2022/08/15/4f3f7fc8cc5fce975bfff8d552e8e7b8_7543421952558259312.png',
          cv: '莫然',
          info: '道成林的巡林官，毕业于阿弥利多学院的植物学学者。每天都过着巡查雨林、保护生态、教训笨蛋的充实生活。',
          property: 'https://webstatic.mihoyo.com/upload/contentweb/2022/08/15/b131cb7706e97d71ecf3d4f2965b0ff1_7476946874531800864.png'
        },
        {
          id: 1,
          name: '柯莱',
          imgSrc: 'https://webstatic.mihoyo.com/upload/contentweb/2022/08/19/2c752da0a5921583011a4ec36f83703c_8500020629476268998.png',
          IconImg: 'https://webstatic.mihoyo.com/upload/contentweb/2022/08/15/3677cbc063b7ab3887ceb7f9a77287ac_1039229097287658400.png',
          imgNameSrc: 'https://webstatic.mihoyo.com/upload/contentweb/2022/08/15/a9f6aaf7d1503afaaeb4d7fb6f943cd3_1494223600602969589.png',
          cv: '秦文静',
          info: `见习巡林员，师从提纳里。学术方面较同龄人起步稍晚，目前正在努力补习各种知识。<br>
              她将性格的另一面深深掩藏在阳光善良的表象之下。`,
          property: 'https://webstatic.mihoyo.com/upload/contentweb/2022/08/15/b131cb7706e97d71ecf3d4f2965b0ff1_7476946874531800864.png'
        },
        {
          id: 2,
          name: '纳西妲',
          imgSrc: 'https://webstatic.mihoyo.com/upload/contentweb/2022/10/24/fe684624008db25ac4b44ea4704f9ba0_4542359697614905341.png',
          IconImg: 'https://webstatic.mihoyo.com/upload/contentweb/2022/10/20/62cb7fb1815d9d05d3ece2e0d8e85c7d_8731082942818264376.png',
          imgNameSrc: 'https://webstatic.mihoyo.com/upload/contentweb/2022/10/20/8835b77a602f449a0663bb4848356f13_831445811377098451.png',
          cv: '花玲',
          info: `「小吉祥草王」深居于净善宫内，向来不受重视，也很少被人提及。<br>
她身负重任，哪怕目睹漆黑，经历孤独，也不曾停下脚步。`,
          property: 'https://webstatic.mihoyo.com/upload/contentweb/2022/08/15/b131cb7706e97d71ecf3d4f2965b0ff1_7476946874531800864.png'
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

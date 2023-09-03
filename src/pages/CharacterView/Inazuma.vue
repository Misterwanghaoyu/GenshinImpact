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
      id: 2,
      name: '稻妻城',
      bgSrc: 'https://uploadstatic.mihoyo.com/contentweb/20210719/2021071917030766463.jpg',
      charactersInfo: [
        {
          id: 0,
          name: '神里绫华',
          imgSrc: 'https://uploadstatic.mihoyo.com/contentweb/20210720/2021072011090118454.png',
          IconImg: 'https://uploadstatic.mihoyo.com/contentweb/20210720/2021072011085576262.png',
          imgNameSrc: 'https://uploadstatic.mihoyo.com/contentweb/20210720/2021072011090831883.png',
          cv: '小N',
          info: `稻妻「社奉行」神里家的大小姐。端庄文雅，聪慧坚韧。<br>
              待人接物真诚又得体，深受稻妻民众爱戴，贵有「白鹭公主」之名。`,
          property: 'https://uploadstatic.mihoyo.com/contentweb/20210720/2021072011091174753.png'
        },
        {
          id: 1,
          name: '雷电将军',
          imgSrc: 'https://webstatic.mihoyo.com/upload/contentweb/2022/06/30/fdcbc9ef8859b7077d92ae38d925e15e_7767077963502328666.png',
          IconImg: 'https://uploadstatic.mihoyo.com/contentweb/20210817/2021081714114216212.png',
          imgNameSrc: 'https://webstatic.mihoyo.com/upload/contentweb/2022/06/24/e7378ca125c0b91b75e68f3351ca84f6_4701366233880939076.png',
          cv: '菊花花',
          info: `雷电将军——此世最殊胜威怖的雷霆化身，稻妻幕府的最高主宰。<br>
              挟威权之鸣雷，逐永恒之孤道的寂灭者。`,
          property: 'https://uploadstatic.mihoyo.com/contentweb/20210817/2021081714133446589.png'
        },
        {
          id: 2,
          name: '珊瑚宫心海',
          imgSrc: 'https://webstatic.mihoyo.com/upload/contentweb/2022/06/30/8ca5953fb331d71bc880496f5e8b7745_6228630778438562406.png',
          IconImg: 'https://uploadstatic.mihoyo.com/contentweb/20210914/2021091414024724995.png',
          imgNameSrc: 'https://uploadstatic.mihoyo.com/contentweb/20210914/2021091414025755510.png',
          cv: '龟娘',
          info: `心海是海祇岛的「现人神巫女」，也就是现任海祇岛最高领袖。<br>
              她通读兵法、擅长谋略，在军事上有着独特见解，也能将内政、外交等工作处理得井井有条。<br>
              不过，这位人们眼中深不可测的领导者，似乎也有不为人知的一面…`,
          property: 'https://uploadstatic.mihoyo.com/contentweb/20210914/2021091414033856414.png'
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

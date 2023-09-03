<template>
  <City :bgSrc="data.bgSrc" :charactersInfo="data.charactersInfo"></City>
</template>

<script lang="ts">
import City from '@/components/Character/City.vue'
import {reactive} from 'vue'
export default {
  setup(){
    const data=reactive({
      id: 1,
      name: '璃月港',
      bgSrc: 'https://uploadstatic.mihoyo.com/contentweb/20200515/2020051511072867344.jpg',
      charactersInfo: [
        {
          id: 0,
          name: '魈',
          imgSrc: 'https://webstatic.mihoyo.com/upload/contentweb/2022/06/30/930f3ce55517e3c711a962c82e4639c0_8788966481995409698.png',
          IconImg: 'https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617035787693.png',
          imgNameSrc: 'https://uploadstatic.mihoyo.com/contentweb/20200220/2020022016332869699.png',
          cv: 'kinsen',
          info: `守护璃月港的「三眼五显仙人」之一，妙称「护法夜叉大将」。<br>
              虽然外表看起来是一个少年人，但一些有关他的传说，已在古卷中流传千年。<br>
              对望舒客栈中一道名为「杏仁豆腐」的菜颇为喜爱。<br>
              究其原因，是因为「杏仁豆腐」的味道，与他曾经吞噬过的「美梦」十分相似。`,
          property: 'https://uploadstatic.mihoyo.com/contentweb/20200220/2020022016441018411.png'
        },
        {
          id: 1,
          name: '刻晴',
          imgSrc: 'https://webstatic.mihoyo.com/upload/contentweb/2022/07/04/d063646e97392638e07da24ce6b8c3cb_3567507076955258130.png',
          IconImg: 'https://uploadstatic.mihoyo.com/contentweb/20200828/2020082814015644368.png',
          imgNameSrc: 'https://uploadstatic.mihoyo.com/contentweb/20200828/2020082814023090007.png',
          cv: '谢莹',
          info: `璃月七星之一，玉衡星。对「帝君一言而决的璃月」颇有微词——但实际上，神挺欣赏她这样的人。<br>
              她坚信与人类命运相关的事，应当由人类去做，而且人类一定可以做得更好。为了证明这一点，她比任何人都要努力。`,
          property: 'https://uploadstatic.mihoyo.com/contentweb/20200828/2020082814033195140.png'
        },
        {
          id: 2,
          name: '达达利亚',
          imgSrc: 'https://uploadstatic.mihoyo.com/contentweb/20201103/2020110317320323980.png',
          IconImg: 'https://uploadstatic.mihoyo.com/contentweb/20201103/2020110314190784136.png',
          imgNameSrc: 'https://uploadstatic.mihoyo.com/contentweb/20201103/2020110314191828910.png',
          cv: '鱼冻',
          info: `达达利亚——来自寒冰之国，心思变幻莫测的客人。<br>
              不必猜测他的想法，也无需质疑他的来意。只要记住：这副稚气未脱的外表下暗藏的，是锤炼到极致的战士之躯。`,
          property: 'https://uploadstatic.mihoyo.com/contentweb/20201103/2020110314211545553.png'
        },
        {
          id: 3,
          name: '钟离',
          imgSrc: 'https://webstatic.mihoyo.com/upload/contentweb/2022/06/30/e699d7e2413ed5dfb384ee48c2b872d3_5181262111088024686.png',
          IconImg: 'https://uploadstatic.mihoyo.com/contentweb/20201120/2020112010371210769.png',
          imgNameSrc: 'https://uploadstatic.mihoyo.com/contentweb/20201120/2020112010401695507.png',
          cv: '彭博',
          info: `应「往生堂」邀请而来的神秘客卿。样貌俊美，举止高雅，拥有远超常人的学识。<br>
              虽说来历不明，却知礼数、晓规矩。坐镇「往生堂」，能行天地万物之典仪。`,
          property: 'https://uploadstatic.mihoyo.com/contentweb/20201120/2020112010401114547.png'
        }

      ]
    })
    return{
      data
    }
  },
  components: { City }
}
</script>

<style>
</style>

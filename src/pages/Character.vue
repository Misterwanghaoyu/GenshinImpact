<template>
  <div class="container">

    <div class="character_sidebar">
      <div class="mainString"></div>
      <ul>
        <li v-for="(item,index) in data.placeInfo" :key="item.placeName" @click="selectThis(index)"
          :class="data.selectIndex == index ? 'characterSelect' : ''">
          <div class="skewCube" :class="data.selectIndex == index ? 'skewCubeSelect' : ''"></div>
          <div class="placeName" :class="data.selectIndex == index ? 'placeNameSelect' : ''">{{ item.placeName }}</div>
        </li>
      </ul>
    </div>

    <div class="character_person">
      <CharacterShow :CharacterData="data.allCharacterData[data.selectIndex]"></CharacterShow>
    </div>

  </div>
</template>

<script lang="ts">
import { reactive } from 'vue'
import CharacterShow from '@/components/Character/CharacterShow.vue'
export default {
  setup() {
    const data = reactive({
      placeInfo: [
        { placeName: "蒙德城",},
        { placeName: "璃月港",},
        { placeName: "稻妻城",},
        { placeName: "须弥城", },
        { placeName: "敬请期待",}],
      selectIndex: 0,
      allCharacterData: [
        [
          {
            index: 0,
            nameImgSrc: "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620142281505.png",
            chinaCVName: "林簌",
            japanCVName: "斋藤千和",
            introduce: `身为西风骑士团的代理团长，琴一直忠于职守，为人们带来安宁。虽然并非天赋异禀，但通过刻苦训练，如今的她已
                                然能够独当一面。</br> 当风魔龙的威胁开始临近，这位可靠的代理团长早已做好了准备，誓要守护蒙德。`,
            personImgSrc: "https://webstatic.mihoyo.com/upload/contentweb/2022/06/30/b51565c6f1298e534e90b6e63332e9c1_6618231443033589469.png",
            headPortrait: "https://uploadstatic.mihoyo.com/contentweb/20220127/2022012718344593599.png",
            name: "琴"
          },
          {
            index: 1,
            nameImgSrc: "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620153436780.png",
            chinaCVName: "蔡书瑾",
            japanCVName: "石见舞菜香",
            introduce: `活泼率直的少女，是蒙德城中唯一的侦察骑士。<br>
                                擅长使用风之翼的安柏，连续三年蝉联蒙德城的「飞行冠军」。<br>
                                作为西风骑士团的新星，今天的安柏依然活跃在第一线`,
            personImgSrc: "https://webstatic.mihoyo.com/upload/contentweb/2022/07/04/6f0ef40157e95b0d59455c12f4d3f270_3262958961633311108.png",
            headPortrait: "https://uploadstatic.mihoyo.com/contentweb/20220127/2022012718350213870.png",
            name: "安柏"
          },
          {
            index: 2,
            nameImgSrc: "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620183862811.png",
            chinaCVName: "钟可",
            japanCVName: "田中理惠",
            introduce: `她是钟情于睡眠的知性魔女。<br>
                                作为西风骑士团图书馆的管理员，聪明的丽莎总能以最有效的方式将遇到的问题统统解决。<br>
                                虽然看似慵懒，但处变不惊的她似乎早已将一切尽数掌控。`,
            personImgSrc: "https://webstatic.mihoyo.com/upload/contentweb/2022/07/04/43922f5162840c215638affedad0459a_154157936806604489.png",
            headPortrait: "https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617000181697.png",
            name: "丽莎"
          },
          {
            index: 3,
            nameImgSrc: "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620194979094.png",
            chinaCVName: "孙晔",
            japanCVName: "鸟海浩辅",
            introduce: `在西风骑士团里，凯亚是代理团长最信任的副手。凡是交托于他的任务，总能得到解决。<br>
                                在蒙德城中，风趣幽默的他同样深受人们的喜爱，然而这位谈吐不凡的骑士隐约有着什么不为人知的秘密。`,
            personImgSrc: "https://webstatic.mihoyo.com/upload/contentweb/2022/07/04/cbce61ef1ee5586c4e77b2070348685f_2873159962263599144.png",
            headPortrait: "https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617001674227.png",
            name: "凯亚"
          },
          {
            index: 4,
            nameImgSrc: "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620221565877.png",
            chinaCVName: "宋媛媛",
            japanCVName: "鬼头明里",
            introduce: `<p>既是西风教会的祈礼牧师，又是蒙德城的闪耀偶像。</p>
                                <p>对于习惯了传统吟游诗人的蒙德来说，「偶像」是还不习惯的新生事物。但在蒙德，人人都爱芭芭拉。</p>
                                <p>这就是自由之都的自由精神——对大家投来的喜爱，芭芭拉是这样满怀感激地总结的。</p>`,
            personImgSrc: "https://webstatic.mihoyo.com/upload/contentweb/2022/07/04/6c009f0631eb71e697c2da76b608a51e_1586187959203635452.png",
            headPortrait: "https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617005720579.png",
            name: "芭芭拉"
          },
          {
            index: 5,
            nameImgSrc: "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620243557115.png",
            chinaCVName: "马洋",
            japanCVName: "小野贤章",
            introduce: `<p>身为蒙德城第一富豪，风度翩翩的迪卢克总是以完美的贵公子形象示人。</p>
                                 <p>然而他真实的一面，是秉承坚定信念的战士，他那「不惜一切守护蒙德」的意志犹如火焰般炽热，
                                令他能以恐怖的攻势，毫不留情地将一切敌人击溃。</p>`,
            personImgSrc: "https://webstatic.mihoyo.com/upload/contentweb/2022/06/30/f5ae62eff2cf426e98626c882dd0cf0d_3491810425996357724.png",
            headPortrait: "https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617015669833.png",
            name: "迪卢克"
          },
          {
            index: 6,
            nameImgSrc: "https://uploadstatic.mihoyo.com/contentweb/20191018/2019101817251653573.png",
            chinaCVName: "周帅",
            japanCVName: "内山昂辉",
            introduce: `<p>在蒙德坊间的传闻里，有人说他是被狼收养的弃婴，有人说他是狼灵的化身…<br>
                                利爪与苍雷在飞驰，狼永远与荒野为伴。<br>
                                时至今日，狼少年仍凭借他野兽般的直觉，在林间与狼群一起奔猎。</p>`,
            personImgSrc: "https://webstatic.mihoyo.com/upload/contentweb/2022/06/30/a1594317bbd0cefeb7da501f9879375b_6718910479380394402.png",
            headPortrait: "https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617025961375.png",
            name: "雷泽"
          },
          {
            index: 7,
            nameImgSrc: "https://uploadstatic.mihoyo.com/contentweb/20191122/2019112214234923416.png",
            chinaCVName: "喵☆酱",
            japanCVName: "村濑步",
            introduce: `<p>来路不明的吟游诗人，有时唱一些老掉牙的旧诗，有时又会唱出谁也没听过的新歌。<br>
                                喜欢苹果和热闹的气氛，讨厌奶酪和一切黏糊糊的物质。<br>
                                在引导「风」的元素力时，元素的塑形往往外显为羽毛，因为他很中意看上去轻飘飘的东西。</p>`,
            personImgSrc: "https://webstatic.mihoyo.com/upload/contentweb/2022/06/30/965e940e6caafe8fbd4bf0e17653000b_7797376782783229067.png",
            headPortrait: "https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617031747812.png",
            name: "温迪"
          }],
        [
          {
            index: 0,
            nameImgSrc: "https://uploadstatic.mihoyo.com/contentweb/20191018/2019101817251653573.png",
            chinaCVName: "周帅",
            japanCVName: "内山昂辉",
            introduce: `<p>在蒙德坊间的传闻里，有人说他是被狼收养的弃婴，有人说他是狼灵的化身…<br>
                                利爪与苍雷在飞驰，狼永远与荒野为伴。<br>
                                时至今日，狼少年仍凭借他野兽般的直觉，在林间与狼群一起奔猎。</p>`,
            personImgSrc: "https://webstatic.mihoyo.com/upload/contentweb/2022/06/30/a1594317bbd0cefeb7da501f9879375b_6718910479380394402.png",
            headPortrait: "https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617025961375.png",
            name: "雷泽"
          },
          {
            index: 1,
            nameImgSrc: "https://uploadstatic.mihoyo.com/contentweb/20191122/2019112214234923416.png",
            chinaCVName: "喵☆酱",
            japanCVName: "村濑步",
            introduce: `<p>来路不明的吟游诗人，有时唱一些老掉牙的旧诗，有时又会唱出谁也没听过的新歌。<br>
                                喜欢苹果和热闹的气氛，讨厌奶酪和一切黏糊糊的物质。<br>
                                在引导「风」的元素力时，元素的塑形往往外显为羽毛，因为他很中意看上去轻飘飘的东西。</p>`,
            personImgSrc: "https://webstatic.mihoyo.com/upload/contentweb/2022/06/30/965e940e6caafe8fbd4bf0e17653000b_7797376782783229067.png",
            headPortrait: "https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617031747812.png",
            name: "温迪"
          }
        ], [
          {
            index: 0,
            nameImgSrc: "https://uploadstatic.mihoyo.com/contentweb/20190926/2019092620243557115.png",
            chinaCVName: "马洋",
            japanCVName: "小野贤章",
            introduce: `<p>身为蒙德城第一富豪，风度翩翩的迪卢克总是以完美的贵公子形象示人。</p>
                                 <p>然而他真实的一面，是秉承坚定信念的战士，他那「不惜一切守护蒙德」的意志犹如火焰般炽热，
                                令他能以恐怖的攻势，毫不留情地将一切敌人击溃。</p>`,
            personImgSrc: "https://webstatic.mihoyo.com/upload/contentweb/2022/06/30/f5ae62eff2cf426e98626c882dd0cf0d_3491810425996357724.png",
            headPortrait: "https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617015669833.png",
            name: "迪卢克"
          },
          {
            index: 1,
            nameImgSrc: "https://uploadstatic.mihoyo.com/contentweb/20191018/2019101817251653573.png",
            chinaCVName: "周帅",
            japanCVName: "内山昂辉",
            introduce: `<p>在蒙德坊间的传闻里，有人说他是被狼收养的弃婴，有人说他是狼灵的化身…<br>
                                利爪与苍雷在飞驰，狼永远与荒野为伴。<br>
                                时至今日，狼少年仍凭借他野兽般的直觉，在林间与狼群一起奔猎。</p>`,
            personImgSrc: "https://webstatic.mihoyo.com/upload/contentweb/2022/06/30/a1594317bbd0cefeb7da501f9879375b_6718910479380394402.png",
            headPortrait: "https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617025961375.png",
            name: "雷泽"
          },
        ], [
          {
            index: 0,
            nameImgSrc: "https://uploadstatic.mihoyo.com/contentweb/20191018/2019101817251653573.png",
            chinaCVName: "周帅",
            japanCVName: "内山昂辉",
            introduce: `<p>在蒙德坊间的传闻里，有人说他是被狼收养的弃婴，有人说他是狼灵的化身…<br>
                                利爪与苍雷在飞驰，狼永远与荒野为伴。<br>
                                时至今日，狼少年仍凭借他野兽般的直觉，在林间与狼群一起奔猎。</p>`,
            personImgSrc: "https://webstatic.mihoyo.com/upload/contentweb/2022/06/30/a1594317bbd0cefeb7da501f9879375b_6718910479380394402.png",
            headPortrait: "https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617025961375.png",
            name: "雷泽"
          },
          {
            index: 1,
            nameImgSrc: "https://uploadstatic.mihoyo.com/contentweb/20191122/2019112214234923416.png",
            chinaCVName: "喵☆酱",
            japanCVName: "村濑步",
            introduce: `<p>来路不明的吟游诗人，有时唱一些老掉牙的旧诗，有时又会唱出谁也没听过的新歌。<br>
                                喜欢苹果和热闹的气氛，讨厌奶酪和一切黏糊糊的物质。<br>
                                在引导「风」的元素力时，元素的塑形往往外显为羽毛，因为他很中意看上去轻飘飘的东西。</p>`,
            personImgSrc: "https://webstatic.mihoyo.com/upload/contentweb/2022/06/30/965e940e6caafe8fbd4bf0e17653000b_7797376782783229067.png",
            headPortrait: "https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617031747812.png",
            name: "温迪"
          }
        ], [
          {
            index: 0,
            nameImgSrc: "https://uploadstatic.mihoyo.com/contentweb/20191018/2019101817251653573.png",
            chinaCVName: "周帅",
            japanCVName: "内山昂辉",
            introduce: `<p>在蒙德坊间的传闻里，有人说他是被狼收养的弃婴，有人说他是狼灵的化身…<br>
                                利爪与苍雷在飞驰，狼永远与荒野为伴。<br>
                                时至今日，狼少年仍凭借他野兽般的直觉，在林间与狼群一起奔猎。</p>`,
            personImgSrc: "https://webstatic.mihoyo.com/upload/contentweb/2022/06/30/a1594317bbd0cefeb7da501f9879375b_6718910479380394402.png",
            headPortrait: "https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617025961375.png",
            name: "雷泽"
          },
          {
            index: 1,
            nameImgSrc: "https://uploadstatic.mihoyo.com/contentweb/20191122/2019112214234923416.png",
            chinaCVName: "喵☆酱",
            japanCVName: "村濑步",
            introduce: `<p>来路不明的吟游诗人，有时唱一些老掉牙的旧诗，有时又会唱出谁也没听过的新歌。<br>
                                喜欢苹果和热闹的气氛，讨厌奶酪和一切黏糊糊的物质。<br>
                                在引导「风」的元素力时，元素的塑形往往外显为羽毛，因为他很中意看上去轻飘飘的东西。</p>`,
            personImgSrc: "https://webstatic.mihoyo.com/upload/contentweb/2022/06/30/965e940e6caafe8fbd4bf0e17653000b_7797376782783229067.png",
            headPortrait: "https://uploadstatic.mihoyo.com/contentweb/20200306/2020030617031747812.png",
            name: "温迪"
          }
        ]]
    })

    function selectThis(index:number) {
      data.selectIndex = index
    }


    return {
      data,
      selectThis
    }
  },
  components: {
    CharacterShow
  }
}
</script>

<style lang="scss" scoped>
.container {
  box-sizing: border-box;
  user-select: none;
  display: flex;
  width: 100%;
  min-width: 1500px;

  overflow: hidden;
  min-height: 864px;
  height: 105vh;
  background-color: rgb(32, 214, 242);
  background: 0/100% auto url("https://uploadstatic.mihoyo.com/contentweb/20200211/2020021114220951905.jpg") no-repeat;
  //background: url("https://uploadstatic.mihoyo.com/contentweb/20200515/2020051511073340128.jpg") no-repeat 0/100% 100%;
  //background: url("https://uploadstatic.mihoyo.com/contentweb/20200515/2020051511072867344.jpg") no-repeat 0/100% 100%;

  .character_sidebar {
    width: 370px;
    height: 105vh;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    z-index: 6;

    ul {
      list-style: none;
      padding: 0;
      margin-top: 170px;

      li {
        width: 80%;
        height: 54px;
        display: flex;
        cursor: pointer;
        color: white;
        font-weight: 400;
        font-size: 18px;

        .skewCube {
          width: 6px;
          height: 6px;
          background-color: white;
          transform: rotate(45deg);
          margin: auto 0;
          margin-left: 50px;
          box-sizing: border-box;
        }

        .skewCubeSelect {
          transform: rotate(45deg) scale(2.5);
          background-image: linear-gradient(45deg, gray 50%, white 50%);
          border: 1px white solid;
          box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 0.3);
        }


        .placeName {
          margin: 0 20px;
          height: 100%;
          line-height: 54px;

        }

        .placeNameSelect {
          margin-left: 40px;
        }

      }

      .characterSelect {
        //渐变
        background-image: linear-gradient(to right, rgba(44, 64, 75, 0.8) 20%, transparent 100%);
      }

    }

    .mainString {
      width: 4px;
      height: 100%;
      position: absolute;
      left: 51px;
      background-color: rgba(221, 231, 234, 0.8);
    }

  }

  .character_person {
    height: 105vh;
    width: calc(100vw - 370px);
    // background-color: aqua;
  }
}</style>
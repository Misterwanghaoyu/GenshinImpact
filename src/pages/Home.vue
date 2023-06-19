<template>
  <main class="root">
    <div class="main" ref="MainNode" :style="{transform:`translateY(${data.currentY}%)`}">
      <div class="page1">
        <a href="main" class="icon" target="_blank">
          <HoverImg
            src1="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/eaca3d0213a8faec5eb9c493b93d78ee_1021989947509769305.png"
            src2="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/4d196b00c038f501915dee5eacfd13dd_2181545737693287369.png">
          </HoverImg>
        </a>

        <img style="position: absolute; transform: translate(50%);right: 50%;height: 10rem;bottom: 5.5rem;"
          src="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/61f21e4cfed6b6580dccbe5fc4ec9895_7146720100365182400.png"
          alt="">
        <!-- 视频按钮 -->
        <HoverImg @click="data.showvideo1 = true"
          style="position: absolute;transform: translate(50%);right:40%;height: 4rem;bottom:4.5rem;"
          src1="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/15b9f062f76d9564c71efb5b71518c26_1974596886725091581.png"
          src2="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/4aaddf466f1bd912bc65771eea847b73_2205500423036166147.png">
        </HoverImg>
        <a href="main" class="to_main" target="_blank">
          <HoverImg
            src1="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/470f51077bde2f10cc53ad7317bb9280_6964723211795413386.png"
            src2="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/50cbde4decc5c7f1d53da7852c74d559_7944779827459064800.png">
          </HoverImg>
        </a>
        <div class="age" @click="data.showagepage = true"><img
            src="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/b3bdd51dc804a1a9e3271d91964b8847_1511053976308051577.png"
            alt=""></div>
        <div class="download">
          <HoverImg v-for="item in data.HoverImgPropertyList" :src1="item.src1" :src2="item.src2" />
        </div>
        <div class="video" v-if="data.showvideo1" @click.self="data.showvideo1 = false">
          <video autoplay loop
            src="https://webstatic.mihoyo.com/upload/static-resource/2023/05/13/3726cfc093c5b71c1f85ad88850f112f_4909327187514802333.mp4"></video>
        </div>
      </div>
      <div class="page2">
        <div class="boxlist">
          <HoverImg style="bottom:2rem;" @click="choosevideo2(0)"
            src1="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/7c9e8b71fe7552e108033bd69256ac2b_3929899729408035491.png"
            src2="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/fe4164c30d4e807f6b0d7a0456f64b34_4760329621369725584.png"
            class="box" />
          <HoverImg @click="choosevideo2(1)"
            src1="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/a05ebe84ad8c5758aa5614c7b9930f35_8544793172298371566.png"
            src2="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/0c6ce50f8110ccfa1c1196b32d3406b0_6261745997034189436.png"
            class="box" />
          <HoverImg style="bottom:2rem;" @click="choosevideo2(2)"
            src1="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/b7056aa56fcf3b63d3537552683b151e_6610680129021427258.png"
            src2="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/133af2e99aa8e5bad30d85f3228014ca_2335594452914944000.png"
            class="box" />
          <HoverImg @click="choosevideo2(3)"
            src1="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/40c73f9c368714a02f48159dd181d1f3_6442004251691046916.png"
            src2="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/bece0bbc5a2091c157c999481e2ec008_2806819940603160405.png"
            class="box" />
        </div>
        <!---->
        <a target="_blank"
          href="https://webstatic.mihoyo.com/ys/event/e20221207-card-dhcksn/index.html?game_biz=hk4e_cn&utm_source=offical">
          <HoverImg class="learnmore"
            src1="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/17/3c27789d287ed98c0907bb1495b87fcc_1234221800495860861.png"
            src2="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/17/5bf071a37544066d83dac2157f4d1d2f_1208964754996122732.png" />
        </a>
        <VideoShow v-if="data.showvideo2" :bgsrc="data.activebgsrc" :videosrc="data.activevideosrc2"
          @closevideo="data.showvideo2 = false"></VideoShow>
      </div>
      <div class="page3">
        <CharacterShow :CharacterShowProperty="data.activeCharacterShowProperty" @showvideo="choosevideo3">
        </CharacterShow>
        <div class="characterbar">
          <HoverImg @click="choosecharacter(0)"
            src1="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/18/da209b6c73f040f47f6c0f92e5bf8cb9_1751818127625530755.png?x-oss-process=image/format,webp/quality,Q_90"
            src2="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/18/3481dddc0fea179acd9cf6d8d33537e3_8263961480799018900.png?x-oss-process=image/format,webp/quality,Q_90">
          </HoverImg>
          <HoverImg @click="choosecharacter(1)"
            src1="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/18/90166df0d4a27d3770d9c64c82fe900c_8684775323637309681.png?x-oss-process=image/format,webp/quality,Q_90"
            src2="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/18/4990e9515357527374b3d687b96ba672_3898459617700584588.png?x-oss-process=image/format,webp/quality,Q_90">
          </HoverImg>
          <HoverImg @click="choosecharacter(2)"
            src1="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/18/c12219b91c07142e8a15ba4552054df7_866766260238792607.png?x-oss-process=image/format,webp/quality,Q_90"
            src2="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/18/627e273f229248eead8d32cedd37adba_5389286371522087727.png?x-oss-process=image/format,webp/quality,Q_90">
          </HoverImg>
        </div>
        <VideoShow v-if="data.showvideo3" :videosrc="data.activevideosrc3" @closevideo="data.showvideo3 = false">
        </VideoShow>
      </div>
      <div class="page4">
        <ActivityShow :ActivityShowProperty="data.activeActivityShowProperty" />
        <div class="activitybar">
          <HoverImg v-for="(item, index) in data.activitybariconList" :src1="item.src1" :src2="item.src2"
            @click="chooseacitivity(index)" />
        </div>
      </div>
      <div class="page5">
        <div class="icon">
          <img
            src="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/b3caf17831383b8cbdf4327ddb5c7df7_1612540845384408854.png?x-oss-process=image/format,webp/quality,Q_90"
            alt="">
          <img
            src="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/39757cdc18cdee2614468787876f2e67_8396104837967747284.png?x-oss-process=image/format,webp/quality,Q_90"
            alt="">
          <img
            src="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/2b9bb6c4a2032d10e63903d63ddacd44_1010502771119327766.png?x-oss-process=image/format,webp/quality,Q_90"
            alt="">
          <img
            src="https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/fbd70791fc82abd8b446d7235f3646a2_5012016882602896758.png?x-oss-process=image/format,webp/quality,Q_90"
            alt="">
        </div>
        <Swiper></Swiper>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { reactive,onMounted,ref } from 'vue'
import HoverImg from '@/components/Home/HoverImg.vue'
import CharacterShow from '@/components/Home/CharacterShow.vue'
import VideoShow from '@/components/Home/VideoShow.vue'
import ActivityShow from '@/components/Home/ActivityShow.vue'
import Swiper from '@/components/Home/Swiper.vue'
import {throttle1} from '@/util/DebounceAndThrottle.ts'
export default {
  components: {
    HoverImg,
    VideoShow,
    CharacterShow,
    ActivityShow,
    Swiper
  },
  setup() {
    const MainNode=ref()
    onMounted(()=>{
      const children=MainNode.value.childNodes.length
      const unitY=100/children
      
      window.onwheel=throttle1((e:WheelEvent)=>{
        if(e.deltaY>0){
          console.log(data.currentY);
          
          //下滑
          if(data.currentY===-(children-1)*unitY)return
          data.currentY-=unitY
          console.log(data.currentY);
        }
        else{
          console.log(data.currentY,unitY);
          //上滑
          if(data.currentY===0)return
          data.currentY+=unitY
        }
      },1000)
    })
    const data = reactive({
      currentY:0,
      showagepage: false,
      showvideo1: false,
      showvideo2: false,//page2的
      showvideo3: false,//page3的
      activebgsrc: "",
      activevideosrc2: "",//page2的
      activevideosrc3: "",//page3的
      activeCharacterShowProperty: {
        characterimgsrc: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/f9ecbe5f80423710c3e16edf3e09696f_2043757407972960634.png",
        characterintroducesrc: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/904f02830c839dec27a763fb81945fe0_6708589598195397491.png",
        chinesecvsrc: {
          src1: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/68c3685bc4538420bc81518097d6a69d_5580335531486584207.png",
          src2: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/4d253dac660c4e53b4fbc754e3af0af5_6561512421819222757.png"
        },
        japanesecvsrc: {
          src1: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/c859638c7d9abb6e452c81fd91f1e64f_685749351459684210.png",
          src2: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/3e1f853389af0af7957c1899dd678345_4395201827734772199.png"
        },
        videosrc: "https://webstatic.mihoyo.com/upload/static-resource/2021/06/28/2351ce1cd8a5e2e8943d76d9b02ccb55_3785681283394246837.mp4"
      },
      activeActivityShowProperty: {
        activityimg: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/ee407003c32393265c6d5d6b600e9d05_6373081098823285509.png?x-oss-process=image/format,webp/quality,Q_90",
        activityintroduceimg: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/b1035b24f6de50a59c01c94e7410f01a_9092399353443873833.png?x-oss-process=image/format,webp/quality,Q_90"
      },
      HoverImgPropertyList: [
        {
          src1: "data:image/webp;base64,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",
          src2: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/3c2e22315c4ec60220ff904f41761c23_5221414685752960269.png",
        },
        {
          src1: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/5c1e0a845a3ef7ed26a8639e44975860_4660642247891627717.png",
          src2: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/f15fb71e45b667c630927ef9635064b7_4692594144037754841.png"
        },
        {
          src1: "data:image/webp;base64,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",
          src2: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/bc994935d07c0d729b20fe0abf1999e0_398934438023603132.png"
        }
      ],

      VideoShowPropertyList: [
        {
          bgsrc: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/bc1415731274d970dd03de1fa5a2ae4c_2197958523207451782.png",
          videosrc: 'https://webstatic.mihoyo.com/upload/static-resource/2023/05/17/9dd660977f854bbcbcf6ec37dbc98ab4_4524320724652498843.mp4'
        },
        {
          bgsrc: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/8de9c74fbcce2cf14501e96f4f8bc82f_4181809729305588563.png",
          videosrc: 'https://webstatic.mihoyo.com/upload/static-resource/2023/05/17/82bafea40f119fdc3a994d67599d2e54_3307858566853801331.mp4'
        },
        {
          bgsrc: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/5235fe94fdf7af3e38b3da8302921a2f_8111041592394199199.png",
          videosrc: 'https://webstatic.mihoyo.com/upload/static-resource/2023/05/17/610722d50ae7fce6f74eec73d2ff6026_6050031844686729211.mp4'
        },
        {
          bgsrc: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/87742b2336350b71ba9aa8d5056bdf98_3485354484932154021.png",
          videosrc: 'https://webstatic.mihoyo.com/upload/static-resource/2023/05/17/6e3e4e7ff20c21114e39c84732a6bff3_6079057500263431630.mp4'
        }

      ],
      CharacterShowPropertyList: [
        {
          characterimgsrc: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/f9ecbe5f80423710c3e16edf3e09696f_2043757407972960634.png",
          characterintroducesrc: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/904f02830c839dec27a763fb81945fe0_6708589598195397491.png",
          chinesecvsrc: {
            src1: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/68c3685bc4538420bc81518097d6a69d_5580335531486584207.png",
            src2: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/4d253dac660c4e53b4fbc754e3af0af5_6561512421819222757.png"
          },
          japanesecvsrc: {
            src1: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/c859638c7d9abb6e452c81fd91f1e64f_685749351459684210.png",
            src2: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/3e1f853389af0af7957c1899dd678345_4395201827734772199.png"
          },
          videosrc: "https://webstatic.mihoyo.com/upload/static-resource/2021/06/28/2351ce1cd8a5e2e8943d76d9b02ccb55_3785681283394246837.mp4"
        },
        {
          characterimgsrc: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/3da1969ae0df8b8b4048c528b1d32576_6168731104072748843.png  ",
          characterintroducesrc: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/b54c10fd7b35aabb49c437e0058c1e80_4849218955882102676.png?x-oss-process=image/format,webp/quality,Q_90",
          chinesecvsrc: {
            src1: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/4eed776aa2c42442a2af48790611cd9f_8427631393555252637.png?x-oss-process=image/format,webp/quality,Q_90",
            src2: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/48a0030ad8146ab0b91f7ca53f7c634b_4002294033293898122.png?x-oss-process=image/format,webp/quality,Q_90"
          },
          japanesecvsrc: {
            src1: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/2dbc072a7b31db574eb016579923f410_6497946427268134757.png?x-oss-process=image/format,webp/quality,Q_90",
            src2: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/278be64d7dc7b5f7dee8f0bd87f04f56_4017355938079205713.png?x-oss-process=image/format,webp/quality,Q_90"
          },
          videosrc: "https://webstatic.mihoyo.com/upload/static-resource/2023/05/19/aa2e3d151f01f0c103964db60252b16b_6461199037828044508.mp4"
        },
        {
          characterimgsrc: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/e7c995462b57806f2e86abac6ba53755_6437609706057882343.png?x-oss-process=image/format,webp/quality,Q_90",
          characterintroducesrc: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/9231a5f408fa5ea6aebdb887bc24ee95_7079077742624300221.png?x-oss-process=image/format,webp/quality,Q_90",
          chinesecvsrc: {
            src1: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/8cd8741968f9cca77c098f1815edc578_3645594951799193113.png?x-oss-process=image/format,webp/quality,Q_90",
            src2: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/7319048f67331dbb8316613ff742cfab_9040611917577490416.png?x-oss-process=image/format,webp/quality,Q_90"
          },
          japanesecvsrc: {
            src1: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/e1bb99162f8cff9c9dd9a3dfa51214bf_1873630747807719897.png?x-oss-process=image/format,webp/quality,Q_90",
            src2: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/d749bf3e7233b117a700945feb129095_7381701703436087570.png?x-oss-process=image/format,webp/quality,Q_90"
          },
          videosrc: "https://webstatic.mihoyo.com/upload/static-resource/2023/01/17/59722e05ec0a00d3d093c02ee7078e72_1567906021741154568.mp4"
        },
      ],
      //page4
      activitybariconList: [
        {
          src1: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/811c98b441124ff856e881e633bf4e49_1642768477471868023.png?x-oss-process=image/format,webp/quality,Q_90",
          src2: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/7e0b4c5b26c93bb887a67c672fd952c9_6732334589984506200.png?x-oss-process=image/format,webp/quality,Q_90"
        },
        {
          src1: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/362d638ec0e0c9c677fe994b9e3a403f_2343295317535061431.png?x-oss-process=image/format,webp/quality,Q_90",
          src2: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/54b4c0169fd8a8f2924b4979ca3b82d4_1170397088848648869.png?x-oss-process=image/format,webp/quality,Q_90"
        },
        {
          src1: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/7990df134380e39c99c175edbaf4c33b_1966897578161900494.png?x-oss-process=image/format,webp/quality,Q_90",
          src2: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/0e1454ba5412cf8256fd1dc38851d876_4531349198024567291.png?x-oss-process=image/format,webp/quality,Q_90"
        },
        {
          src1: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/b63d56d0cfda651d75b5f887f1fb8514_6808656537014890204.png?x-oss-process=image/format,webp/quality,Q_90",
          src2: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/8c0aed4933e91c6dfbcb9cce11ccdfb3_5614456938822787806.png?x-oss-process=image/format,webp/quality,Q_90"
        }
      ],
      ActivityShowPropertyList: [
        {
          activityimg: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/ee407003c32393265c6d5d6b600e9d05_6373081098823285509.png?x-oss-process=image/format,webp/quality,Q_90",
          activityintroduceimg: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/b1035b24f6de50a59c01c94e7410f01a_9092399353443873833.png?x-oss-process=image/format,webp/quality,Q_90"
        },
        {
          activityimg: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/986228411e022460b7989224159e29e1_1454686911517149033.png?x-oss-process=image/format,webp/quality,Q_90",
          activityintroduceimg: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/7e84237f702b8b6c0a8faa7266dcc021_8543378172122500622.png?x-oss-process=image/format,webp/quality,Q_90"
        },
        {
          activityimg: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/4ffe9b17acf68268c0a0486c5c00ede7_4491117616626436210.png?x-oss-process=image/format,webp/quality,Q_90",
          activityintroduceimg: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/69c618a195d726218ffcb77fe1cd8cb9_2720630168710750081.png?x-oss-process=image/format,webp/quality,Q_90"
        },
        {
          activityimg: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/b4ad555e75687e1c04882d73fa09cebf_6736311410349338188.png?x-oss-process=image/format,webp/quality,Q_90",
          activityintroduceimg: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/06bb595d75f10af95145b3456928700a_3109008422525544261.png?x-oss-process=image/format,webp/quality,Q_90"
        }
      ]
    })
    const choosevideo2 = (index: number) => {
      data.showvideo2 = true
      data.activebgsrc = data.VideoShowPropertyList[index].bgsrc
      data.activevideosrc2 = data.VideoShowPropertyList[index].videosrc
    }
    const choosevideo3 = (value: string) => {
      data.showvideo3 = true
      data.activevideosrc3 = value
    }
    const choosecharacter = (index: number) => {
      data.activeCharacterShowProperty = data.CharacterShowPropertyList[index]
    }
    const chooseacitivity = (index: number) => {
      data.activeActivityShowProperty = data.ActivityShowPropertyList[index]
    }
    return {
      data,
      MainNode,
      choosevideo2,
      choosevideo3,
      choosecharacter,
      chooseacitivity,
    }
  }
}
</script>

<style lang="scss" scoped>
.root {
  min-width: 1280px;
  width: 100%;
  height: 100vh;

  overflow: hidden;
  .main {
    width: 100%;

    transition: all 800ms ease-in-out;
    .page1 {
      width: 100%;
      height: 100vh;
      position: relative;
      background: url(https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/e35236b87cc732fe05c0c5a5ac44d8e0_1416042095208263196.png) no-repeat center;
      background-size: cover;

      .icon {
        width: 100px;
        position: absolute;
        top: 2rem;
        left: 5rem;
      }

      .to_main {
        display: block;
        height: 2rem;
        position: absolute;
        right: 8rem;
        top: 1rem;
      }

      .age {
        width: 4rem;
        position: absolute;
        bottom: 3rem;
        left: 3rem;

        img {
          width: 100%;
        }
      }

      .download {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        transform: translate(50%);
        right: 50%;
        bottom: 2rem;
        width: 37rem;
        height: 2.5rem;
      }

      .video {
        width: 100%;
        height: 100%;
        display: flex;
        background: rgba(0, 0, 0, .5);
        position: absolute;

        video {
          height: 50%;
          margin: auto;
        }
      }
    }

    .page2 {
      display: flex;
      position: relative;
      height: 100vh;
      background: url(https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/32cc58533abc2368eb5419e2b96a5441_7942576505165902569.png) no-repeat center;
      background-size: cover;

      .boxlist {
        display: flex;
        margin: auto;
        height: 20rem;
        width: 50rem;
        justify-content: space-between;

        .box {
          position: relative;
        }
      }

      .learnmore {
        position: absolute;
        transform: translate(50%);
        right: 50%;
        bottom: 3rem;
        height: 2.5rem;
      }
    }

    .page3 {
      background: url(https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/8208bbfb517b36a09854ed8a055985dc_4196437221330742178.png) no-repeat center;
      background-size: cover;
      position: relative;
      height: 100vh;

      .characterbar {
        width: 5rem;
        height: 18rem;
        overflow: hidden;
        position: absolute;
        transform: translateY(50%);
        bottom: 50%;
        right: 20rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        div {
          width: 100%;
          height: 5rem;
        }
      }
    }

    .page4 {
      background: url(https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/cece65852f1fba69ac537cc31c739419_6583143059831565808.png?x-oss-process=image/format,webp/quality,Q_90) no-repeat center;
      background-size: cover;
      position: relative;
      height: 100vh;

      .activitybar {
        position: absolute;
        bottom: 12rem;
        right: 26rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 25rem;
        height: 6rem;
      }
    }

    .page5 {
      background: url(https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/d674db6e49bbc3398fc1e6cf79a2c183_6988813756339003690.png?x-oss-process=image/format,webp/quality,Q_90) no-repeat center;
      background-size: cover;
      position: relative;
      height: 100vh;
      display: flex;

      .icon {
        position: absolute;
        bottom: 5rem;
        left: 0;
        right: 0;
        margin: auto;
        display: flex;
        height: 6rem;
        width: 35rem;
        justify-content: space-between;
        align-items: center;

        img {
          height: 100%;
        }
      }
    }
  }

}
</style>
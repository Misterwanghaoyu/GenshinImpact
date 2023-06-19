<template>
    <div>
        <CommonListVue :dataList="data.dataList"></CommonListVue>
    </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
import CommonListVue from '@/components/News/CommonList.vue'
export default {
    components:{
        CommonListVue
    },
    setup(){
        const data =reactive({
            dataList: [
                {
                    imgSrc: "https://uploadstatic.mihoyo.com/contentweb/20201009/2020100912021670098.png",
                    title: "《原神》祈愿概率公示",
                    time: "",
                    type: "",
                    href:"https://ys.mihoyo.com/main/news/public"
                },
                {
                    imgSrc: "https://webstatic.mihoyo.com/upload/contentweb/2023/02/28/c9ce9c6451451fa554ab74c2342d2c19_7924384204652977964.png",
                    title: "《原神》3.5版本「风花的呼吸」更新说明",
                    time: "",
                    type: "",
                    href:"https://ys.mihoyo.com/main/news/detail/26400"
                },
                {
                    imgSrc: "https://webstatic.mihoyo.com/upload/contentweb/2023/01/16/adaca686a9d402cab8d822fa10732988_6944874481639867125.jpg",
                    title: "《原神》「风花的呼吸」3.5版本更新维护预告",
                    time: "",
                    type: "",
                    href:"https://ys.mihoyo.com/main/news/detail/26400"
                },
                {
                    imgSrc: "https://webstatic.mihoyo.com/upload/contentweb/2023/02/27/48fe0090e4376a66b2f52007f8dc8e77_4916568639223877411.jpg",
                    title: "《原神》预下载已开启",
                    time: "",
                    type: "",
                    href:"https://ys.mihoyo.com/main/news/detail/26370"
                },
                {
                    imgSrc: "https://webstatic.mihoyo.com/upload/contentweb/2023/01/16/adaca686a9d402cab8d822fa10732988_6944874481639867125.jpg",
                    title: "《原神》3.4版本「磬弦奏华夜」更新维护预告",
                    time: "",
                    type: "",
                    href:"https://ys.mihoyo.com/main/news/detail/25733"
                },
            ]
        })
        return{
            data
        }
    }
};
</script>

<style lang="scss" scoped></style>
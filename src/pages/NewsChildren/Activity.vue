<template>
    <div>
        <CommonListVue :dataList="data.dataList"></CommonListVue>
    </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
import CommonListVue from '@/components/News/CommonList.vue';
export default {
    components:{
        CommonListVue
    },
    setup(){
        const data=reactive({
            dataList: [
                {
                    imgSrc: "https://webstatic.mihoyo.com/upload/contentweb/2022/02/28/ccf9369b857554c25d1c8aa25b24bff5_1145480204036642487.jpg",
                    title: "《原神》「神工天巧」活动即将开启",
                    time: "",
                    type: "",
                    href: "https://ys.mihoyo.com/main/news/detail/20307"
                },
                {
                    imgSrc: "https://uploadstatic.mihoyo.com/contentweb/20201102/2020110211322962802.jpg",
                    title: "「岩港奇珍行记」网页活动说明",
                    time: "",
                    type: "",
                    href: "https://ys.mihoyo.com/main/news/detail/11472"
                },
                {
                    imgSrc: "https://uploadstatic.mihoyo.com/contentweb/20201001/2020100112465815236.jpg",
                    title: "《原神》月夕祝颂-万份空月祝福相赠",
                    time: "",
                    type: "",
                    href: "https://ys.mihoyo.com/main/news/detail/10203"
                },
                {
                    imgSrc: "https://ys.mihoyo.com/main/_nuxt/img/37207c1.jpg",
                    title: "“在尘世的相逢”抖音《原神》公测主播招募",
                    time: "",
                    type: "",
                    href: "https://ys.mihoyo.com/main/news/detail/10078"
                },
                {
                    imgSrc: "https://ys.mihoyo.com/main/_nuxt/img/37207c1.jpg",
                    title: "“在尘世的相逢”快手直播《原神》主播招募活动开启",
                    time: "",
                    type: "",
                    href: "https://ys.mihoyo.com/main/news/detail/8512"
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
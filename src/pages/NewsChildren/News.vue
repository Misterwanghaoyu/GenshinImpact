<template>
    <div>
        <CommonListVue :dataList="data.dataList"></CommonListVue>
    </div>
</template>
<script lang="ts">
import { reactive } from 'vue';
import CommonListVue from '@/components/News/CommonList.vue'

export default {
    components: {
        CommonListVue
    },
    setup() {
        const data = reactive({
            dataList: [
                {
                    imgSrc: "https://act-webstatic.mihoyo.com/upload/contentweb/hk4e/9486e35595ad1927b9a88531b83138cb_3303127673750051136.jpg",
                    title: "《原神》「神铸赋形」活动祈愿现已开启：「单手剑·裁叶萃光」「单手剑·苍古自由之誓」概率UP！",
                    time: "2023/6/13",
                    type: "",
                    href: "https://ys.mihoyo.com/main/news/detail/27860"
                },
                {
                    imgSrc: "https://act-webstatic.mihoyo.com/upload/contentweb/hk4e/49047651a0d595d9dd4b6a722e9705a2_4696436909681661890.jpg",
                    title: "《原神》「叶落风随」祈愿活动祈愿现已开启",
                    time: "2023/06/13",
                    type: "",
                    href: "https://ys.mihoyo.com/main/news/detail/27859"
                },
                {
                    imgSrc: "https://act-webstatic.mihoyo.com/upload/contentweb/hk4e/36f7cda19148d259e86f5ef20e76c1fc_8496343485702555044.jpg",
                    title: "《原神》「敕诫枢谋」祈愿活动祈愿现已开启！",
                    time: "2023/06/13",
                    type: "",
                    href: "https://ys.mihoyo.com/main/news/detail/27858"
                },
                {
                    imgSrc: "https://webstatic.mihoyo.com/upload/contentweb/2023/05/22/8021ad320b39e99e561e85f74b50466c_6284565760662356541.jpg",
                    title: "《原神》「神铸赋形」活动祈愿现已开启：「弓·飞雷之弦振」「法器·神乐之真意」概率UP！",
                    time: "2023/06/13",
                    type: "",
                    href: "https://ys.mihoyo.com/main/news/detail/27694"
                },
                {
                    imgSrc: "https://webstatic.mihoyo.com/upload/contentweb/2023/05/22/eccf286e2fcd32bfa4256609a9e0d30d_5180939874841818664.jpg",
                    title: "《原神》「华紫樱绯」祈愿活动祈愿现已开启",
                    time: "2023/06/13",
                    type: "",
                    href: "https://ys.mihoyo.com/main/news/detail/27693"
                },

            ]
        })
        return {
            data
        }
    }
};
</script>

<style lang="scss" scoped></style>
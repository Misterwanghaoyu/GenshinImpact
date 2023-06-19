<template>
    <div class="news">
        <div class="containner" id="top">
            <ul class="news_container">
                <a :href="item.skipUrl" v-for="item in data.newsData" :key="item.imgSrc">
                    <li>
                        <div class="news_img">
                            <img :src="item.imgSrc" width="100%" alt="">
                        </div>
                        <div class="news_title">
                            {{ item.title }}
                        </div>
                        <div class="news_time"><span>{{ data.news_time }}</span> <span style="color:#ffc000;">新闻</span>
                        </div>
                    </li>
                </a>

            </ul>
        </div>
        <div class="goTop" id="goTop" @click="goTopHandler">
        </div>
        <ul class="category_container">
            <router-link v-for="(item, index) in data.category_list" @click="data.category_list_index = index"
                :key="item.title" :class="data.category_list_index == index ? 'currentIndex' : ''" :to="item.path">
                {{ item.title }}
            </router-link>
        </ul>
        <router-view />
        <Footer></Footer>
    </div>
</template>

<script lang="ts">

// 导入节流函数
import { throttle } from 'lodash';
import { reactive, onMounted } from 'vue';
import Footer from '@/components/Footer.vue';
// 监听滚动事件
window.addEventListener(
    'scroll',
    throttle(() => {
        // 获取滚动位置
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        // 根据滚动位置修改元素样式
        const element = document.getElementById('goTop');
        if (scrollTop > 200) {
            element!.classList.add('scrolled');
        } else {
            element!.classList.remove('scrolled');
        }
    }, 200) // 设置节流的时间间隔，单位为毫秒
);



export default {
    components: {
        Footer
    },
    setup() {
        onMounted(() => {
            data.news_time = new Date().toLocaleString()
            console.log(data.news_time.toString())
            data.news_time = data.news_time.toString().split(" ")[0]
        })
        const data = reactive({
            newsData: [
                {
                    imgSrc: "https://act-webstatic.mihoyo.com/upload/contentweb/hk4e/9486e35595ad1927b9a88531b83138cb_3303127673750051136.jpg",
                    title: "《原神》「神铸赋形」活动祈愿现已开启：「单手剑·裁叶萃光」「单手剑·苍古自由之誓」概率UP！",
                    skipUrl: "https://ys.mihoyo.com/main/news/detail/27860"
                },
                {
                    imgSrc: "https://act-webstatic.mihoyo.com/upload/contentweb/hk4e/49047651a0d595d9dd4b6a722e9705a2_4696436909681661890.jpg",
                    title: "《原神》「叶落风随」祈愿活动祈愿现已开启",
                    skipUrl: "https://ys.mihoyo.com/main/news/detail/27859"
                },
                {
                    imgSrc: "https://act-webstatic.mihoyo.com/upload/contentweb/hk4e/36f7cda19148d259e86f5ef20e76c1fc_8496343485702555044.jpg",
                    title: "《原神》「敕诫枢谋」祈愿活动祈愿现已开启",
                    skipUrl: "https://ys.mihoyo.com/main/news/detail/27858"
                },
            ],
            news_time: "",
            category_list_index: 0,
            category_list: [
                { title: "最新", path: "/main/news/1" },
                { title: "新闻", path: "/main/news/2" },
                { title: "公告", path: "/main/news/3" },
                { title: "活动", path: "/main/news/4" }]

        })
        const goTopHandler = () => {
            window.location.href = "#top"
        }
        return {
            data,
            goTopHandler
        }
    }
};
</script>

<style lang="scss" scoped>
.news {
    background-color: rgb(240, 240, 240);

}

.containner {
    padding-top: 300px;
    width: 100%;
    height:100vh;

    position: relative;
    min-height: 554px;
    box-sizing: border-box;
    min-width: 1200px;
    background: url("https://ys.mihoyo.com/main/_nuxt/img/5d86b58.jpg") no-repeat;
    // min-width:calc(100vw);
}

.news_container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    list-style: none;
    padding-left: 0;
    height: 480px;
    display: flex;
    justify-content: center;

    a {
        padding: 10px;
        background-color: rgba(34, 52, 39, 0.8);
        margin: 5px 10px;
        text-decoration: none;
        position: relative;

        li {
            width: 400px;
            height: 480px;

            .news_img {
                width: 380px;
                height: 190px;
                margin: 10px auto;
                overflow: hidden;

                img {
                    height: 100%;
                    width: auto;
                    transition: all ease 0.5s;
                    cursor: pointer;
                }
            }

            .news_img img:hover {
                transform: scale(1.3);
            }

            .news_title {
                height: 68px;
                font-size: 24px;
                line-height: 34px;
                color: #fefefe;
                padding: 0 17px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box; //该属性目前仅在WebKit浏览器和移动端Safari中支持，其他浏览器需使用
                -webkit-box-orient: vertical; //设置盒子容器内的元素排列方向为垂直方向，即从上到下排列。
                -webkit-line-clamp: 2; //限制显示的文本行数为2行，超过2行的部分会被裁剪掉，并用省略号代替。
            }

            .news_time {
                position: absolute;
                width: 90%;
                margin: 0 auto;
                bottom: 10px;
                left: 10px;
                color: rgba(121, 127, 123, 1);
                font-size: 18px;
                display: flex;
                justify-content: space-between;
            }

        }
    }



}

.category_container {
    width: 80%;
    margin: 0 auto;
    height: 36px;
    display: flex;
    justify-content: start;
    list-style: none;

    a {
        width: 155px;
        height: 36px;
        // margin: 0 10px;
        text-align: center;
        line-height: 36px;
        text-decoration: none;
        color: black;
        background-color: rgb(207, 208, 209);
        padding: 0;
        margin: 0 10px;
        border-radius: 8px;

    }

    .category_item {
        width: 155px;
        height: 36px;
        // margin: 0 10px;
        text-align: center;
        line-height: 36px;
    }

    .category_item:hover {
        background-color: rgb(57, 59, 64);
        cursor: pointer;
    }

    .category_item:active {
        background-color: rgb(57, 59, 64);
        user-select: none;
    }

    .currentIndex {
        background-color: rgb(57, 59, 64);
    }
}

.scrolled {
    //  display: block !important;
    opacity: 100 !important;
}

.goTop {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    border-radius: 5px;
    background: no-repeat center url("data:image/png;base64,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UmVhZHlxyWU8AAADIWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCQTZBMzA3MUE5MzExMUVBQTQ3QThCOEI2RTQ0MEUzRCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCQTZBMzA3MEE5MzExMUVBQTQ3QThCOEI2RTQ0MEUzRCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0UyMzA2NkFBNTZEMTFFQUFENTRGOUVBRjYzRDBGQTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0UyMzA2NkJBNTZEMTFFQUFENTRGOUVBRjYzRDBGQTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz46GPTxAAABiUlEQVR42uzZvWrCUBQH8BuRPkDXPIC7nV2FfkCLHerm2qTaFHSQDIJg6WChWkFXt3Yp7VAKrs7tq/gAXezfcgpSbPUm90s4B/4Qkpubnxj03MTbPywJm/X2+iQ1PqvBsIsEtD1CZionVw3eQTpLYB+5Qj5dBd8tYQVtz5ELVRfIKMQOkHDF/pCOOQW+R6r/HK/SGCfAPaS2wbgajbUKvkUiifERnWMFfIPUE5xXp3ONgq+RZooP26Q5jIDbSKzg3o9pLq3gxUVaCn8KWwdHp7EucCPp17ju9gK6oRp8iXQ19kBdoCNV4HOkb6Bx6wEdpAVXqOMyVUOgK0nBZ8jYQos8BrosCz5GHi329Q9An2wKLiIvwn49A11cBy4gE+FOTYAu/AXOI1PhXk2B3vsNziEfwt16Bzr3A/YlW0RbFQHtZ2ndFWwBeGGcZeiPYbQF4G+nJ/kgZa7pYYpnY9VspBjMYAYzmMEMZjCDGcxgBjOYwYnBOlbXUnPKvmsOxerXs2lWzFLjvwQYANm3RkQw8iMjAAAAAElFTkSuQmCC");
    background-color: white;
    background-size: 40%;
    transition: all ease 0.5s;
    //  display: none;
    opacity: 0;
    cursor: pointer;
    z-index: 10;

}
</style>
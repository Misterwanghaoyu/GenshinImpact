<template>
    <div class="container">
        <ul>
            <li v-for="item in dataList" :key="item.title" class="content_container" @click="jump(item)">
                <div class="left" style="height: 100%;"><img :src="item.imgSrc" style="width: 265px;" alt=""></div>
                <div class="right" style="height: 100%;">
                    <h3>{{ item.title }}</h3>
                    <div class="typeAndtime">
                        <span style="color:#999">{{ item.time }}</span>
                        <span style="color: #ffc000;">{{ item.type }}</span>
                    </div>
                </div>
            </li>
        </ul>
        <div class="more">
            <p>加载更多</p>
        </div>
    </div>
</template>

<script lang="ts">
interface Data {
    imgSrc:string,
    title: string,
    time: string,
    type: string,
    href: string
}
export default {
    props: {
        dataList: {
            type: Array<Data>,
            required: true
        }
    },
    setup() {
        const jump = (item: Data) => {
            if (item.href) {
                window.location.href = item.href
            }
        }
        return {
            jump
        }

    }
};
</script>

<style lang="scss" scoped>
.container {
    margin-top: 20px;

    .content_container {
        cursor: pointer;
        position: relative;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        width: 80%;
        height: 171px;
        min-width: 1000px;
        margin: 10px auto;
        padding: 10px;
        border-radius: 5px;
        background-color: rgb(250, 250, 250);

        .left {}

        .right {
            padding-left: 10px;

            h3 {
                font-weight: 400;
                font-size: 21px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box; //该属性目前仅在WebKit浏览器和移动端Safari中支持，其他浏览器需使用
                -webkit-box-orient: vertical; //设置盒子容器内的元素排列方向为垂直方向，即从上到下排列。
                -webkit-line-clamp: 1; //限制显示的文本行数为2行，超过2行的部分会被裁剪掉，并用省略号代替。
            }

            .typeAndtime {
                span {
                    margin: 0 20px;
                }

                position: absolute;
                right: 5px;
                bottom: 5px;
            }
        }

    }

    .more {
        width: 80%;
        min-width: 1000px;
        margin: 20px auto;
        height: 40px;
        background-color: gray;
        cursor: pointer;

        p {
            text-align: center;
            line-height: 40px;
            font-weight: 500;
            color: white;
            font-size: large;
        }
    }
}
</style>
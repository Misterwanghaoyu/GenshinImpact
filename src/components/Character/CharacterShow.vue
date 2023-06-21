<template>
    <div class="characterContainer">

        <ul class="currentShow" :class="data.momentDisappear" v-if="CharacterData[data.currentShowIndex]">
            <li class="topString"></li>
            <li class="name"><img :src="CharacterData[data.currentShowIndex].nameImgSrc" alt=""></li>
            <li class="CV">
                <div class="CV_cube"></div> CV：{{ data.ifChinaCV ? CharacterData[data.currentShowIndex].chinaCVName :
                    CharacterData[data.currentShowIndex].japanCVName }}
                <div class="CV_voice"></div>
                <div class="chooseCVCountry" @click="data.ifChinaCV = !data.ifChinaCV">
                    <span>中</span>
                    <div class="CV_maskCube" :class="data.ifChinaCV ? '' : 'CV_japanVoice'"></div>
                    <span>日</span>
                </div>
            </li>
            <li class="introduce">
                <div class="introduce_cube"></div>
                <div class="introduce_info">
                    <p v-html="CharacterData[data.currentShowIndex].introduce">
                    </p>
                </div>
            </li>
        </ul>

        <div class="personImg" :class="data.momentDisappear"
            :style="{ 'background': 'no-repeat 200px 100px/auto 100%  url(' + CharacterData[data.currentShowIndex].personImgSrc + ')' }">
            <!-- <img :src="allCharacterData[currentShowIndex].personImgSrc" alt=""> -->
        </div>



        <div class="charecterSelecterContainer">

            <ul class="characterPage">
                <div class="prev" @click="doSelect('-')">
                </div>
                <div class="page">
                    <div class="pageContent" :style="data.moveStyle">
                        <li v-for="item in CharacterData" :key="item.name" @click="doSelect(item.index)"
                            :class="data.currentShowIndex == item.index ? 'currentPerson' : ''">
                            <img :src="item.headPortrait" alt="图片加载失败">
                            <p>{{ item.name }}</p>
                        </li>
                    </div>

                </div>

                <div class="next" @click="doSelect('+')">
                </div>
            </ul>

        </div>
    </div>
</template>

<script lang="ts">
import { reactive, onMounted, watch } from 'vue'
interface propsdata {
    CharacterData: Array<data>
}
interface data {
    index: number,
    nameImgSrc:string,
    chinaCVName: string,
    japanCVName: string,
    introduce: string,
    personImgSrc: string,
    headPortrait: string,
    name:string
}
export default {
    props: {
        CharacterData: {
            type: Array<data>,
            required: true
        }
    },
    setup(props: propsdata) {
        const {CharacterData}:{CharacterData:Array<data>} = props
        onMounted(() => {
            data.allCharacterDataNumber = CharacterData.length
        })
        const data = reactive({
            currentShowIndex: 0,
            ifChinaCV: true,
            allCharacterDataNumber: 0,
            momentDisappear: "momentAppear",
            rightDisappear: "leftAppear",
            moveStyle: {
                left: "0px"
            }
        })
        const doSelect = (index: string | number) => {
            console.log(data.currentShowIndex);
            
            if (index == "-") {
                if (data.currentShowIndex > 0) {
                    data.currentShowIndex = data.currentShowIndex - 1

                    if (data.currentShowIndex > 4) {
                        data.moveStyle.left = (Number(data.moveStyle.left.split("px")[0]) + 130) + "px"
                    }

                } else if (data.currentShowIndex == 0) {
                    data.currentShowIndex = data.allCharacterDataNumber - 1

                    if (data.allCharacterDataNumber > 6) {
                        data.moveStyle.left = -(130 * (data.allCharacterDataNumber - 6)) + "px"
                    }

                }

            } else if (index == "+") {
                if (data.currentShowIndex < data.allCharacterDataNumber - 1) {
                    data.currentShowIndex = data.currentShowIndex + 1

                    if (data.allCharacterDataNumber - 1 - data.currentShowIndex > 4) {
                        data.moveStyle.left = (Number(data.moveStyle.left.split("px")[0]) - 130) + "px"
                    }
                } else if (data.currentShowIndex == data.allCharacterDataNumber - 1) {
                    data.currentShowIndex = 0

                    data.moveStyle.left = 0 + "px"
                }
                console.log(data.moveStyle.left)
                console.log(data.currentShowIndex)

            } else {
                let ind = Number(index)
                if (!isNaN(ind)) {
                    data.currentShowIndex = ind

                }
            }

            data.momentDisappear = "momentDisappear"
            data.rightDisappear = "leftDisappear"
            setTimeout(() => { data.momentDisappear = "momentAppear"; }, 300)
            setTimeout(() => { data.rightDisappear = "leftAppear" }, 600)
        }
        watch(CharacterData, () => {
            data.currentShowIndex = 0
            data.allCharacterDataNumber = CharacterData.length
        })
        return {
            data,
            doSelect
        }
    }
    // props:{characterData:[]}

}

</script>

<style lang="scss" scoped>
@keyframes mymove {

    0% {
        opacity: 1;
        right: 0px;
    }

    30% {
        opacity: 0.4;
        right: -600px;
    }

    80% {
        opacity: 0.01;
        right: -2000px;
    }

    //可以用百分比！ 100%就是对父盒子的100%大小
}

@keyframes mymove2 {
    0% {
        opacity: 1;
    }

    40% {
        opacity: 0.5;
    }

    70% {
        opacity: 0.8;
    }

    100% {
        opacity: 0
    }
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}



.characterContainer {
    padding-top: 140px;
    box-sizing: border-box;
    width: calc(100vw - 370px);
    height: 105vh;
    overflow: hidden;

    // background-color: red;
    .currentShow {
        z-index: 6;
        position: relative;
        left: 0;
        opacity: 1;
        transform: translate3d(0px, 0px, 0px) scale(1);
        box-shadow: 0 0 gray 0px;
        transition: all ease 0.6s, transform ease 0.2s;

        // overflow: hidden;
        .topString {
            width: 200px;
            height: 5px;
            background-color: rgb(204, 165, 116);
        }

        .name {
            margin-top: 10px;
            width: 400px;

            img {
                width: 100%;
            }
        }

        .CV {
            user-select: none;
            width: 320px;
            height: 54px;
            background-color: rgb(204, 165, 116);
            line-height: 54px;
            font-size: 26px;
            color: rgb(47, 44, 32);
            display: flex;
            position: relative;
            box-sizing: border-box;

            .CV_cube {
                width: 64px;
                height: 100%;
                // background-color: aqua;
                background: no-repeat url("data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NENFQzIzMDNCMkJBMTFFOUIxNjhFNDEwOUE1RkEzRkYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NENFQzIzMDRCMkJBMTFFOUIxNjhFNDEwOUE1RkEzRkYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0Q0VDMjMwMUIyQkExMUU5QjE2OEU0MTA5QTVGQTNGRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0Q0VDMjMwMkIyQkExMUU5QjE2OEU0MTA5QTVGQTNGRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//AABEIADYANgMBEQACEQEDEQH/xAB6AAEAAwEBAAAAAAAAAAAAAAAAAwQFBgIBAQADAQEAAAAAAAAAAAAAAAABAgMEBRAAAQMDAwMDBAMAAAAAAAAAAQACAxEEBSExEhMUBkGRImFxMkKxUqIRAQACAgEDAwUAAAAAAAAAAAABAhEDEiExQbHRMvChQrIE/9oADAMBAAIRAxEAPwDZyWSybMnJbW0hpVoYwNaTUtB9QvBrWMZl69rTls2Ud2yEd1L1JjqaAAD6CgCznHheMp1VIgICAggjsoWXct1Ss0lBU+gAAoPZWz0wjHVOqpEBAQEBAQEGNmMzctuW4nEtbLlpW8nOdrHbRnTqy0/y3dy3164xyt8fVjs2TnjX5eilYZK7w8sVrk7vv8bcu42eYPHSQmhinLfiKu/B23oVpekX61jFo7x7KVvNOlpzE+fd0y5HSICAg8yte6J7Y39ORzSGSU5cSRoaHeimES4TsMicNkPHYZuy8ll5TSXbjXv2V1eyQ6io+JH6fZehzryi89afr9fdxcZ4zTtf1UPEMbkMB49cxeQNdNBkHGGywJAfJJIdDQfry9gPkVp/Reuy8cPHeymik0pPPz+LuPGrHI2OHhtshN1p21IFeXTYT8YuZ1fwGnI7rg33ra2auzVWa1xLUWLUQEBBQzGHtspbtjkc6KeJ3UtbqPSSGQbPYf5GxC117JpLPZri0KuGwVxDcOyWWnbe5Zzem2ZreMcUf9ImH8eW7juSrbNsTHGsYqrr1zE5t1s2Vg2EBAQEBAQEBAQEBAQEBAQEH//Z");
            }

            .CV_voice {
                position: absolute;
                right: -5px;
                width: 64px;
                height: 100%;
                background: no-repeat 50% 50%/100% url("data:image/png;base64,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UmVhZHlxyWU8AAADIWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEQkExN0M3RUFEMjcxMUU5OUUyQUM5M0UyNkVGMjdCNiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEQkExN0M3REFEMjcxMUU5OUUyQUM5M0UyNkVGMjdCNiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkZBMDhFRDZBQzVGMTFFOTlBNjRBNEExMzUzMzc5RjAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkZBMDhFRDdBQzVGMTFFOTlBNjRBNEExMzUzMzc5RjAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5l7Jh5AAAIMklEQVR42uxda2wUVRQ+c2d2+263lEJbHqVIaHlrpUUkPsJLRQ2YaFSMUSPRf/4gwZiYaKI//CWJxlf0h79QAviMEiFULA2CRUBE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");
            }

            .chooseCVCountry {
                cursor: pointer;
                width: 85px;
                height: 34px;
                border-radius: 17px;
                box-sizing: border-box;
                background-color: rgba(30, 27, 18, 0.75);
                position: absolute;
                right: -120px;
                top: 0;
                bottom: 0;
                margin: auto 0;
                display: flex;
                justify-content: space-between;
                // vertical-align: middle;
                line-height: 34px;
                padding: 0 5px;
                font-size: 20px;
                font-weight: 500;
                color: rgb(204, 165, 116);

                .CV_maskCube {
                    width: 30px;
                    height: 30px;
                    border-radius: 15px;
                    background-color: rgb(204, 165, 116);
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    margin: auto 0;
                    ;
                }

                .CV_japanVoice {
                    right: 4px !important;
                }
            }
        }

        .introduce {
            box-sizing: border-box;
            margin-top: 15px;
            padding-top: 10px;
            width: 550px;
            height: 150px;
            display: flex;
            z-index: 3;
            background-color: rgba(52, 49, 49, 0.75);

            .introduce_cube {
                width: 64px;
                background: no-repeat 35% 0px url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQjNDRDg0RkFBMDIxMUU5ODY4QTk4NjNGNEM4NDk3QyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQjNDRDg1MEFBMDIxMUU5ODY4QTk4NjNGNEM4NDk3QyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBCM0NEODREQUEwMjExRTk4NjhBOTg2M0Y0Qzg0OTdDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBCM0NEODRFQUEwMjExRTk4NjhBOTg2M0Y0Qzg0OTdDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/5UTFAAAAK5JREFUeNqk1OEKgzAMBGA7fOq2dr/cY68zoC6UJHdqoIgaP5Bek3rvE1F1W9K4wk4Bwar9XwX1s5hcG4NG2KKw4xlEr2Dju8KCEQZRFmv7O4gy2FvtMkTRL2iMQq9iRzUPfe0nQCqNmQ/Ow3e4T+c3RoAnI3e6vJ48bgqDhpgVGw9dGMwLdiWCbWLR0YtQF0PDoQbDId8dX8UYX/nJPNQoxGTNxPhfVdA/qPknwACMfVz3Rdft9wAAAABJRU5ErkJggg==");
            }

            .introduce_info {
                width: calc(100% - 110px);
                color: white;
            }
        }

    }

    .momentDisappear {
        // opacity: 0.01;
        // transform: translate3d(10px,5px,-20px) scale(0.1);
        // box-shadow: 0px 0px gray 1px 20px;
        animation: mymove 0.3s ease-out 1;
    }

    overflow: hidden;

    .personImg {
        overflow: hidden;
        width: 1515px;
        height: 800px;
        position: absolute;
        left: 0;
        bottom: -128px;
        margin: auto 0;
        z-index: 4;
        // transform: translate(300px, 0px);
        opacity: 1;
        // overflow: hidden;
        transition: all ease 1s;
        background-size: cover;
        // img {
        //     width: 100%;
        // }
    }

    // .personImg:hover{
    //     transform: translate(0px, 0px);
    // }

    .leftAppear {
        // transform: translate(0px,0px);
        // opacity: 1;
        animation: mymove2 0.6s ease-out 1
    }

    .leftDisappear {
        transform: translate(600px, 0px);
        opacity: 0.6;

    }

    .charecterSelecterContainer {
        overflow: hidden;
        width: 100%;
        min-width: 1500px;
        height: 188px;
        bottom: 1rem;
        position: absolute;
        left: 0px;
        background-color: rgba(178, 196, 193, 0.26);
        // overflow: visible;
        z-index: 9;

        .characterPage {
            height: 138px;
            width: 100%;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            list-style: none;
            display: flex;
            justify-content: center;
            padding: 0;

            .prev {
                cursor: pointer;
                // border:2px solid black;
                width: 45px;
                height: 64px;
                margin: auto 40px;
                background: no-repeat center url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAABACAYAAACOcP4eAAAFZklEQVRogcXaeYhd1R0H8M/MJJNEGxVJcAloVQT/MgmYGsEtuBCq4larxiYuxVgVKVpaQcXdVnBpwSKt4i5Ssa6UgjWQ1gXikhoqaFFUUNP8E9xSNYkmzz9+5/Ju3sx7c8+d+9584TL3nHvO737nvN92fucOtVotU4gT8DY+zJk03B8ulXAQHsaM3IlTSfph7I6NuROnivRNWIRv6nCYCtLH4pp0v7WOgEGTnivUosBQHSGDJv0E9pqskEGSvhVHNSFoUKSX4cqmhA2C9CG4r0mB/Sa9O57BzCaF9pP0CB7HvKYF95P0A8InN45+kb4eyyuMm1aHQz9Ir8R1FcfOwJbcFzRN+kz8OWP89fgs+y2tVqup65hWq/Vdqzqeq/uuoYY2Acfjb5hecfyrOFLNhKkJ0ofhH/hBxfEbcCg+rvvCyer0ifiX6oS34iRtwvunKwuTIX0KnlZdJVo4FWtTe1TkJMvSfWXUJf1LQXhaxpyf4e+l9lLMSdfSnJfXIX0r/pA552I8VmovwhJsSteS1FcJOaSn4375KeZv8KdSex5OFkHlu3RtSX17VxFYlfR+wk2dX5VpwnW4rdSeLcL7LLGpHUrXN6lveRrTE1VIH44XsDCPr6twY8e7zsCeQiXK+8Oh1LdXGtOT10SkL8VLOCCPr1/hdx19yzAfn6d2SxjytHQvPVuAc3oJ72b9O+NurMgkux0X4KFS3zB+IgztixLhUe1kaYbw4UOJ+CHp2V+TzB0wXkRcgHvTxBxsxekinBeYJvR0fiLcStfM9OyeNG6lMMjN2nq+G9bhkfSsK+lf4A7slEn4XZHhrSv17SMC0AFi9YoVGxVG9xReTn2H4zRhkEU+MpyIvy+2bB91kt4Ddwq9y8UbItJ9UupbjB8LNftS2+hGRMh/Fv/skHO0cHv/x7bU18Iu+EoEpjUF6QtxlxrVS/wRl5Xa+4rV/aH4qYufm1i56WLVXu0ib3Ei/q32L1Oo00xREn52WFuH6mBbR7vQ2V4ye3msbnMKeS20CvXYE7ebwNV0wRqhjxtKfT8S6jHbWPWYLdRjdYecJWKVNxmrHpuEerzGWEO8JJGflUn8HZyF/5T65gldP1B4joJIYYjP4MXUd0QaWzbEEeyK90Rytr4QPJ7LWyRc3vxM4ptFNCu7vBHh8hYKD1J2edO195MXCT3udHlvCpe3gxp227nsIpKcszOJb8PPjQ0upwu39oUwsF7BZVis8Mt40jjBpZtRfCnc3xWZpEfwoAjjBbaLEu/rYvUkclsT8dESYWnM62nOGMJU2yMuEdWifTP/gavx21J7GOfhYO38oxO7Cbt4UBfChaCJsBrH4a0KY8u4BTeU2ttFbW+9UL/yahVeYn0a05Uw1fPp94SBPlJxfIFrRYpa4Cs8mv7O0jbMWR3PeiJn57JFZH23Z8whVvzyUnuDcHej2qnpqPDdG8bMHgd19oi/lm+gdwp9LrBWqN3sdK0WOUwl1N2N/14Eg28z5jyQ5hR4Xhx8bkz3lTHZCtMJ8msfR+CV1C4KNR/kvLSJsthiURabcEOasFGUxbKIltFEqXeNiHhVi4lzxDaq9jlMU/XpF4SqVP3ZFgq1qoUmi+qrVDuyKLBUlBiyc/mm6tNlrFT9NGC7OC//NOcF/ThzuceO4bsXNsusmNLf063HJhokSgM984zx0M9zxBXCQBtHP0lvE7WQ2scU3dDvs/HPREnh6yaFDuIrhH+LLVhjGNT3Hn8xtopaG4P8suYqY2sdtTDob5h+iv9NVsigSW/EuaV2rXA8Fd/lrcLN6T47GtKf3KMqXhOb5bkyP92cym9NV4hEaU7uxKkk/V9BPPsjle8BB9HRUL6DehMAAAAASUVORK5CYII=");
                background-size: cover;
            }

            .page {
                height: 100%;
                width: 780px;
                // background-color: black;

                overflow: hidden;
                position: relative;

                .pageContent {
                    height: 100%;
                    position: absolute;
                    display: flex;
                    left: 0px;
                }

            }

            .next {
                cursor: pointer;
                width: 45px;
                height: 64px;
                background: no-repeat center url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAABACAYAAACOcP4eAAAFXElEQVRogc3ae6ilUxjH8c8+M3OcKeM6CpNkRPhjzMhlcsld0sj9kjvlThpCkWuESIo/kMiMBrkNZYpRg8hl3Cb/KJFLYxIZHMyN2f541mu/+5w5Z6/3Pe/Br97OPms/71rfvd5nPc+z1t6tdrutonbAbni56o1Nqa/GPRthHnZpmCVbdaB/xBYC/D9RHeg+rMJeuK1ZnHyAOlqb/l6PwxpiyVZd6Fbp9Txs1QBLtupCl7UNnmmgn2w1AQ0H4q6G+uqppqDhGpzeYH8jqkloeERElXFV09ADWIgtG+63S01Dw7Z4ChPGoW+MDzQRux8bp75rZ8SJGXZn4uYa/WcBVNUaUTTl6CZcUGOMUVUHeqVqM/gQTq0xzshqt9t1r5fa+fqz3W4fOoaxuq5WjU1AoX68iX0y7ddhDl6tO2ChsUDDdnhP1B85+g1H4J2xDFrHp6enC77F0Tqlai9tjDfEjNdWVehJOC1d/antQxxXsY8XcGzFsf9RVegjMTVdR5baF6lWLE0U4FdUHB/VoPfCIRhM18G6i6MFuLji+Pfhzor3ZENvi2NEYvkzXWtS27SS3YOiRK2ia0XKn5R7Qw70FJGSJ4sNbStdq1Lbmcmm0N0iE1bROSIK7ZBj3Au6DyeJkDaoe2/YSm1bJ5tyX7fiuizcjmZhMfbrZdgL+nTMxM/p/7ZYRBPTa+m93UVEKesOXJXH+492xFu4dDSjkZJLH04Un/oXrE+Q/cKXiaJprZjxPmyKt/Fssi90Nh5VPVLNwyX4PQd6ovDT3RNwO10D6b2Hk90FYkGu1vHzTbEM89N7hebgOZ3YnqsP0jgfjwa9nUgUO4rHXsxYv1h0z4vHB/vjeLEgi4zYh83whdh2fVPqeyaexs4Vwf8QbvbghqD3wVEi1f6qs+gmpLYX8fqQDg8SYe83/JXa2thEPNZFeLdkPy19mD0rgsOTmIvvW+12e/s08HTxqIuwRszcpDTQeyN0Njvdv07nyRTuNICvRPYrz/r9uKwG+Bpcnrs4RrNrjdLe0r0oC/21gbYctdAqu8fewj2mGO4eU4R7LBnSycFilgcNd49B4R7vl+y3Eetidg3gp4V7rBi6EKeJhbiTiBwFSLEQF4rCHw5ItuWFOEFEkM+FSywv9T1DHC3sWhF2lSgNHigaNhTyJoiQN0tEkHLImyT2fHCh8ONyyNtMhKf5ul1gjjikHKgIvAznY2m5cbTkcoIIa1WSy1siHpf9+CyRXKoe3jyJi4SrDoPbkNaLmVkqZk+CW5vA+0vAks3SdE8Z+FI8XgP4SlEWDAOm96HLggQ4Q7hKSyfTlYE/SbZlzcW9FWG/xrmGL/gu9Qp568WqXS4iQtmXiiixPNmUZ/gG1YE/xeF6AJNXxPyOJ9LfyToLc/KQ9wpdJ0rTKpovdkGf5xjnJpcVItz165Sm/SJ2ryjZzcXtuaRJ94jFuqaXYaEq5eKH4tFNSdcSUYUVOkd1l7gSV1e8J+v0s6xXRMlavC50nGpHu+twsnh6lVXnhKk4qPky/d1XxOeRapChWic+ZO3v1sd6LDZdVH9TM+0HxbHYu70MR9NYvgkYEMkkF3ityLJjAmZs0M9hjwr2c8Rue8yqC32jKGNzdYaGgKnn05uLn0/kfuALdTbDjajuj1RWZ9reomFg6kGv1308MJIW+B99u5WjxSI1j4vGA/pbnKL+5rWnmoZeJU74Vzbcb5eahj4PHzXc5zA1CX2H2G2Pu5qCXqL6eXRtNQH9nSgz/zXVhS6n0bNFhvzXVBe6OGe+Da81xJKtOrXHVPwgzjn2bpwoQ3Vmeip+Mo4Zr5fq/kjlLHzWMEu2/gbv3csfYGcJUgAAAABJRU5ErkJggg==");
                background-size: cover;
                margin: auto 40px;

            }



            li {
                cursor: pointer;
                margin: 0 10px;
                width: 110px;
                height: 138px;
                border-radius: 6px;
                background-color: rgba(59, 62, 69, 0.6);

                img {
                    border-radius: 6px;
                    background-color: rgba(85, 84, 83, 0.8);
                    margin: 2px 2px 0px 2px;
                }

                p {
                    text-align: center;

                }
            }

            li:hover {
                background-color: white;
            }

            .currentPerson {
                background-color: white;
            }
        }



    }
}
</style>
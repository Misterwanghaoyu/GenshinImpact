<template>
  <div class="swiper">
    <el-carousel :interval="4000" type="card" :autoplay="false" trigger="click">
      <el-carousel-item v-for="item in data.srcList">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const data = reactive({
      srcList: ["https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/44ce304232ab4ee2a821b9144ee82d1c_1713110891755259775.png?x-oss-process=image/format,webp/quality,Q_90",
        "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/b43fe71f11ef5147c57e287e16592422_6798603925736605711.png?x-oss-process=image/format,webp/quality,Q_90",
        "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/64328ac4ad4baf3f13f6e36dac889703_4068855659663110277.png?x-oss-process=image/format,webp/quality,Q_90",
        "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/7a54dc691e450c32262c3d565234946d_7367504620217885063.png?x-oss-process=image/format,webp/quality,Q_90",
        "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/3a1760449507c96a28c066148f3c8a16_203547796934874932.png?x-oss-process=image/format,webp/quality,Q_90"]
    })
    return {
      data
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper {
  margin: 10rem auto auto auto;
  width: 65rem;

  img {
    height: 100%;
  }
}
:deep(.el-carousel__arrow--left) {
  font-size: 10px;
  width: 6.2em;
  height: 5.5em;
  background: url(https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/59ef5b062bbe407dcfae6a2f187f17b5_1253293474265511062.png?x-oss-process=image/format,webp/quality,Q_90) no-repeat center;
  background-size: cover;
}

:deep(.el-carousel__arrow--right) {
  font-size: 10px;
  width: 6.2em;
  height: 5.5em;
  background: url(https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/5292f92476967e9e50b34d36049b1b28_4924129641320945539.png?x-oss-process=image/format,webp/quality,Q_90) no-repeat center;
  background-size: cover;
}
:deep(.el-carousel--card){
  height: 22rem;
}

:deep(.el-carousel__button) {
  font-size: 14px;
  background: url(https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/af2fb0ab24c482fe37927f671a114d3c_7128280474273696846.png?x-oss-process=image/format,webp/quality,Q_90) no-repeat center;
  background-size: cover;
  width: 1rem;
  height: 1rem;
}
:deep(.el-carousel__mask ){
  background-color: rgba(0, 0, 0, 1);
}
:deep(.is-active .el-carousel__button) {
  background: url(https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2023/05/16/3b0798bb1f3ad4cb486a467b53013bc7_8265796994825293748.png?x-oss-process=image/format,webp/quality,Q_90) no-repeat center;
  background-size: cover;
}
</style>  

<template>
  <div class="characterView">
    <div class="tab_list">
      <router-link v-for="item in tabListInfo" :to="item.to">
        {{ item.name }}
      </router-link>
      <a>敬请期待</a>
    </div>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
// import { mapMutations, mapState } from 'vuex'
import Footer from '@/components/Footer.vue'
export default {
  setup() {
    const tabListInfo = [
      { id: 0, to: '/main/character/Mondstadt/?char=0', name: '蒙德城' },
      { id: 1, to: '/main/character/Liyue/?char=0', name: '璃月港' },
      { id: 2, to: '/main/character/Inazuma/?char=0', name: '稻妻城' },
      { id: 3, to: '/main/character/Sumeru/?char=0', name: '须弥城' },
      { id: 4, to: '/main/character/Fontaine/?char=0', name: '枫丹廷' }
    ]
    return {
      tabListInfo
    }
  },
  components: {
    Footer
  }
  // activated() {
  //   // 路由激活后（不论是刷新还是点击），动态改变导航栏字体和上划线距离，
  //   // （解决了因刷新丢失字体样式和上划线距离的BUG）
  //   this.CHANGE_NAV_ACTIVE(2)
  //   this.CHANGE_NAV_LINE_MOVE_DISTANCE(200)
  // },
  // computed: {
  //   ...mapState(['cityActive'])
  // },
  // methods: {
  //   ...mapMutations(['CHANGE_NAV_LINE_MOVE_DISTANCE', 'CHANGE_NAV_ACTIVE', 'CHANGE_CITY_ACTIVE'])
  // }
}
</script>

<style scoped>
.characterView {
  width: 100%;
  height: 100vh;
  position: relative;
}

.tab_list {
  z-index: 1;
  position: absolute;
  width: 10rem;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tab_list a {
  cursor: pointer;
  font-size: 1.2rem;
  color: #fff;
  width: 100%;
  text-decoration: none;
  height: 2rem;
  line-height: 2rem;
  margin: 10px 0;
}

.active {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1));
}

.router-link-exact-active {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1));
}
</style>

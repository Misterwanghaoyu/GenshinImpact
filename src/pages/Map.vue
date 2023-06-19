<template>
  <main class="map">
    <div ref="movepageNode"
      :style="{ transform: `translate(0,${data.currentY}%)`, transition: 'all 800ms ease-in-out', height: '500vh' }">
      <div class="top">
        <div class="main">
          <img src="https://ys.mihoyo.com/main/_nuxt/img/7e5cc2a.png" alt="" style="width: 20rem;">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjsAAAASCAYAAAC96h+MAAAEkUlEQVR4nO2dS4wUVRSGvypngBAnRAY0AVHCKBNBZeFWEhLiQoImGjcmGkQFjUYhkaV7Vy6MLxSBGBYuJCG+xoSNj+jWBBIniGhUHgbUsABkEKbLxbmdLu7cqq6qrmpCz/8lnalz7rm3Tz3n1LmPjpIkQQghGmIFcBH4M8dmCXAjcLQvHgkhZh3xtXZACDGwjAJbgc3AUIbNHGAT8LSzF0KI2lGwI4RogqXADuAm4HZgCzMDniEsyFnu7Ha4ekIIUSuRurGEEDWzGsvozAPOYV1UEXAI2AVcBoaxAGgNkADngRFgCngf+LHvXgshBhYFO0KIuoiBjcAGLLg5BbwBjANPufIvgK+AF7DxPAmwDwtutmHjdxJgAvgcaPVzB4QQg4mCHSFEHYxiAc1KJx8G9gL/OnkN1kX1E/AssBC4AuwGfnA287HxPfc6+WfXxj/Nui6EGHQU7AgheiEC7gcew7qtWsBnwJdYhiZttx54FLgB697aCRwLtPcg8BCWCZoC9gPfee0JIURhFOwIIaqyDHgcGHPyGSxT85tndwvwJHCnk38H3gXuBu4DPgJOe3WWA88Ai538q7M7XpfzQojZQ5QkyQLsbQrvr7+d1sWefVqOM/R5n252cRe7OKfNUFnIz27+5dkWaSNUp4gudE7Ss+iigJy28dtI//XLq9j75Vn1QnJoNqBvk6XL03cr8+3K2MLMjEVSoo1QW+02/LLrhRZwEBtjc9npImz8zTos8xNj+3gQ+AQLfLY7uyvA98C3wEk6x2IYy/A8QD3HpNc3u1B9/9yX/Y4qPrXrZH2v32boui3jR9Z+F5Gz2s3yN287VFZG7/sUsvV1WTJ0xpOFbLLqFi1rl7cK2BX5tNsqap/1vWl93na3fWkx068qx8rXh+wAkjhVWJXQQ6ipG75Mu91utlBZkRszJOc9iP0bpJtPRaj7wVQnZf4pZfla9bxUpcz1lxAORHvxp8nz0Q9aWHfTdEqXYDOsztEJgMDG30TAPSndtLO7yNXHYtrprsUg5aLnpJ+BaejeqOpHmWsufa3n+dAUvT6/2vZFj1Fe+92e9Vm66/0eT5PkbFfdz6oBeeFrQ91YQoiqjGHdWMuc/AfwIXDCs1sIPIEFLp/SWVsHbBbWPuCsV+dWbLHB25x8HOvG+qU274UQswYFO0KIXoiwrqpHgLlYNmbCffyMzArgeWAB1nX1MfANV7+NxdjU9Q3YQOZLwAHgawbr7VgI0UcU7Agh6mARlolpTz2fBPZg3VNga+28iAVEZ7GZWHdgv5nVXkBwBMv6rHLyUSxT9HfDvgshBhwFO0KIuoiwjMxGLENzBngTuBnL6AxjM7XeBtYCD2MZng+wgckvY7OvWthg5wmUzRFC1ICCHSFE3awEnsN+JuICls0ZAo4A72BdU/OwVZTHsYBnytmfB95Dv4AuhKgRBTtCiCZYDLyErbEDtnLyW8B/KZs5WDanvf7OaSwT9FeffBRCzBIU7AghmmIEeAXrvnoNy9r4zAdexYKg1+mM8RFCiNpQsCOEaJJRLLszmWNzFza+R7+BJYRohP8BTD15sibeHVwAAAAASUVORK5CYII="
            alt="">
          <div class="desc">
            <p>这里是七种元素交汇的幻想世界「提瓦特」。</p>
            <p>在遥远的过去，人们藉由对神灵的信仰，获赐了驱动元素的力量，得以在荒野中筑起家园。</p>
            <p>五百年前，古国的覆灭却使得天地变异…</p>
            <p>如今，席卷大陆的灾难已经停息，和平却仍未如期光临。</p>
          </div>
          <p class="to_town">前往游记精选</p>
        </div>
        <div class="tips" @click="movedown">
          <img class="animation2"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAANCAYAAABcrsXuAAAAg0lEQVQ4jbXUMQrCUBRE0RsUd+N6rN2ElYhmP8b9CXJtVDD4899LvtNMNZxuOnUPHPlPBuCAinq2fa7qRuWNtIY+wBhpBX0Bv5Cl0DAGSgjqpRUwhWShIlBDotAkEEFqUBWIIiXoFgEyCGo/B1BZJy7i9OotsAPu0WGnJhwAVsAjM3gCnFhv3TCGL+oAAAAASUVORK5CYII="
            alt="">
          <div class="animation1"></div>
        </div>
      </div>
      <Country v-for="item in data.countrypropertyList" :countryproperty="item"></Country>
      <Footer></Footer>
    </div>

    <div class="sidebar" :style="{ transform: `translateX(${data.sidebarshow ? 15 : 0}rem)` }">
      <div class="outline"></div>
      <div class="bar">
        <div class="item" :class="{ active: item.isActive }" v-for="(item, index) in data.sidebarList"
          @click="handleSideClick(index)">
          <div class="name">{{ item.title }}</div>
          <div class="icon" :class="{ active: item.isActive }"></div>
        </div>
        <div class="item">
          <div class="name" style="color: rgba(255,255,255,0.6);">敬请期待</div>
          <div class="icon"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Country from '@/components/Map/Country.vue'
import Footer from '@/components/Footer.vue'
import { reactive, onMounted, computed, ref } from 'vue';
import { throttle1 } from '@/util/DebounceAndThrottle.ts'
export default {

  components: {
    Country,
    Footer
  },
  setup() {
    const movepageNode = ref()
    onMounted(() => {
      window.onwheel = throttle1((e: WheelEvent) => {
        if (e.deltaY > 0) data.currentIndex++ //下滑
        else {
          //上滑
          if (data.currentIndex === 0) return //顶部,直接return
          data.currentIndex--
        }
      }, 1000)
    })
    const data = reactive({
      //sidebarshow根据currentIndex计算而来
      sidebarshow: computed(() => {
        //最顶部和最底部隐藏
        if (data.currentIndex === 0 || data.currentIndex === 5) return true
        else return false
      }),
      currentIndex: 0,
      //currentY根据currentIndex计算而来
      currentY: computed(() => {
        const total_country = data.countrypropertyList.length
        const unitY = 100 / (total_country + 1)
        let Y: number = 0
        if (data.currentIndex === 5) Y = -89//最底部的Y定义特殊值
        else Y = -data.currentIndex * unitY
        return Y
      }),
      //sidebarList根据currentIndex计算而来
      sidebarList: computed(() => {
        let List = [
          { title: '首页', isActive: true },
          { title: '蒙德', isActive: false },
          { title: '璃月', isActive: false },
          { title: '稻妻', isActive: false },
          { title: '须弥', isActive: false },
        ]
        //最底部的界面延用之前的sidebarList
        if (data.currentIndex === 5) {
          List=data.sidebarList
          return List
        }
        //根据index改变active
        List.some((item) => { if (item.isActive === true) item.isActive = false })
        List[data.currentIndex].isActive = true
        return List
      }),
      countrypropertyList: [
        {
          bgsrc: "https://uploadstatic.mihoyo.com/contentweb/20200319/2020031921550320292.jpg",
          iconsrc: "https://uploadstatic.mihoyo.com/contentweb/20200317/2020031714242066580.png",
          countryname: "蒙德",
          desc: `位于提瓦特大陆东北部的自由城邦。<br>
群山和广袤的平原间，自由之风携着蒲公英的气息吹拂过果酒湖，为坐落于湖心岛上的蒙德城送去风神巴巴托斯的祝福与恩泽。`
        },
        {
          bgsrc: "https://uploadstatic.mihoyo.com/contentweb/20200319/2020031921552395638.jpg",
          iconsrc: "https://uploadstatic.mihoyo.com/contentweb/20200317/2020031714245390532.png",
          countryname: "璃月",
          desc: `位于提瓦特大陆东方的富饶港湾。<br>
傲然矗立的山麓与石林、广袤的平原与生机勃勃的河滩共同构成了璃月的丰富地貌，在四季分明的气候下焕发出多彩的风华。山石奇景间，又埋藏了多少岩之魔神的古老馈赠等待着人们发掘呢？`
        },
        {
          bgsrc: "https://uploadstatic.mihoyo.com/contentweb/20210719/2021071918001232800.jpg",
          iconsrc: "https://uploadstatic.mihoyo.com/contentweb/20210719/2021071917401911066.png",
          countryname: "稻妻",
          desc: `位于提瓦特大陆远东的封闭群岛。<br>
越过无尽的雷暴，踏上红枫与绯樱眷顾的诸岛，在环绕的砂堤、高耸的断崖与幽秘的山林之中，见证御建鸣神主尊大御所大人所追寻的永恒。`
        },
        {
          bgsrc: "https://webstatic.mihoyo.com/upload/contentweb/2022/08/15/8969f683b92839ac427c875d0d742be2_4825576482548821743.jpg",
          iconsrc: "https://webstatic.mihoyo.com/upload/contentweb/2022/08/15/f77d0c308b54728b6a1f3bc525e42955_6051524677514174999.png",
          countryname: "须弥",
          desc: `位于提瓦特大陆中西部的学城之都。<br>
同时拥有葱郁雨林与荒芜沙土的奇异国度，无数智慧的果实在这里生长、埋葬。无论是穿越丛林踏上学城的台阶，还是深入沙漠挖掘赤土的遗迹，远道而来的旅者都可以在此获取宝贵的智识。`
        }
      ]
    })
    const handleSideClick = throttle1((index: number) => {
      data.currentIndex = index
    }, 1000)
    //顶部tips按钮方法
    const movedown = () => {
      data.currentIndex++ //修改当前界面index
    }
    return {
      data,
      movepageNode,
      throttle1,
      movedown,
      handleSideClick
    }
  }
}
</script>

<style lang="scss" scoped>
.map {
  overflow: hidden;
  height: 100vh;
  position: relative;
}

.top {
  height: 100vh;
  background: url(https://ys.mihoyo.com/main/_nuxt/img/5c125a1.png) no-repeat center;
  background-size: cover;
  display: flex;
  position: relative;

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    height: 18rem;

    p {
      text-align: center;
      color: white;
    }

    .desc {
      p {
        margin: 0.5rem auto;
      }
    }

    .to_town {
      width: 30em;
      height: 2em;
      font-size: 18px;
      line-height: 2rem;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAioAAAAnCAYAAAAhMWNEAAAEwElEQVR4nO3dW5LaMBBAUUFlJVljlpU9Mj+hSFFgt9Rv+Z6vKSywx49uWZKt2+8/f8cY4zbOnZX5tvzoe5+WzfyOtuz7Z6vf8/jMs+zs78wsl5YBsKeHQZlvy4++92nZzO9oy3p/pvktz7KzvzOzfIwxHvfhn1QkG1LF7MHx/K7ncaEiAaCj6LiYFf+7501Lt7vRSjomPk1rh7RiId0vmgtkZj0SFudDp4sMgJ1q8WMmNmpuGCNyxy55dlZIi0o06f+jqcVKT8CohJ11YQOAtWo3Xqvr0VR8rPNTZ7e70Q9VuoPWHEzNAe50clQ6XgAg1Sl2WecTTSUni8m2WFVUjlRN4NqBSZJyVSs+3sek6jEH4KtzbLGO19ZjVCpVQP7nHu+txqjswnqHa/at53FZGb0NABGy4lOleM3N3ssjokWl6omlORG6J3MuAgAddY9dO+Ys93y4Y9dPxPq6j8g+OrE6/R8A9nMUgzrdJGblie1ybsX3qGQ9ljuzjk4XyydURgB01D12Rb8za2Udnjl7hdlTP4crcSwfMeBIemJlnYArvPuAu1fkAKzxjh9VY4smJ0TkLM8GgDKDaav2jUUMfs2qlGRVcizWW7WCBsBX5/gREcOzKi+e+9R73I34hW9ZA4DORNSus0aCd6rgAUCEqvmkaqyPWId3Q4bZK/SzWO8gzeuSNeWsv3uGrh8AHjp3/UTE66hpVVbXW9GWkxJWOmGq17I/OdsvVEIAaJzFkKykGhGvq98gr9hiUsLuOy2iUhKtaksPgP1dJf5k5Y5KjQNmkxJasNwx2t/K6g7KVG0bq20PgBjVrv1q2/NJtW6eSvl8jGH3HhXLkyHz8WTrKb2jdGrNAYAombFRkyesb7iz3k9mUr9gMO3aZ9XM7ocO/xMAvJuNXR1aVCJyUYf98M2l5/qR0kytHXVy7HjxAsC7qjdlmu6biHjcOg9HjFHpNC33Jx2f3NHouM0A9tExBkXkiaqDkN3nZrKqqFztDr3roFsJk1HaBr8BoB/vp0g72XGeuFkmxzKiRaVTk5N08BMnIADgiPSGNuLhjKw8XOqpnyPbTTmNUxwD4Jq49vPtlnNDXvgW/crjrHkTuEBfaF0Crolr/+Uq+cl7jKrZK/SzTk7rAUzSz6xPwOj9591UR6UNuCbvfFIpVq58V5o7rB9P7pijny79HhVNv6B1jbVSYq+0LQCup1IMso7rmid8dskxs0Leo1J1B2laT6pODiXl3VXXufILYJ13/OgYU8/KaVpZKnA/JhGDaTvp3qVjgfMBQKaOMSiii+iqSnb9zGwPb6ZdwxgVAB52G6MitdObaavt45Kv0J85aBHPmmtOto5zM1DJAJCpY+zT3KhGdPN45tWQV+hLNuqszNHyqonPerBSpxYVxqgA8MAYlRfrG9VO/7tkmWT5GP+6fiSuMk5Duq07PrL8ZDItt8FvAOinc/zIehTZeluiuee57pMSRtjxqR8AgB3rp346CZmUkMGTL9ZdP51qxQCANdbxn5z68vj1/ENS2GCFAAAAYhFP/QAAACx5tqhkPfkz01/nUTbjs+z/2XPZSjkA+7AYLGq57Ft567Ka+XoiPosuK1kmWT5G0HtUqiKRAgC6uGzO+gGoUEWl4dRInQAAAABJRU5ErkJggg==) center no-repeat;
      background-size: cover;
    }
  }

  .tips {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAADYklEQVRogc3aTU8TQRzH8W+hhT6AlhSIRDnwdJCSeCkJ4lUj3ImJvgwebnjRu3fjXWNCAiY+HXkDaFU4SGIi2FIh0i4g24ZW4qEdaNl2292dWfpLmqbd7M58utt9mPl7BueXcCktwKkbjbiRx8BrwKe6Ia/qBihinpR9fgTkVTWmGnQRM1N6fwgUVDSo8pBbpITp8PvoCwfE9zPAKxT9mKpAi8BTKGJm74+yMD3G9a6gWK4MpQJkwPRHQnT4fcxNRZWjZIOqYj58TfJidZNQu3pUa9fkA1nbOsOE2r3MTUXpj4R4/yXJ8toWO5rO74MsE0O9xAYirCc1jnJ5gNHSaxkJ1ylZIFOMiBsoGaCGMCKqUU5BNTAJlte2a66kEuUEZAsjogplF+QII3KO6iE20M23hHOUHZAUjEgRlWNiqIdxCSirIKkYEZkoKyAlGBFZqEZBVTHv4glWPjnHiOxoOikty+1h+6hGQK5gRFJa1hGqHshVjIgTlBnoUjAiAjUx1MP4oAF1kxqoWqCqmLfxBG9cwIiktCypg6qoKDVQ1UBNgRGxiroIaiqMiBVUOagpMSIpLctOAygBamqMSCOoFsAD3BIrXQn4CAfbOD2FH3tHl9Nzk+xkdPSTAsE2L71X/OWLRoBOsYdWKApH/+YKrCc1YgMRJkd62do/Zu8wdwldN+ba1QDz01FC7T6er34nvp0Wi+LAXSAtQKeUoY5yedaTGuMD3dwZ6eVnE6CKmDE6SpjPWwbMPlSeFJoWdY7xmmLAeNpuOpQVDFS/sJqi3PxP9YWtYaD2rc+lo/rCAeamrGHA/ObUFLWdPmZXEcouBuo/PtRETQ6rQdk5zMrTyAOeayiBCbXZw0Djj+DKUZWYTVsYsDZIogxlxJz13RIGrA9jSUfJxIC9gUZpKNkYsD8UbIr6ldbZPcyabkAFBpwN1ttG9YUDLCjAgPPpFANqI6kRM0EJTFABBuRMeFWgDk1QdTD3cIgBeVOSpqhERqfF46mH+SOjIx7JxUs+4CWlipEbXUFmp6IE27xk8/8I+FqVYkD+tH6eYi3PEkAio/Ps4wb6ScEVDKgpTxEogBmB6u70XxwDkI4BdcVLBlQio4tlyjCgtnip4vArRSkG1JeXle+pYRRjwJ0CQIHqADKqG/sPAjt8VWk8CeAAAAAASUVORK5CYII=) center no-repeat;
    background-size: cover;
    height: 3rem;
    display: flex;
    width: 3rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 4rem;
    margin: auto;

    .animation1 {
      width: 3rem;
      height: 3rem;
      position: absolute;

      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABiCAYAAACrpQYOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZGNzBDRjlBMzEyRjExRUFBRkIwRUIzQUQ5OEQwMjk3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZGNzBDRjlCMzEyRjExRUFBRkIwRUIzQUQ5OEQwMjk3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkY3MENGOTgzMTJGMTFFQUFGQjBFQjNBRDk4RDAyOTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkY3MENGOTkzMTJGMTFFQUFGQjBFQjNBRDk4RDAyOTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4EAekSAAACRklEQVR42uzcQVLDMBBE0fAr21yCM3IsbpcLUFAsUilMYpDk7pnWBrzK9LyUbdmRXl7f3k/m4/L99+oc4lwA4XJzbItBIYT740AcgGCPQSEEawyKIdhiUBDBEoOiCHYYFEawwqA4gg0GDRAsMGiCII9BIwRpDJohyGLQEEESg6YIchg0RpDCoDmCTB0EQaMegqBRF0HQqI8gaNRJEDTqJQgadRMEjfoJgkYOgqCRhyBo5CIIGvkIgkZOgqCRlyBo5CYIGvkJggYGQdDAIAgaGARBA4MgaGAQBA0MgqCBQRA0MAiCBgZB0MAgCBoYBEEDgyBoYBAEDQyCoIFxDoIEhvU2QaXGJ8T1ZL77l/n46j+3B+nJMQj3p6ZgHITw0zUiGAcgbF2sg7EY4be7pmAsRHh0+xqMRQjPzCOCsQDh2QldMCYj7JlZB2Miwh6IYExE2AsRjIl9YsWHBGEORDAm9IUjPjQIYyGCMbAPKBTRHWEURGeMYblRLKobwmiIThjDc+JQZHWEWRCVMablwrHoagizISphTM9BhRAV6qdSGOe6qRjKsV4qh3Oqkw4hHeqjU1jluugYWrEeOodXqoM0QePLQPPTgszpUWnp1uqmSF2j1NbQrWqO3F2b4mLG2U2SvHVWXVU6q1myk0nl5b2jmyY9o1dfZz2qefLPuBwWvP+3iRYPGl12HvhrM20evTttAbG3qVbvP9z24ni2uXZvBB03RXnUZMvXsq6702w12/aHCs7bBN033frXIueT97hu/G83PgQYAEtWwfIuH4mrAAAAAElFTkSuQmCC) no-repeat center;
      background-size: cover;
      animation: animation1 1s ease-out infinite;
    }

    .animation2 {
      position: absolute;
      left: 0;
      right: 0;
      top: 1.5rem;
      margin: auto;
      animation: animation2 alternate 1s ease-in-out infinite;
    }

    @keyframes animation1 {
      0% {
        opacity: 0;
        transform: scale(1);
      }

      25% {
        opacity: 0.5;
        transform: scale(1.25);
      }

      50% {
        opacity: 1;
        transform: scale(1.5);
      }

      75% {
        opacity: 0.5;
        transform: scale(1.75);
      }

      100% {
        opacity: 0;
        transform: scale(2);
      }


    }

    @keyframes animation2 {
      from {
        top: 1.5rem;

      }

      to {
        top: 1.8rem;
      }

    }
  }
}

.sidebar {
  transition: all 1s ease-in-out;
  position: fixed;
  color: white;
  margin: auto 0;
  top: 0;
  bottom: 0;
  right: 5rem;
  height: 20rem;
  display: flex;

  .bar {
    height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: auto;

    .item.active {
      display: flex;
      width: 8rem;
      justify-content: space-between;
      align-items: center;

      .name {
        color: black;
        background-color: white;
        text-align: end;
        width: 75%;
        padding: 3px 6px 3px 0px;
      }

      .icon.active {
        background: rgba(18, 51, 77, 0.4);
        border: #fff 1px solid;
        transform: rotate(45deg) scale(0.9);
        transition: all .4s ease;

      }

      .icon.active::before {
        display: block;
        content: '';
        width: 8px;
        height: 8px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        background: #fff;
      }

      .icon {
        width: 18px;
        height: 18px;
        background: #fff;
        transform: rotate(45deg) scale(0.3);
        transform-origin: 50%;
        transition: all .4s ease;
      }
    }

    .item {
      font-weight: 100;
      font-size: 14px;
      cursor: pointer;
      display: flex;
      width: 8rem;
      justify-content: space-between;
      align-items: center;

      .name {
        width: 75%;
        text-align: end;
        padding: 3px 6px 3px 0px;
      }

      .icon {
        width: 18px;
        height: 18px;
        background: #fff;
        transform: rotate(45deg) scale(0.3);
        transform-origin: 50%;
        transition: all .4s ease;
      }
    }
  }

  .outline {
    position: absolute;
    right: 0.5rem;
    width: 2px;
    height: 20rem;
    background: rgba(255, 255, 255, 0.2);
  }
}
</style>
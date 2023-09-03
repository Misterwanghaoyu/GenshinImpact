<template>
  <div class="navbar">
    <div class="header">
      <div class="volume" style="">
        <img @click="data.ifmuteMusic = !data.ifmuteMusic;" :src="data.imgSrc" />
      </div>
      <div><a href="/main"><img src="https://ys.mihoyo.com/main/_nuxt/img/f78aabc.png" alt="" /></a></div>
    </div>
    <div class="nav">

      <div class="nav_item" v-for="(item, index) in data.navbarpropertyList" :class="{ active: data.nav_index == index }"
        @click="data.nav_active(index)">
        <RouterLink :to="item.url">{{ item.title }}</RouterLink>
      </div>
      <div class="scrollborder" :style="{ left: data.scrollBorderleft }"></div>
    </div>

    <div class="tail">
      <a href="https://jiazhang.mihoyo.com/" style="text-decoration: none; margin-right: 30px;">
        <span>成长关爱系统</span>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAydpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNBMTNCQzMwNjk1MTExRUNBQ0ZDQjRDRjMxNzREOTQ2IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNBMTNCQzJGNjk1MTExRUNBQ0ZDQjRDRjMxNzREOTQ2IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkxMTU3NzhFNEI0NzExRUNCOUEyOTdCQUJGQzVDQjIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkxMTU3NzhGNEI0NzExRUNCOUEyOTdCQUJGQzVDQjIzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+aJoX1wAAAvZJREFUeNqsl01IVFEUx99MM1iRjRoJobMwErFylRK0kOxrxoJoVbgIsk2LFkFfC2khSIu+iKKoRQzRQmpRBAUZmkEfZhRkmaAVooNQhISlSWj6+h/5D5wec997M7wDv3nvzj1z/++ee+bc+0K2bVs+LAw2gySoA1WgCETBBBgBfaAbPABTniOKsAtLwFEwZvu3SXAFxN3GdhNNghE7f/sNToKwX+EQaAPzdjD2GBR5CYvoDTt4ewdiWivkSK42cIr3f0AP6ATDoBDUgy2g3JEq4vsWPAJDTLyNoFH5vmKCzjiTK6nC+xw0GtZ+NWgF0/R9AhIuvufUzC84Q71UJdI9tuX77eA26ANd4AhYzr4DIAWibG8FN+n7lIm1TPnOgb9ggxY+RtGXYAV/0G5YrzTYp2a1Etw1+A6DBqUxCzoywmH+TyV0O+nU7pEsM+AgqAS9Hr7fwTpQwCUUWy8i29j4SNF6n5kqoZvw6XuHYx9m+0yYZVCsi9e9lj+T38Z4Py956uIr2V0KXrCdCLP2in3itcrK3UIe/YtBNZhkuyaCj0o2CtR/MmhhsWlGaSFaclPMRi2vr63gbQz0g1V6nSK8bwAl4Bb4GbDwNUZyj94Wx1X2tTD7mrm9BWEPWZDirAELJiJvlNMPUAsi4H1Awvupc19/KZtEChNvVmH5CtIs9ANgt1qOXEw2hV+gAoyDTaovLU/SZHjSQ3zS46yxuVg3KGSIsxWZlMW6PJWl8wtLna7lfuyZ2mSusz47LZEp9FcNg3xmPba428x6iPaAUtb/SwafQenPCMd5RspmQ2At/VpcRHu5U4nfRRe/JufR54SLszxlhYt4P2cq/eddxulkQv8nvIgHM5MNqLC3OkQzD3XWY3ssMx32YjxBmExE1tD3MhgF5T5mKpld53W8LeFJxGQflFgxr6dd/L9ljjt+DvRRzmDOMJhEZReopt+8y5qW5fomYfFJO/Iok4PM3lA+rzCaGjmucKamKIzy1LnD9Nqi+SfAAFLcgBA6a85mAAAAAElFTkSuQmCC"
          alt="">
      </a>
      <div v-if="!store.isLogin" style="display: flex;align-items: center;cursor: pointer;" @click="showLogin">
        <span>登录</span>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkM4Q0U4MzlGNzIwQjExRTlCNzFCRjhGQzY5NjE1QzVEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkM4Q0U4M0EwNzIwQjExRTlCNzFCRjhGQzY5NjE1QzVEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzhDRTgzOUQ3MjBCMTFFOUI3MUJGOEZDNjk2MTVDNUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzhDRTgzOUU3MjBCMTFFOUI3MUJGOEZDNjk2MTVDNUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz59zFVZAAACLklEQVR42ryXzytEURTH33vGmPzOzxmmSbGSlaXt5D+QIqNYkKz8WCiSbFnJgiaysmCj+Bf4A6wQdkhK+ZFf0fU9Oq9er5l7zzVy6rOYeeec733v3XvOea5SyrGwCIiCGlDO/z2De/ABPsWZSNhAEYiDGfCq8tsr+8Q5RpvXJJoCu8redjnWWtgFQ6pwoxyeVLgYbKq/sy3OqRWmd5NVf2/Z8HsPC2cESeb5/ZUyLWBREJfJJ5wyBJ4bNgxduzTkSIWFaQPsaAIe+JiYTkGcffPZjr/ZggE66xWI+vQYciXIz+M6MqSpMWdg36K6HYATzfVhv3JFDBVpz+JuffYMFS7ice2NaVb45tjbh+YaaUU9Lvg6o+uupXC1KScJlxmcOkC9hWgdaDf4lHmCRAkwZiE8DpolbTEpLHtpwaZKC3MlHS57UqMzGsshGBOc36CVUvujqeLJsLODdgyWwTlPJG1gkveCxOiUVPgrnlX/Z6TluDxz0Qa6Fqz2CiyBQ3AHXkAJSII0mBM8uSZwI20Sp6AzV0MPTS0loBvcakYiT9oWF0DUsmRWgg1JW8w1CFB7G+A7cX6BGxoQMtLR55IbiFOA8KB09PGHvTUOWAG1vxCtDeRYlQx7wdUOBB7TCKgXCDaA0UBcXz5f1/AJk+Bi0c+/18ERuAAP3LUqQSvoAqPstw2mf45NAZ8wtP0bwZSgOEywr2fKa7rjsBVxwaA2WUXrBo9cTN7BlzTRtwADAOPsTPUcvaPqAAAAAElFTkSuQmCC"
          alt="">
      </div>
      <div v-else style="display: flex;align-items: center;position: relative;cursor: pointer;">
        <span>{{ store.tips }}<span style="border-bottom: solid 3px white;padding-right: 0;">{{ store.username
        }}</span></span>
      </div>
    </div>
    <audio autoplay loop :muted="data.ifmuteMusic" src="https://ys.mihoyo.com/main/_nuxt/medias/video-bgm.d8637316.mp3"
      id="background_music"></audio>
  </div>
</template>

<script lang="ts">
sessionStorage.setItem("nav_index","0")
import { reactive, computed } from 'vue'
import { useMainStore } from '@/store'
import { onBeforeRouteUpdate } from 'vue-router'
export default {
  setup() {
    const store = useMainStore()
    const data = reactive({
      ifmuteMusic: false,
      nav_index: Number(sessionStorage.getItem("nav_index")),
      navbarpropertyList: [
        {
          url: "/main",
          title: "首页",
        },
        {
          url: "/main/news/1",
          title: "新闻",
        },
        {
          url: "/main/character/Mondstadt?char=0",
          title: "角色",
        },
        {
          url: "/main/map",
          title: "世界",
        },
        {
          url: "/main/manga",
          title: "漫画",
        },
        {
          url: "",
          title: "社区",
        },
        {
          url: "",
          title: "赛事",
        }
      ],
      nav_active:(index:number)=>data.nav_index=index,
      imgSrc: computed(() => {
        let src: string = ""
        data.ifmuteMusic ?
          src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzFFQUE5Nzk1RDI3MTFFOTlGNjlGQ0Y5MEYwNzU5RDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzFFQUE5N0E1RDI3MTFFOTlGNjlGQ0Y5MEYwNzU5RDQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDMUVBQTk3NzVEMjcxMUU5OUY2OUZDRjkwRjA3NTlENCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDMUVBQTk3ODVEMjcxMUU5OUY2OUZDRjkwRjA3NTlENCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpFlAhoAAAonSURBVHja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'
          :
          src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzU2MUMyMjQ1RDI3MTFFOTlGNjlGQ0Y5MEYwNzU5RDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzU2MUMyMjU1RDI3MTFFOTlGNjlGQ0Y5MEYwNzU5RDQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDMUVBQTk3RjVEMjcxMUU5OUY2OUZDRjkwRjA3NTlENCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDMUVBQTk4MDVEMjcxMUU5OUY2OUZDRjkwRjA3NTlENCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuGvQ5sAAAgdSURBVHja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'
        return src
      }),
      //导航栏小滑条
      scrollBorderleft: computed(() => {
        let left: string = String(1.5 + (data.nav_index * 6) + "em")
        return left
      }),
    })
    onBeforeRouteUpdate(to => {
      
      if (to.path.includes("news")) data.nav_index = 1  
      else if (to.path.includes("character")) data.nav_index=2
      else if (to.path.includes("map")) data.nav_index = 3
      else if (to.path.includes("manga")) data.nav_index = 4
      else data.nav_index = 0
      sessionStorage.setItem("nav_index",String(data.nav_index))
    })
    const showLogin = () => {
      store.isShowLogin = true
    }
    return {
      data,
      store,
      showLogin
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  min-width: 1280px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(35, 43, 48, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;

}

.header {
  width: 362px;
  height: 66px;
  position: relative;

  .volume {
    position: absolute;
    top: 20px;
    left: 60px;

    img {
      width: 30px;
      height: 30px;
    }
  }
}

.nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  position: relative;
  left: -80px;
  height: 66px;
  z-index: 3;

  .scrollborder {
    position: absolute;
    z-index: 3;
    width: 3em;
    height: 5px;
    background-color: aqua;
    top: 0;
    left: 0;
    transition: all 0.6s ease
  }

  .nav_item {
    width: 6em;
    text-align: center;
    height: 100%;

    a {
      color: rgb(204, 204, 204);
      text-decoration: none;
      display: block;
      line-height: 66px;
      text-align: center;
    }

    a:hover {
      text-shadow: 0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff;
      color: #fff;
    }
  }

  .nav_item.active a {
    text-shadow: 0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff;
    color: #fff;
  }

  @for $i from 1 through 7 {
    .nav_item:nth-child(#{$i}):hover~.scrollborder {
      left: 1.5rem + ($i - 1) * 6rem !important;
    }
  }

}

.tail {
  position: absolute;
  height: 40px;
  right: 50px;
  text-align: start;
  display: flex;
  align-items: center;
  line-height: 40px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    line-height: 40px;

    img {
      height: 70%;
    }
  }

  span {
    padding-right: 15px;
    color: rgb(170, 174, 176);
    font-size: large;
  }

  img {
    margin-right: 10px;
  }
}
</style>
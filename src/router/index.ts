import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  { path: '/', component: () => import("@/pages/Home.vue") },
  {
    path: '/main', component: () => import("@/pages/Root.vue"), children: [
      { path: '/main', component: () => import("@/pages/Main.vue") },
      {//
        path: '/main/news', component: () => import("@/pages/News.vue"), children: [
          { path: '/main/news/1', component: () => import("@/pages/NewsChildren/Newest.vue") },
          { path: '/main/news/2', component: () => import("@/pages/NewsChildren/News.vue") },
          { path: '/main/news/3', component: () => import("@/pages/NewsChildren/Notice.vue") },
          { path: '/main/news/4', component: () => import("@/pages/NewsChildren/Activity.vue") },
        ]
      },
      { path: '/main/character', component: () => import("@/pages/Character.vue") },
      { path: '/main/map', component: () => import("@/pages/Map.vue") },
      { path: '/main/manga', component: () => import("@/pages/Manga.vue") },
    ]
  },
]
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})
export default router
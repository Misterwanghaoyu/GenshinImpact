<template>
  <div v-if="store.isShowLogin" class="login-container">
    <img style="height: 2.5rem;margin-bottom: 1rem;"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAACzCAYAAAB//O7qAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowNzRBNkMzQUFCNjcxMUU4QkFBMUM3NjY2RkI5QTdFRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowNzRBNkMzQkFCNjcxMUU4QkFBMUM3NjY2RkI5QTdFRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA3NEE2QzM4QUI2NzExRThCQUExQzc2NjZGQjlBN0VGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA3NEE2QzM5QUI2NzExRThCQUExQzc2NjZGQjlBN0VGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+an7rjgAANEdJREFUeNrsnQfYFLXW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"
      alt="">
    <div class="login-page">
      <img @click="store.isShowLogin = false"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADB0lEQVRYR8XZSXLTQBQG4P9lBRQnSFFcQ7JkkHwTQhKmAAEWkHkeYAcEwjyuqOIQlqssW+YCsKUqrNiwgV38KLnsRGl3Sy3Jlr20WurP/2t1t2Sq+d8uMtr7AJ1i8FLFNr9ghJ9aI5hlxiaA34SxCfL84BeA8a6JmflKpVx6OwqjVw9WQFiP9P0jBP4FcCbyJQN81bVLb4pESnBh9wdUbQRzxNgVMIUiFTgmpgkKYVW/tUXgxVEga35rlcFrYt9EuOZY5usOMPzU/GCTgSVVw2GUOwkX9nkELBqpg+sDFoWs+s01Aq3qVOtEgkWUW4VTzRxSYAj16sEGCMv9v5KuO5bxKsuY9BrBOhgraW5GJXDQyCw46RgUk1ElyUw3KmXjpU6SKpzOqhWbYK9zdQfJyDw4rQTzINXp66/3WglmQSpvMqZpp2y80xkaqRJMQgI849qlF7E3V0pcJmB4UsxcNkOgcemSmQGXGRiDlFWOiTDlWOZ73bJG26Uag2IHiiSjzXLhciV4vCxKt0vh4dy4gQAVe8kOEMBN1zb3s5S2d07OEks3umKJbzmW+TwrMjPQ85vbAC0IHbcBjImbASJkRmYCqnBEmOY2zglPZp1yM9PtStl4ljbJ1MCY5KZc2/zQnajFx8fMyFRArxHsgDEvKesRLrLiLIOxIZY7bZLawDS4QSK1gArcIYDpXllVY8trBNIkAZ517dJe0phMBNbqwS4T5oQLaeF651T95hKBwvctJ6YgHWQscBA4DeQd1y49VSWpBA4Slwcpf+xUlJXBUxW79DFp3MQdjym3NMk+YNVvPSTwA3HMDQJ3vMFoLjJoSzIm+5AngEXgkpBEuOtY5pO+zYLnNx8BdF9MjpgmnbLxKU9ZVefWfHmSUWQnwVHgjibzemsBxNt9Kw7hXsUyH5NiIj0cZnJiop4CCWAyfAX8D8DpyEmF4hKSPCDPb/4E6Hy34SERXXYs4/MwxlzSNb16MA/CTqTdd/LqrQsg3gPoLAjzrmV8TbrQMI93/4YIXwn/aVP70n+OfBhghPU19QAAAABJRU5ErkJggg=="
        alt="" style="width:1rem;position: absolute;right:1rem;top:1rem;margin: 0;">
      <div class="login-way">
        <span @click="data.loginWay = true">验证码登录<p v-show="data.loginWay"></p></span>
        <span @click="data.loginWay = false">密码登录<p v-show="!data.loginWay"></p></span>
      </div>
      <form v-if="data.loginWay" @submit.prevent="sendAjax">
        <input type="text" placeholder="手机号注册/登录" v-model="store.username">
        <input type="password" placeholder="验证码" v-model="data.checknumber">
        <input type="submit" value="登录" style="background-color: #3b4354;color:white; font-size: 18px;">
        <div style="color: red;">{{ data.tips }}</div>
      </form>
      <form v-else @submit.prevent="sendAjax">
        <input type="text" placeholder="手机号/邮箱" v-model="store.username">
        <input type="password" placeholder="密码" v-model="store.password">
        <input type="submit" value="登录" style="background-color: #3b4354;color:white; font-size: 18px;">
        <div style="color: red;">{{ data.tips }}</div>
      </form>
      <div style="display: flex;justify-content: space-between"><a href="">登录遇到问题</a><a href="">立即注册</a></div>
      <div class="login-text" v-if="data.loginWay">未注册的手机验证后将自动登录。注册/登录即代表您同意并遵守<a href="">《米哈游通行证用户服务协议》</a>
        <a href="">《米哈游通行证用户个人信息及隐私保护政策》</a>
      </div>
      <div class="login-text" v-else>登录即代表您同意并遵守<a href="">《米哈游通行证用户服务协议》</a>
        <a href="">《米哈游通行证用户个人信息及隐私保护政策》</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import axios from 'axios'
import { useMainStore } from '@/store'
import { reactive } from 'vue'
export default {
  setup() {
    const store = useMainStore()
    const httpIp = "http://127.0.0.1:5000/"
    const data = reactive({
      loginWay: true,
      checknumber:"",
      tips: ""
    })
    const sendAjax = () => {
      axios.post(`${httpIp}login`, {
        username: store.username,
        password: store.password,
        checknumber: data.checknumber,
      }).then(
        response => {
          const { isLogin, msg }: { isLogin: boolean, msg: string } = response.data
          console.log(isLogin,msg);
          
          if (isLogin) {
            store.isShowLogin = false
            store.isLogin = isLogin
            const timeNow = new Date()
            const hours = timeNow.getHours()
            if (hours >= 0 && hours < 10) store.tips = "早上好！"
            if (hours >= 10 && hours < 14) store.tips = "中午好！"
            if (hours >= 14 && hours < 18) store.tips = "下午好！"
            if (hours >= 18 && hours < 24) store.tips = "晚上好！"
          } else {
            data.tips = msg
            setTimeout(() => {
              data.tips = ""
            },3000)
          }
        }
      )
    }
    return {
      data,
      store,
      sendAjax
    }
  },
  methods: {

  }
}
</script>
<style scoped>
.login-container {
  min-width: 1280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
}

.login-page {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 23rem;
  background-color: white;
  border-radius: 5px;
  padding: 10px 40px 40px;
}

.login-page>* {
  margin-top: 20px;
}

.login-page div {
  width: 100%;
}

.login-way {
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: rgb(60, 64, 68);
  font-size: 18px;
  height: 2rem;
  line-height: 32px
}

.login-way span {
  position: relative;
  cursor: pointer;
  text-align: center;
  width: 100px;
}

.login-way p {
  width: 1.5rem;
  border-radius: 4px;
  height: 4px;
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  right: 0;
  margin: auto;
  background: rgba(0, 0, 0, 1);
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
}

input {
  border-radius: 5px;
  margin: 10px 0;
  padding: 0 10px;
  box-sizing: border-box;
  width: 100%;
  height: 3rem;
  border: 0.1px solid rgb(232, 227, 227);
  outline: 1px;
}

a {
  color: gray;
  text-decoration: none;
}

.login-text {
  height: 5rem;
  text-align: start;
}
</style>

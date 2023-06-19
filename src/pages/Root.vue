<template>
  <NavBar></NavBar>
  <Login></Login>
  <RouterView></RouterView>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue'
import Login from "@/components/Login.vue"
export default {
  components:{
    NavBar,
    Login
  },
  setup() {
  }
}
</script>

<style lang="scss" scoped>

</style>
import { defineStore } from "pinia";
//定义容器
//参数1容器id（唯一），Pinia会把所有的容器挂载到根容器
//参数2选项对象
//返回值：函数，调用后得到容器实例
export const useMainStore = defineStore("main", {
  //state必须是箭头函数（避免数据污染，和TS类型推导）
  state: () => {
    return {
      username:"",
      password:"",
      isShowLogin:false,
      isLogin:false,
      tips:""
    }
  },
  getters: {},
  actions: {
  }
})
//使用容器
//修改state
//容器中action的使用


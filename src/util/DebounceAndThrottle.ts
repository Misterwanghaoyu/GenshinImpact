function debounce (func:Function, delay:number, immediate:boolean) {
  let timeout:ReturnType<typeof setTimeout> | null = null // 创建一个标记用来存放定时器的返回值
  return function (...args:Array<any>) {
    const context = this// this指向
    clearTimeout(timeout!)
    if (immediate) {
      const callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, delay)
      if (callNow) func.apply(context, args)
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, delay)
    }
  }
}
// 节流1(时间戳)(默认立即执行)
function throttle1 (func:Function, delay:number,) {
  let oldTime = Date.now()
  return function (...args:Array<any>) {
    const newTime = Date.now()
    if (newTime - oldTime >= delay) {
      func.apply(this, args)
      oldTime = Date.now()
    }
  }
}
// 节流2(立即执行)
function throttle2 (func:Function, delay:number, immediate:boolean = false) {
  let flag = true
  if (immediate) {
    return function (...args:Array<any>) {
      if (flag) {
        func.apply(this, args)
        flag = false
        setTimeout(() => {
          flag = true
        }, delay)
      }
    }
  } else {
    return function (...args:Array<any>) {
      if (flag) {
        flag = false
        setTimeout(() => {
          func.apply(this, args)
          flag = true
        }, delay)
      }
    }
  }
  // let oldTime=Date.now()
  // return ()=>{
  //   let args=arguments
  //   let newTime=Date.now()
  //   if(newTime-oldTime>=delay){
  //     func.apply(this,args)
  //     oldTime=Date.now()
  //   }
  // }
}
export {
  debounce,
  throttle1,
  throttle2
}

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//npm i -D@types/node
//安装关于node这个库的ts声明配置
import {resolve} from 'path' 
// https://vitejs.dev/config/
//在tsconfig.json中配置路径别名的提示
//"baseUrl": "./",
//"paths": {
//  "@/*": [
//    "src/*"
//  ]
//}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias: {
      "@": resolve(__dirname, "src"),
      // 注意一定不要随意命名，a b c这样的，项目的目录也不能为关键字保留字！！
      "comp": resolve(__dirname, "src/components"),
      // 配置图片要这样引用
      "/img": "./src/assets",
    },
  },
})

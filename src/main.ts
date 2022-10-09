import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import router from './router/index'
import 'element-plus/dist/index.css'
import './assets/css/icon.css'

import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(ElementPlus, {
    locale: zhCn,
})
// 注册elementplus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}   

app.mount('#app')

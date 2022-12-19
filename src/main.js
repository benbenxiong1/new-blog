import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
//  路由
import Router from './router/index.js';
// 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue';



const app = createApp(App)
app.use(Router).mount('#app')
//全局注册Element Icon
for (let iconName in ElementPlusIconsVue) {
    app.component(iconName, ElementPlusIconsVue[iconName])
}
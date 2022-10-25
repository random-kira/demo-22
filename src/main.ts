import { createApp } from 'vue'
import {App} from './App'
import { Foo } from './views/Bar'
import { Bar } from './views/Foo'
import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
  ]

const router = createRouter({
    history:createWebHashHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import info from '../views/info.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'WhiteSpace',
        component: home
    },
    {
        path: '/:id',
        name: 'RoomInfo',
        component: info
    }

]

const router = new VueRouter({
    routes
})

export default router
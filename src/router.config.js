import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const Router = new VueRouter({
    mode: "hash",
    routes: [{
        path: "/WxappEdit",
        component: resolve => {
            require(['./page/wxapp_edit.vue'], resolve)
        },
        name: 'WxappEdit'
    }]
})

export default Router
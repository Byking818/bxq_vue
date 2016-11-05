require ('./style/base.scss') 
require ('../src/path/lib/swiper-3.3.1.min.js')
require ('../src/path/lib/swiper.min.css')

//引入vue 以及 vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
import InfiniteScroll from 'vue-infinite-scroll'



//引入组件
import Index from './components/index.vue'
import MyInfo from './components/my-info.vue'
import Header from './path/header.vue'
import Footer from './path/footer.vue'



//中间件
Vue.use(VueRouter)
Vue.use(InfiniteScroll)
//创建一个路由实例
var router = new VueRouter()

let components = {
	'page-header': Header,
	'page-footer': Footer 
}
for (let key of Object.keys(components)) {
	Vue.component(key,components[key])
}

Vue.config.debug = true


router.map({
	'/': {
		name: 'Index',
		component: Index
	},
	'/MyInfo': {
		name: 'MyInfo',
		component: MyInfo
	},
	'/MT-0819': {//按需加载
		name: 'Mobli-test',
		component: function (resolve) {
			require(['components/moblie/moblie-test.vue'],resolve)
		}
	},
	'/swiper': {
		name: 'swiper',
		component: function (resolve) {
			require(['components/moblie/swiper.vue'],resolve)
		}
	},
	'/scroll': {
		name: 'scroll',
		component: function (resolve) {
			require(['components/moblie/scroll.vue'],resolve)
		}
	}
})
//定义全局的重定向规则
router.redirect({
	'*': "/"
})
// 注册空组件
var App = Vue.extend({})
router.start(App, 'body')


/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })

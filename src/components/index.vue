<template>
	<page-header :config="headerConfig"></page-header>
	<main>
		<h1>{{ pageName }}</h1> 
		<button @click="fn1">路由方式访问信息页</button>
		<hr/>
		<h2>this is a page of me!</h2>
		<a href="javascript:;" v-link="{ path: '/' }">V-link访问主页</a>
		<a href="javascript:;" v-link="{ path: '/MyInfo'}">V-link访问信息页</a>
		<a href="javascript:;" v-link="{ path: '/swiper' }">Swiper插件</a>
		<a href="javascript:;" v-link="{ path: '/scroll' }">vue-infinite-scroll插件</a>
		<a href="javascript:;" v-link="{ path: '/' }">图片懒加载</a>
	</main>
	
	<page-footer></page-footer>
</template>

<script>
	export default {
		data () {
			return {
				pageName: '首页',
				headerConfig: {
					title: '这里是首页'
				}
			}
		},
		methods: {
			fn1 () {
				alert('这里是首页')
			}
		}
	}
</script>

<style lang="scss"  scoped>
	a {	
		display: block;
		margin: 1rem 0 1rem 1rem;
		font-size: 1.2rem;
	}
	main {
		margin-top: 50px;
	}
</style>
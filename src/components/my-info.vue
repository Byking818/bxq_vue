<template>
	<page-header :config="headerConfig"></page-header>
	<main>
		<h1>{{ pageName }}</h1> 
		<button v-on:click="fn2">返回主页</button>
		<hr/>
		<a v-link="{ path: '/' }">V-link回到主页</a>
		<a v-link="{ path: '/MyInfo'}">V-link访问信息页</a>
	</main>
	<page-footer ></page-footer>
</template>

<script>
	export default {
		data () {
			return {
				pageName: '个人信息页',
				headerConfig: '个人信息页'
			}
		},
		methods: {
			fn2 () {
				alert('这里是信息页')
			}
		}
	}
</script>
<style scoped>
	a {
		font-size: 24px;
		margin-right: 20px;
	}
	main {
		margin-top: 50px;
	}
</style>
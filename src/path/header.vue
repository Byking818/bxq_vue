<!-- 头部公用 -->
<template>
	<header>
		<a href="{{ config.link || 'javascript:history.back();' }}" v-if="true" id="back">
			<img src="../assets/base/back.svg">
		</a>
		<span>{{ config.title }}</span>
	</header>
</template>

<script>
	export default {
		data () {
			return {
				msg: "这里是默认头部"
			}
		},
		props: {
			config: {
				default () {
					return {
						title: '',
						back: true
					}
				}
			}
		},
		methods: {
			//定义方法
		}
	}
</script>

<style scoped>
	header {
		top: 0;	
	}

</style>
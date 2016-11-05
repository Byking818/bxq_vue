<template>
	<div class="child">
		<h1>{{ msg }}</h1>
		<!-- 父组件定义的数组可以在子组件内调用 -->
		<h1>{{ myfromefather }}</h1>
		<button @click="onClick">Cleck Me</button>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				msg: 'Now i love!',
				some: 'ZDD'
			}
		},
		props: ['myfromefather'],
		methods: {
			onClick: function() {
				debugger;
				this.$emit('zidingyi',this.some)
			}
		}
	}
</script>

<style>
	h1 {
		text-align: center;
		color: #B96B6B;
	}
</style>
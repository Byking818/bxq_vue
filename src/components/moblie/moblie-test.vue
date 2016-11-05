<template>
	<header>
		头部
	</header>
	<section>
		<!-- 渲染列表 -->
		<ul>
			<li v-for="item in items">
				{{ item.name }}
			</li>
		</ul>
		<!-- 一个商品列表 -->
		<div class="item">
			<div class="top">
				<div class="left">
					左边
				</div>
				<div class="right">
					右边
				</div>
			</div>
			<div class="bottom">
				<div class="pic">
					<img src="../../../src/assets/base/stat.png">
				</div>
				<div class="desc">
					这是一张图片
				</div>
			</div>
		</div>
	</section>
	<footer>
		底部
	</footer>
</template>

<script>
	export default {
		data () {
			return {
				items: [
					{
						"name":"lpt"
					},{
						"name":"zdd"
					},{
						"name":"lhg"
					},{
						"name": "lst"
					}
				]
			}
		},
		components: {

		},
		methods: {
			$: function (obj) {
				return document.querySelector( obj )
			}
		},
		ready: function () {
			
		}
	}
</script>

<style lang="scss" scoped>

.item {
	background-color: yellow;
	.top {
		border-bottom: 1px solid #666;
	}
	.bottom {
		background-color: red;
	}
}
	
	
</style>
<template>
	<page-header :config="headerConfig"></page-header>	
	<main>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">Slide1</div>
				<div class="swiper-slide">Slide2</div>
				<div class="swiper-slide">Slide3</div>
				<div class="swiper-slide">Slide4</div>
				<div class="swiper-slide">Slide5</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
	</main>
</template>

<script>
	export default {
		data () {
			return {
				headerConfig: {
					title: 'Swiper插件',
					back: true
				}
			}
		},
		methods: {

		},
		ready: function() {
			var mySwiper = new Swiper('.swiper-container', {
				autoplay: 5000,
				loop: true,
				pagination: '.swiper-pagination'
			})
		}
	}
</script>
<style lang="scss" scoped>	
	* {
		margin: 0;
		padding: 0;
	}
	main {
		width: 100%;
		margin-top: 4rem;
	}
	.swiper-container {
		/*width: 100%;*/
		height: 100%;
	}
	.swiper-slide {
		width: 12.5rem;
		height: 20rem;
		text-align: center;
		line-height: 20rem;
		font-size: 2rem;
		color: #000;
		background: #fff;
		border-bottom: 2px solid #fff;

	}
</style>

<!-- Swiper 是一个很好用的移动端的第三方插件，因为不是vue本身的插件，所以引入方式需要require -->
<template>
	<div>
		<!-- <section>
			最外层
			<div class="container"></div>
		</section> -->

		<header class="header-wrap">
			<div class="imb-logo">
				<h1>
					<a href="#" title="imbella" class="logo-bd clearfix">imbella</a>
				</h1>
				<!-- <h2 aria-hidden="true">
					<a class="clearfix" href="#">imbella</a>
				</h2> -->
			</div>
			<div class="imb-search"></div>
      <div class="imb-nav"></div>
		</header>
	</div>
</template>

<script>
export default {
	name: "Header",
};
</script>

<style lang="scss">
.header-wrap {
  min-width: 999px;
  background: peru;
	.logo {
		width: 170px;
		height: 70px;
		float: left;
		h1 {
			position: relative;
			.logo-bd {
				// display: block;
				// margin-left: 22px;
				// padding-top: 58px;
				width: 142px;
				// height: 0;
				// overflow: hidden;
				// text-indent: -9999px;
				background: url("../assets/logo.png") no-repeat;
			}
		}
		// h2 {
		// 	display: none;
		// 	a {
		// 		display: block;
		// 		padding-top: 33px;
		// 		width: 80px;
		// 		height: 0;
		// 		text-indent: -9999px;
		// 		overflow: hidden;
		// 		background: url("../assets/logo.png") no-repeat;
		// 	}
		// }
	}
}
@media screen and (min-width: 1280px) {
  
}
</style>
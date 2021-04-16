<template>
	<footer class="imbella-footer">
		<section class="footer-content clearfix">
			<div class="footer-leftForm">
				<el-form ref="form" :model="form" label-width="80px">
					<h1>456</h1>
					<i class="fa fa-imdb" aria-hidden="true"></i>
					<el-form-item label="活动名称">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="活动名称">
						<el-input v-model="form.name"></el-input>
					</el-form-item>
					<el-form-item label="活动形式">
						<el-input type="textarea" v-model="form.desc"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">立即创建</el-button>
						<el-button>取消</el-button>
					</el-form-item>
				</el-form>
			</div>
			<div class="footer-rightInfo">
				<div class="footer-infoMenu df dfc">
					<div class="footer-menuLeft">
						<ul>
							<li>ABOUT</li>
							<li>MY ACCOUNT</li>
							<li>CONTACT US</li>
							<li>TERMS</li>
							<li>FAQs</li>
						</ul>
					</div>
					<div class="footer-menuRight">
						<ul>
							<li>ABOUT</li>
							<li>MY ACCOUNT</li>
							<li>CONTACT US</li>
							<li>TERMS</li>
							<li>FAQs</li>
						</ul>
					</div>
				</div>
				<div class="footer-icon">
					<ul class="df">
						<li>facebook</li>
						<li>wechat</li>
						<li>email</li>
						<li>TERMS</li>
						<li>FAQs</li>
					</ul>
				</div>
			</div>
		</section>
		<section class="footer-copyright">Imbella Co., Ltd</section>
	</footer>
</template>

<script>
export default {
	name: "Footer",
	data() {
		return {
			form: {
				name: "",
				type: [],
				desc: "",
			},
		};
	},
	methods: {
		onSubmit() {
			console.log("submit!");
		},
	},
};
</script>

<style lang="scss">
.imbella-footer {
	// min-width: 999px;
	background: pink;
	.footer-content {
		max-width: 1630px;
		min-width: 999px;
		margin: 0 auto;
		background: peru;
		.footer-leftForm {
			float: left;
			background: red;
		}
		.footer-rightInfo {
			float: right;
			background: blue;
			.footer-infoMenu {
				.footer-menuLeft {
				}
				.footer-menuRight {
				}
			}
			.footer-icon {
			}
		}
	}
	.footer-copyright {
		text-align: center;
	}
}
</style>
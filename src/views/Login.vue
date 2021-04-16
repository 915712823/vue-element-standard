<template>
	<div class="box">
		<div class="loginBox">
			<div class="loginTitle">Login Form</div>
			<form action="" class="loginForm">
				<div class="username">
					<label for="">Email or Phone</label>
					<input type="text" />
				</div>
				<div class="password">
					<label for="">Password</label>
					<input type="password" name="" id="" />
				</div>
				<div class="forgetPwd">
					<a href="#">Forgot Password?</a>
				</div>
				<div class="loginBtn">
					<button type="submit">LOGIN</button>
				</div>
				<div class="Signup">Not a menber? <a href="#">Signup now</a></div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	components: {},
	data() {
		return {};
	},
	methods: {},
	mounted() {},
};
</script>
<style lang="scss">
.box {
	height: 100vh;
	width: 100vw;
	background: linear-gradient(135deg, #6e8efb, #a777e3);
	background: -webkit-linear-gradient(135deg, #6e8efb, #a777e3);
	background-size: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
	/* background: -webkit-linear-gradient(45deg, blue, red); */
	.loginBox {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: rgba(255, 255, 255, 0.8);
		width: 330px;
		/* height: 400px; */
		padding: 30px;
		box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		.loginTitle {
			text-align: center;
			font-size: 32px;
			font-weight: 600;
			/* margin: 20px 0; */
		}
		.loginForm {
			margin-top: -20px;
			text-align: left;
			input {
				width: 100%;
				height: 100%;
				padding-left: 10px;
				font-size: 17px;
				border: 1px solid silver;
				&:focus {
					border-color: #3498db;
					border-bottom-width: 2px;
				}
			}
			.username,
			.password {
				width: 100%;
				height: 40px;
				margin: 40px 0;
				/* background-color: pink; */
			}
			.forgetPwd {
				margin-top: -10px;
				text-align: left;
				a {
					/* color: #3498db; */
					/* 
          CSS3 字体颜色渐变 
          1.background: -webkit-linear-gradient   为文本元素提供渐变背景
          2.-webkit-background-clip:text;         使用透明颜色填充文本
          3.color: transparent;                   用文本剪辑背景，用渐变背景作为颜色填充文本
          */
					background: linear-gradient(135deg, #6e8efb, #a777e3);
					background: -webkit-linear-gradient(135deg, #6e8efb, #a777e3);
					background-clip: text;
					-webkit-background-clip: text;
					color: transparent;
					&:hover {
						text-decoration: underline;
						color: #3498db;
					}
					&:active {
						color: red;
					}
				}
			}
			.loginBtn {
				width: 100%;
				height: 45px;
				margin: 20px 0;
				button {
					width: 100%;
					height: 100%;
					border: none;
					color: #fff;
					font-size: 18px;
					font-weight: 500;
					background: -webkit-linear-gradient(45deg, #6e8efb, #a777e3);
					letter-spacing: 1px;
					cursor: pointer;
					&:hover {
						background: -webkit-linear-gradient(45deg, #a777e3, #6e8efb);
					}
					.Signup {
						text-align: center;
						a {
							background: -webkit-linear-gradient(135deg, #6e8efb, #a777e3);
							-webkit-background-clip: text;
							background-clip: text;
							color: transparent;
							&:hover {
								text-decoration: underline;
								color: #3498db;
							}
							&:active {
								color: red;
							}
						}
					}
				}
			}
		}
	}
}
</style>
<template>
	<view>
		<view class="login-page" v-show="!logined" :style="{height:pageHei+'px'}">
			<image class="logo" src="../../static/canteen.png"/>
			<view class="system-name"><text>韶关阳光餐饮智慧监管</text></view>
			<view class="inp-con">
				<input class="inp" :value="account" placeholder-style="color:#999" placeholder="请输入手机号/邮箱" />
			</view>
			<view class="inp-con">
				<input class="inp" :value="pwd" placeholder-style="color:#999" placeholder="请输入密码" />
				<!-- <image class="inp-icon" src="../../static/eye.png"/> -->
			</view>
			<view class="inp-con">
				<input class="inp" :value="code" placeholder-style="color:#999" placeholder="请输入验证码" />
				<text class="get-code">获取验证码</text>
			</view>
			<button   class="primary-bg white primary-margin" @click="login()">登录</button>
			<view class="bottom-part">
				<label class="radio">
					<custom-radio :checked="remeber" @toggle="toggleRemeber"/>
					<text>记住密码</text>
				</label>
				<text class="forgot">忘记密码？</text>
			</view>
		</view>
		<view v-show="logined">
			<view class="user-info">
				<view class="image-box">
					<image src="../../static/canteen.png" mode="scaleToFill"/>
				</view>
				<view class="info-main">
					<text>陈某某</text>
					<text class="tel">手机：18988888888</text>
				</view>
			</view>
			<view class="password">
				<text>密码设置</text>
				<icon class="icon iconfont iconarrow-right"></icon>
			</view>
			<button class="btn" @click="logout()">退出登录</button>
		</view>
	</view>
</template>

<script>
	import CustomRadio from '@/components/custom-radio/index'
	export default {
		components: {
			CustomRadio
		},
		data() {
			return {
				pageHei: '',
				logined: false,
				account: '',
				pwd: '',
				code: '',
				remeber: false
			}
		},
		onLoad() {
			this.init()
		},
		methods: {
			init() {
				let sysInfo = uni.getSystemInfoSync();
				this.pageHei = sysInfo.windowHeight;
			},

			login() {
				this.logined = true
			},

			logout() {
				this.logined = false
			},

			toggleRemeber(val) {
				this.remeber = !this.remeber
			}
		}
	}
</script>

<style scoped lang="stylus">
	@import './index.styl'
</style>

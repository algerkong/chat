<template>
	<view class="main">
		<top-bar>
			<template v-slot:left>
				<image @click="back" class="icon-close" src="../../static/image/close.png" mode=""></image>
			</template>
			<template v-slot:center>
				<view></view>
			</template>
			<template v-slot:right >
				<text class="registered" @click="toRegistered">注册</text>
			</template>
		</top-bar>

		<view class="logo"><image src="../../static/image/fair.png" mode=""></image></view>
		<view class="content">
			<view class="title">登录</view>
			<view class="text">你好，欢迎来到Alger</view>
		</view>
		<form @submit="" class="login-form">
			<input class="form-input" name="userName" placeholder="请输入账号..." />
			<input class="form-input" password="true" name="password" placeholder="请输入密码..." />
			<view class="error">用户名或密码输入错误!</view>
			<button class="form-submit" form-type="submit">登录</button>
		</form>
	</view>
</template>

<script>
import TopBar from '../../components/my-top-bar/my-top-bar.vue';
export default {
	data() {
		return {};
	},
	components: {
		TopBar
	},
	methods: {
		back(){
			uni.navigateBack({
			    delta: 1
			});
		},
		toRegistered(){
			uni.navigateTo({
				url:'../registered/registered'
			})
		}
	}
};
</script>

<style lang="scss">
.main {
	.icon-close {
		width: 60rpx;
		height: 60rpx;
	}
	.registered{
		color: $uni-text-color;
		font-weight: 500;
	}
}

.logo {
	display: flex;
	justify-content: center;
	padding: 100rpx 0;
	image {
		width: 192rpx;
		height: 91rpx;
	}
}

.content {
	padding: 0 $uni-spacing-row-lg;
	.title {
		font-size: 56rpx;
		font-weight: 600;
		line-height: 100rpx;
		color: $uni-text-color;
	}
	.text {
		font-size: 40rpx;
		line-height: 56rpx;
		color: $uni-text-color-grey;
	}
}

.login-form{
	padding: $uni-spacing-row-base $uni-spacing-row-lg;
	display: block;
	.form-input{
		border-bottom: 1rpx solid $uni-border-color;
		font-size: $uni-font-size-lg;
		color: $uni-text-color;
		line-height: 44rpx;
		padding: $uni-spacing-col-sm 0;
		margin-bottom: 30rpx;
	}
	.form-submit{
		width: 520rpx;
		height: 96rpx;
		line-height: 96rpx;
		background-color: $uni-color-primary;
		box-shadow: 0 50rpx 32rpx -36rpx rgba(255,228,49,0.4);
		border-radius: 48rpx;
		margin-top: 100rpx;
		font-size: $uni-font-size-lg;
		color: $uni-text-color;
		font-weight: 500;
		&::after{
			border: none;
		}
		&:active{
			background-color: rgba(209, 187, 40,1);
		}
	}
	.error{
		font-size: $uni-font-size-base;
		color: $uni-color-error;
	}
}
</style>

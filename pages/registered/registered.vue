<template>
	<view class="main">
		<top-bar>
			<template class="left" v-slot:left>
				<image @click="back" class="icon-back" src="../../static/image/back.png" mode=""></image>
			</template>
		</top-bar>
		<view class="logo"><image src="../../static/image/fair.png" mode=""></image></view>
		<view class="content">
			<view class="title">注册</view>
		</view>
		<form @submit="" class="registered-form">
			<input class="form-input" name="userName" placeholder="请取个名字" />
			<input class="form-input" name="userName" placeholder="请输入邮箱" />
			<input class="form-input" password="true" name="password" placeholder="这里输入密码" />
			<input class="form-input" password="true" name="password" placeholder="这里确认密码" />
			<view class="error">邮箱格式不正确!</view>
			<button class="form-submit" form-type="submit">注册</button>
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
		back() {
			uni.navigateBack({
				delta: 1
			});
		}
	}
};
</script>

<style lang="scss">
.main {
	.icon-back {
		width: 60rpx;
		height: 60rpx;
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

.registered-form {
	padding: $uni-spacing-row-base $uni-spacing-row-lg;
	display: block;
	.form-input {
		border-bottom: 1rpx solid $uni-border-color;
		font-size: $uni-font-size-lg;
		color: $uni-text-color;
		line-height: 44rpx;
		padding: $uni-spacing-col-sm 0;
		margin-bottom: 30rpx;
	}
	.form-submit {
		width: 520rpx;
		height: 96rpx;
		line-height: 96rpx;
		background-color: $uni-color-primary;
		box-shadow: 0 50rpx 32rpx -36rpx rgba(255, 228, 49, 0.4);
		border-radius: 48rpx;
		margin-top: 100rpx;
		font-size: $uni-font-size-lg;
		color: $uni-text-color;
		font-weight: 500;
		&::after {
			border: none;
		}
		&:active {
			background-color: rgba(209, 187, 40, 1);
		}
	}
	.error {
		font-size: $uni-font-size-base;
		color: $uni-color-error;
	}
}
</style>

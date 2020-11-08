<template>
	<view class="top-bar-page" :style="{ 'padding-top': statusBarHeight + 'px' }">
		<view class="top-bar" >
			<slot name="left"></slot>
			<view class="top-bar-center"><slot name="center"></slot></view>
			<slot name="right"></slot>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			statusBarHeight: ''
		};
	},
	created() {
		this.statusBarHeight = this.topHeight;
	},
	methods: {}
};
</script>

<style lang="scss">
.top-bar-page {
	width: 100vw;
	box-sizing: border-box;
	padding: 0 $uni-spacing-col-base;
	box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
}
.top-bar {
	height: 88rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	z-index: 999;
	> view {
		display: flex;
		align-items: center;
	}
	/* #ifdef MP-WEIXIN */
	& > view:nth-child(3) {
		padding-right: 180rpx;
	}
	/* #endif */
	.top-bar-center {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
}
</style>

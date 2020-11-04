<template>
	<view>
		<view class="top-bar">
			<view class="top-bar-left">
				<slot name="left"></slot>
			</view>
			<view class="top-bar-center">
				<slot name="center"></slot>
			</view>
			<view class="top-bar-right">
				<slot name="right"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style lang="scss">
.top-bar {
	width: 100vw;
	box-sizing: border-box;
	height: 98rpx;
	background-color: $uni-bg-color;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 $uni-spacing-row-lg;

	.top-bar-left {
		display: flex;
		align-items: center;
	}

	.top-bar-center {
		flex: 1;
	}

	.top-bar-right {
		display: flex;
		align-items: center;
	}
}
</style>

<template>
	<view>
		<view class="top-bar">
			<slot name="left"></slot>
			<slot name="center"></slot>
			<slot name="right"></slot>
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
	padding: 0 $uni-spacing-col-base;

	.top-bar-left {
		overflow: hidden;
		position: relative;
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

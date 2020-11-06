<template>
	<view>
		<view class="top-bar">
			<view class="status-bar"></view>
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
	height: calc(var(--status-bar-height) + 98rpx);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: var(--status-bar-height) $uni-spacing-col-base 0;
	box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
	position: relative;
	z-index: 999;
	.status-bar{
		width: 100vw;
		height: var(--status-bar-height);
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
	}
}
</style>

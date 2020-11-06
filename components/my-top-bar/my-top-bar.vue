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
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 $uni-spacing-col-base;
	box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
	position: relative;
	z-index: 999;
}
</style>

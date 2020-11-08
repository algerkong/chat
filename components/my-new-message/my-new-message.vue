<template>
	<view class="friend-list">
		<view class="friend-headimg">
			<text class="news-number" v-if="item.tip!=''">{{ item.tip }}</text>
			<image :src="'../../static/image/head/' + item.imgUrl"></image>
		</view>
		<view class="friend-text">
			<text class="name">{{ item.name }}</text>
			<view class="content">{{ item.news }}</view>
		</view>
		<view class="friend-time">
			<text>{{ changeTime(item.time) }}</text>
		</view>
	</view>
</template>

<script>
	import myfun from '../../commons/js/myfun.js';
	export default {
		data() {
			return {
				
			};
		},
		props:{
			item:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		methods:{
			changeTime(date) {
				return myfun.dateTime(date);
			}
		}
	}
</script>

<style lang="scss">
.friend-list {
		padding: 0 $uni-spacing-col-base;
		display: flex;
		justify-content: space-between;
		height: 128rpx;
		align-items: center;

		&:active {
			background-color: $uni-bg-color-grey;
		}

		.friend-headimg {
			position: relative;
			width: $uni-img-size-base;
			height: $uni-img-size-base;

			> image {
				width: $uni-img-size-base;
				height: $uni-img-size-base;
				border-radius: $uni-border-radius-base;
				background-color: $uni-color-primary;
			}

			> .news-number {
				position: absolute;
				right: 0;
				top: 0;
				margin: -12rpx -12rpx;
				z-index: 10;
				min-width: 36rpx;
				height: 36rpx;
				text-align: center;
				font-size: $uni-font-size-sm;
				border-radius: $uni-border-radius-base;
				background-color: $uni-color-warning;
				color: $uni-text-color-inverse;
			}
		}

		.friend-text {
			display: flex;
			flex-direction: column;
			flex: 1;
			padding: 0 $uni-spacing-col-base;

			.name {
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
				line-height: 50rpx;
			}

			.content {
				max-width: 400rpx;
				font-size: $uni-font-size-base;
				color: $uni-text-color-grey;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}

		.friend-time {
			color: $uni-text-color-disable;
			font-size: $uni-font-size-sm;
		}
	}
</style>

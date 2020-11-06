<template>
	<view class="item">
		<view class="item-left">
			{{item.left}}
		</view>
		<view class="item-center">
			<image :src="item.img" mode="" v-if="!item.center"></image>
			<text v-else>{{item.center}}</text>
		</view>
		<view class="item-right">
			<image src="../../static/image/toright.png"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:{
			item:{
				type:Object,
				default(){
					return null
				}
			}
		}
	}
</script>

<style lang="scss">
	.item{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: $uni-spacing-col-base;
		font-size: $uni-font-size-base;
		border-bottom: 1rpx solid $uni-border-color;
		.item-center{
			flex: 1;
			padding: 0 $uni-spacing-col-base;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			color: $uni-text-color-grey;
			
			image {
				width: 80rpx;
				height: 80rpx;
				border-radius: $uni-border-radius-base;
			}
		}
		.item-right{
			display: flex;
			align-items: center;
			image{
				width: 28rpx;
				height: 28rpx;
			}
		}
		
	}
</style>

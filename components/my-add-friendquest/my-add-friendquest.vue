<template>
	<view class="item-page">
			<view class="item">
				<view class="item-head">
					<image class="head" src="../../static/image/head/a3.jpg" mode=""></image>
					<view class="refused">
						拒绝
					</view>
					<view class="agree">
						同意
					</view>
				</view>
				<view class="item-name">
						<view class="name">刘俊杰</view>
						<view class="time">2020-09-11</view>
				</view>
				<view class="item-message">
					留言:刘俊杰想请求加你为好友。谢谢你的通过
				</view>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.item-page{
		padding: 150rpx $uni-spacing-col-base 50rpx;
		box-sizing: border-box;
		.item{
			padding: $uni-spacing-col-base;
			box-sizing: border-box;
			box-shadow: 0 24rpx 64rpx -8rpx rgba(0,0,0,0.15);
			border-radius: $uni-border-radius-base;
			.item-head{
				position: relative;
				display: flex;
				padding: 50rpx 0 0;
				justify-content: space-between;
				.head{
					width: 150rpx;
					height: 150rpx;
					border-radius: $uni-border-radius-circle;
					position: absolute;
					top: -100rpx;
					left: 50%;
					transform: translate(-50%, 0);
					margin: 0 auto;
					box-shadow: 0 5rpx 10rpx 0 rgba(0,0,0,0.15);
				}
				.refused,.agree{
					padding: 10rpx 50rpx;
					border-radius: 50rpx;
					&:active{
						filter: brightness(80%);
					}
				}
				.refused{
					background-color: #fcd5d5;
					color: $uni-color-warning;
				}
				.agree{
					background-color: $uni-color-primary;
					color: $uni-text-color;
				}
			}
			.item-name{
				text-align: center;
				padding: $uni-spacing-col-base 0;
				.name{
					font-size: 40rpx;
					font-weight: 600;
					color: $uni-text-color;
				}
				.time{
					font-size: $uni-font-size-sm;
					color: $uni-text-color-grey;
				}
			}
			.item-message{
				padding: $uni-spacing-col-base;
				box-sizing: border-box;
				background-color: $uni-bg-color-grey;
				border-radius: $uni-border-radius-base;
				font-size: $uni-font-size-lg;
				color: $uni-text-color-placeholder;
			}
		}
	}
	
</style>
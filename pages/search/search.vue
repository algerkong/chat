<template>
	<view class="main">
		<top-bar>
			<template  v-slot:left>
				<view class="top-bar-left">
					<input class="search-input" type="text" placeholder="搜索用户名/群组..." />
					<image class="search-icon" src="../../static/image/search.png" mode=""></image>
				</view>
			</template>
			<template v-slot:right >
				<text class="top-bar-cancel" @click="back">取消</text>
			</template>
		</top-bar>
		<view class="user-list list">
			<view class="title">用户</view>
			<view class="user-item list-item">
				<image class="img" src="../../static/image/head/a1.jpg" mode=""></image>
				<view class="names">
					<view class="name">刘俊杰</view>
					<view class="email">liu@fox.com</view>
				</view>
				<view class="btn send-msg">发消息</view>
			</view>
			<view class="user-item list-item">
				<image class="img" src="../../static/image/head/a1.jpg" mode=""></image>
				<view class="names">
					<view class="name">刘俊杰</view>
					<view class="email">liu@fox.com</view>
				</view>
				<view class="btn add-friend">加好友</view>
			</view>
		</view>
	</view>
</template>

<script>
	import TopBar from '../../components/my-top-bar/my-top-bar.vue'
	export default {
		data() {
			return {
				
			};
		},
		components:{
			TopBar
		},methods:{
				back(){
					uni.navigateBack({
						delta:1
					})
				}
		}
	}
</script>

<style lang="scss">
	.main{
		color: $uni-text-color;
		font-size: $uni-font-size-base;
		.top-bar-left{
			flex: 1;
			position: relative;
			.search-input{
				width: 100%;
				height: 60rpx;
				background-color: $uni-bg-color-grey;
				box-sizing: border-box;
				padding: 0 60rpx 0 20rpx;
				border-radius: $uni-border-radius-sm;
			}
			.search-icon{
				width: 40rpx;
				height: 40rpx;
				position: absolute;
				right: 10rpx;
				top: 10rpx;
			}
		}
		.top-bar-cancel{
			padding-left: $uni-spacing-col-base;
		}
		
		.list{
			padding: 0 $uni-spacing-col-base;
			.title{
				font-size: 44rpx;
			}
			.list-item{
				padding: $uni-spacing-col-sm 0;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.img{
					width: 80rpx;
					height: 80rpx;
					border-radius: $uni-border-radius-base;
				}
				.names{
					flex: 1;
					overflow: hidden;
					padding: 0 $uni-spacing-col-base;
					.name{
						font-size: $uni-font-size-lg;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
					.email{
						font-size: $uni-font-size-sm;
						color: $uni-text-color-grey;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}
				}
				
				.btn{
					width: 120rpx;
					height: 48rpx;
					border-radius: 24rpx;
					text-align: center;
					line-height: 48rpx;
					&:active{
						filter: brightness(80%)
					}
				}
				.send-msg{
					color: $uni-text-color;
					background-color: $uni-color-primary;
				}
				.add-friend{
					color: $uni-color-success;
					background-color: rgba(74,170,255,0.10);
				}
				
				
			}
		}
	}
</style>

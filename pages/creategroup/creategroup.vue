<template>
	<view class="main">
		<top-bar>
			<template v-slot:left>
				<image @click="back" class="back-icon" src="../../static/image/back.png" mode=""></image>
			</template>
			<template v-slot:center>
				<view class="top-center">创建群聊</view>
			</template>
			<template v-slot:right>
				<view class="top-right"></view>
			</template>
		</top-bar>
		
		<view class="head">
			<image class="head-img" src="../../static/image/head/group.png" mode=""></image>
		</view>
		<view class="group-name">
			<input type="text"  value="" placeholder="输入群聊名称"/>
		</view>
		<view class="content">
			<scroll-view scroll-y="true" class="scroll" >
				<view class="scroll-page">
					
					<view class="user-list">
						<view class="title">用户</view>
						<view class="item" v-for="item in friends">
							<image class="check" src="../../static/image/true.png" mode=""></image>
							<image class="img" :src="'../../static/image/head/'+item.imgUrl" mode=""></image>
							<view class="name">
								{{item.name}}
							</view>
						</view>
						<view class="item" v-for="item in friends">
							<image class="check" src="../../static/image/true.png" mode=""></image>
							<image class="img" :src="'../../static/image/head/'+item.imgUrl" mode=""></image>
							<view class="name">
								{{item.name}}
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="btn-create">
			<view class="btn">
				创建
			</view>
		</view>
	</view>
</template>

<script>
import TopBar from '../../components/my-top-bar/my-top-bar.vue';
import datas from '../../commons/js/datas.js';
export default {
	data() {
		return {
			friends:[]
		};
	},
	components: {
		TopBar
	},
	onLoad() {
		this.getFriends();
	},
	methods: {
		getFriends() {
			this.friends = datas.friends();
		},
		back(){
			uni.navigateBack({
				delta:1
			})
		}
	}
};
</script>

<style lang="scss">
.main {
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;

	.back-icon {
		width: 48rpx;
		height: 48rpx;
	}
	
	.head{
		box-sizing: border-box;
		padding: $uni-spacing-col-base 0;
		display: flex;
		justify-content: center;
		.head-img{
			width: 200rpx;
			height: 200rpx;
			border-radius: $uni-border-radius-lg;
			padding: $uni-spacing-col-sm;
			background-color: $uni-color-primary;
			box-shadow: 0 18px 20px 0 rgba(39,40,50,0.10);
			margin: 70rpx auto;
		}
	}
	.group-name{
		box-sizing: border-box;
		padding: $uni-spacing-col-base;
		input{
			background-color: $uni-bg-color-grey;
			color: $uni-text-color;
			text-align: center;
			font-size: $uni-font-size-lg;
			border-radius: $uni-border-radius-base;
			padding: 	$uni-spacing-col-base;
		}
	}
	
	.content{
		flex: 1;
		height: 100rpx;
		.scroll{
			height: 100%;
			.scroll-page{
				box-sizing: border-box;
				padding: 0 $uni-spacing-col-base;
			}
			
			.user-list{
				.title{
					padding: $uni-spacing-col-base 0;
					font-size: 40rpx;
					font-weight: 600;
				}
				.item{
					display: flex;
					align-items: center;
					padding: $uni-spacing-col-sm 0;
					.check{
						width: 35rpx;
						height: 35rpx;
						padding: 8rpx;
						background-color: $uni-color-primary;
						border-radius: $uni-border-radius-circle;
					}
					.img{
						width: 80rpx;
						height: 80rpx;
						border-radius: $uni-border-radius-base;
						margin: 0 $uni-spacing-col-base;
					}
					.name{
						font-size: $uni-font-size-lg;
						color: $uni-text-color;
					}
				}
			}
		}
	}
	.btn-create {
		width: 100vw;
		padding: $uni-spacing-col-sm $uni-spacing-col-lg;
		box-sizing: border-box;
		.btn {
			font-size: $uni-font-size-lg;
			color: $uni-text-color;
			width: 100%;
			height: 80rpx;
			background-color: $uni-color-primary;
			text-align: center;
			line-height: 80rpx;
			border-radius: $uni-border-radius-sm;
			&:active {
				filter: brightness(80%);
			}
		}
	}
}
</style>

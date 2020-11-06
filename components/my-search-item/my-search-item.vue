<template>
	<view>
		<view class="list-item">
				<image @click="toUser" class="img" :src="'../../static/image/head/' + item.imgUrl" mode=""></image>
			<view class="names">
				<view class="name" v-html="item.name"></view>
				<view class="email" v-html="item.email"></view>
			</view>
			<view class="btn send-msg" v-if="isFriend">发消息</view>
			<view class="btn add-friend" v-else>加好友</view>
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
				return {}
			}
		},
		
		isFriend:{
			type:Boolean,
			default(){
				return false
			}
		}
	},
	methods:{
		toUser(){
			uni.navigateTo({
				url:'../../pages/userhome/userhome'
			})
		}
	}
	
}
</script>

<style lang="scss">
.list-item {
	padding: $uni-spacing-col-sm $uni-spacing-col-base;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.img {
		width: 80rpx;
		height: 80rpx;
		border-radius: $uni-border-radius-base;
	}
	.names {
		flex: 1;
		overflow: hidden;
		padding: 0 $uni-spacing-col-base;
		.name {
			font-size: $uni-font-size-lg;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		.email {
			font-size: $uni-font-size-sm;
			color: $uni-text-color-grey;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}

	.btn {
		width: 120rpx;
		height: 48rpx;
		border-radius: 24rpx;
		text-align: center;
		line-height: 48rpx;
		&:active {
			filter: brightness(80%);
		}
	}
	.send-msg {
		color: $uni-text-color;
		background-color: $uni-color-primary;
	}
	.add-friend {
		color: $uni-color-success;
		background-color: rgba(74, 170, 255, 0.2);
	}
}
</style>

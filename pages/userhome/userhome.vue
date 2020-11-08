<template>
	<view class="main">
		<top-bar>
			<template v-slot:left>
				<image @click="back" class="back-icon" src="../../static/image/back.png" mode=""></image>
			</template>
			<template v-slot:right>
				<image class="more-icon" src="../../static/image/more.png" mode=""></image>
			</template>
		</top-bar>
		<view class="bg">
			<view class="bg-top" :animation="animationBg"></view>
			<image class="bg-img" src="../../static/image/head/a10.jpg" mode="aspectFill"></image>
		</view>
		<view class="content">
			<view class="user-header">
				<view class="head">
					<image class="head-img" src="../../static/image/head/a10.jpg" mode="aspectFill" :animation="animationImg"></image>
					<image class="sex-icon man" src="../../static/image/sex_man.png" mode="" :animation="animationSex"></image>
				</view>
			</view>
			<view class="user-detail">
				<view class="name">{{ user.name }}</view>
				<view class="nike">昵称: {{ user.nike }}</view>
				<view class="intr">{{ user.intr }}</view>
			</view>
			<view class="user-add"><view class="user-button" @click="addFriendAnimate">加为好友</view></view>
		</view>
		<view class="add-msg" :style="{ height: addHeight + 'px', bottom: -addHeight + 'px' }" :animation="animationAdd">
			<view class="name">{{ user.name }}</view>
			<textarea class="add-main" :value="myname + ' 请求添加为好友~'" placeholder="" maxlength="300" />
			<view class="add-btn" :animation="animationBtn">
				<view class="btn-cancel" @click="addFriendAnimate">取消</view>
				<view class="btn-send">发送</view>
			</view>
		</view>
	</view>
</template>

<script>
import TopBar from '../../components/my-top-bar/my-top-bar.vue';
export default {
	components: {
		TopBar
	},
	data() {
		return {
			animationAdd: {}, //动画
			animationBtn: {}, //动画
			animationImg: {}, //动画
			animationSex: {}, //动画
			animationBg: {}, //动画
			addHeight: 0, //add板块高度
			isAdd: false,
			myname: '杨家兴',
			user: {
				name: '刘俊杰吖吖',
				nike: '啊啊啊',
				intr: '这个人很懒什么都没有写!这个人很懒什么都没有写!这个人很懒什么都没有写!这个人很懒什么都没有写!这个人很懒什么都没有写!这个人很懒什么都没有写!'
			}
		};
	},
	onReady() {
		this.getElementStyle();
	},
	methods: {
		back() {
			uni.navigateBack({
				delta: 1
			});
		},
		//获取页面高度
		getElementStyle() {
			const query = uni.createSelectorQuery().in(this);
			query
				.select('.bg')
				.boundingClientRect(data => {
					console.log(data.height);
					this.addHeight = data.height - 176;
				})
				.exec();
		},
		addFriendAnimate() {
			this.isAdd = !this.isAdd;
			let animationAddUp = uni.createAnimation({
				duration: 300,
				timingFunction: 'ease'
			});
			let animationBtnUp = uni.createAnimation({
				duration: 300,
				timingFunction: 'ease'
			});
			let animationImgSmall = uni.createAnimation({
				duration: 300,
				timingFunction: 'ease'
			});
			let animationSexOpcity = uni.createAnimation({
				duration: 300,
				timingFunction: 'ease'
			});
			let animationBgYellow = uni.createAnimation({
				duration: 300,
				timingFunction: 'ease'
			});
			if (this.isAdd) {
				animationAddUp.bottom(0).step();
				animationBtnUp.bottom(0).step();
				animationImgSmall
					.width(120)
					.height(120)
					.translate(-100, -20)
					.step();
				animationSexOpcity
					.opacity(0)
					.translate(-100, -20)
					.step();
				animationBgYellow.backgroundColor('rgba(255,228,49,0.60)').step();
			} else {
				animationAddUp.bottom(-this.addHeight).step();
				animationBtnUp.bottom(-100).step();
				animationImgSmall
					.width(200)
					.height(200)
					.translate(0, 0)
					.step();
				animationSexOpcity
					.opacity(1)
					.translate(0, 0)
					.step();
				animationBgYellow.backgroundColor('rgba(255,255,255,0.30)').step();
			}
			this.animationAdd = animationAddUp.export();
			this.animationBtn = animationBtnUp.export();
			this.animationImg = animationImgSmall.export();
			this.animationSex = animationSexOpcity.export();
			this.animationBg = animationBgYellow.export();
		}
	}
};
</script>

<style lang="scss">
.main {
	.back-icon {
		width: 48rpx;
		height: 48rpx;
	}
	.more-icon {
		width: 52rpx;
		height: 12rpx;
	}
	.bg {
		position: fixed;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		z-index: -1;
		.bg-top {
			position: absolute;
			width: 100vw;
			height: 100vh;
			top: 0;
			left: 0;
			z-index: 1;
			background-color: rgba(255, 255, 255, 0.3);
		}
		.bg-img {
			position: absolute;
			width: 100vw;
			height: 100vh;
			filter: blur(20rpx);
		}
	}
	.content {

		.user-header {
			display: flex;
			justify-content: center;
			align-items: center;
			padding-top: 80rpx;
			.head {
				position: relative;
				z-index: 99;
				.head-img {
					width: 20vh;
					height: 20vh;
					border: 6rpx solid #ffffff;
					border-radius: $uni-border-radius-lg;
					box-shadow: 0 18rpx 20rpx 0 rgba(39, 40, 50, 0.1);
				}
				.sex-icon {
					position: absolute;
					bottom: $uni-spacing-col-base;
					right: $uni-spacing-col-sm;
					padding: $uni-spacing-col-sm;
					border-radius: $uni-border-radius-circle;
					width: 32rpx;
					height: 32rpx;
				}
				.man {
					background-color: $uni-color-success;
				}
			}
		}
		.user-detail {
			padding: $uni-spacing-col-base 100rpx;
			text-align: center;
			color: $uni-text-color;
			.name {
				font-size: 52rpx;
				letter-spacing: -0.89rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			,
			.nike {
				font-size: $uni-font-size-base;
			}
			.intr {
				color: $uni-text-color-grey;
				font-size: $uni-font-size-base;
				text-align: left;
				padding: $uni-spacing-col-base 0;
			}
		}

		.user-add {
			width: 100vw;
			padding: $uni-spacing-col-lg;
			box-sizing: border-box;
			position: fixed;
			bottom: 0;
			left: 0;
			.user-button {
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
	.add-msg {
		position: fixed;
		bottom: -80vh;
		width: 100vw;
		height: 80vh;
		background-color: #ffffff;
		border-radius: 40rpx 40rpx 0 0;
		box-sizing: border-box;
		padding: 10vh $uni-spacing-col-lg 0;
		color: $uni-text-color;
		.name {
			font-size: 52rpx;
			color: $uni-text-color;
			line-height: 74rpx;
			padding-bottom: 30rpx;
		}
		.add-main {
			width: 100%;
			height: 35vh;
			border-radius: $uni-border-radius-base;
			box-sizing: border-box;
			padding: $uni-spacing-col-sm;
			font-size: $uni-font-size-base;
			background-color: #eee;
		}
	}

	.add-btn {
		display: flex;
		position: fixed;
		bottom: -200px;
		left: 0;
		width: 100vw;
		padding: $uni-spacing-col-lg;
		box-sizing: border-box;
		view {
			height: 80rpx;
			line-height: 80rpx;
			text-align: center;
			font-size: $uni-font-size-lg;
			border-radius: $uni-border-radius-sm;
			&:active {
				filter: brightness(80%);
			}
		}
		.btn-cancel {
			flex: 1;
			background-color: #eeeeee;
		}
		.btn-send {
			margin-left: $uni-spacing-col-lg;
			flex: 3;
			background-color: $uni-color-primary;
		}
	}
}
</style>

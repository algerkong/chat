<template>
	<view class="main">
		<top-bar>
			<template v-slot:left>
				<image @click="back" class="back-icon" src="../../static/image/back.png" mode=""></image>
			</template>
			<template v-slot:center>
				<view>小明</view>
			</template>
			<template v-slot:right>
				<image @click="toDetail" class="user-open" src="../../static/image/head/a2.jpg" mode=""></image>
			</template>
		</top-bar>
		<view class="content">
			<scroll-view class="scroll" scroll-y="true" scroll-with-animation="true" :scroll-into-view="viewIndex">
				<view class="msg-wapper">
					<view v-for="(item, index) in msgs" :key="index">
						<view class="msg-page msg-l" v-if="item.isLeft">
							<image @click="toUser" class="img" src="../../static/image/head/a2.jpg"></image>
							<view class="msg">{{ item.msg }}</view>
						</view>
						<view class="msg-page msg-r" v-else>
							<image @click="toUser" class="img" src="../../static/image/head/a3.jpg"></image>
							<view class="msg" v-if="item.msg">{{ item.msg }}</view>
							<image class="post-img" v-else :src="item.img" mode=""></image>
						</view>
					</view>
				</view>
				<view :id="'im_'+msgs.length" class="bottom"></view>  
			</scroll-view>
		</view>
		<view class="send-msg">
			<input type="text" v-model="sendmsg" placeholder="输入信息..." />
			<view class="btn-send" @click="sendMsg">发送</view>
		</view>
	</view>
</template>

<script>
import TopBar from '../../components/my-top-bar/my-top-bar.vue';
import AddFriendquest from '../../components/my-add-friendquest/my-add-friendquest.vue';
export default {
	data() {
		return {
			viewIndex: 'aa',
			sendmsg: '',
			msgs: [
				{
					isLeft: true,
					msg: '在吗？'
				},
				{
					isLeft: true,
					msg: '在吗？'
				},
				{
					isLeft: false,
					msg: '你是个舔狗吗？'
				},
				{
					isLeft: true,
					msg: '在吗？'
				},
				{
					isLeft: false,
					msg: '你是个舔狗吗？'
				},
				{
					isLeft: true,
					msg: '在吗？'
				},
				{
					isLeft: false,
					msg: '你是个舔狗吗？'
				},
				{
					isLeft: true,
					msg: '在吗？'
				},
				{
					isLeft: false,
					msg: '你是个舔狗吗？'
				},

				{
					isLeft: true,
					msg: '在吗？'
				},

				{
					isLeft: false,
					msg: '你是个舔狗吗？'
				},
				{
					isLeft: false,
					msg: '你管我在不在，你是个舔狗吗🐕🐕🐕🐕🐕？'
				},
				{
					isLeft: false,
					img: '../../static/image/head/a8.jpg'
				}
			]
		};
	},
	components: {
		TopBar,
		AddFriendquest
	},
	created() {},
	methods: {
		back() {
			uni.navigateBack({
				delta: 1
			});
		},
		toDetail() {
			uni.navigateTo({
				url: '../userdetails/userdetails'
			});
		},
		toUser() {
			uni.navigateTo({
				url: '../userhome/userhome'
			});
		},
		sendMsg() {
			if(this.sendmsg!=''){
				this.msgs.push({
					isLeft: false,
					msg: this.sendmsg
				});
				this.viewIndex = '';
				//设置viewIndex值，使聊天滚动到底部
				this.$nextTick(() => {
					this.viewIndex = 'im_' + this.msgs.length;
				});
				this.sendmsg = '';
			}else{
				uni.showToast({
					title:'没有输入信息',
					icon:'none'
				})
			}
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
	background-color: $uni-bg-color-grey;
	.back-icon {
		width: 48rpx;
		height: 48rpx;
	}

	.user-open {
		width: 58rpx;
		height: 58rpx;
		border-radius: $uni-border-radius-base;
	}

	.content {
		flex: 1;
		height: 100rpx;
		.scroll {
			height: 100%;
			.msg-wapper {
				box-sizing: border-box;
				padding: $uni-spacing-col-base;
			}
			.msg-page {
				display: flex;
				align-items: flex-start;
				padding-bottom: $uni-spacing-col-base;
				font-size: $uni-font-size-lg;
				.img {
					width: 80rpx;
					height: 80rpx;
					border-radius: $uni-border-radius-base;
				}

				.msg {
					max-width: 300rpx;
					padding: 15rpx $uni-spacing-col-base;
					margin: 0 $uni-spacing-col-base;
					position: relative;
					color: $uni-text-color;
					/* &::after {
						content: '';
						width: 0;
						height: 0;
						display: block;
						border: 20rpx solid transparent;
						top: 50%;
						transform: translate(0, -50%);
					} */
				}
				.post-img {
					margin: 0 $uni-spacing-col-base;
					width: 200rpx;
					height: 200rpx;
					border-radius: $uni-border-radius-base 0 $uni-border-radius-base $uni-border-radius-base;
				}
			}

			.msg-l {
				.msg {
					background-color: #ffffff;
					border-radius: 0 $uni-border-radius-base $uni-border-radius-base $uni-border-radius-base;
					/* &::after {
						border-right-color: #ffffff;
						position: absolute;
						left: -32rpx;
					} */
				}
			}

			.msg-r {
				flex-direction: row-reverse;
				.msg {
					background-color: $uni-color-primary;
					border-radius: $uni-border-radius-base 0 $uni-border-radius-base $uni-border-radius-base;
					/* &::after {
						border-right-color: transparent;
						border-left-color: $uni-color-primary;
						position: absolute;

						right: -32rpx;
						top: 50%;
						transform: translate(0, -50%);
					} */
				}
			}
		}
	}

	.send-msg {
		padding: $uni-spacing-col-sm $uni-spacing-col-base;
		background-color: #ffffff;
		display: flex;
		align-items: center;
		font-size: $uni-font-size-lg;
		box-shadow: 0 -1rpx 8rpx 0 rgba(0,0,0,0.1);
		input {
			flex: 1;
			background-color: $uni-bg-color-grey;
			padding: $uni-spacing-col-sm;
			border-radius: $uni-border-radius-base;
		}
		.btn-send {
			padding: 0 $uni-spacing-col-sm;
			background-color: $uni-color-primary;
			padding: $uni-spacing-col-sm $uni-spacing-col-base;
			margin-left: $uni-spacing-col-base;
			border-radius: $uni-border-radius-base;
			&:active {
				filter: brightness(80%);
			}
		}
	}
}
</style>

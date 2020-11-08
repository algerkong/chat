<template>
	<view class="main">
		<top-bar>
			<template v-slot:left>
				<view class="top-bar-left" @click="leftClick"><image src="../../static/image/head/a6.jpg" mode=""></image></view>
			</template>
			<template v-slot:center>
				<!-- #ifndef MP-WEIXIN -->
				<view class="top-bar-center"><image src="../../static/image/fair.png" mode=""></image></view>
				<!-- #endif -->
			</template>
			<template v-slot:right>
				<view class="top-bar-right">
					<image class="search-icon" @click="toSearch" src="../../static/image/search.png" mode=""></image>
					<image class="add-icon" @click="toUser" src="../../static/image/add.png" mode=""></image>
				</view>
			</template>
		</top-bar>
		<view class="content">
			<scroll-view scroll-y="true" class="scroll">
				<view class="friends">
					<view @click="toFriendquest">
						<new-message :item="addItem" ></new-message>
					</view>
					<view @click="toCreateGroup">
						<new-message :item="addGroup" ></new-message>
					</view>
				<view v-for="(item, index) in friends" :key="item.id" @click="toChat">
					<new-message  :item="item" ></new-message>
				</view>
				<view v-for="(item, index) in friends" :key="item.id" @click="toChat">
					<new-message  :item="item" ></new-message>
				</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import datas from '../../commons/js/datas.js';
import TopBar from '../../components/my-top-bar/my-top-bar.vue';
import NewMessage from '../../components/my-new-message/my-new-message.vue'
export default {
	data() {
		return {
			friends: [],
			height: '',
			navigationBarStyle: {
				iconText: '首页'
			},
			addItem:{
				imgUrl:'addfriend.png',
				tip:2,
				name:'好友请求',
				time:new Date(),
				news:''
			},
			addGroup:{
				imgUrl:'group.png',
				tip:'',
				name:'添加群组',
				time:new Date(),
				news:''
			}
		};
	},
	components: {
		TopBar,
		NewMessage
	},
	onLoad() {
		this.getFriends();
		this.height = this.topHeight;
	},
	methods: {
		leftClick() {
			uni.navigateTo({
				url: '../login/login'
			});
		},
		toSearch() {
			uni.navigateTo({
				url: '../search/search'
			});
		},
		toUser() {
			uni.navigateTo({
				url: '../userhome/userhome'
			});
		},
		getFriends() {
			this.friends = datas.friends();
		},
		toFriendquest(){
			uni.navigateTo({
				url: '../friendquest/friendquest'
			});
		},
		toChat(){
			uni.navigateTo({
				url: '../chatroom/chatroom'
			});
		},
		toCreateGroup(){
			uni.navigateTo({
				url: '../creategroup/creategroup'
			});
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

	.content {
		flex: 1;
		height: 100rpx;
		.scroll {
			height: 100%;
		}
	}
}

// height: 98rpx;
// background-color: $uni-bg-color;
// display: flex;
// justify-content: space-between;
// align-items: center;
// padding: 0 $uni-spacing-col-base;
// box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);

.top-bar-left {
	flex: 1;
	display: flex;
	align-items: center;
	image {
		width: 58rpx;
		height: 58rpx;
		border-radius: $uni-border-radius-base;
		box-sizing: border-box;
		box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
		background-color: $uni-bg-color-grey;
	}
}

.top-bar-center {
	flex: 2;
	display: flex;
	justify-content: center;

	image {
		width: 88rpx;
		height: 42rpx;
	}
}

.top-bar-right {
	flex: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	.search-icon {
		width: 52rpx;
		height: 52rpx;
		margin-right: 40rpx;
	}

	.add-icon {
		width: 48rpx;
		height: 48rpx;
	}
}

.friends {
	padding: 16rpx 0;
}
</style>

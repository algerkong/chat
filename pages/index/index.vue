<template>
	<view class="main">
		<top-bar>
			<template v-slot:left>
				<view class="top-bar-left" @click="leftClick"><image src="../../static/image/head/a6.jpg" mode=""></image></view>
			</template>
			<template v-slot:center>
				<view class="top-bar-center"><image src="../../static/image/fair.png" mode=""></image></view>
			</template>
			<template v-slot:right>
				<view class="top-bar-right">
					<image class="search-icon" @click="toSearch" src="../../static/image/search.png" mode=""></image>
					<image class="add-icon" @click="toUser" src="../../static/image/add.png" mode=""></image>
				</view>
			</template>
		</top-bar>
		<scroll-view scroll-y="true" class="scroll">
			<view class="friends">
				<view class="friend-list" v-for="(item, index) in friends" :key="item.id">
					<view class="friend-headimg">
						<text class="news-number">{{ item.tip }}</text>
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
				<view class="friend-list" v-for="(item, index) in friends" :key="index * 5">
					<view class="friend-headimg">
						<text class="news-number">{{ item.tip }}</text>
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
			</view>
		</scroll-view>
	</view>
</template>

<script>
import datas from '../../commons/js/datas.js';
import myfun from '../../commons/js/myfun.js';
import TopBar from '../../components/my-top-bar/my-top-bar.vue';
export default {
	data() {
		return {
			friends: []
		};
	},
	components: {
		TopBar
	},
	onLoad() {
		this.getFriends();
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
		changeTime(date) {
			return myfun.dateTime(date);
		},
		getFriends() {
			this.friends = datas.friends();
		}
	}
};
</script>

<style lang="scss">
.main {
}

.scroll {
	height: calc(100vh - 98rpx - var(--status-bar-height));
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
		width: 68rpx;
		height: 68rpx;
		border-radius: 16rpx;
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
				background-color: $uni-bg-color-grey;
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
}
</style>

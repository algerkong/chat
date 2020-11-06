<template>
	<view class="main">
		<top-bar>
			<template v-slot:left>
				<view class="top-bar-left">
					<input class="search-input" @input="search" type="text" placeholder="搜索用户名/群组..." />
					<image class="search-icon" src="../../static/image/search.png" mode=""></image>
				</view>
			</template>
			<template v-slot:right>
				<text class="top-bar-cancel" @click="back">取消</text>
			</template>
		</top-bar>
		
		<view class="user-list list" v-if="userList.length">
			<view class="title">用户</view>
			<search-item v-for="item in userList" :item="item" :is-friend="isFriend(item.id)"></search-item>
		</view>
		
		<view class="list" v-else>
			<view class="title">推荐好友</view>
			<search-item v-for="item in recommendedList" :item="item"></search-item>
		</view>
		
	</view>
</template>

<script>
import TopBar from '../../components/my-top-bar/my-top-bar.vue';
import datas from '../../commons/js/datas.js';
import SearchItem from '../../components/my-search-item/my-search-item.vue'

export default {
	data() {
		return {
			userList: [],
			recommendedList:[]
		};
	},
	components: {
		TopBar,
		SearchItem
	},
	created() {
		this.recommendedList = datas.friends();
	},
	methods: {
		back() {
			uni.navigateBack({
				delta: 1
			});
		},
		search(e) {
			this.userList = [];
			let searchVal = e.detail.value;
			if (searchVal.length > 0) {
				this.searchUser(searchVal);
			}
		},
		searchUser(e) {
			let friends = datas.friends();
			let exp = new RegExp(e,"g");
			for (let i in friends) {
				if (friends[i].name.search(e) != -1 || friends[i].email.search(e) != -1) {
					friends[i].name = friends[i].name.replace(exp, `<span style="color:#5799ff">${e}</span>`);
					friends[i].email = friends[i].email.replace(exp, `<span style="color:#5799ff">${e}</span>`);
					// friends[i].imgUrl = '../../static/image/head/' + friends[i].imgUrl
					this.userList.push(friends[i]);
				}
			}
		},
		isFriend(e) {
			let arr = datas.isFriend()
			for(let i=0;i<arr.length;i++){		
				if(arr[i].friend == e){
						return true;
				}
			}
		}
	}
};
</script>

<style lang="scss">
.main {
	color: $uni-text-color;
	font-size: $uni-font-size-base;
	.top-bar-left {
		flex: 1;
		overflow: hidden;
		position: relative;
		.search-input {
			min-width: 600rpx;
			width: 100%;
			height: 60rpx;
			background-color: $uni-bg-color-grey;
			box-sizing: border-box;
			padding: 0 60rpx 0 20rpx;
			border-radius: $uni-border-radius-sm;
		}
		.search-icon {
			width: 40rpx;
			height: 40rpx;
			position: absolute;
			right: 10rpx;
			top: 10rpx;
		}
	}
	.top-bar-cancel {
		padding-left: $uni-spacing-col-base;
	}

	.list {
		.title {
			padding:  $uni-spacing-col-base;
			font-size: 44rpx;
		}
	}
}
</style>

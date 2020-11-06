<template>
	<view class="main">
		<top-bar>
			<template v-slot:left>
				<view class="top-left"><image class="back-icon" @click="back" src="../../static/image/back.png" mode=""></image></view>
			</template>
			<template v-slot:center>
				<view class="title">详细</view>
			</template>
			<template v-slot:right>
				<view class="top-right"></view>
			</template>
		</top-bar>
		<view class="content">
			<view class="user-head">
				<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="uni-input">{{ date }}啊啊啊啊啊啊啊啊啊啊</view>
				</picker>
				<list-item :item="item1" />
				<list-item :item="item1" />
				<list-item :item="item1" />
				<list-item :item="item" />
				<list-item :item="item" />
				<list-item :item="item" />
				<list-item :item="item" />
				<list-item :item="item" />
			</view>
		</view>
	</view>
</template>

<script>
import TopBar from '../../components/my-top-bar/my-top-bar.vue';
import ListItem from '../../components/my-list-item/my-list-item.vue';
import myfun from '../../commons/js/myfun.js';
export default {
	data() {
		const currentDate = myfun.getDate({
			format: true
		});
		return {
			date: currentDate,
			item: {
				left: '头像',
				center: '哈是分开的时间阿海珐空间的撒谎分开'
			},
			item1: {
				left: '头像',
				img: '../../static/image/head/a1.jpg'
			}
		};
	},
	components: {
		TopBar,
		ListItem
	},
	methods: {
		back() {
			uni.navigateBack({
				delta: 1
			});
		},
		bindDateChange: function(e) {
			this.date = e.target.value;
		}
	},
	computed: {
		startDate() {
			return myfun.getDate('start');
		},
		endDate() {
			return myfun.getDate('end');
		}
	}
};
</script>

<style lang="scss">
.main {
	.top-left {
		flex: 1;
		display: flex;
		align-items: center;
		.back-icon {
			width: 48rpx;
			height: 48rpx;
		}
	}

	.top-right {
		flex: 1;
		background-color: #eeeeee;
	}

	.title {
		flex: 2;
		text-align: center;
	}

	.content {
		padding: $uni-spacing-col-base 0;
		.user-head {
			.user-item-center {
				image {
					width: 80rpx;
					height: 80rpx;
					border-radius: $uni-border-radius-base;
				}
			}
		}
	}
}
</style>

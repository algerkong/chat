<template>
	<view class="main">
		<top-bar>
			<template v-slot:left>
				<image @click="back" class="back-icon" src="../../static/image/back.png" mode=""></image>
			</template>
			<template v-slot:center>
				<view class="top-center"></view>
			</template>
			<template v-slot:right>
				<image src="" mode=""></image>
			</template>
		</top-bar>
		
		<view class="content">
			<scroll-view scroll-y="true" class="scroll" >
				<view class="scroll-page">
					
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import TopBar from '../../components/my-top-bar/my-top-bar.vue';
export default {
	data() {
		return {
			friends:[]
		};
	},
	components: {
		TopBar
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
	.content{
		flex: 1;
		height: 100rpx;
		.scroll{
			height: 100%;
			.scroll-page{
				box-sizing: border-box;
				padding: 0 $uni-spacing-col-base;
			}
		}
	}
	
}
</style>

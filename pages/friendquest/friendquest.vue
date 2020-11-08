<template>
	<view class="main">
		<top-bar>
			<template v-slot:left>
				<image @click="back" class="back-icon" src="../../static/image/back.png" mode=""></image>
			</template>
			<template v-slot:center>
				<view>好友请求</view>
			</template>
			<template v-slot:right>
				<view></view>
			</template>
		</top-bar>
		<view class="content">
			<scroll-view class="scroll" scroll-y="true" >
				<add-friendquest></add-friendquest>
				<add-friendquest></add-friendquest>
				<add-friendquest></add-friendquest>
				<add-friendquest></add-friendquest>
			</scroll-view>
		</view>
		
	</view>
</template>

<script>
	import TopBar from '../../components/my-top-bar/my-top-bar.vue'
	import AddFriendquest from '../../components/my-add-friendquest/my-add-friendquest.vue'
	export default {
		data() {
			return {
				
			}
		},
		components:{
			TopBar,
			AddFriendquest
		},
		methods: {
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
		}
	}
	
}
</style>

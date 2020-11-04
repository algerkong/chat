<template>
	<view class="main">
		<top-bar>
			<template class="left" v-slot:left>
				<image @click="back" class="icon-close" src="../../static/image/close.png" mode=""></image>
			</template>
			<template class="right" v-slot:right >
				<text class="registered" @click="toRegistered">注册</text>
			</template>
		</top-bar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	
</style>

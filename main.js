import Vue from 'vue'
import App from './App'


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()


let that = this;
wx.getSystemInfo({
	success: function(res) {
		Vue.prototype.topHeight = res.statusBarHeight;
	}
});

console.log(Vue.prototype.topHeight)

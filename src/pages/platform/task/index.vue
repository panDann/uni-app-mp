<template>
	<view >
		<DatePicker />
		<view class="white primary-margin font32 primary-shadow raduis4 primary-padding primary-bg">
		 <view class="flex-row justify-between">
			<text><text class="iconfont paddinglr1rem iconrenwu3" />当前任务进度</text>
			<text>3/34</text>
		 </view>
		</view>
	   <BoxShadow v-for="item in list" :key="item.name">
          <view class="flex-row justify-between">
          <view class="flex5">
			   <text class="font32">{{item.name}}</text>
			   <view class="iconshijian iconfont time font24 margintb10"> {{item.time}}</view>
		  </view>
		  
          <view class="mini-btn primary-btn flex1 circle-btn" v-if="item.status">未完成</view>
          <view class="mini-btn error-btn  flex1 circle-btn" v-else>已逾期</view>
          </view>
        </BoxShadow>
	</view>
</template>

<script>
import DatePicker from '@src/components/date-picker/index.vue'
import BoxShadow from '@src/components/box-shadow/index.vue';

	export default {
		components:{
			DatePicker,
			BoxShadow
		},
		data() {
			return {
				title: 'Hello',
				list:[
					{
						name:'1111',
						time:'2019-09-09',
						status:''
					},
					{
						name:'1111',
						time:'2019-09-09',
						status:''
					},
					{
						name:'1111',
						time:'2019-09-09',
						status:''
					},
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang='stylus' scoped>
.error-min-btn
 	background:#FFE5DD
	color #FD6737
	border solid 2upx $error

.time
	color #999 
</style>

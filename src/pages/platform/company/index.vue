<template>
	<view >
		<DatePicker  backType='month'/>
	   <BoxShadow v-for="item in list" :key="item.name">
          <view class="flex-row justify-between margintb10">
			   <text class="font32">{{item.position}}</text>
			   <text class="font32">{{item.name}}</text>
			   <text class="font32 color-666">{{item.time}}</text>
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
						position:'专员'
					},
						{
						name:'1111',
						time:'2019-09-09',
						position:'专员'
					},
				
					{
						name:'1111',
						time:'2019-09-09',
						position:'专员'
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

</style>

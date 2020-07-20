<template>
  <view>
    <ListItem v-for="item in list" :key="item.value">
      <view class="list-label" slot="left" >{{item.label}} 
		  <text class="list-value paddinglr1rem"> {{item.time}}</text>
	  </view>
      <view class="list-value" slot="right">{{item.value}}</view>
    </ListItem>
	<view class="fix-bottom primary-padding">
    	<button class="  primary-btn">新增检查</button>
	</view>
  </view>
</template>

<script>
// import CardNavigation from '@src/components/card-navigation/index.vue'

import ListItem from '@src/components/list-item/index.vue';
export default {
  components: {
    ListItem,
  },
  data() {
    return {
      list: [
        {
		  label: '经营者名称',
		  time:'2020/02/03',
          value: 222,
		},
		{
		  label: '经营者名称',
		  time:'2020/02/03',
          value: 222,
		},
		{
		  label: '经营者名称',
		  time:'2020/02/03',
          value: 222,
		},
		{
		  label: '经营者名称',
		  time:'2020/02/03',
          value: 222,
		},
		{
		  label: '经营者名称',
		  time:'2020/02/03',
          value: 222,
        },
     
      ],
   
    };
  },
};
</script>

<style lang='stylus' scoped>

</style>

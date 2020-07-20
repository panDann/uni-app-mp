<template>
  <view>
	<Search v-model="search" />
    <button class="white-bg primary-margin">
	   <text class="font32 color-999">+</text> 	添加健康证
	</button>
  <view class="margintb10">
      <ListItem  :hasArrow='false' v-for="item in certificationList" :key="item.value">
        <view class="list-label flex-row " slot="left">
			<image class="avator" :src='item.msg.img' />
			<view >
				<view class="name">
					{{item.msg.name}} <text class="position " >{{item.msg.position}}</text> 
				</view>
				<view class="phone">
					{{item.msg.phone}} 
				</view>
				<view class="phone">
					截止日期：{{item.msg.timeline}} 
				</view>
			</view>
		</view>
        <image class="holder-img"  slot="right"  v-if="authExpire(item.msg.timeline)"
		           :mode="item.photo?'':'缺失'" :src="item.photo" >
		</image>
		<text slot="right" class="error font24" v-else>已过期</text>
      </ListItem>
  </view>

   
  </view>
</template>

<script>
// import CardNavigation from '@src/components/card-navigation/index.vue'

import Search from '@src/components/search/index.vue';
import ListItem from '@src/components/list-item/index.vue';
export default {
  components: {
    Search,
    ListItem,
  },
  data() {
    return {
      
      certificationList: [
        {
          msg: {
			  name:'222',
			  position:'店员',
			  img:"",
			  phone:111111,
			  timeline:'2020-02-02'
		  },
          photo: '',
        },
        {
          msg: {
			  name:'222',
			  position:'店员',
			  img:"",
			  phone:111111
		  },
          photo: 222,
        },
        {
          msg: {
			  name:'222',
			  position:'店员',
			  img:"",
			  phone:111111
		  },
          photo: '',
        },
      ],
    };
  },
  methods:{
	  authExpire(time){
		  return Date.now() > new Date(time).getTime()
	  }
  }
};
</script>

<style lang='stylus' scoped>
// @import './index.styl';
.avator
	width:100upx;
	height:100upx;
	margin-right 20upx
	background:rgba(255,255,255,1);
	border:1px solid rgba(151,151,151,1)
.name
	font-size:32upx;
	font-weight:400;
	color:rgba(0,0,0,1);
.position
	margin: 10upx;
	font-size:24upx;
	font-weight:400;
	color:rgba(153,153,153,1);
	line-height:33upx;
.phone
	font-size:28upx;
	font-weight:400;
	color:rgba(136,136,136,1);

</style>

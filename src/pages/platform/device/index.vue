<template>
  <view>
    <Search v-model="search" @change="onChange" />
    <picker>
      <ListItem :hasArrow='false'>
        <view class="list-label" slot="left">{{school}}</view>
        <view class="iconfont iconxialaxiaosanjiao" slot="right"></view>
      </ListItem>
    </picker>

    <ListItem v-for="item in list" :key="item.value">
      <view class="list-label" slot="left">
        {{item.label}}
      </view>
      <view class="list-value flex-row" slot="right"> 
		  <view class="status-bar online marginlr1rem" v-show="item.status == 'online'" /> 
		  <view class="status-bar offline marginlr1rem" v-show="item.status == 'offline'" /> 
		  <view class="status-bar abnormal marginlr1rem" v-show="item.status == 'abnormal'" /> 
		  {{matchStatus.get(item.status)}}</view>
    </ListItem>
  </view>
</template>

<script>
const matchStatus = new Map([
	['online','在线'],
	['offline','离线'],
	['abnormal','异常'],
])
import Search from '@src/components/search/index.vue';

import ListItem from '@src/components/list-item/index.vue';
export default {
  components: {
    ListItem,
    Search,
  },
  data() {
    return {
	  school: '小学',
	  matchStatus,
      list: [
        {
          label: '经营者名称',
          status: 'online',
          value: 222,
        },
        {
          label: '经营者名称',
          status: 'offline',
          value: 222,
        },
        {
          label: '经营者名称',
          status: 'online',
          value: 222,
        },
        {
          label: '经营者名称',
          status: 'abnormal',
          value: 222,
        },
        {
          label: '经营者名称',
          status: 'online',
          value: 222,
        },
      ],
    };
  },
};
</script>

<style lang='stylus' scoped>
.status-bar
	width:14upx;
	height:14upx;
	border-radius 100%
.online
	background:$success;

.offline
	background:rgba(207,207,207,1);
.abnormal
	background:$error;

</style>

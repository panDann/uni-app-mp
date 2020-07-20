<template>
  <view>
    <DatePicker @change="onDate" />

	<view class="list-con">
		<ListItem v-for="item in list" :key="item.name">
      <view slot="left" class="font32  weight500">
        <view>留样人：{{item.name}}</view>
        <view>餐次：{{item.type}}</view>
        <view>留样时间：{{item.time}}</view>
      </view>
      <text slot="right" class="mini-btn warning-btn circle-btn" v-if="item.status">已销样</text>
      <text slot="right" class="mini-btn primary-btn circle-btn" v-else>holder</text>
    </ListItem>
	</view>
     <button class="white primary-bg primary-margin">
	   <text class=" iconfont iconxinzeng font32 "/>	新增留样
	</button>
  </view>
</template>

<script>
import DatePicker from '@src/components/date-picker/index.vue';
import ListItem from '@src/components/list-item/index.vue';

export default {
  components: {
    DatePicker,
    ListItem,
  },
  data() {
    return {
      title: 'Hello',
      list: [
        {
          name: '1111',
          time: '2019-09-09',
          type: '早餐',
          status:1
        },
        {
          name: '1111',
          time: '2019-09-09',
          type: '早餐',
          status:0

        },
      ],
    };
  },
  onLoad() {},
  methods: {
    onDate(date) {},
  },
};
</script>

<style lang='stylus' scoped>
.list-con
	border-top solid 1px #E5E5E5
	line-height 45upx
</style>

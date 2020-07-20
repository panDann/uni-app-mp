<template>
  <view>
    <DatePicker @change="onDate" />

	<view class="list-con">
		<ListItem v-for="item in list" :key="item.name">
      <view slot="left" class="font32  weight500">
        <view>处理人：{{item.name}}</view>
        <view>接收单位：{{item.type}}</view>
      </view>
      <text slot="right" class="font24 color-999">{{item.time}}</text>
    </ListItem>
	</view>
     <button class="white primary-bg primary-margin">
	   <text class=" iconfont iconxinzeng font32 "/>	添加废弃物
	</button>
  </view>
</template>

<script>
import DatePicker from '@src/components/date-picker/index.vue';
import BarTitle from '@src/components/bar-title/index.vue';
import ListItem from '@src/components/list-item/index.vue';

export default {
  components: {
    DatePicker,
    BarTitle,
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
        },
        {
          name: '1111',
          time: '2019-09-09',
          type: '早餐',
        },

        {
          name: '1111',
          time: '2019-09-09',
          type: '早餐',
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

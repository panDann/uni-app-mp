<template>
  <view>
    <DatePicker @change="onDate" />

	<view class="list-con">
		<ListItem v-for="item in list" :key="item.name" @click="detailDisinfectant()">
      <view slot="left" class="font32  weight500">
        <view>姓名：{{item.name}}</view>
        <view>消毒餐次：{{item.type}}</view>
      </view>
      <text slot="right" class="font24 color-999">{{item.time}}</text>
    </ListItem>
	</view>
     <button class="white primary-bg primary-margin" @click="addDisinfectant()" >
	   <text class=" iconfont iconxinzeng font32 "/>	新增消毒台账
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
	detailDisinfectant(){
			  uni.navigateTo({
	          url: '/pages/platform/disinfectant-detail/index'
	      })
	},
	addDisinfectant(){
			  uni.navigateTo({
			        url: '/pages/platform/disinfectant-add/index'
			    })
	},
  },
};
</script>

<style lang='stylus' scoped>
.list-con
	border-top solid 1px #E5E5E5
	line-height 45upx
</style>

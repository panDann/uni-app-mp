<template>
  <view>
    <DatePicker @change="onDate" />
    <view class="carn-con white-bg primary-padding flex-row justify-around">
      <view class="item">
        <view class="font48 primary-color">2121</view>
        <text class="font28">食堂人数</text>
      </view>
      <view class="bar" />
      <view class="item">
        <view class="font48 error">2121</view>
        <text class="font28">晨检人数</text>
      </view>
      <view class="bar" />
      <view class="item">
        <view class="font48 success">2121</view>
        <text class="font28">合格人数</text>
      </view>
    </view>
    <view class="primary-margin">
      <BarTitle text="晨检纪录" />
    </view>

    <ListItem v-for="item in list" :key="item.name" @click="detailCheck()">
      <text slot="left" class="font32 flex1">{{item.name}}</text>
      <text slot="center" class="font24 flex2 color-999">{{item.time}}</text>
      <text
        slot="right"
        class="font32 flex1"
        :class="item.status?'success':'error'"
      >{{item.status? '合格':'不合格'}}</text>
    </ListItem>
    <button class="white primary-bg primary-margin" @click="addMorningCheck()">
	   <text class=" iconfont iconxinzeng font32  color-999"/>	新增晨检
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
          status: 1,
        },
        {
          name: '1111',
          time: '2019-09-09',
          status: 0,
        },

        {
          name: '1111',
          time: '2019-09-09',
          status: 1,
        },
      ],
    };
  },
  onLoad() {},
  methods: {
	  detailCheck(){
		  uni.navigateTo({
                url: '/pages/platform/morning-check-detail/index'
            })
	  },
	  addMorningCheck(){
		  uni.navigateTo({
		        url: '/pages/platform/morning-check-add/index'
		    })
	  },
    onDate(date) {},
  },
};
</script>

<style lang='stylus' scoped>
.carn-con {
  border-top: 1px solid #CCC;

  .bar {
    height: 60upx;
    width: 3upx;
    background: #CCC;
  }
}
</style>

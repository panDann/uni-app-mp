<template>
  <view>
    <view class="white-bg">
      <CardNavigation title="食安动态" :list="statusList" @_navigationTo="navigationTo" />
    </view>
    <CardNavigation title="食堂管理" :list="canteenList" @_navigationTo="navigationTo" />
    <CardNavigation title="日常公示" :list="dailyList" @_navigationTo="navigationTo" />
  </view>
</template>

<script>
import CardNavigation from '@src/components/card-navigation/index.vue';
import { statusList, canteenList,dailyList } from './const';

export default {
  components: {
    CardNavigation,
  },
  data() {
    return {
      statusList,
      canteenList,
      dailyList,
    };
  },
  onLoad() {},
  methods: {
  	navigationTo(path){
  		let url = path
  		console.log('url: '+url)
  		uni.navigateTo({url})
  	}
  },
};
</script>

<style lang='stylus' scoped>
@import './index';
</style>

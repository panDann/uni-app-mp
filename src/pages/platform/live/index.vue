<template>
  <view>
    <Search v-model="search" @change="onChange" />
    <!-- <view class="list-con"> -->
    <Tab :tab-list="tabList" v-model="currentTab">
      <TabPane name="all">
        <BoxShadow v-for="item in allList" :key="item.name">
          <view class="flex-row  justify-between">
            <text class="live-name flex5">{{item.name}}</text>
            <button class="mini-btn primary-btn flex1">关注</button>
          </view>
          <view class="live-position">{{item.position}}</view>
          <video class="live-video"></video>
        </BoxShadow>
      </TabPane>

      <TabPane name="attention"></TabPane>
    </Tab>
    <view class="margintb10"></view>
  </view>
</template>

<script>
// import CardNavigation from '@src/components/card-navigation/index.vue'

import Search from '@src/components/search/index.vue';
import Tab from '@src/components/tab/index.vue';
import TabPane from '@src/components/tab-pane/index.vue';
import BoxShadow from '@src/components/box-shadow/index.vue';
export default {
  components: {
    Search,
    Tab,
	TabPane,
	BoxShadow
  },
  data() {
    return {
      currentTab: 'all',
      tabList: [
        {
          label: '全部',
          key: 'all',
        },
        {
          label: '关注',
          key: 'attention',
        },
      ],
      allList: [
        {
          name: '222',
          position: '店员',
          value: '',
        },
      ],
    };
  },
  methods:{
	  onChange(){
		  
	  }
  }
};
</script>

<style lang='stylus' scoped>
.live-name {
  margin: 10upx;
  font-size: 32upx;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  line-height: 45upx;
}

.live-position {
  margin: 10upx;
  font-size: 24upx;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 33upx;
}
// .live-btn
// 	flex 1
// 	width: 200upx
// 	height:40upx;
// 	padding: 0
// 	font-size:26upx;
// 	font-weight:400;
// 	text-align: center
// 	color:$primaryColor;
// 	line-height:36upx;
// 	background:rgba(214,233,255,1);
// 	border-radius:6upx;
// 	border:2upx solid $primaryColor;
.live-video
	height:354upx;
	width 100%
</style>

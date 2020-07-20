<template>
  <view>
    <DatePicker @change="onDate" />
    <Tab :tab-list="tabList" v-model="currentTab">
      <TabPane name="breakfrist">
        <view class="primary-padding">
          <BarTitle text="早餐" />
        </view>
        <ListItem :hasArrow="false" v-for="item in list" :key="item.value">
          <view class="list-label flex-row" slot="left">
            <image class="avator" :src="item.img" />
            <view>
              <view class="name">
                {{item.name}}
                <text class="position">{{item.msg.position}}</text>
              </view>
            </view>
          </view>
        </ListItem>
      </TabPane>

      <TabPane name="attention"></TabPane>
    </Tab>
    <!-- <view class="list-con"> -->
  </view>
</template>

<script>
import DatePicker from '@src/components/date-picker/index.vue';
import BarTitle from '@src/components/bar-title/index.vue';

import Tab from '@src/components/tab/index.vue';
import TabPane from '@src/components/tab-pane/index.vue';
import ListItem from '@src/components/list-item/index.vue';
export default {
  components: {
    DatePicker,
    Tab,
    BarTitle,
    TabPane,
    ListItem,
  },
  data() {
    return {
      currentTab: 'breakfrist',
      tabList: [
        {
          label: '早餐',
          key: 'breakfrist',
        },
        {
          label: '午餐',
          key: 'lunch',
        },
        {
          label: '晚餐',
          key: 'dinner',
        },
      ],
      list: [
        {
          name: '222',
          img: '',
        },
      ],
    };
  },
};
</script>

<style lang='stylus' scoped>
// @import './index.styl';
.avator {
  width: 100upx;
  height: 100upx;
  margin-right: 10upx;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(151, 151, 151, 1);
}

.name {
  margin: 10upx;
  font-size: 32upx;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  line-height: 45upx;
}

.position {
  margin: 10upx;
  font-size: 24upx;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  line-height: 33upx;
}

.phone {
  margin: 10upx;
  font-size: 28upx;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
  line-height: 40upx;
}
</style>

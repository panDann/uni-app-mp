<template>
  <view>
    <scroll-view
      :scroll-top="scrollTop"
      scroll-y="true"
      class="scroll-con"
      @scrolltoupper="upper"
      @scrolltolower="lower"
      @scroll="scroll"
    >
      <ListItem v-for="item in list" :key="item.value">
        <view class="list-label" slot="left">昨日食堂共有 {{item.label}} 条培训记录更新</view>
        <view class="list-value" slot="right">{{item.time}}</view>
      </ListItem>
    </scroll-view>
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
          label: 1,
          time: '2020/02/03',
        },
        {
          label: 1,
          time: '2020/02/03',
        },
        {
          label: 1,
          time: '2020/02/03',
        },
        {
          label: 1,
          time: '2020/02/03',
        },
        {
          label: 1,
          time: '2020/02/03',
        },
      ],
    };
  },
};
</script>

<style lang='stylus' scoped></style>

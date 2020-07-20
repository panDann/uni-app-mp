<template>
  <view>
    <ListItem :hasArrow="false" v-for="item in list" :key="item.value">
      <view class="list-label" slot="left">
        {{item.label}}
        <text class="list-value paddinglr1rem">{{item.value}}</text>
      </view>
      <view slot="right"></view>
    </ListItem>
    <ListItem :hasArrow="false" >
      <view class="list-label flex-row" slot="left">
        图片：
        <image class="holder-img" src=''  />
      </view>
      <view slot="right"></view>
    </ListItem>
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
          label: '抽查时间：',
          value: 222,
        },
        {
          label: '检查结果：',
          value: 222,
        },
          {
          label: '量化等级：',
          value: 222,
        },
          {
          label: '截止时间：',
          value: 222,
        },
      ],
    };
  },
};
</script>

<style lang='stylus' scoped></style>

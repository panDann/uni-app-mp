<template>
  <view class="content">
    <ListItem :hasArrow="false">
      <view slot="left">
        <custom-radio :checked="remeber" @toggle="toggleRemeber" />
        <text class="font32 padding-dot-5rem weight600">请预约虫害公司</text>
      </view>
    </ListItem>
    <ListItem :hasArrow="false">
      <view slot="left">
        <custom-radio :checked="remeber" @toggle="toggleRemeber" />
        <text class="font32 padding-dot-5rem weight600">请安排设备检查</text>
      </view>
    </ListItem>
    <ListItem :hasArrow="false" :border="false">
      <view slot="left">
        <custom-radio :checked="remeber" @toggle="toggleRemeber" />
        <text class="font32 padding-dot-5rem weight600">其他</text>
      </view>
    </ListItem>
    <textarea class="primary-textarea white-bg" placeholder="请输入"></textarea>
    <picker mode="date">
      <ListItem :border="false">
        <text class="font32" slot="left">截止时间</text>
        <text class="font32 color-999" slot="right">请选择</text>
      </ListItem>
    </picker>
    <button class="primary-bg white primary-margin">提交</button>
    <button class="primary-margin">继续添加</button>
  </view>
</template>

<script>
import ListItem from '@src/components/list-item/index.vue';
import CustomRadio from '@/components/custom-radio/index';

export default {
  components: {
    ListItem,
    CustomRadio,
  },
  data() {
    return {
      search: 'Hello',
      currentTab: 'first',
      list: [
        {
          label: '未完成',
          key: 'first',
          count: 22,
        },
        {
          label: '已完成',
          key: 'second',
          count: 22,
        },
        {
          label: '已逾期',
          key: 'three',
          count: 22,
        },
      ],
      list: [
        {
          name: '3333',
          position: '1111',
          time: '2010',
          status: 1,
        },
        {
          name: '3333',
          position: '1111',
          time: '2010',
          status: 1,
        },
        {
          name: '3333',
          position: '1111',
          time: '2010',
          status: 1,
        },
      ],
    };
  },
  onLoad() {},
  methods: {
    navigationTo() {
      console.log(111);

      let url = Path.canteenDetailPath;
      uni.navigateTo({ url });
    },
    onChange() {},
  },
};
</script>

<style lang='stylus' scoped>
.bg-white {
  background: #ffffff;
}

.flex2 {
  flex: 2;
}

.select {
  width: 20%;
  text-align: center;
  font-size: 26upx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 37upx;
}
</style>

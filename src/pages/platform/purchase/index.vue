<template>
  <view>
    <DatePicker />
  
    <BoxShadow v-for="item in list" :key="item.name">
      <view class="flex-row justify-between" @click="detailPurchase()">
        <view class="flex5">
          <text class="font32">品种：{{item.name}}</text>
          <view class="time font24 margintb10">登记人员：{{item.record}}&nbsp; 采购人员：{{item.purchaseMan}} </view>
          <view class="time font24 margintb10">采购时间：{{item.time}}</view>
        </view>
          <view class="iconfont font32 color-666 iconarrow-right" />
      </view>
    </BoxShadow>
    <button class="white primary-bg primary-margin " @click="addPurchase()" >
      <text class=" iconfont iconxinzeng font32  color-999"/>新增采购
    </button>
  </view>
</template>

<script>
import DatePicker from '@src/components/date-picker/index.vue';
import BoxShadow from '@src/components/box-shadow/index.vue';

export default {
  components: {
    DatePicker,
    BoxShadow,
  },
  data() {
    return {
      title: 'Hello',
      list: [
        {
          name: '1111',
          time: '2019-09-09',
          record: '张三',
          purchaseMan: '张三',
		},
		{
          name: '1111',
          time: '2019-09-09',
          record: '张三',
          purchaseMan: '张三',
		},
		{
          name: '1111',
          time: '2019-09-09',
          record: '张三',
          purchaseMan: '张三',
        },
      ],
    };
  },
  onLoad() {},
  methods: {
	  detailPurchase(){
	  		  uni.navigateTo({
	            url: '/pages/platform/purchase-detail/index'
	        })
	  },
	  addPurchase(){
	  		  uni.navigateTo({
	  		        url: '/pages/platform/purchase-add/index'
	  		    })
	  },
  },
};
</script>

<style lang='stylus' scoped>
.error-min-btn {
  background: #FFE5DD;
}

color #FD6737 {
  border: solid 2upx $error;
}

.time {
  color: #999;
}
</style>

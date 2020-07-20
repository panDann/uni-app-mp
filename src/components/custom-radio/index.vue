<template>
    <view class="radio-con" :style="{'color': color}" @click="$emit('toggle')">
        <icon class="iconfont iconweixuanzhong" v-show="!checked"></icon>
        <icon  class="iconfont checked iconxuanzhong" v-show="checked"></icon>
    </view>
</template>

<script>
export default {
    props: {
        checked: {
            type: Boolean,
            default: false
        },
        
        color: {
            type: String,
            default: '#C3C3C3'
        },

        checkedColor: {
            type: String,
            default: '#8991E1'
        }
    }
}
</script>

<style lang='stylus' scoped>
    .radio-con {
        margin: 0 4rpx 0 0;
        display: inline-block;
    }
    .radio-con > .iconfont {
        font-size: 32rpx;
        vertical-align: -2px;
    }
    .checked {
        color $primaryColor
    }

</style>
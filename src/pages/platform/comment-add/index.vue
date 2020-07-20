<template>
    <view>
        <view class="comment-val">
            <textarea :value="inp" placeholder-style="color:#999" placeholder="请填写您要点评的内容……"/>
        </view>
        <view class="pic-con">
            <view class="title">
                <text class="title-bold">图片上传</text>
                <text>最多可以上传9张图片</text>
            </view>
            <image-picker :urls="imgs" :hasAdd="hasAdd" @change="imgLengthChange"/>
        </view>
        <button class="btn">发表评论</button>
    </view>
</template>

<script>
import ImagePicker from '@/components/image-picker/index.vue';
export default {
    components: {
        ImagePicker
    },

    data() {
        return {
            imgs: [],
            hasAdd: true
        }
    },

    methods: {
        imgLengthChange(imgs) {
            this.imgs = imgs
        }
    }
}
</script>

<style scoped lang="stylus">
// @import '@/style/variables.styl'
.comment-val
    padding: 24rpx
    box-sizing: border-box
    height: 300rpx
    background: rgba(255,255,255,1)
    textarea
        width: 100%
        height: 100%
        font-size: 28rpx
.pic-con
    margin: 16rpx 0 44rpx 0
    padding: 30rpx 34rpx 46rpx 34rpx
    font-size: 24rpx
    font-weight: 400
    color: #999
    background: #fff
    .title
        margin: 0 0 22rpx 0
        .title-bold
            margin: 0 24rpx 0 0
            font-size: 28rpx
            color: #000
.btn
    margin: 0 auto
    box-sizing: border-box
    width: calc(100% - 80rpx)
    font-size: 36rpx
    font-weight: 400
    color: #fff
    background: $primaryColor
</style>
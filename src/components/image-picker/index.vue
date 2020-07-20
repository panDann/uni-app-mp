
<template>
    <view class='con'>
        <!-- <view class='label'>
        {{label}}
         </view> -->
         <view class="add" v-show="hasAdd"  @click="toggleSelect"/>
             <view class="img-con" v-for="item in imgs" :key="item">
               <image class="img" :src='item'  />
                 <view   class="iconfont icon iconGroup-" @click="deleteItem(item)" ></view>
             </view>
    </view>
</template>

<script>
	export default {
        props:{
            hasAdd:{
                type:Boolean,
                default:true
            },
            label:{
                type:String,
                required:true,
                default:'图片'
            },
             urls:{
                type:Array,
                default:()=>[]
            },
        },
        data() {
            return{
                imgs:this.urls||[]
            }
        },
        methods:{
            async toggleSelect(){
               let [n,{tempFilePaths=[]}] = await uni.chooseImage()
               this.imgs.push(...tempFilePaths)
               this.$emit('change',this.imgs)
            },
            deleteItem(item){
               this.imgs.splice(this.imgs.findIndex(el=>el==item),1)
               this.$emit('change',this.imgs)
            }
        }
	}
</script>

<style lang='stylus' scoped>
@import './index.styl'
    
</style>

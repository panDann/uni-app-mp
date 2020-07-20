
<template>

   <picker mode="date" v-model="date" @change="onDate">
       <view class='con'>
        <text class="holder">holder</text> 
        <view>{{date}} <text class="iconfont icon iconrili" /></view> 
        <view @click.stop="backTo">{{dateLabel}}</view> 
</view>

    </picker>
  
</template>

<script>
import {formatDate} from '@src/utils/tool'
	export default {
        props:{
            backType:{
                type:String,
                default:'today'
            }
        },
        computed:{
            dateLabel(){
                switch(this.backType) {
                    case 'today':
                        return '回到当日'
                    case 'month':
                        return '回到当月'
                    default :
                        return ''
                }
            }
        },
        data(){
            return{
                date: this.formateValue(formatDate())  
            }
        },
        created(){

        },
        methods:{
            backTo(){
                this.date =  this.formateValue(formatDate())  
                this.$emit('change',this.date)
            },
            onDate({detail:{value}}){
                this.date = this.formateValue(value) 
                this.$emit('change',this.date)
            },
            formateValue(value) {
              return  this.backType == 'month'?value.replace(/-\d\d$/,''):value
            }
        }
        
	}
</script>

<style lang='stylus' scoped>
.con
  display flex
  flex-flow row nowrap
  justify-content space-between
  padding $primaryPadding
  background #fff
  font-size:32upx;
  font-weight:400;
  color:#353535;
  line-height:45upx;
  .icon
      padding 0 .5rem
  .holder
      visibility hidden
</style>

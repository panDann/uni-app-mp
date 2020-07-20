
<template>
    <view class=''>
       <canvas type='2d' canvas-id='canvas' style="background:#ccc" :height="size" :width="size" @error="canvasIdErrorCallback" />
    </view>
</template>

<script>
	export default {
        props:{
            canvasId:{
                type:String,
                required:true,
                default:''
            },
            size:{
                type:String,
                default:'100rpx'
            },
            data:{
                type:Object,
                required:true,
                default:()=>({
                    name:'name',
                    percentage:0,
                    color:'#409efff'
                })
            }
        },
        onReady(){
            
             let context =  uni.createCanvasContext('canvas',this)
            console.log(111,context,this.data);

             context.setStrokeStyle("#00ff00")
    context.setLineWidth(5)
    context.rect(0, 0, 200, 200)
    context.stroke()
    context.setStrokeStyle("#ff0000")
    context.setLineWidth(2)
    context.moveTo(160, 100)
    context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    context.moveTo(140, 100)
    context.arc(100, 100, 40, 0, Math.PI, false)
    context.moveTo(85, 80)
    context.arc(80, 80, 5, 0, 2 * Math.PI, true)
    context.moveTo(125, 80)
    context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    context.stroke()
    context.draw()
        },
        methods:{
           canvasIdErrorCallback: function (e) {
            console.error(e.detail.errMsg)
        }
        },
	}
</script>

<style lang='stylus' scoped>
@import './index.styl'
    
</style>

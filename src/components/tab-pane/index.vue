
<template>
    <view v-show="active">
        <slot />
    </view>
</template>

<script>
	export default {
        props:{
            name:{
                type:String,
                required:true,
                default:''
            }
        },
        computed:{
            active(){
             return  this.$parent.currentName == this.name
            }
        },
	}
</script>

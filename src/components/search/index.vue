

<template>
<View class='con'>
       <input type="search" 
        :placeholder="placeholder"
        placeholder-class='iconfont iconsousuo holder'
        class="search" v-model="curentVal" @confirm="$emit('confirm',curentVal)"  @input="toggleChange(curentVal)" />
</View>
</template>

<script>
	export default {
        props:{
            value:{
                type:String,
                required:true,
                default:''
            },
            placeholder:{
                type:String,
                default:'搜索'
            },
        },
        model:{
            prop:'value',
            event:'input'
        },
        data() {
            return {
                curentVal:this.value
            }
        },
   
        methods:{
            toggleChange(val){
                this.$emit('input',val)
                this.$emit('change',val)
            }
        }
	}
</script>

<style lang='stylus' scoped>
@import './index.styl'
    
</style>

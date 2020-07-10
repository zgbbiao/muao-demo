<template>
	<div class="input-select u-clearfix">
		<el-input
				v-bind="bind"
				  class="input-select-input"
				  v-model="defaultValue"
				  @change="handleChange"
				  ></el-input>
		<el-select
				   :value="defaultValue"
					 style="width: 100%;"
				  class="input-select-select"
				  @change="handleChange"
				   placeholder="item.desc">
		  <el-option v-for="(selectItem, selectIndex) in list"
					 :key="selectIndex"
					 :label="selectItem.label"
					 :value="selectItem.value"></el-option>
					 </el-select>
					 <span v-if="type === 'color'" @click="openColor" class="select-color-btn" :style="{
						 'background-color': `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
					 }"></span>
        <t-color-picker v-if="type === 'color'" ref="colorPicker" :color="color" @confirm="confirmColor"></t-color-picker>
					 
	</div>
</template>

<script>
	import tColorPicker from '@/components/t-color-picker/t-color-picker.vue'
	export default {
		props: {
			bind: {
				type: Object,
				default: () => {}
			},
			value: {
				default: ''
			},
			list: {
				type: Array,
				default: () => []
			},
			type: {
				default: ''
			}
		},
		components: {
			tColorPicker
		},
		watch: {
			value(value) {
				if (typeof value === 'boolean') {
					this.defaultValue = value
				}
			}
		},
		data() {
			return {
				defaultValue: '',
				color: {r: 255,g: 0,b: 0,a: 0.6}
			}
		},
		created() {
			if (typeof this.value === 'boolean') {
				this.defaultValue = this.value + ''
			} else {
				this.defaultValue = this.value
			}
		},
		methods:{
			handleChange(value) {
				console.log(value)
				this.$emit('input', value)
			},
            openColor(item) {
                // 打开颜色选择器
                this.$refs.colorPicker.open();
            },
            confirmColor(e) {
                console.log('颜色选择器返回值：'+ e, e)
				this.color = e.rgba
				this.defaultValue = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.color.a})`
				this.$emit('input', this.defaultValue)
            }
		}
	}
</script>

<style lang="scss">
	.input-select{
		position: relative;
	}
	.input-select-input{
		position: absolute;
		z-index: 2;
		left: 0;
		width: calc(100% - 40px);
	}
	.input-select-select{
		position: absolute;
		top: 0;
		left: 0;
	}
	.select-color-btn{
		width: 14%;
		display: inline-block;
		height: 80rpx;
		float: right;
		z-index: 3;
		position: relative;
	}
</style>

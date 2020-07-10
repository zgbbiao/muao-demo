<!--
 * @Author: your name
 * @Date: 2020-04-22 17:51:00
 * @LastEditTime: 2020-04-26 01:34:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dragUI-master\src\components\RightComponents\props\form.vue
 -->
 <template>
  <el-form ref="form"
           label-width="0"
           :key="formKey"
           label-position="left">
    <div v-for="(item, index) in selfForm"
         :key="index">
      <div class="prop-item-title">{{item.desc}}</div>
      <div class="prop-item-title">{{item.name}}</div>
      <el-form-item>
        <commonInputSelect :bind="item" v-model="item.default" :list="item.selects" :type="item.name === 'color' ? 'color' : '' "></commonInputSelect>
		<!-- <el-input v-model="item.default" type="hidden"></el-input> -->
      </el-form-item>
    </div>
    <div class="form-filex-footer">
      <div class="empty-box"></div>
	  <div class="filex-footer">
		  <el-form-item>
		    <el-button @click="onReset">重置</el-button>
		    <el-button type="primary"
		               @click="onSubmit">立即保存</el-button>
		  </el-form-item>
	  </div>
    </div>
  </el-form>
</template>
<script>
	import commonInputSelect from '@/src/components/common/input-select/_base.vue'
export default {
  props: {
    fromList: {
      type: Array,
      default: () => {
        return []
      }
    },
  },
  components:{
	  commonInputSelect
  },
  data () {
    return {
      selfForm: {},
      formKey: '343'
    }
  },
  watch: {
    fromList (value) {
      this.formKey = Math.random() * 100000
      this.selfForm = JSON.parse(JSON.stringify(value))
    },
    selfForm: {
      // handled
      handler: function (val, oldVal) {
        console.log('new: %s, old: %s', val, oldVal)
        // this.onSubmit()
      },
      deep: true
    }
  },
  created () {
    this.selfForm = this.fromList
  },
  methods: {
    onSubmit () {
      console.log('submit!');
      this.$emit("submit", this.selfForm)
    },
    onReset () {
      this.selfForm = this.fromList
    },
    handleChange () { }
  }
}
</script>
<style lang="scss">
.prop-item-title {
  align-items: left;
  padding-bottom: 10px;
  text-align: left;
  &::before {
    content: "";
    display: inline-block;
    width: 4px;
    height: 12px;
    background: blue;
    margin-right: 10px;
    vertical-align: middle;
  }
}
.form-filex-footer{
	.empty-box{
		height: 120px;
	}
	.filex-footer{
		position: fixed;
		bottom: 0;
		right: 0;
		width: 25%;
		box-shadow: 0px 9px 12px 6px #ccc;
		    background-color: white;
			padding: 15px 0;
	}
}
</style>
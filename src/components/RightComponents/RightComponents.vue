<!--
 * @Author: your name
 * @Date: 2020-04-09 18:37:11
 * @LastEditTime: 2020-05-09 18:26:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dragUI-master\components\RightComponents\RightComponents.vue
 -->
<template>
  <el-row>
    <el-col :span="22"
            :offset="1"
            style="">
      <el-tabs type="card"
               v-model="activeTabsKey"
               @tab-click="handleClick">
        <el-tab-pane label="props"
                     name="five">
          <!-- {{uviewuiAction}} -->
          <!-- {{curTag}} -->
		  <div class="panple-concation">
			  <formComponent :fromList="curTagAction.props || []"
			                 :key="propsManrom"
			                 @submit="handlePropsFormSubmit"></formComponent>
		  </div>
        </el-tab-pane>
        <el-tab-pane label="style"
                     name="style">
			  <formStyleComponent :fromList="curTagActionStyle.styles || []"
			                 :key="propsManrom"
			                 @submit="handleStyleFormSubmit"></formStyleComponent>
        </el-tab-pane>
        <el-tab-pane label="自定属性"
                     name="second">
        </el-tab-pane>
        <el-tab-pane label="制定类"
                     name="three">
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import formComponent from './props/form.vue'
import formStyleComponent from './style/form.vue'
import { mergeProps, mergeStyles } from '@/src/controlModel/rightComponents/rightComponents.js'
import controlPanelTypes from '@/store/modules/controlPanel/mutation-type.js'
export default {
  name: 'RightComponents',
  data () {
    return {
      editItemClass: '',
      activeTabsKey: 'five',
      propsManrom: '222'
    }
  },
  watch: {
  },
  methods: {
    ...mapMutations('controlPanel', {
      setCurTagProps: controlPanelTypes.SET_CUR_TAG_PROPS,
      setPhoneList: controlPanelTypes.SET_PHONE_LIST,
      setCurTag: controlPanelTypes.SET_CUR_TAG,
    }),
    handleClick () {

    },
    handlePropsFormSubmit (value) {
      console.log(value, this.curTag)
      const values = mergeProps([...value], { ...this.curTag.props })
      // this.replaceArrItem()
      console.log(values)
      this.setCurTagProps({
        ...this.curTag,
        props: values
      })
      this.setCurTag({
        ...this.curTag,
        props: values
      })
      // this.setPhoneList(JSON.parse(JSON.stringify(this.phoneList)))
    },
	handleStyleFormSubmit(value) {
		console.log(value, this.curTag)
      console.log(value, this.curTag)
      const values = mergeStyles([...value], { ...this.curTag.style })
      // this.replaceArrItem()
      console.log(values)
      this.setCurTagProps({
        ...this.curTag,
        style: values
      })
      this.setCurTag({
        ...this.curTag,
        style: values
      })
	}
  },
  computed: {
    ...mapState('controlPanel', ['curTag', 'uviewuiAction', 'phoneList', 'stylePublic']),
    ...mapGetters('controlPanel', ['getCurTagAction', 'getCurTagActionStyle']),
    curTagAction () {
      this.propsManrom = Math.random() * 100000
      console.log(this.propsManrom)
      console.log(this.getCurTagAction)
      return this.getCurTagAction
    },
	curTagActionStyle() {
		return this.getCurTagActionStyle
	}
  },
  components: {
    formComponent,
	formStyleComponent
  }
}
</script>

<style scoped lang="scss">
.text {
  font-size: 14px;
}

.attrLine {
  display: flex;
}

.el-form-item {
  margin-bottom: 5px;
}
.panple-concation{
    height: calc(100vh - 237px);
    overflow: hidden;
    overflow-y: auto;
}
</style>

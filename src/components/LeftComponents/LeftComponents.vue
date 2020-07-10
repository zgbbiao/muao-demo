<!--
 * @Author: your name
 * @Date: 2020-04-09 18:37:11
 * @LastEditTime: 2020-04-25 02:52:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dragUI-master\components\LeftComponents\LeftComponents.vue
 -->
<template>
  <el-row>
    <el-col :span="24">
      <el-collapse :value="['1', '2']">
        <el-collapse-item name="1">
          <template slot="title">
            <view style="width: 100%; text-align: center;">
              布局组件
            </view>
          </template>
          <left-compoents-by-layouts :layout="layout"
                                     :clone="cloneLayout"
                                     :choose="choosLayouts"></left-compoents-by-layouts>
        </el-collapse-item>
      </el-collapse>
    </el-col>
  </el-row>
</template>

<script>
import { mapState } from 'vuex'
import LeftCompoentsByLayouts from './LeftCompoentsByLayouts';
import dataJSON from '@/src/data/index.js';
import { deepAddId } from '@/src/tools/index.js'
console.log(dataJSON);
export default {
  name: 'LeftComponents',
  data () {
    return {};
  },
  methods: {
    choosLayouts () {
      console.log('let-choosLayouts');
      this.$store.commit('setIflexGroup', { iflexGroup: 'layouts' });
    },
    cloneLayout (cloneObj) {
      // let newObj = {...cloneObj}
      // layoutGlobalId++
      // newObj.id = layoutGlobalId
      // let nullNum = []
      // for (let i = 0; i < newObj.num.length; i++) {
      //     let {layoutClass,} = newObj.num[i]
      //     nullNum.push({itemList:[],layoutClass,iStyle:{},iClass:[]})
      // }
      // newObj.iStyle = {}
      // newObj.iClass = []
      // newObj.num = nullNum
      console.log(cloneObj);
      console.log('let-cloneObj');
      return cloneObj;
    },
  },
  computed: {
    ...mapState(['uiChildrenName']),
    layout () {
      const arr = deepAddId(dataJSON.ui.layout || [], this.uiChildrenName)
      console.log(arr)
      return arr
    },
  },
  components: {
    LeftCompoentsByLayouts,
  },
};
</script>

<style></style>

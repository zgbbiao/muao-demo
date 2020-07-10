<!--
 * @Author: your name
 * @Date: 2020-04-15 17:49:30
 * @LastEditTime: 2020-05-09 14:01:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dragUI-master\src\components\LeftComponents\LeftCompoentsByLayouts.vue
 -->
<template>
  <div>
    <CommonComponentContainer :myList="myList"
                              :other="draggableOther" />
  </div>
</template>

<script>
import CommonComponentContainer from '@/src/components/common/componentContainer/base.js';
import expand from '@/src/components/common/expand.js';
import draggable from '@/src/common/js/vuedraggable';
import basicsMixin from '@/src/common/js/importBase.js';
export default {
  name: 'LeftCompoentsByLayouts',
  mixins: [basicsMixin],
  props: {
    clone: {
      type: Function,
      default: null,
    },
    layout: {
      type: Array,
      default: () => [],
    },
    choose: {
      type: Function,
      default: null,
    },
  },
  data () {
    return {
      draggableOther: {
        // clone: () => {},
        // group: { name: 'layouts', pull: 'clone', put: false },
        options: {
          animation: 0,
          group: {
            name: 'description',
            pull: 'clone',
            put: false,
          },
        },
      },
    };
  },
  computed: {
    myList: {
      get () {
        return this.layout;
      },
      set (value) {
        console.log('set-value', value);
        // this.$store.commit('updateList', value);
      },
    },
  },
  methods: {},
  components: {
    draggable,
    CommonComponentContainer,
    expand,
  },
};
</script>

<style scoped>
.content-layout-item {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2px;
  background-color: #675e6f;
  color: white;
}
</style>

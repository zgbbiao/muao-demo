<template>
  <view class="phone-s">
    <view class="phone"
          ref="contextMenuTarget">
      <view class="phone-top">
        <view style="flex: 1;"><i class="el-icon-more"></i>&nbsp;无服务</view>
        <view style="flex: 1; text-align: center;">{{ time }}</view>
        <view style="flex: 1; text-align: right;"><i class="el-icon-chat-round"></i></view>
      </view>
      <view class="phone-top-blok"
            :class="{
        'phone-candraggable': !preview
      }">
        <CommonComponentContainer :myList="list2"
                                  :other="draggableOther"
                                  :selectTagCallback="selectTagCallback"
                                  :draggableListeners="draggableListeners"
                                  @input="handleDragInput" />
        <!-- <demo></demo> -->
        <!-- <draggable
          group="layouts"
          :list="list"
          :options="{}"
          @change="draggableChange"
          style="position: absolute; top: 25px; bottom: 0; left: 0; right: 0;"
          handle=".flex-draggalbe-handle"
        >
          sdfsdf
          <!-- <template v-for="(item, index) in list">
            <component
              :key="index"
              :is="item.componentName"
              :dataIIndex="index + ''"
              v-bind="item"
            ></component>
          </template> -->
        <!-- </draggable> -->
      </view>
    </view>
  </view>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import draggable from '@/src/common/js/vuedraggable';
import CommonComponentContainer from '@/src/components/common/componentContainer/base.js';
import dataJSON from '@/src/data/index.js';
import basicsMixin from '@/src/common/js/importBase.js';
import controlPanelTypes from '@/store/modules/controlPanel/mutation-type.js'
import { getUid, clearHistoryUid, getHistoryUid, getHistoryUidValue } from '@/src/tools/index.js'
import { deepAddComponentAdd, deepAddComponentRemo, deepUpdateUid } from '@/src/controlModel/phoneFrame/phoneFrame.js'
import demo from './demo';
export default {
  name: 'PhoneFrame',
  mixins: [basicsMixin],
  props: {},
  watch: {},
  data () {
    return {
      time: '',
      // list2: dataJSON.ui.layout || [],
      // list2: [],
      draggableOther: {
        options: {
          animation: 0,
          group: {
            name: 'description',
            // pull: 'clone',
            pull: true,
            put: true,
          },
          chosenClass: 'sortable-chosen',
          // sort: false,
          // disabled: true,
          ghostClass: 'ghost',
        },
        clone: (args) => {
          console.log('clone', args);
          return args;
        },
        move: ({ relatedContext, draggedContext }) => {
          console.log(arguments);
          console.log(relatedContext);
          console.log(draggedContext);
          const relatedElement = relatedContext.element;
          const draggedElement = draggedContext.element;
          // return false;
          return (
            (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
          );
        },
      },
    };
  },
  computed: {
    ...mapState(['preview', 'uiChildrenName']),
    ...mapState('controlPanel', ['phoneList']),
    list2: {
      get () {
        return this.phoneList;
      },
      set (value) {
        console.log('phone-set-value', value);
        // this.list2 = value;
      },
    },
    draggableListeners () {
      const self = this
      return {
        change (evt) {
          if (evt.added && evt.added.element) {
            // setTimeout(() => {

            clearHistoryUid()
            const list2 = deepUpdateUid(JSON.parse(JSON.stringify(self.list2)), evt.added.element, self.uiChildrenName)
            // console.log(self.list2)
            console.log(list2)
            self.setPhoneList(list2)
            const historyTags = getHistoryUid()
            console.log('historyTags', historyTags)
            if (historyTags.length && getHistoryUidValue(historyTags[0])) {
              self.setCurTag(getHistoryUidValue(historyTags[0]))
            }
            self.$store.commit('setPreview', {
              preview: false
            })
            // }, 500)
          }
        }
      }
    }
    // list: {
    //   get() {
    //     console.log(this.$store.state.pattern);
    //     switch (this.$store.state.pattern) {
    //       // case 'page':
    //       //     return this.$store.state.project.checkFile.dragList
    //       case 'component':
    //         // return this.$store.state.patternComponents.list
    //         // return this.$store.state.patternComponents.list
    //         return [];
    //     }
    //   },
    //   set(value) {
    //     console.log('phone-set-value', value);
    //     switch (this.$store.state.pattern) {
    //       case 'page':
    //         this.$store.commit('setCheckFileDragList', value);
    //         break;
    //       case 'component':
    //         this.$store.commit('setPatternComponentslList', value);
    //         break;
    //     }
    //   },
    // },
  },
  watch: {
    preview (value) {
      console.log(value)
      if (!value) {
        // this.list2 = this.deepAddComponentRemo([...this.list2])
        // this.setPhoneList(deepAddComponentRemo([...this.list2], this.uiChildrenName))
        // setTimeout(() => {
        //   this.setPhoneList(deepAddComponentAdd([...this.list2], true, this.uiChildrenName))
        // })
        // this.list2 = this.deepAddComponentAdd([...this.list2])
      } else {
        // this.list2 = this.deepAddComponentRemo([...this.list2])
        // this.setPhoneList(deepAddComponentRemo([...this.list2], this.uiChildrenName))
      }
    }
  },
  mounted () { },
  created () {
    if (this.preview) {
      // this.list2 = this.deepAddComponentAdd([...this.list2])
      // this.setPhoneList(deepAddComponentAdd([...this.list2], true, this.uiChildrenName))
    }
  },
  components: {
    draggable,
    CommonComponentContainer,
    demo,
  },
  methods: {
    ...mapMutations('controlPanel', {
      setCurTag: controlPanelTypes.SET_CUR_TAG,
      setPhoneList: controlPanelTypes.SET_PHONE_LIST
    }),
    /**
     * 会和另一个重复执行2遍，TODO 暂时没想到什么好的解决方法
     * @param e
     */
    draggableChange (e) {
      console.log('draggableChange');
      this.$store.dispatch('cachesFolder');
    },
    handleDragInput (e) {
      console.log(e);
      // const arr = this.deepAddComponentAdd(e)
      console.log(e)
      // this.list2 = this.deepAddComponentAdd([...e], false);
      // this.list2 = e
      this.setPhoneList(e)
    },
    selectTagCallback (item) {
      console.log(item)
      this.setCurTag(item)
    }
  },
};
</script>

<style lang="scss">
$phoneWidth: 375px;
$phoneHeight: 667px;
$rote: 0.2;

$windowsWidth: $phoneWidth / 0.2;

$onePx: $windowsWidth / 750 * 0.2;

.phone-s {
  width: $phoneWidth;
  height: $phoneHeight;
  position: relative;
  margin-left: auto;
  margin-right: auto;
}

.phone {
  width: $phoneWidth;
  height: $phoneHeight;
  background-color: white;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  overflow: scroll;
}

.sortable-fallback {
  display: none;
}

.phone-top {
  height: 25px;
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #aeb1b7;
  justify-content: space-between;
  padding: 0 10px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  font-size: 12px;

  i {
    color: rgb(174, 177, 183);
    font-weight: 600;
  }
}
.phone-top-blok {
  margin-top: 25px;
  width: 100%;
  min-height: 100%;
}

a {
  color: #333;
}
.right-menu {
  position: fixed;
  background: #fff;
  border: solid 1px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  z-index: 999999;
  display: none;
}
.right-menu a {
  width: 100px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  display: block;
  padding: 0 10px;
  color: #1a1a1a;
}
.right-menu a:hover {
  background: #eee;
  color: #fff;
}
.right-menu {
  border: 1px solid #eee;
  box-shadow: 0 0.5em 1em 0 rgba(0, 0, 0, 0.1);
  border-radius: 1px;
  flex-direction: column;
}
a {
  text-decoration: none;
}
.right-menu a {
  padding: 2px;
}
.right-menu a:hover {
  background: #42b983;
}
path {
  fill: black;
}

.tip-content-show {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 375px;
  box-shadow: 0 0.5em 1em 0 rgba(0, 0, 0, 0.1);
  z-index: 9999;
  background-color: white;
  border: rgba(169, 169, 173, 0.96) solid 2px;
}
.tip-content-show-content {
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>

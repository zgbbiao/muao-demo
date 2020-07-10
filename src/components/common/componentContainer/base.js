/*
 * @Author: your name
 * @Date: 2020-04-21 09:35:27
 * @LastEditTime: 2020-06-23 14:35:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dragUI-master\src\components\common\componentContainer\base.js
 */
import expand from '@/src/components/common/expand.js';
// import draggable from '@/src/common/js/vuedraggable';
import draggable from 'vuedraggable';
const children = 'children';
const outtime = 1000;
let isSend = true;
const addDiv = {
  name: 'div',
  style: {
    color: 'red',
    fontSize: '14px',
    display: 'block',
    padding: '10px',
    border: '1px solid red',
  },
  class: {
    addcomponent: true,
  },
  // attr: {
  // isAdd: true
  // },
  // DOM 属性
  domProps: {
    // innerHTML: 'blue-view-dev2',
  },
};
export default {
  name: 'expand2',
  functional: true,
  components: { draggable, expand },
  props: {
    myList: {
      type: [Array],
      default: () => {
        return () => {};
      },
    },
    other: {
      type: Object,
      default: () => {
        return {};
      },
    },
    selectTagCallback: {
      type: Function,
      default: () => {},
    },
    draggableListeners: {
      type: Object,
      default: () => {
        return {
          end: function() {},
          add: function() {},
          update: function() {},
          remove: function() {},
          move: function() {},
          clone: function() {},
          change: function() {},
        }
      }
    }
  },
  render: (h, ctx) => {
    const uiChildrenName = ctx.parent.$store.state.uiChildrenName;
    const preview = ctx.parent.$store.state.preview
    const self = this;
    const myList = ctx.props.myList || [];
    const other = ctx.props.other;
    const draggableListeners = ctx.props.draggableListeners
    const handleInput =
      (ctx.listeners && ctx.listeners.input) || function () {};
    function getexpand(item, callback) {
      let children = [];
      if (item[uiChildrenName] && Array.isArray(item[uiChildrenName])) {
        children = item[uiChildrenName];
      }
	  let selectOn = {
				  "click":function (event) {
				    console.log('expand--click')
				    console.log(item)
				    ctx.props.selectTagCallback(item);
				  }
        }
        let emptyDomChildren = []
        if (preview) {
          selectOn = {}
        } else {
          emptyDomChildren = h(
            addDiv.name,
            {
              ...addDiv,
              on: selectOn
            }
          )
        }
        console.log(item)
      return h(
        'expand',
        {
          props: {
            options: {
              ...item,
              on: Object.assign((item.on || {}),  selectOn)
            },
          },
        },
        [
          emptyDomChildren,
          getChildrenTextContent(children, (arr) => {
            // 接受到子层的更改， 并传递给父层
            callback &&
              callback({
                ...item,
                [uiChildrenName]: arr,
              });
          }),
        ]
      );
    }
    function getChildrenTextContent(myList, callback) {
      if (!Array.isArray(myList)) {
        console.log('没有' + uiChildrenName);
        return [];
      }
      const myListCopy = [...myList];
      let children = myList.map((item, index) => {
        return getexpand(item, (resItem) => {
          // 接受到子层的修改， 并传递给父层
          myListCopy[index] = resItem;
          console.log('子集修改了，我监听到了', resItem);
          callback && callback(myListCopy);
        });
      });
      // // 子层全部修改完成候， 传递新的值给父层
      // callback && callback(myListCopy);
      console.log(preview)
      if (preview) {
        return h(
          'span',
          {
            style: {
              display: 'inherit',
				width: '100%'
            },
            class: {
              'candraggable': true
            }
          },
          [...children]
        )
      }
      return h(
        'draggable',
        {
          props: {
            value: myList,
            ...other,
          },
          style: {
            display: 'inherit',
			width: '100%'
          },
          class: {
            candraggable: true,
          },
          on: {
            input: (e, ...args) => {
              // console.log(this);
              // myList = e;
              // self.$emit('input', e);
              // 获取最新移动的值，并传递给到上一层
              console.log('列表被动了，我监听到了', e, args);
              if (isSend) {
                callback && callback(e);
                isSend = false;
                // 因为会报错： Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.， 所以我强制用先修改的内容替代错误后的信息。
                setTimeout(() => {
                  isSend = true;
                }, outtime);
              }
            },
            end: (evt) => {
              console.log('end');
              console.log(evt);
              draggableListeners.end && draggableListeners.end(evt)
            },
            add: (evt) => {
              console.log('add');
              console.log(evt);
              draggableListeners.add && draggableListeners.add(evt)
            },
            update: (evt) => {
              console.log('update');
              console.log(evt);
              draggableListeners.update && draggableListeners.update(evt)
            },
            remove: (evt) => {
              console.log('remove');
              console.log(evt);
              draggableListeners.remove && draggableListeners.remove(evt)
            },
            move: (evt) => {
              console.log('move');
              console.log(evt);
              draggableListeners.move && draggableListeners.move(evt)
            },
            clone: (evt) => {
              console.log('clone');
              console.log(evt);
              draggableListeners.clone && draggableListeners.clone(evt)
            },
            change: function (evt) {
              console.log('change');
              console.log(evt)
              draggableListeners.change && draggableListeners.change(evt)
            },
            filter: function (evt) {
              console.log('filter');
              console.log(evt)
              draggableListeners.change && draggableListeners.filter(evt)
            },
          },
        },
        [...children]
      );
    }
    return getChildrenTextContent(myList, (arr) => {
      // setTimeout(() => {
      console.log('最终修改了，我监听到了', arr);
      handleInput && handleInput(arr);
      // }, 500);
    });
  },
  updated: function () {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been re-rendered
    });
  },
};

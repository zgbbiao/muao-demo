/*
 * @Author: your name
 * @Date: 2020-04-15 17:06:52
 * @LastEditTime: 2020-05-09 18:19:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dragUI-master\src\data\uijson\uviewui.js
 */
export default {
  layout: [
    // {
    //   name: 'div',
    //   componentName: 'div',
    //   // 与 `v-bind:class` 的 API 相同，
    //   // 接受一个字符串、对象或字符串和对象组成的数组
    //   class: {
    //     foo: true,
    //     bar: false,
    //   },
    //   // 与 `v-bind:style` 的 API 相同，
    //   // 接受一个字符串、对象，或对象组成的数组
    //   style: {
    //     color: 'red',
    //     fontSize: '14px',
    //     display: 'block',
    //   },
    //   // 普通的 HTML attribute
    //   // attrs: {
    //   //   id: 'foo',
    //   // },
    //   // 组件 prop
    //   props: {
    //     myProp: 'bar',
    //   },
    //   // DOM 属性
    //   domProps: {
    //     // innerHTML: 'baz',
    //     innerText: 'innerText',
    //   },
    //   // 事件监听器在 `on` 属性内，
    //   // 但不再支持如 `v-on:keyup.enter` 这样的修饰器。
    //   // 需要在处理函数中手动检查 keyCode。
    //   on: {
    //     // click: this.clickHandler
    //   },
    //   // 仅用于组件，用于监听原生事件，而不是组件内部使用
    //   // `vm.$emit` 触发的事件。
    //   // nativeOn: {
    //   // click: this.nativeClickHandler
    //   // },
    //   // 自定义指令。注意，你无法对 `binding` 中的 `oldValue`
    //   // 赋值，因为 Vue 已经自动为你进行了同步。
    //   // directives: [
    //   //   {
    //   //     name: 'v-title',
    //   //     value: '2',
    //   //     expression: '1 + 1',
    //   //     arg: 'foo',
    //   //     modifiers: {
    //   //       bar: true
    //   //     }
    //   //   }
    //   // ],
    //   // 作用域插槽的格式为
    //   // { name: props => VNode | Array<VNode> }
    //   // scopedSlots: {
    //   //   default: (props) => {
    //   //     console.log(props);
    //   //     //  createElement('span', props.text)
    //   //   },
    //   // },
    //   // 如果组件是其它组件的子组件，需为插槽指定名称
    //   // slot: 'name-of-slot',
    //   // 其它特殊顶层属性
    //   // key: 'myKey',
    //   ref: 'myRef',
    //   // 如果你在渲染函数中给多个元素都应用了相同的 ref 名，
    //   // 那么 `$refs.myRef` 会变成一个数组。
    //   refInFor: true,
    // },
    {
      name: 'div',
      style: {
        color: 'red',
        fontSize: '14px',
        display: 'block',
      },
      // DOM 属性
      domProps: {
        innerHTML: 'blue-view-dev',
      },
    },
    {
      name: 'u-button',
      style: {},
      props: {
        type: 'primary',
      },
      // DOM 属性
      domProps: {
        innerHTML: '月落',
      },
    },
    {
      name: 'u-row',
      style: {},
      props: {
      },
      children: [
        {
          name: 'u-col',
		  props: {
			  span: 4
		  },
          style: {},
        },
        {
          name: 'u-col',
		  props: {
			  span: 4
		  },
          style: {},
        },
        {
          name: 'u-col',
		  props: {
			  span: 4
		  },
          style: {},
        }
      ]
    },
    {
      name: 'view',
      style: {
        'display': 'block'
      },
      // DOM 属性
      domProps: {
        innerHTML: '',
      },
    }
  ],
};

/*
 按照组件已经存在的prop， event 进行添加。
 按照样式进行添加
 添加行内样式
 添加自定义属性
*/

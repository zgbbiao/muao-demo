/*
 * @Author: your name
 * @Date: 2020-04-20 09:23:15
 * @LastEditTime: 2020-05-09 17:33:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tyqx\src\pages\index\views\data-permissions\permissions-group\test.js
 */
const disabledAddDefaultTag = ['button', 'u-button', 'input', 'u-input'];
export default {
  name: 'expand',
  functional: true,
  props: {
    row: Object,
    render: Function,
    index: Number,
    column: {
      type: Object,
      default: null,
    },
    options: Object,
    defaultTag: {
      type: String,
      default: 'div',
    },
  },
  render: (h, ctx) => {
    const defaultTag = ctx.props.defaultTag;
    const uiChildrenName = ctx.parent.$store.state.uiChildrenName;
    // 当需要创建子元素的时候， 创建子元素。
    function createDefaultTag(node) {
      if (disabledAddDefaultTag.indexOf(node.name) !== -1) {
        return [];
      }
      return h(ctx.props.options.insteadTag || defaultTag, {
        ...node,
      });
    }
    // 判断是否包含不渲染子元素的标签， 如果是， 则不渲染子元素，依旧渲染原本的值（innerHTML, innerText）
    function getIsCreateInnerHtml(node, nativeNode) {
      if (disabledAddDefaultTag.indexOf(node.name) !== -1) {
        return nativeNode;
      }
      return node;
    }
    // 渲染子组件
    const getChildrenTextContent = function (children) {
      if (!Array.isArray(children)) {
        return [];
      }
      return children.map(function (node) {
        const options2 = JSON.parse(JSON.stringify(node));

        if (options2.domProps) {
          delete options2.domProps.innerHTML;
          delete options2.domProps.innerText;
        }
        return h(
          node.name,
          {
            // ...options2,
            ...getIsCreateInnerHtml(options2, node),
          },
          [
            node[uiChildrenName]
              ? []
                  .concat(createDefaultTag(node))
                  .concat(getChildrenTextContent(node[uiChildrenName]))
              : [].concat(createDefaultTag(node)),
          ]
        );
      });
    };
    const options2 = JSON.parse(JSON.stringify(ctx.props.options));
    if (options2.domProps) {
      delete options2.domProps.innerHTML;
      delete options2.domProps.innerText;
    }
    return h(
      ctx.props.options.name,
      {
        // ...options2,
        ...getIsCreateInnerHtml(options2, ctx.props.options),
      },
      [
        // 当有子标签， 会将父标签的内容放到子标签进行渲染，然后再在后面插入子标签。
        // h(ctx.props.options.insteadTag || defaultTag, {
        //   ...ctx.props.options,
        // }),
        [].concat(createDefaultTag(ctx.props.options)),
        // ...getChildrenTextContent(ctx.props.options[children]),  // 加了他会导致重复渲染
        ...(ctx.children || []), // 不加他不渲染子组件
      ]
    );
  },
};

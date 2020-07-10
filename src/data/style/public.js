/*
 * @Author: your name
 * @Date: 2020-05-09 18:29:21
 * @LastEditTime: 2020-05-09 19:11:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dragUI-master\src\data\style\public.js
 */
export default {
  layout: {
    name: 'all',
    styles: [
      {
        name: 'disabled',
        desc: '元素',
        type: 'String',
        default: '',
        selects: [
          {
            label: 'block',
            value: 'block',
          },
          {
            label: 'inline-block',
            value: 'inline-block',
          },
          {
            label: 'inline',
            value: 'inline',
          },
          {
            label: 'inherit',
            value: 'inherit',
          }
        ]
      },
      {
        name: 'color',
        desc: '颜色',
        type: 'String',
        default: '',
      },
      {
        name: 'background-color',
        desc: '背景颜色',
        type: 'String',
        default: '',
      },
      {
        name: 'background-image',
        desc: '背景图片',
        type: 'String',
        default: '',
      },
      {
        name: 'background-size',
        desc: '背景尺寸',
        type: 'String',
        default: '',
      },
      {
        name: 'background-origin',
        desc: '背景定位',
        type: 'String',
        default: '',
        selects: [
          {
            label: 'padding-box',
            value: 'padding-box',
          },
          {
            label: 'border-box',
            value: 'border-box',
          },
          {
            label: 'content-box',
            value: 'content-box',
          }
        ]
      },
      {
        name: 'background-clip',
        desc: '背景剪裁',
        type: 'String',
        default: '',
        selects: [
          {
            label: 'padding-box',
            value: 'padding-box',
          },
          {
            label: 'border-box',
            value: 'border-box',
          },
          {
            label: 'content-box',
            value: 'content-box',
          }
        ]
      },
      {
        name: 'background-repeat',
        desc: '背景覆盖',
        type: 'String',
        default: '',
        selects: [
          {
            label: 'no-repeat',
            value: 'no-repeat',
          },
          {
            label: 'repeat',
            value: 'repeat',
          },
          {
            label: 'repeat-x',
            value: 'repeat-x',
          },
          {
            label: 'repeat-y',
            value: 'repeat-y',
          }
        ]
      },
      {
        name: 'background-position',
        desc: '背景定位',
        type: 'String',
        default: '',
        selects: [
          {
            label: 'left top',
            value: 'left top',
          },
          {
            label: 'left center',
            value: 'left center',
          },
          {
            label: 'left bottom',
            value: 'left bottom',
          },
          {
            label: 'right top',
            value: 'right top',
          },
          {
            label: 'right center',
            value: 'right center',
          },
          {
            label: 'right bottom',
            value: 'right bottom',
          },
          {
            label: 'center top',
            value: 'center top',
          },
          {
            label: 'center center',
            value: 'center center',
          },
          {
            label: 'center bottom',
            value: 'center bottom',
          },
          {
            label: 'inherit',
            value: 'inherit',
          }
        ]
      },
      {
        name: 'text-align',
        desc: '文本的对齐方式',
        type: 'String',
        default: '',
        selects: [
          {
            label: 'center',
            value: 'center',
          },
          {
            label: 'right',
            value: 'right',
          },
          {
            label: 'left',
            value: 'left',
          },
          {
            label: 'justify',
            value: 'justify',
          },
        ]
      },
      {
        name: 'text-decoration',
        desc: '文本修饰',
        type: 'String',
        default: '',
        selects: [
          {
            label: 'none',
            value: 'none',
          },
          {
            label: 'overline',
            value: 'overline',
          },
          {
            label: 'line-through',
            value: 'line-through',
          },
          {
            label: 'underline',
            value: 'underline',
          },
        ]
      },
      {
        name: 'text-indent',
        desc: '文本缩进',
        type: 'String',
        default: '',
      },
      {
        name: 'direction',
        desc: '文本方向',
        type: 'String',
        default: '',
        selects: [
          {
            label: 'ltr',
            value: 'ltr',
          },
          {
            label: 'rtl',
            value: 'rtl',
          },
          {
            label: 'inherit',
            value: 'inherit',
          },
        ]
      },
      {
        name: 'letter-spacing',
        desc: '字符间距',
        type: 'String',
        default: '',
      },
      {
        name: 'line-height',
        desc: '行高',
        type: 'String',
        default: '',
      },
      {
        name: 'text-shadow',
        desc: '文本阴影',
        type: 'String',
        default: '',
      },
      {
        name: 'box-shadow',
        desc: '盒子阴影',
        type: 'String',
        default: '',
      },
      {
        name: 'word-wrap',
        desc: '文本换行',
        type: 'String',
        default: '',
        selects: [
          {
            label: 'break-word',
            value: 'break-word',
          },
          {
            label: 'normal',
            value: 'normal',
          },
		]
      },
      {
        name: 'word-break',
        desc: '单词拆分换行',
        type: 'String',
        default: '',
        selects: [
          {
            label: 'break-all',
            value: 'break-all',
          },
          {
            label: 'normal',
            value: 'normal',
          },
          {
            label: 'keep-all',
            value: 'keep-all',
          },
		],
	},
      {
        name: 'vertical-align',
        desc: '垂直对齐',
        type: 'String',
        default: '',
        selects: [
          {
            label: 'baseline',
            value: 'baseline',
          },
          {
            label: 'sub',
            value: 'sub',
          },
          {
            label: 'super',
            value: 'super',
          },
          {
            label: 'top',
            value: 'top',
          },
          {
            label: 'text-top',
            value: 'text-top',
          },
          {
            label: 'middle',
            value: 'middle',
          },
          {
            label: 'bottom',
            value: 'bottom',
          },
          {
            label: 'text-bottom',
            value: 'text-bottom',
          },
          {
            label: 'inherit',
            value: 'inherit',
          },
        ]
      },
      {
        name: 'white-space',
        desc: '空白的处理方式',
        type: 'String',
        default: '',
        selects: [
          {
            label: 'normal',
            value: 'normal',
          },
          {
            label: 'pre',
            value: 'pre',
          },
          {
            label: 'nowrap',
            value: 'nowrap',
          },
          {
            label: 'pre-wrap',
            value: 'pre-wrap',
          },
          {
            label: 'pre-line',
            value: 'pre-line',
          },
          {
            label: 'inherit',
            value: 'inherit',
          },
        ]
      },
      {
        name: 'font-style',
        desc: '字体样式',
        type: 'String',
        default: '',
        selects: [
          {
            label: 'normal',
            value: 'normal',
          },
          {
            label: 'italic',
            value: 'italic',
          },
          {
            label: 'oblique',
            value: 'oblique',
          },
          {
            label: 'inherit',
            value: 'inherit',
          },
        ]
      },
      {
        name: 'font-family',
        desc: '字体族名称',
        type: 'String',
        default: ''
      },
      {
        name: 'font-size',
        desc: '字体大小',
        type: 'String',
        default: ''
      },
      {
        name: 'font-weight',
        desc: '字体粗细',
        type: 'String',
        default: '',
        selects: [
          {
            label: 'normal',
            value: 'normal',
          },
          {
            label: 'bold',
            value: 'bold',
          },
          {
            label: 'bolder',
            value: 'bolder',
          },
          {
            label: 'lighter',
            value: 'lighter',
          },
          {
            label: 'inherit',
            value: 'inherit',
          },
        ]
      },
      {
        name: 'border',
        desc: '边框',
        type: 'String',
        default: '',
      },
      {
        name: 'border-top',
        desc: '边框上',
        type: 'String',
        default: '',
      },
      {
        name: 'border-right',
        desc: '边框右',
        type: 'String',
        default: '',
      },
      {
        name: 'border-bottom',
        desc: '边框下',
        type: 'String',
        default: '',
      },
      {
        name: 'border-left',
        desc: '边框左',
        type: 'String',
        default: '',
      },
      {
        name: 'margin',
        desc: '外边距',
        type: 'String',
        default: '',
      },
      {
        name: 'margin-left',
        desc: '外边距左',
        type: 'String',
        default: '',
      },
      {
        name: 'margin-right',
        desc: '外边距右',
        type: 'String',
        default: '',
      },
      {
        name: 'margin-top',
        desc: '外边距上',
        type: 'String',
        default: '',
      },
      {
        name: 'margin-bottom',
        desc: '外边距下',
        type: 'String',
        default: '',
      },
      {
        name: 'padding',
        desc: '内边距',
        type: 'String',
        default: '',
      },
      {
        name: 'padding-left',
        desc: '内边距left',
        type: 'String',
        default: '',
      },
      {
        name: 'padding-right',
        desc: '内边距right',
        type: 'String',
        default: '',
      },
      {
        name: 'padding-top',
        desc: '内边距top',
        type: 'String',
        default: '',
      },
      {
        name: 'padding-bottom',
        desc: '内边距bottom',
        type: 'String',
        default: '',
      },
      {
        name: 'height',
        desc: '高度',
        type: 'String',
        default: '',
      },
      {
        name: 'max-height',
        desc: 'max高度',
        type: 'String',
        default: '',
      },
      {
        name: 'min-height',
        desc: 'min高度',
        type: 'String',
        default: '',
      },
      {
        name: 'width',
        desc: '宽度',
        type: 'String',
        default: '',
      },
      {
        name: 'max-width',
        desc: 'max宽度',
        type: 'String',
        default: '',
      },
      {
        name: 'min-width',
        desc: 'min宽度',
        type: 'String',
        default: '',
      },
      {
        name: 'position',
        desc: 'min宽度',
        type: 'String',
        default: '',
        selects: [
          {
            label: 'static',
            value: 'static',
          },
          {
            label: 'relative',
            value: 'relative',
          },
          {
            label: 'fixed',
            value: 'fixed',
          },
          {
            label: 'absolute',
            value: 'absolute',
          },
          {
            label: 'sticky',
            value: 'sticky',
          },
        ]
      },
      {
        name: 'left',
        desc: 'left',
        type: 'String',
        default: '',
      },
      {
        name: 'top',
        desc: 'top',
        type: 'String',
        default: '',
      },
      {
        name: 'right',
        desc: 'right',
        type: 'String',
        default: '',
      },
      {
        name: 'bottom',
        desc: 'bottom',
        type: 'String',
        default: '',
      },
      {
        name: 'overflow',
        desc: 'overflow',
        type: 'String',
        default: '',
        selects: [
          {
            label: 'visible',
            value: 'visible',
          },
          {
            label: 'hidden',
            value: 'hidden',
          },
          {
            label: 'scroll',
            value: 'scroll',
          },
          {
            label: 'auto',
            value: 'auto',
          },
          {
            label: 'inherit',
            value: 'inherit',
          },
        ]
      },
      {
        name: 'float',
        desc: 'float',
        type: 'String',
        default: '',
        selects: [
          {
            label: 'left',
            value: 'left',
          },
          {
            label: 'right',
            value: 'right',
          },
        ]
      },
      {
        name: 'border-radius',
        desc: 'border-radius',
        type: 'String',
        default: '',
      },
      {
        name: 'transform',
        desc: 'transform',
        type: 'String',
        default: '',
        selects: [
          {
            label: 'rotate(30deg)',
            value: 'rotate(30deg)',
          },
          {
            label: 'translate(50px,100px)',
            value: 'translate(50px,100px)',
          },
          {
            label: 'rotate(30deg)',
            value: 'rotate(30deg)',
          },
          {
            label: 'scale(2,3)',
            value: 'scale(2,3)',
          },
          {
            label: 'skew(30deg,20deg)',
            value: 'skew(30deg,20deg)',
          },
          {
            label: 'matrix(0.866,0.5,-0.5,0.866,0,0)',
            value: 'matrix(0.866,0.5,-0.5,0.866,0,0)',
          },
        ]
      },
      {
        name: 'transform-origin',
        desc: 'transform-origin',
        type: 'String',
        default: '',
      },
      {
        name: 'transition',
        desc: 'transition',
        type: 'String',
        default: '',
        selects: [
          {
            label: 'width 1s linear 2s',
            value: 'width 1s linear 2s',
          },
        ]
      },
      {
        name: 'box-sizing',
        desc: 'box-sizing',
        type: 'String',
        default: '',
        selects: [
          {
            label: 'border-box',
            value: 'border-box',
          },
          {
            label: 'content-box',
            value: 'content-box',
          },
          {
            label: 'inherit',
            value: 'inherit',
          },
        ]
      },
    ]
  }
}
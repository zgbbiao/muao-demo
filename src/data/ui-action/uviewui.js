/*
 * @Author: your name
 * @Date: 2020-04-22 16:22:42
 * @LastEditTime: 2020-05-09 18:24:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dragUI-master\src\data\ui-action.js\uviewui.js
 */
export default {
  layout: [
    {
      name: 'u-button',
      props: [
        {
          propsName: 'size',
          desc: '按钮的大小',
          type: 'String',
          default: 'default',
          selects: [
            {
              label: 'medium',
              value: 'medium ',
            },
            {
              label: 'mini',
              value: 'mini ',
            },
          ],
        },
        {
          propsName: 'ripple',
          desc: '是否开启点击水波纹效果	',
          type: 'Boolean',
          default: false,
          selects: [
            {
              label: 'true',
              value: true,
            },
            {
              label: 'false',
              value: false,
            },
          ],
        },
        {
          propsName: 'ripple-bg-color',
          desc: '水波纹的背景色，ripple为true时有效',
          type: 'String',
          default: 'rgba(0, 0, 0, 0.15)',
        },
        {
          propsName: 'type',
          desc: '按钮的样式类型',
          type: 'String',
          default: 'default',
          selects: [
            {
              label: 'primary',
              value: 'primary',
            },
            {
              label: 'success',
              value: 'success',
            },
            {
              label: 'info',
              value: 'info',
            },
            {
              label: 'warning',
              value: 'warning',
            },
            {
              label: 'error',
              value: 'error',
            },
          ],
        },
        {
          propsName: 'plain',
          desc: '按钮是否镂空，背景色透明	',
          type: 'Boolean',
          default: false,
          selects: [
            {
              label: 'true',
              value: true,
            },
            {
              label: 'false',
              value: false,
            },
          ],
        },
        {
          propsName: 'disabled',
          desc: '是否禁用',
          type: 'Boolean',
          default: false,
          selects: [
            {
              label: 'true',
              value: true,
            },
            {
              label: 'false',
              value: false,
            },
          ],
        },
        {
          propsName: 'shape',
          desc: '按钮外观形状，见上方说明',
          type: 'String',
          default: 'square',
          selects: [
            {
              label: 'circle',
              value: 'circle',
            },
            {
              label: 'square',
              value: 'square',
            },
          ],
        },
        {
          propsName: 'loading',
          desc: '按钮名称前是否带 loading 图标',
          desc2: 'App-nvue 平台，在 ios 上为雪花，Android上为圆圈',
          type: 'Boolean',
          default: false,
          selects: [
            {
              label: 'true',
              value: true,
            },
            {
              label: 'false',
              value: false,
            },
          ],
        },
        {
          propsName: 'form-type',
          desc:
            '用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件	',
          type: 'String',
          default: '',
          selects: [
            {
              label: 'submit',
              value: 'submit',
            },
            {
              label: 'reset',
              value: 'reset',
            },
          ],
        },
        {
          propsName: 'open-type',
          desc: '开放能力',
          desc2: '请参考uniapp官方文档',
          type: 'String',
          default: '',
        },
        {
          propsName: 'hover-class',
          desc:
            '指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果	',
          desc2: 'App-nvue 平台暂不支持',
          type: 'String',
          default: 'button-hover',
        },
        {
          propsName: 'hover-start-time',
          desc: '按住后多久出现点击态，单位毫秒',
          type: 'Number',
          default: 20,
        },
        {
          propsName: 'hover-stay-time',
          desc: '手指松开后点击态保留时间，单位毫秒	',
          type: 'Number',
          default: 70,
        },
        {
          propsName: 'custom-style',
          desc: '对按钮的自定义样式，对象形式，见上方说明',
          type: 'Object',
          default: {},
        },
        {
          propsName: 'app-parameter',
          desc: '指定是否阻止本节点的祖先节点出现点击态	',
          desc2: '微信小程序、QQ小程序',
          type: 'Boolean',
          default: false,
          selects: [
            {
              label: 'true',
              value: true,
            },
            {
              label: 'false',
              value: false,
            },
          ],
        },
        {
          propsName: 'hover-stop-propagation',
          desc: '打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效',
          desc2: '微信小程序',
          type: 'Boolean',
          default: false,
          selects: [
            {
              label: 'true',
              value: true,
            },
            {
              label: 'false',
              value: false,
            },
          ],
        },
        {
          propsName: 'lang',
          desc:
            '指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文	',
          desc2: '微信小程序',
          type: 'String',
          default: 'en',
          selects: [
            {
              label: 'zh_CN',
              value: 'zh_CN',
            },
            {
              label: 'zh_TW',
              value: 'zh_TW',
            },
            {
              label: 'en',
              value: 'en',
            },
          ],
        },
        {
          propsName: 'session-from',
          desc: '会话来源，open-type="contact"时有效',
          desc2: '微信小程序',
          type: 'String',
          default: '',
        },
        {
          propsName: 'send-message-title',
          desc: '会话内消息卡片标题，open-type="contact"时有效',
          desc2: '微信小程序',
          type: 'String',
          default: '当前标题',
        },
        {
          propsName: 'send-message-path',
          desc: '会话内消息卡片点击跳转小程序路径，open-type="contact"时有效',
          desc2: '微信小程序',
          type: 'String',
          default: '当前分享路径',
        },
        {
          propsName: 'send-message-img',
          desc: '会话内消息卡片图片，open-type="contact"时有效',
          desc2: '微信小程序',
          type: 'String',
          default: '当前页面截图',
        },
        {
          propsName: 'show-message-card',
          desc:
            '是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效',
          desc2: '微信小程序',
          type: 'String',
          default: '',
        },
      ],
      events: [
        {
          click: {
            type: 'click',
            desc: '按钮点击',
            type: 'Handler',
            default: () => {
              console.log('click')
            },
          },
          getphonenumber: {
            type: 'getphonenumber',
            desc: 'open-type="getPhoneNumber"时有效',
            type: 'Handler',
            default: () => {},
          },
          getuserinfo: {
            type: 'getuserinfo',
            desc:
              '用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同uni.getUserInfo',
            type: 'Handler',
            default: () => {},
          },
          error: {
            type: 'error',
            desc: '当使用开放能力时，发生错误的回调	',
            desc2: '微信小程序',
            type: 'Handler',
            default: () => {},
          },
          opensetting: {
            type: 'opensetting',
            desc: '在打开授权设置页并关闭后回调		',
            desc2: '微信小程序',
            type: 'Handler',
            default: () => {},
          },
          launchapp: {
            type: 'launchapp',
            desc: '打开 APP 成功的回调',
            desc2: '微信小程序',
            type: 'Handler',
            default: () => {},
          },
        },
      ],
    },
    {
      name: 'view',
      props: [
        {
          propsName: 'hover-class',
          desc: '指定按下去的样式类。当 hover-class="none" 时，没有点击态效果',
          type: 'String',
          default: 'none',
        },
        {
          propsName: 'hover-stop-propagation',
          desc: '指定是否阻止本节点的祖先节点出现点击态',
          type: 'Boolean',
          default: false,
        },
        {
          propsName: 'hover-start-time',
          desc: '按住后多久出现点击态，单位毫秒',
          type: 'Number',
          default: 50,
        },
        {
          propsName: 'hover-stay-time',
          desc: '手指松开后点击态保留时间，单位毫秒',
          type: 'Number',
          default: 400,
        },
      ]
    }
  ],
};

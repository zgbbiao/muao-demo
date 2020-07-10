/*
 * @Author: your name
 * @Date: 2020-04-23 09:38:54
 * @LastEditTime: 2020-04-26 09:22:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dragUI-master\store\modules\controlPanel\getters.js
 */
export default {
  // 获取当前选中的tag的内容
  getCurTagAction(state) {
	const curLayout = (state.uviewuiAction.layout || []).find((item) => {
        if (item.name === state.curTag.name) {
		  return item
        }
        return false;
      })
	  if (curLayout) {
		curLayout.props = [...curLayout.props].map(propItem => {
			 for (var key in state.curTag.props) {
				if (propItem.propsName === key) {
					console.log(propItem, state.curTag)
					propItem.default = state.curTag.props[key]
				}
			}
			return propItem
		})
		return curLayout
	  } else {
		  return {}
	  }
  },
  getCurTagActionStyle(state) {
	  return state.stylePublic.layout || []
  }
};

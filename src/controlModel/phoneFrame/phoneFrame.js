/*
 * @Author: your name
 * @Date: 2020-04-25 00:24:41
 * @LastEditTime: 2020-04-25 20:28:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dragUI-master\src\controlModel\phoneFrame\phoneFrame.js
 */

import { getUid, saveHistoryUid } from '@/src/tools/index.js';
/*
desc: 给数组中没有带有addcompponent类名的children添加一个addcomponent.
@retrun: 返回新的数组
*/
export const deepAddComponentAdd = (
  arr,
  isAdd = true,
  uiChildrenName = 'children'
) => {
  const addDiv = {
    name: 'div',
    style: {
      color: 'red',
      fontSize: '14px',
      display: 'block',
      padding: '10px',
      border: '1px dashed blue',
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
  return arr.map((item) => {
    if (Array.isArray(item[uiChildrenName])) {
      let isFalg = false;
      item[uiChildrenName].forEach((element) => {
        if (element.class && element.class.addcomponent) {
          isFalg = true;
        }
      });
      if (item[uiChildrenName].length !== 0) {
        item[uiChildrenName] = deepAddComponentAdd(item[uiChildrenName]);
      }
      if (!isFalg) {
        if (isAdd) {
          item[uiChildrenName].push(addDiv);
        }
      }
      return item;
    } else {
      if (isAdd) {
        item[uiChildrenName] = [];
        item[uiChildrenName].push(addDiv);
      }
    }
    return item;
  });
};
/*
  desc: 移出带有class.addcomponent的标签。
  @return: 返回更改后的数组
  */
export const deepAddComponentRemo = (arr, uiChildrenName = 'children') => {
  return arr.filter((item) => {
    if (item.class && item.class.addcomponent) {
      return false;
    }
    if (Array.isArray(item[uiChildrenName])) {
      item[uiChildrenName] = deepAddComponentRemo(item[uiChildrenName]);
    }
    return item;
  });
};

/*
desc: 树结构扁平化
*/
export const flatten = (data, uiChildrenName = 'children') => {
  return data.reduce(
    (arr, obj) =>
      arr.concat(
        [{ ...obj }],
        flatten(obj[uiChildrenName] || [], uiChildrenName)
      ),
    []
  );
};
/*
desc: 寻找匹配的uid，同时修改匹配的uid， 当修改的有children时， 递归寻找，并修改。
@return： 返回修改Uid后的数组。
*/
export const deepUpdateUid = (
  nativeArr,
  replaceItem,
  uiChildrenName = 'children'
) => {
  let plattenRelaces = [];
  if (Array.isArray(replaceItem)) {
    plattenRelaces = replaceItem;
  } else if (typeof replaceItem === 'object') {
    plattenRelaces = flatten([replaceItem]);
  }
  console.log('plattenRelaces', [...nativeArr], plattenRelaces);
  return nativeArr.map((item) => {
    if (
      plattenRelaces.some(
        (platterRelaceItem) => platterRelaceItem.uiId === item.uiId
      )
    ) {
      item.uiId = getUid();
      saveHistoryUid(item.uiId, item);
    }
    if (Array.isArray(item[uiChildrenName])) {
      item[uiChildrenName] = deepUpdateUid(
        item[uiChildrenName],
        plattenRelaces,
        uiChildrenName
      );
    }
    return item;
  });
};
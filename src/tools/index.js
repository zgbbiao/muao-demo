/*
 * @Author: your name
 * @Date: 2020-04-15 18:21:59
 * @LastEditTime: 2020-04-26 01:24:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dragUI-master\src\tools\index.js
 */

// 驼峰  下划线  互相转换
// @params: isTrue  是否转换成驼峰；
// @params: name<string> 字符串名称；
export const toHumpLine = (name, isTrue) => {
  // 下划线转换驼峰
  function toHump(name) {
    // eslint-disable-next-line no-useless-escape
    return name.replace(/\_(\w)/g, function (all, letter) {
      return letter.toUpperCase();
    });
  }
  // 驼峰转换下划线
  function toLine(name) {
    return name.replace(/([A-Z])/g, '_$1').toLowerCase();
  }
  if (isTrue) {
    return toHump(name);
  } else {
    return toLine(name);
  }
};

// 数组内的对象的key转换成驼峰；
function _arrayKeyToHump(arr, isTrue = true) {
  return arr.map((item) => {
    if (item && Array.isArray(item)) {
      item = arrayKeyToHump(item, isTrue);
    } else if (item && typeof item === 'object') {
      item = objectKeyToHump(item, isTrue);
    }
    return item === null ? '' : item;
  });
}

// 对象内的key转换成驼峰；
function _objectKeyToHump(obj, isTrue = true) {
  const itemCopy = {};
  for (const key in obj) {
    let value = obj[key];
    if (value && Array.isArray(value)) {
      value = arrayKeyToHump(value, isTrue);
    } else if (value && typeof value === 'object') {
      value = objectKeyToHump(value, isTrue);
    }

    itemCopy[toHumpLine(key, isTrue)] = value === null ? '' : value;
  }
  return itemCopy;
}

export const arrayKeyToHump = _arrayKeyToHump;
export const objectKeyToHump = _objectKeyToHump;

export const computedStyleToString = (obj = {}) => {
  let str = '';
  for (let key in obj) {
    str += `${toHumpLine(key, false).replace('_', '-')}:${obj[key]};`;
  }
  return str;
};
export const computedClassToString = (obj = []) => {
  return obj.join(' ');
};

let uiId = 1;
let selectedUiIds = [];
let selectedUiIdObj = {};
// 深层添加id
export const deepAddId = (arr, childrenName = 'children') => {
  return arr.map((item) => {
    item.uiId = 'uid' + uiId++;
    if (Array.isArray(item[childrenName]) && item[childrenName].length) {
      item[childrenName] = deepAddId(item[childrenName]);
    }
    return item;
  });
};

export const replaceArrItem = (arr, item, childrenName = 'children') => {
  for (let key in arr) {
    const arrItem = arr[key];
    if (item.uiId === arrItem.uiId) {
      arr[key] = item;
      break;
    } else if (Array.isArray(arrItem[childrenName])) {
      arr[key][childrenName] = replaceArrItem(arrItem[childrenName], item);
    }
  }
  return arr;
};

export const getUid = () => {
  uiId++;
  console.log('uid' + uiId);
  return 'uid' + uiId;
};
// 保留更改过的items
export const saveHistoryUid = (uiId, item) => {
  selectedUiIds.push(uiId);
  selectedUiIdObj[uiId] = item;
};
// 清除更改过的items
export const clearHistoryUid = () => {
  selectedUiIds = [];
  selectedUiIdObj = [];
};
// 获取历史Uiid
export const getHistoryUid = () => {
  return selectedUiIds;
};
// 获取历史Uiid
export const getHistoryUidValue = (uiId) => {
  return selectedUiIdObj[uiId];
};

/*
 * @Author: your name
 * @Date: 2020-04-22 17:12:04
 * @LastEditTime: 2020-04-26 01:27:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dragUI-master\store\modules\controlPanel\mutations.js
 */
import { replaceArrItem } from '@/src/tools/index.js';
import types from './mutation-type.js';
export default {
  [types.SET_CUR_TAG]: (state, data) => {
    state.curTag = { ...data };
  },
  [types.SET_PHONE_LIST]: (state, data) => {
    state.phoneList = data;
  },
  [types.SET_CUR_TAG_PROPS]: (state, data) => {
    state.phoneList = JSON.parse(
      JSON.stringify(replaceArrItem(state.phoneList, data))
    );
  },
  [types.SET_CUR_TAG_Style]: (state, data) => {
    state.phoneList = JSON.parse(
      JSON.stringify(replaceArrItem(state.phoneList, data))
    );
  },
};

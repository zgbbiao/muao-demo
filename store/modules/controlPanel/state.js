/*
 * @Author: your name
 * @Date: 2020-04-22 17:11:40
 * @LastEditTime: 2020-04-22 19:01:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dragUI-master\store\modules\controlPanel\state.js
 */
import dataJSON from '@/src/data/index.js';
export default {
  uviewuiAction: dataJSON.uviewuiAction, // 操作项的值列表
  stylePublic: dataJSON.stylePublic,
  curTag: {}, // 当前在Phone中被选中的tag
  phoneList: [], // 当前phone 面板中的列表
};

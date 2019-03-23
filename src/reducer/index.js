/*
 * @Author: qinghui_wu
 * @Date: 2019-03-23 16:48:02
 * @Last Modified by: qinghui_wu
 * @Last Modified time: 2019-03-23 18:54:46
 */
import { Map } from 'immutable'
import * as names from '../action/actionnames.js'

let reducers = {}// reducer集合

/**
 * [regReducer 添加reducer]
 * @param  {[type]} action_type [action.type,用来判断是aciton的操作]
 * @param  {[type]} reduce      [操作函数]
 * @return {[type]}             [description]
 */
export function regReducer (action_type, reduce) {
  reducers[action_type] = reduce
}

let defaultStateMsg = Map({ value: 0 })

/**
 * defaultReduce[默认reducer方法]
 * @param  {[type]} state         [全部的state]
 * @param  {[type]} options.type  [action.type,用来判断是aciton的操作]
 * @param  {[type]} options.param [其他参数]
 * @return {[type]}               [description]
 */
let defaultReduce = (state = defaultStateMsg, { type, param }) => {
  if (reducers[type]) {
    let newstate = reducers[type](state, param)
    return newstate
  }
  if (type !== names.DO_NOTHING && type !== '@@redux/INIT') { console.warn('not support reduce ', type) }
  return state
}

export default defaultReduce

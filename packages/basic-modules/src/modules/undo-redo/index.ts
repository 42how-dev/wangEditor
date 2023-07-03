/**
 * @description undo redo
 * @author wangfupeng
 */

import { IModuleConf } from '@42how/core'
import { redoMenuConf, undoMenuConf } from './menu/index'

const undoRedo: Partial<IModuleConf> = {
  menus: [redoMenuConf, undoMenuConf],
}

export default undoRedo

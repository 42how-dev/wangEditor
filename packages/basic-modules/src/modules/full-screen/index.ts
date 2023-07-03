/**
 * @description 全屏
 * @author wangfupeng
 */

import { IModuleConf } from '@42how/core'
import { fullScreenConf } from './menu/index'

const fullScreen: Partial<IModuleConf> = {
  menus: [fullScreenConf],
}

export default fullScreen

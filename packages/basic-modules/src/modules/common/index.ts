/**
 * @description common module
 * @author wangfupeng
 */
import { IModuleConf } from '@42how/core'
import { enterMenuConf } from './menu/index'

const commonModule: Partial<IModuleConf> = {
  menus: [enterMenuConf],
}

export default commonModule

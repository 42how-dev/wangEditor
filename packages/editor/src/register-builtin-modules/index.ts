/**
 * @description register builtin modules
 * @author wangfupeng
 */

// basic-modules
import '@42how/basic-modules/dist/css/style.css'
import basicModules from '@42how/basic-modules'

import '@42how/list-module/dist/css/style.css'
import wangEditorListModule from '@42how/list-module'

// table-module
import '@42how/table-module/dist/css/style.css'
import wangEditorTableModule from '@42how/table-module'

// video-module
import '@42how/video-module/dist/css/style.css'
import wangEditorVideoModule from '@42how/video-module'

// upload-image-module
import '@42how/upload-image-module/dist/css/style.css'
import wangEditorUploadImageModule from '@42how/upload-image-module'

// code-highlight
import '@42how/code-highlight/dist/css/style.css'
import { wangEditorCodeHighlightModule } from '@42how/code-highlight'

import registerModule from './register'

basicModules.forEach(module => registerModule(module))
registerModule(wangEditorListModule)
registerModule(wangEditorTableModule)
registerModule(wangEditorVideoModule)
registerModule(wangEditorUploadImageModule)
registerModule(wangEditorCodeHighlightModule)

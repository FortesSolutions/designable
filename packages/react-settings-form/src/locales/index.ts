import { GlobalRegistry } from '@designable/core'

import enGB from './en-GB'
import koKR from './ko-KR'
import zhCN from './zh-CN'

GlobalRegistry.registerDesignerLocales(zhCN, enGB, koKR)

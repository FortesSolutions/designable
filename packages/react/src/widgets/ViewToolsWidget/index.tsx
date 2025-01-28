import React from 'react'

import { useWorkbench } from '../../hooks'
import { IconWidget } from '../IconWidget'
import { WorkbenchTypes } from '@designable/core'
import { observer } from '@formily/reactive-react'
import { Segmented } from 'antd'

export interface IViewToolsWidget {
  use?: WorkbenchTypes[]
  style?: React.CSSProperties
  className?: string
}

const viewToolIconMap = {
  DESIGNABLE: 'Design',
  JSONTREE: 'JSON',
  MARKUP: 'Code',
  PREVIEW: 'Clone',
  READPRETTY: 'Play',
}

export const ViewToolsWidget: React.FC<IViewToolsWidget> = observer(
  ({ use }) => {
    const workbench = useWorkbench()
    // const prefix = usePrefix('view-tools')
    return (
      <Segmented
        onChange={(viewTool) => {
          workbench.type = viewTool as WorkbenchTypes
        }}
        options={use.map((viewTool) => {
          return {
            value: viewTool,
            icon: <IconWidget infer={viewToolIconMap[viewTool]} />,
          }
        })}
      />
    )
  },
)

ViewToolsWidget.defaultProps = {
  use: ['DESIGNABLE', 'JSONTREE', 'PREVIEW', 'READPRETTY'],
}

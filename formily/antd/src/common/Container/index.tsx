import React from 'react'

import { DroppableWidget } from '@designable/react'
import { observer } from '@formily/reactive-react'

// import './styles.less'

export const Container: React.FC<React.PropsWithChildren> = observer(
  (props) => {
    return <DroppableWidget>{props.children}</DroppableWidget>
  }
)

export const withContainer = (Target: React.JSXElementConstructor<any>) => {
  return (props: any) => {
    return (
      <DroppableWidget>
        <Target {...props} />
      </DroppableWidget>
    )
  }
}

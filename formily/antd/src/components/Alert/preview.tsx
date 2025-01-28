import React from 'react'

import { AllLocales } from '../../locales'
import { AllSchemas } from '../../schemas'
import { createVoidFieldSchema } from '../Field'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@designable/react'
import cls from 'classnames'

import { Alert as FCAlert } from '@fortes/components'

// import './styles.less'

export interface IDesignableAlertProps {
  value?: string
  message?: string
  showIcon?: boolean
  type?: 'success' | 'info' | 'warning' | 'error'
  style?: React.CSSProperties
  className?: string
}

export const Alert: DnFC<IDesignableAlertProps> = (props) => {
  return (
    <FCAlert
      className={cls(props.className, 'dn-text')}
      message={props.message}
      type={props.type}
      showIcon={props.showIcon}
    />
  )
}

Alert.Behavior = createBehavior({
  name: 'Alert',
  // extends: ['Field'],
  selector: (node) => node.props['x-component'] === 'Alert',
  designerProps: {
    propsSchema: createVoidFieldSchema(AllSchemas.Alert),
  },
  designerLocales: AllLocales.Alert,
})

Alert.Resource = createResource({
  icon: 'TextSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        type: 'string',
        'x-component': 'Alert',
      },
    },
  ],
})

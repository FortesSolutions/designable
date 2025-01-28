import { ISchema } from '@formily/react'

export const Alert: ISchema = {
  type: 'object',
  properties: {
    message: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input.TextArea',
    },
    type: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-component-props': {
        defaultValue: 'info',
      },
      enum: ['success', 'info', 'warning', 'error'],
    },
    showIcon: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
  },
}

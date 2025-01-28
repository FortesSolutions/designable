import React from 'react'

import { usePrefix } from '../../hooks'
import { IconWidget } from '../IconWidget'
import { TreeNode } from '@designable/core'
import { Button } from 'antd'

export interface IDeleteProps {
  node: TreeNode
  style?: React.CSSProperties
}

export const Delete: React.FC<IDeleteProps> = ({ node, style }) => {
  const prefix = usePrefix('aux-copy')
  if (node === node.root) return null
  return (
    <Button
      className={prefix}
      style={style}
      type="primary"
      onClick={() => {
        TreeNode.remove([node])
      }}
    >
      <IconWidget infer="Remove" />
    </Button>
  )
}

Delete.displayName = 'Delete'

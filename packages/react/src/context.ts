import React, { createContext } from 'react'

import { Engine, TreeNode } from '@designable/core'

import {
  IDesignerComponents,
  IDesignerLayoutContext,
  IWorkspaceContext,
} from './types'

export const DesignerComponentsContext = createContext<IDesignerComponents>({})

export const DesignerLayoutContext =
  createContext<React.PropsWithChildren<IDesignerLayoutContext>>(null)

export const DesignerEngineContext = createContext<Engine>(null)

export const TreeNodeContext = createContext<TreeNode>(null)

export const WorkspaceContext = createContext<IWorkspaceContext>(null)

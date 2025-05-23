/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/root'
import { Route as dashboardImport } from './routes/dashboard'
import { Route as tasksTaskListImport } from './routes/tasks/task-list'
import { Route as indexImport } from './routes/index'
import { Route as tasksTaskDetailImport } from './routes/tasks/task-detail'
import { Route as tasksUpdateTaskModalImport } from './routes/tasks/update-task-modal'
import { Route as tasksCreateTaskModalImport } from './routes/tasks/create-task-modal'

// Create Virtual Routes

const TaskListTasksImport = createFileRoute('/_task-list/tasks')()

// Create/Update Routes

const dashboardRoute = dashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const tasksTaskListRoute = tasksTaskListImport.update({
  id: '/_task-list',
  getParentRoute: () => rootRoute,
} as any)

const indexRoute = indexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const tasksTaskDetailRoute = tasksTaskDetailImport.update({
  id: '/tasks/$taskId',
  path: '/tasks/$taskId',
  getParentRoute: () => rootRoute,
} as any)

const TaskListTasksRoute = TaskListTasksImport.update({
  id: '/tasks',
  path: '/tasks',
  getParentRoute: () => tasksTaskListRoute,
} as any)

const tasksUpdateTaskModalRoute = tasksUpdateTaskModalImport.update({
  id: '/update',
  path: '/update',
  getParentRoute: () => tasksTaskDetailRoute,
} as any)

const tasksCreateTaskModalRoute = tasksCreateTaskModalImport.update({
  id: '/create',
  path: '/create',
  getParentRoute: () => TaskListTasksRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof indexImport
      parentRoute: typeof rootRoute
    }
    '/_task-list': {
      id: '/_task-list'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof tasksTaskListImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof dashboardImport
      parentRoute: typeof rootRoute
    }
    '/_task-list/tasks': {
      id: '/_task-list/tasks'
      path: '/tasks'
      fullPath: '/tasks'
      preLoaderRoute: typeof TaskListTasksImport
      parentRoute: typeof tasksTaskListImport
    }
    '/tasks/$taskId': {
      id: '/tasks/$taskId'
      path: '/tasks/$taskId'
      fullPath: '/tasks/$taskId'
      preLoaderRoute: typeof tasksTaskDetailImport
      parentRoute: typeof rootRoute
    }
    '/_task-list/tasks/create': {
      id: '/_task-list/tasks/create'
      path: '/create'
      fullPath: '/tasks/create'
      preLoaderRoute: typeof tasksCreateTaskModalImport
      parentRoute: typeof TaskListTasksImport
    }
    '/tasks/$taskId/update': {
      id: '/tasks/$taskId/update'
      path: '/update'
      fullPath: '/tasks/$taskId/update'
      preLoaderRoute: typeof tasksUpdateTaskModalImport
      parentRoute: typeof tasksTaskDetailImport
    }
  }
}

// Create and export the route tree

interface TaskListTasksRouteChildren {
  tasksCreateTaskModalRoute: typeof tasksCreateTaskModalRoute
}

const TaskListTasksRouteChildren: TaskListTasksRouteChildren = {
  tasksCreateTaskModalRoute: tasksCreateTaskModalRoute,
}

const TaskListTasksRouteWithChildren = TaskListTasksRoute._addFileChildren(
  TaskListTasksRouteChildren,
)

interface tasksTaskListRouteChildren {
  TaskListTasksRoute: typeof TaskListTasksRouteWithChildren
}

const tasksTaskListRouteChildren: tasksTaskListRouteChildren = {
  TaskListTasksRoute: TaskListTasksRouteWithChildren,
}

const tasksTaskListRouteWithChildren = tasksTaskListRoute._addFileChildren(
  tasksTaskListRouteChildren,
)

interface tasksTaskDetailRouteChildren {
  tasksUpdateTaskModalRoute: typeof tasksUpdateTaskModalRoute
}

const tasksTaskDetailRouteChildren: tasksTaskDetailRouteChildren = {
  tasksUpdateTaskModalRoute: tasksUpdateTaskModalRoute,
}

const tasksTaskDetailRouteWithChildren = tasksTaskDetailRoute._addFileChildren(
  tasksTaskDetailRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof indexRoute
  '': typeof tasksTaskListRouteWithChildren
  '/dashboard': typeof dashboardRoute
  '/tasks': typeof TaskListTasksRouteWithChildren
  '/tasks/$taskId': typeof tasksTaskDetailRouteWithChildren
  '/tasks/create': typeof tasksCreateTaskModalRoute
  '/tasks/$taskId/update': typeof tasksUpdateTaskModalRoute
}

export interface FileRoutesByTo {
  '/': typeof indexRoute
  '': typeof tasksTaskListRouteWithChildren
  '/dashboard': typeof dashboardRoute
  '/tasks': typeof TaskListTasksRouteWithChildren
  '/tasks/$taskId': typeof tasksTaskDetailRouteWithChildren
  '/tasks/create': typeof tasksCreateTaskModalRoute
  '/tasks/$taskId/update': typeof tasksUpdateTaskModalRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof indexRoute
  '/_task-list': typeof tasksTaskListRouteWithChildren
  '/dashboard': typeof dashboardRoute
  '/_task-list/tasks': typeof TaskListTasksRouteWithChildren
  '/tasks/$taskId': typeof tasksTaskDetailRouteWithChildren
  '/_task-list/tasks/create': typeof tasksCreateTaskModalRoute
  '/tasks/$taskId/update': typeof tasksUpdateTaskModalRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/dashboard'
    | '/tasks'
    | '/tasks/$taskId'
    | '/tasks/create'
    | '/tasks/$taskId/update'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/dashboard'
    | '/tasks'
    | '/tasks/$taskId'
    | '/tasks/create'
    | '/tasks/$taskId/update'
  id:
    | '__root__'
    | '/'
    | '/_task-list'
    | '/dashboard'
    | '/_task-list/tasks'
    | '/tasks/$taskId'
    | '/_task-list/tasks/create'
    | '/tasks/$taskId/update'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  indexRoute: typeof indexRoute
  tasksTaskListRoute: typeof tasksTaskListRouteWithChildren
  dashboardRoute: typeof dashboardRoute
  tasksTaskDetailRoute: typeof tasksTaskDetailRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  indexRoute: indexRoute,
  tasksTaskListRoute: tasksTaskListRouteWithChildren,
  dashboardRoute: dashboardRoute,
  tasksTaskDetailRoute: tasksTaskDetailRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "root.tsx",
      "children": [
        "/",
        "/_task-list",
        "/dashboard",
        "/tasks/$taskId"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_task-list": {
      "filePath": "tasks/task-list.tsx",
      "children": [
        "/_task-list/tasks"
      ]
    },
    "/dashboard": {
      "filePath": "dashboard.tsx"
    },
    "/_task-list/tasks": {
      "filePath": "",
      "parent": "/_task-list",
      "children": [
        "/_task-list/tasks/create"
      ]
    },
    "/tasks/$taskId": {
      "filePath": "tasks/task-detail.tsx",
      "children": [
        "/tasks/$taskId/update"
      ]
    },
    "/_task-list/tasks/create": {
      "filePath": "tasks/create-task-modal.tsx",
      "parent": "/_task-list/tasks"
    },
    "/tasks/$taskId/update": {
      "filePath": "tasks/update-task-modal.tsx",
      "parent": "/tasks/$taskId"
    }
  }
}
ROUTE_MANIFEST_END */

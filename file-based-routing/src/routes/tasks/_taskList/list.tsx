import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tasks/_taskList/list')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/tasks/_taskList/list"!</div>
}

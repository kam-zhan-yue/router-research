import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_superuser/tasks/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_superuser/tasks/$id"!</div>
}

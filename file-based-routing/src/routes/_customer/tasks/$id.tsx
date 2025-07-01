import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_customer/tasks/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_customer/tasks/$id"!</div>
}

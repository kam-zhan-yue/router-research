import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authentication/dispatches/dispatches/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dispatches/dispatches/$id"!</div>
}

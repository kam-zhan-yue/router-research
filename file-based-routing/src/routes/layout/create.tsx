import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/layout/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/layout/create"!</div>
}

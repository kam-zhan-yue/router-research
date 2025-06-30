import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dispatches/dispatches/$uuid/public')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dispatches/dispatches/$uuid/public"!</div>
}

import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/test/_pathlessOne')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <div>
    Pathless One
    <Outlet/ >
  </div>
  )
}

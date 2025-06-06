import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/test/_pathlessOne/_pathlessTwo',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <div>
    Pathless Two
    <Outlet/ >
  </div>
  )
}

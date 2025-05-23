import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/files/$')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/files/$"!
    <Outlet />
  </div>
}

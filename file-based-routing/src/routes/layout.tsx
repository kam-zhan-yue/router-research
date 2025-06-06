import { createFileRoute, notFound } from '@tanstack/react-router'

export const Route = createFileRoute('/layout')({
  component: RouteComponent,
})

function RouteComponent() {
  throw notFound()
}

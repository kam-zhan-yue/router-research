import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/test/_pathlessOne/_pathlessTwo/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Test</div>
}

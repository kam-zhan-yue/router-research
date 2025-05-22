import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/tasks/_taskList')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div>Hello "/tasks"!</div>
      <Link to="/tasks/create">Create a Task</Link>
      <Outlet />
    </div>
  );
}

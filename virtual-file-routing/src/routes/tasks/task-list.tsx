import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_task-list")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <h1>Task List</h1>
      <Link to="/tasks/create">Create a Task</Link>
      <Outlet />
    </>
  );
}

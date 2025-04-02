import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/tasks_/$taskId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { taskId } = Route.useParams();
  return (
    <>
      <div>Showing Task {taskId}</div>
      <Link to="/tasks/$taskId/edit" params={{ taskId: taskId }}>
        Edit
      </Link>
      <Outlet />
    </>
  );
}

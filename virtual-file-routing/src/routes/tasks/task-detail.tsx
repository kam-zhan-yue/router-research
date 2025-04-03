import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/tasks/$taskId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { taskId } = Route.useParams();
  return (
    <>
      <h1>Task {taskId}</h1>
      <Link to="/tasks/$taskId/update" params={{ taskId: taskId }}>
        Update
      </Link>
      <Outlet />
    </>
  );
}

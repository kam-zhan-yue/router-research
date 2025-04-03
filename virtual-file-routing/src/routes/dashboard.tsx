import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <h1>Dashboard</h1>
      <Link to="/tasks">To task list</Link>
    </>
  );
}

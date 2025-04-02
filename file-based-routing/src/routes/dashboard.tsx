import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div>Hello "/dashboard"!</div>
      <Link to="/tasks">To Task List</Link>
    </>
  );
}

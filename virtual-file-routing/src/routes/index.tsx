import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <h1>Index</h1>
      <Link to="/dashboard">To dashboard</Link>
    </>
  );
}

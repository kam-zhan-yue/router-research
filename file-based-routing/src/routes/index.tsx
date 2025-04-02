import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <>
      <div>Index</div>
      <Link to="/dashboard">To dashboard</Link>
    </>
  );
}

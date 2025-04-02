import Modal from "@/components/modal";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/tasks/create")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Modal>
      <h2 className="text-xl font-semibold mb-4">Create a task</h2>
      <Link
        to="/tasks/$taskId"
        params={{
          taskId: "1",
        }}
      >
        Create!
      </Link>
    </Modal>
  );
}

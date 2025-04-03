import Modal from "@/components/modal";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/tasks/$taskId/update")({
  component: RouteComponent,
});

function RouteComponent() {
  const { taskId } = Route.useParams();
  return (
    <Modal>
      <h2 className="text-xl font-semibold mb-4">Updating Task {taskId}</h2>
      <Link to="/tasks/$taskId" params={{ taskId: taskId }}>
        Update
      </Link>
    </Modal>
  );
}

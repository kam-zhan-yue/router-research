import Modal from "@/components/modal";
import { taskDetailRoute } from "@/main";
import { Link } from "@tanstack/react-router";

const UpdateTaskModal = () => {
  const { taskId } = taskDetailRoute.useParams();
  return (
    <Modal>
      <div>Update Task</div>
      <Link to="/tasks/$taskId" params={{ taskId: taskId }}>
        Update
      </Link>
    </Modal>
  );
};

export default UpdateTaskModal;

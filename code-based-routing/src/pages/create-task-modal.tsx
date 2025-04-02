import Modal from "@/components/modal";
import { Link } from "@tanstack/react-router";

const CreateTaskModal = () => {
  return (
    <>
      <Modal>
        <div>Create a Task</div>
        <Link to="/tasks/$taskId" params={{ taskId: "1" }}>
          Create
        </Link>
      </Modal>
    </>
  );
};

export default CreateTaskModal;

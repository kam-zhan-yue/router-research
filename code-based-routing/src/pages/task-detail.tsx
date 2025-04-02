import { taskDetailRoute } from "@/main";
import { Link, Outlet } from "@tanstack/react-router";

const TaskDetail = () => {
  const { taskId } = taskDetailRoute.useParams();
  return (
    <>
      <div>Task {taskId}</div>
      <Link to="/tasks/$taskId/update" params={{ taskId }}>
        Update
      </Link>
      <Outlet />
    </>
  );
};

export default TaskDetail;

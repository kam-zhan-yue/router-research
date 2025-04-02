import { Link, Outlet } from "@tanstack/react-router";

const TaskList = () => {
  return (
    <>
      <div>This is the task list</div>
      <Link to="/tasks/create">Create</Link>
      <Outlet />
    </>
  );
};

export default TaskList;

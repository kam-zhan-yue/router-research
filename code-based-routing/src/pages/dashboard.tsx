import { Link } from "@tanstack/react-router";

const Dashboard = () => {
  return (
    <>
      <div>This is the dashboard</div>
      <Link to="/tasks">To Task List</Link>
    </>
  );
};

export default Dashboard;

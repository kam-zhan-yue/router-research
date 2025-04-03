import { rootRoute, index, route } from "@tanstack/virtual-file-routes";

const routes = rootRoute("root.tsx", [
  index("index.tsx"),
  route("/dashboard", "dashboard.tsx"),
  route("/tasks", "task-list.tsx", [
    route("/create", "tasks/create-task-modal.tsx"),
  ]),
  route("/tasks/$taskId", "tasks/task-detail.tsx", [
    route("/update", "tasks/update-task-modal.tsx"),
  ]),
]);

export default routes;

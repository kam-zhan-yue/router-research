import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import "./styles.css";
import reportWebVitals from "./reportWebVitals.ts";

import App from "./App.tsx";
import Dashboard from "./pages/dashboard.tsx";
import TaskList from "./pages/tasks.tsx";
import CreateTaskModal from "./pages/create-task-modal.tsx";
import TaskDetail from "./pages/task-detail.tsx";
import UpdateTaskModal from "./pages/update-task-modal.tsx";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <div className="w-full h-full justify-center items-center text-center text-lg">
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: App,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "dashboard",
  component: Dashboard,
});

const taskListRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "tasks",
  component: TaskList,
});

const createTaskRoute = createRoute({
  getParentRoute: () => taskListRoute,
  path: "create",
  component: CreateTaskModal,
});

export const taskDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "tasks/$taskId",
  component: TaskDetail,
});

const editTaskRoute = createRoute({
  getParentRoute: () => taskDetailRoute,
  path: "update",
  component: UpdateTaskModal,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  dashboardRoute,
  taskListRoute.addChildren([createTaskRoute]),
  // The task detail route is a child of the rootRoute
  taskDetailRoute.addChildren([editTaskRoute]),
]);

const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

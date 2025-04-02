import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="w-full h-full justify-center items-center text-center text-lg">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});

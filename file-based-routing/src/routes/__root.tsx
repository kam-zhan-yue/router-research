import { CatchNotFound, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <CatchNotFound fallback={(_) => <p>Not Found</p>}>
        <div className="w-full h-full justify-center items-center text-center text-lg">
          <Outlet />
        </div>
      </CatchNotFound>
      <TanStackRouterDevtools />
    </>
  ),
});

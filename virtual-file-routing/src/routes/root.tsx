import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="w-full h-full justify-center items-center text-center text-lg">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  );
}

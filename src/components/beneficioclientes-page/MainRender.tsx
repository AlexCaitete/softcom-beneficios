import { Outlet } from "react-router-dom";

export function MainRender() {
    return (
        <main className="max-w-7xl mx-auto py-8 px-4">
        <Outlet />
      </main>
    )
}
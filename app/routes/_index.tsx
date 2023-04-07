import type { V2_MetaFunction } from "@remix-run/node";
import { Outlet } from "react-router";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
}

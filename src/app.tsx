import { type RouteSectionProps, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

import "./app.css";

const Layout = (props: RouteSectionProps) => (
  <>
    <header>
      <h1>
        <a href="/">Repro</a>
      </h1>
    </header>

    <main>
      <Suspense>{props.children}</Suspense>
    </main>
  </>
);
export default function App() {
  return (
    <Router root={Layout}>
      <FileRoutes />
    </Router>
  );
}

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  type LinksFunction,
  type MetaFunction,
} from "react-router";
import { ThemeProvider } from "~/context/ThemeContext";
import { parseError } from "~/utils/parseError";
import { ErrorMessage } from "~/components/error/ErrorMessage";
import { Toaster } from "@ninna-ui/feedback";
import type { ReactNode } from "react";

import "~/index.css";
import MainLayout from "./components/layout";

export const meta: MetaFunction = () => [
  { title: "Ninna UI Playground" },
  { name: "description", content: "Developer playground for Ninna UI — live component sandbox." },
];

export const links: LinksFunction = () => [
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
];

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script src="/theme-init.js" />
      </head>
      <body className="min-h-screen bg-base-50 text-base-content antialiased" suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-content focus:outline-none focus:ring-2 focus:ring-primary-content"
        >
          Skip to main content
        </a>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <Outlet />
      </MainLayout>
      <Toaster position="bottom-right" />
    </ThemeProvider>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  const errorProps = parseError(error);

  return (
    <ThemeProvider>
      <ErrorMessage {...errorProps} />
    </ThemeProvider>
  );
}

export function HydrateFallback() {
  return (
    <div className="min-h-screen bg-base-50 flex items-center justify-center">
      <div className="text-base-content/50 text-sm">Loading...</div>
    </div>
  );
}

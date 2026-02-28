import { useState, useEffect, useCallback } from "react";
import { MenuIcon, X } from "lucide-react";
import { useMatches, useLocation } from "react-router";
import { Sidebar } from "./Sidebar";
import { ThemeToggle } from "./ThemeToggle";
import { ThemePresetSwitcher } from "./ThemePresetSwitcher";
import { RightSidebar } from "./RightSidebar";
import type { ComponentSectionType } from "~/components/docs/types";

interface RouteHandle {
  sections?: ComponentSectionType[];
}

function NinnaLogo() {
  return (
    <div className="flex items-center gap-2">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" className="h-7 w-7 shrink-0" aria-hidden="true">
        <rect width="32" height="32" rx="8" className="fill-base-content" />
        <path d="M9 24V8h2.8l8.8 11.2V8H23v16h-2.8L11.4 12.8V24H9z" className="fill-base-100" />
      </svg> 
      <span className="text-lg font-semibold tracking-tight text-base-content">
        ninna<span className="text-base-content/70">-ui</span>
      </span>
    </div>
  );
}

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const matches = useMatches();
  const location = useLocation();
  
  const sections = matches
    .find((match) => (match.handle as RouteHandle)?.sections)
    ?.handle as RouteHandle | undefined;
  
  const tocSections = sections?.sections;

  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  // Close mobile sidebar on route change
  useEffect(() => {
    closeSidebar();
  }, [location.pathname, closeSidebar]);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
      const handler = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeSidebar();
      };
      window.addEventListener("keydown", handler);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handler);
      };
    }
    return undefined;
  }, [sidebarOpen, closeSidebar]);

  return (
    <div className="min-h-screen bg-base-50">
      {/* ── Fixed Topbar (full-width) ── */}
      <header className="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between border-b border-base-200 bg-base-100/70 backdrop-blur-xl px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="-m-2 p-2 text-base-content/70 hover:text-base-content lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 rounded-md"
            aria-label="Open sidebar"
          >
            <MenuIcon className="size-5" aria-hidden="true" />
          </button>
          <NinnaLogo />
          <a
            href="https://ninna-ui.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary hover:bg-primary/20 transition-colors"
          >
            Dev Playground · docs ↗
          </a>
        </div>

        <div className="flex items-center gap-1">
          <ThemePresetSwitcher />
          <ThemeToggle />
        </div>
      </header>

      {/* ── Mobile sidebar drawer ── */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-nav-title"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-base-content/60 backdrop-blur-sm"
            onClick={closeSidebar}
            aria-hidden="true"
          />

          <div className="fixed inset-y-0 left-0 flex w-72">
            <div className="relative flex w-full flex-col bg-base-100">
              {/* Mobile drawer header */}
              <div className="flex h-14 items-center justify-between border-b border-base-200 px-4">
                <span id="mobile-nav-title" className="sr-only">Mobile navigation</span>
                <NinnaLogo />
                <button
                  type="button"
                  onClick={closeSidebar}
                  className="-m-2 p-2 text-base-content/70 hover:text-base-content focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 rounded-md"
                  aria-label="Close sidebar"
                >
                  <X className="size-5" aria-hidden="true" />
                </button>
              </div>

              {/* Mobile nav content */}
              <div className="flex-1 overflow-y-auto px-4 py-4" data-sidebar-scroll>
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Desktop sidebar (below topbar) ── */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:top-14 lg:z-40 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-1 flex-col overflow-y-auto border-r border-base-200 bg-base-100/70 px-4 py-4" data-sidebar-scroll>
          <Sidebar />
        </div>
      </aside>

      {/* ── Main content area ── */}
      <div className="pt-14 lg:pl-64 flex flex-col min-h-screen">
        <div className="lg:flex flex-1">
          <main id="main-content" className="flex-1 py-8" tabIndex={-1}>
            <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
              {children}
            </div>
          </main>
          
          {tocSections && <RightSidebar sections={tocSections} />}
        </div>

        <footer className="border-t border-base-200 bg-base-100 py-6 px-6 sm:px-8 lg:px-10" role="contentinfo">
          <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-base-content/70">
            <div className="flex items-center gap-4">
              <span>© {new Date().getFullYear()} Ninna UI</span>
              <span className="hidden sm:inline">·</span>
              <span>MIT License</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://ninna-ui.dev" target="_blank" rel="noopener noreferrer" className="hover:text-base-content transition-colors" aria-label="Ninna UI documentation website (opens in new tab)">ninna-ui.dev ↗</a>
              <a href="https://github.com/ninna-ui/ninna-ui" target="_blank" rel="noopener noreferrer" className="hover:text-base-content transition-colors" aria-label="Ninna UI on GitHub (opens in new tab)">GitHub</a>
              <a href="https://www.npmjs.com/org/ninna-ui" target="_blank" rel="noopener noreferrer" className="hover:text-base-content transition-colors" aria-label="Ninna UI on npm (opens in new tab)">npm</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

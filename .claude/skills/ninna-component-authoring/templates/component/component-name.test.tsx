// @ts-nocheck — scaffold template; placeholder imports resolve once copied into a package.
// Template: rename to `component-name.test.tsx`. Covers render, variants, data-slot, a11y.
// a11y matcher: toBeAccessible() is registered globally by @ninna-ui/test-config/setup (@sa11y/vitest).
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { MyThing } from "./component-name";

describe("MyThing", () => {
  // ── Rendering ──────────────────────────────────────────────
  it("renders children", () => {
    render(<MyThing>Hello</MyThing>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  // ── Structure ──────────────────────────────────────────────
  it("has the correct data-slot attribute", () => {
    render(<MyThing>Test</MyThing>);
    expect(screen.getByText("Test")).toHaveAttribute("data-slot", "my-thing");
  });

  it("has a displayName", () => {
    expect(MyThing.displayName).toBe("MyThing");
  });

  it("forwards className (consumer className wins)", () => {
    render(<MyThing className="custom-class">Test</MyThing>);
    expect(screen.getByText("Test")).toHaveClass("custom-class");
  });

  // ── Variants ───────────────────────────────────────────────
  it.each(["solid", "soft", "outline"] as const)(
    "renders %s variant",
    (variant) => {
      render(<MyThing variant={variant}>Test</MyThing>);
      expect(screen.getByText("Test")).toBeInTheDocument();
    },
  );

  it.each(["sm", "md", "lg"] as const)("renders %s size", (size) => {
    render(<MyThing size={size}>Test</MyThing>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  // ── Accessibility ──────────────────────────────────────────
  it("has no axe violations", async () => {
    const { container } = render(<MyThing>Accessible</MyThing>);
    expect(await axe(container)).toHaveNoViolations();
  });
});

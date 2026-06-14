import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Tree } from "./tree";

const data = [
  {
    id: "root",
    label: "Root",
    children: [{ id: "child-1", label: "Child 1" }],
  },
];

describe("Tree", () => {
  it("renders tree root and items", () => {
    render(<Tree data={data} />);
    expect(screen.getByRole("tree")).toBeInTheDocument();
    expect(screen.getByText("Root")).toBeInTheDocument();
  });

  it("calls onSelect when selecting node", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<Tree data={data} onSelect={onSelect} />);
    await user.click(screen.getByText("Root"));
    await waitFor(() => {
      expect(onSelect).toHaveBeenCalledWith("root");
    });
  });

  it("supports keyboard select", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<Tree data={data} onSelect={onSelect} />);
    const rootItem = screen.getByRole("treeitem", { name: /root/i });
    rootItem.focus();
    await user.keyboard("{Enter}");
    await waitFor(() => {
      expect(onSelect).toHaveBeenCalledWith("root");
    });
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Tree data={data} />);
    await expect(container).toBeAccessible();
  });

  describe("keyboard navigation", () => {
    const treeWithParent = [
      {
        id: "parent",
        label: "Parent",
        children: [{ id: "child", label: "Child" }],
      },
    ];

    it("ArrowRight expands a collapsed node and sets aria-expanded=true", async () => {
      const user = userEvent.setup();
      // Render with no defaultExpandedIds so tree is collapsed
      render(<Tree data={treeWithParent} defaultExpandedIds={[]} />);
      const parentItem = screen.getByRole("treeitem", { name: /parent/i });
      expect(parentItem).toHaveAttribute("aria-expanded", "false");
      parentItem.focus();
      await user.keyboard("{ArrowRight}");
      await waitFor(() => {
        expect(parentItem).toHaveAttribute("aria-expanded", "true");
      });
    });

    it("ArrowLeft collapses an expanded node and sets aria-expanded=false", async () => {
      const user = userEvent.setup();
      // Render expanded by default
      render(<Tree data={treeWithParent} defaultExpandedIds={["parent"]} />);
      const parentItem = screen.getByRole("treeitem", { name: /parent/i });
      expect(parentItem).toHaveAttribute("aria-expanded", "true");
      parentItem.focus();
      await user.keyboard("{ArrowLeft}");
      await waitFor(() => {
        expect(parentItem).toHaveAttribute("aria-expanded", "false");
      });
    });

    it("Space key selects a node", async () => {
      const user = userEvent.setup();
      const onSelect = vi.fn();
      render(<Tree data={data} onSelect={onSelect} />);
      const rootItem = screen.getByRole("treeitem", { name: /root/i });
      rootItem.focus();
      await user.keyboard(" ");
      await waitFor(() => {
        expect(onSelect).toHaveBeenCalledWith("root");
      });
    });

    it("aria-selected reflects the controlled selectedId prop", () => {
      // Tree uses controlled selectedId — no internal selection state
      render(<Tree data={data} selectedId="root" />);
      const rootItem = screen.getByRole("treeitem", { name: /root/i });
      expect(rootItem).toHaveAttribute("aria-selected", "true");
    });
  });
});

/*
 * ## Findings
 *
 * - ArrowUp/Down focus movement between visible tree items is NOT implemented in tree.tsx.
 *   The WAI-ARIA Tree View pattern (APG) recommends ArrowDown/Up to move focus between rows.
 *   This is a known gap; fixing it is a non-trivial behavior change — tracked in backlog.
 * - ArrowLeft on a leaf node (no children) does not move to parent; also a known gap.
 */

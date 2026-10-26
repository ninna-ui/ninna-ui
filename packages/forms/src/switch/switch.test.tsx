import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Switch } from "./switch";
import { FormControl } from "../form-control";

describe("Switch", () => {
  // ── Rendering ──────────────────────────────────────────────
  it("renders with label", () => {
    render(<Switch label="Enable notifications" />);
    expect(screen.getByText("Enable notifications")).toBeInTheDocument();
  });

  it("renders without label", () => {
    const { container } = render(<Switch />);
    const switchEl = container.querySelector('[data-slot="switch"]');
    expect(switchEl).toBeInTheDocument();
  });

  // ── Data attributes & structure ────────────────────────────
  it("has correct data-slot attribute", () => {
    const { container } = render(<Switch />);
    expect(container.querySelector('[data-slot="switch"]')).toBeInTheDocument();
  });

  it("has thumb data-slot", () => {
    const { container } = render(<Switch />);
    expect(container.querySelector('[data-slot="thumb"]')).toBeInTheDocument();
  });

  it("has displayName", () => {
    expect(Switch.displayName).toBe("Switch");
  });

  // ── Controlled / Uncontrolled ──────────────────────────────
  it("calls onCheckedChange when toggled", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Switch onCheckedChange={onChange} />);
    const switchBtn = screen.getByRole("switch");
    await user.click(switchBtn);
    await waitFor(() => {
      expect(onChange).toHaveBeenCalledWith(true);
    });
  });

  // ── Disabled ───────────────────────────────────────────────
  it("is disabled when disabled prop is true", () => {
    render(<Switch disabled />);
    expect(screen.getByRole("switch")).toBeDisabled();
  });

  it("is disabled when loading", () => {
    render(<Switch loading />);
    expect(screen.getByRole("switch")).toBeDisabled();
  });

  // ── Loading ────────────────────────────────────────────────
  it("has data-loading when loading", () => {
    render(<Switch loading />);
    expect(screen.getByRole("switch")).toHaveAttribute("data-loading", "true");
    expect(screen.getByRole("switch")).toHaveAttribute("aria-busy", "true");
    expect(screen.getByRole("switch")).toHaveAttribute("aria-disabled", "true");
  });

  // ── Invalid ────────────────────────────────────────────────
  it("has data-invalid when invalid", () => {
    render(<Switch invalid />);
    expect(screen.getByRole("switch")).toHaveAttribute("data-invalid", "true");
    expect(screen.getByRole("switch")).toHaveAttribute("aria-invalid", "true");
  });

  it("inherits its accessible name, description and validation from FormControl", async () => {
    const { container } = render(
      <FormControl id="notifications" isInvalid isRequired>
        <label id="notifications-label" htmlFor="notifications">
          Notifications
        </label>
        <Switch />
        <p id="notifications-message">Choose a notification preference.</p>
      </FormControl>,
    );
    const control = screen.getByRole("switch", { name: "Notifications" });
    expect(control).toHaveAttribute("aria-labelledby", "notifications-label");
    expect(control).toHaveAccessibleDescription(
      "Choose a notification preference.",
    );
    expect(control).toHaveAttribute("aria-invalid", "true");
    expect(control).toHaveAttribute("aria-required", "true");
    await expect(container).toBeAccessible();
  });

  it("keeps a stable accessible label while Space toggles the visual track labels", async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(
      <Switch
        label="Notifications"
        trackLabels={{ on: "ON", off: "OFF" }}
        thumbIcon={<svg role="img" aria-label="Decorative icon" />}
        onCheckedChange={onCheckedChange}
      />,
    );
    const control = screen.getByRole("switch", { name: "Notifications" });
    expect(screen.getByText("ON")).toHaveAttribute("aria-hidden", "true");
    expect(screen.getByText("OFF")).toHaveAttribute("aria-hidden", "true");
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    await user.tab();
    expect(control).toHaveFocus();
    await user.keyboard(" ");
    expect(control).toBeChecked();
    expect(control).toHaveAccessibleName("Notifications");
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it("leaves the checked value under the control of its caller", async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    const { rerender } = render(
      <Switch
        aria-label="Notifications"
        checked={false}
        onCheckedChange={onCheckedChange}
      />,
    );
    const control = screen.getByRole("switch");
    await user.click(control);
    expect(onCheckedChange).toHaveBeenCalledWith(true);
    expect(control).not.toBeChecked();
    rerender(
      <Switch
        aria-label="Notifications"
        checked
        onCheckedChange={onCheckedChange}
      />,
    );
    expect(control).toBeChecked();
  });

  // ── Track labels ───────────────────────────────────────────
  it("renders track labels", () => {
    render(<Switch trackLabels={{ on: "ON", off: "OFF" }} />);
    expect(screen.getByText("ON")).toBeInTheDocument();
    expect(screen.getByText("OFF")).toBeInTheDocument();
  });

  // ── Description ────────────────────────────────────────────
  it("renders description", () => {
    render(<Switch label="Test" description="Helper text" />);
    expect(screen.getByText("Helper text")).toBeInTheDocument();
  });

  // ── Sizes ──────────────────────────────────────────────────
  it.each(["sm", "md", "lg"] as const)("renders %s size", (size) => {
    const { container } = render(<Switch size={size} />);
    expect(container.querySelector('[data-slot="switch"]')).toBeInTheDocument();
  });

  // ── A11y: ARIA ─────────────────────────────────────────────
  it('has role="switch"', () => {
    render(<Switch />);
    expect(screen.getByRole("switch")).toBeInTheDocument();
  });

  // ── A11y: axe audit ────────────────────────────────────────
  it("has no accessibility violations", async () => {
    const { container } = render(<Switch label="Enable feature" />);
    await expect(container).toBeAccessible();
  });

  it("has no accessibility violations (without label, with aria-label)", async () => {
    const { container } = render(<Switch aria-label="Toggle feature" />);
    await expect(container).toBeAccessible();
  });

  // ── className merge ────────────────────────────────────────
  it("merges custom className", () => {
    const { container } = render(<Switch className="custom-class" />);
    const switchEl = container.querySelector('[data-slot="switch"]');
    expect(switchEl?.className).toContain("custom-class");
  });
});

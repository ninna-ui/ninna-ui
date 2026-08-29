import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Calendar } from "./calendar";

describe("Calendar", () => {
  it("renders calendar grid and month header", () => {
    render(<Calendar defaultMonth={new Date(2026, 1, 1)} />);
    expect(screen.getByRole("grid")).toBeInTheDocument();
    expect(screen.getByText(/February 2026/)).toBeInTheDocument();
  });

  it("calls onValueChange when selecting a date", async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();
    render(
      <Calendar
        defaultMonth={new Date(2026, 1, 1)}
        onValueChange={onValueChange}
      />,
    );

    const targetDate = new Date(2026, 1, 14);
    const dayButton = screen.getByRole("button", {
      name: targetDate.toLocaleDateString(undefined, { dateStyle: "full" }),
    });
    await user.click(dayButton);
    await waitFor(() => {
      expect(onValueChange).toHaveBeenCalledWith(expect.any(Date));
    });
  });

  it("navigates month with next/previous buttons", async () => {
    const user = userEvent.setup();
    render(<Calendar defaultMonth={new Date(2026, 1, 1)} />);

    await user.click(screen.getByRole("button", { name: "Next month" }));
    await waitFor(() => {
      expect(screen.getByText(/March 2026/)).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: "Previous month" }));
    await waitFor(() => {
      expect(screen.getByText(/February 2026/)).toBeInTheDocument();
    });
  }, 15000);

  it("marks selected day with aria-selected", () => {
    render(
      <Calendar
        defaultMonth={new Date(2026, 1, 1)}
        value={new Date(2026, 1, 14)}
      />,
    );
    const dayButtons = screen.getAllByRole("button", { name: /14/ });
    expect(
      dayButtons.some(
        (button) => button.getAttribute("aria-selected") === "true",
      ),
    ).toBe(true);
  });

  describe("keyboard navigation", () => {
    it("Enter key selects the focused day", async () => {
      const user = userEvent.setup();
      const onValueChange = vi.fn();
      render(
        <Calendar
          defaultMonth={new Date(2026, 1, 1)}
          onValueChange={onValueChange}
        />,
      );
      const targetDate = new Date(2026, 1, 10);
      const dayButton = screen.getByRole("button", {
        name: targetDate.toLocaleDateString(undefined, { dateStyle: "full" }),
      });
      dayButton.focus();
      await user.keyboard("{Enter}");
      await waitFor(() => {
        expect(onValueChange).toHaveBeenCalledWith(expect.any(Date));
      });
    });

    it("Space key selects the focused day", async () => {
      const user = userEvent.setup();
      const onValueChange = vi.fn();
      render(
        <Calendar
          defaultMonth={new Date(2026, 1, 1)}
          onValueChange={onValueChange}
        />,
      );
      const targetDate = new Date(2026, 1, 5);
      const dayButton = screen.getByRole("button", {
        name: targetDate.toLocaleDateString(undefined, { dateStyle: "full" }),
      });
      dayButton.focus();
      await user.keyboard(" ");
      await waitFor(() => {
        expect(onValueChange).toHaveBeenCalledWith(expect.any(Date));
      });
    });

    it("selected date shows aria-selected=true and aria-pressed=true", () => {
      const selected = new Date(2026, 1, 20);
      render(<Calendar defaultMonth={new Date(2026, 1, 1)} value={selected} />);
      const btn = screen.getByRole("button", {
        name: selected.toLocaleDateString(undefined, { dateStyle: "full" }),
      });
      expect(btn).toHaveAttribute("aria-selected", "true");
      expect(btn).toHaveAttribute("aria-pressed", "true");
    });

    it("disabled dates cannot be selected", async () => {
      const user = userEvent.setup();
      const onValueChange = vi.fn();
      const disabledDate = new Date(2026, 1, 14);
      render(
        <Calendar
          defaultMonth={new Date(2026, 1, 1)}
          disabledDates={[disabledDate]}
          onValueChange={onValueChange}
        />,
      );
      const dayButton = screen.getByRole("button", {
        name: disabledDate.toLocaleDateString(undefined, { dateStyle: "full" }),
      });
      expect(dayButton).toBeDisabled();
      await user.click(dayButton);
      expect(onValueChange).not.toHaveBeenCalled();
    });
  });
});

/*
 * ## Findings
 *
 * - Arrow-key day navigation (ArrowLeft ±1 day, ArrowUp/Down ±7 days) is NOT implemented in calendar.tsx.
 *   The component uses button-click only for day selection and only button-click for month navigation.
 *   WAI-ARIA Calendar Grid pattern recommends roving tabIndex with arrow-key navigation.
 *   This is a known gap worth addressing in a future PR.
 */

/// <reference types="@ninna-ui/test-config/vitest.d.ts" />
import { describe, it, expect } from "vitest";
import { canUseDOM, getOwnerWindow } from "../src/dom";
import { KEYS } from "../src/keyboard";

describe("canUseDOM", () => {
  it("is true in jsdom environment", () => {
    expect(canUseDOM).toBe(true);
  });
});

describe("getOwnerWindow", () => {
  it("returns window for an attached DOM node", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    expect(getOwnerWindow(div)).toBe(window);
    document.body.removeChild(div);
  });

  it("returns window when passed null", () => {
    expect(getOwnerWindow(null)).toBe(window);
  });

  it("returns window when passed undefined", () => {
    expect(getOwnerWindow(undefined)).toBe(window);
  });
});

describe("KEYS", () => {
  it("exports all expected keyboard constants", () => {
    expect(KEYS.Enter).toBe("Enter");
    expect(KEYS.Space).toBe(" ");
    expect(KEYS.Escape).toBe("Escape");
    expect(KEYS.Tab).toBe("Tab");
    expect(KEYS.ArrowUp).toBe("ArrowUp");
    expect(KEYS.ArrowDown).toBe("ArrowDown");
    expect(KEYS.ArrowLeft).toBe("ArrowLeft");
    expect(KEYS.ArrowRight).toBe("ArrowRight");
    expect(KEYS.Home).toBe("Home");
    expect(KEYS.End).toBe("End");
    expect(KEYS.PageUp).toBe("PageUp");
    expect(KEYS.PageDown).toBe("PageDown");
    expect(KEYS.Backspace).toBe("Backspace");
    expect(KEYS.Delete).toBe("Delete");
  });

  it("values are non-empty strings", () => {
    for (const value of Object.values(KEYS)) {
      expect(typeof value).toBe("string");
      expect(value.length).toBeGreaterThan(0);
    }
  });
});

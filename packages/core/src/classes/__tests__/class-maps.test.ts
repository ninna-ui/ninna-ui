import { describe, it, expect } from "vitest";
import { COLORS } from "../../tokens";
import {
  BG_COLORS,
  TEXT_COLORS,
  BORDER_COLORS,
  STROKE_COLORS,
  MARKER_COLORS,
} from "../colors";
import {
  GAP_SIZES,
  ROW_GAP_SIZES,
  COLUMN_GAP_SIZES,
  GRID_COLUMNS,
  GRID_ROWS,
  FLEX_DIRECTION,
  FLEX_ALIGN,
  FLEX_JUSTIFY,
  FLEX_WRAP,
  getResponsiveGridCols,
} from "../layout";

/**
 * Contract tests for the Tailwind class maps every component package
 * builds on. A missing key or a hardcoded palette class here silently
 * breaks styling downstream.
 */

const COLOR_MAPS = {
  BG_COLORS,
  TEXT_COLORS,
  BORDER_COLORS,
  STROKE_COLORS,
  MARKER_COLORS,
} as const;

const LAYOUT_MAPS = {
  GAP_SIZES,
  ROW_GAP_SIZES,
  COLUMN_GAP_SIZES,
  GRID_COLUMNS,
  GRID_ROWS,
  FLEX_DIRECTION,
  FLEX_ALIGN,
  FLEX_JUSTIFY,
  FLEX_WRAP,
} as const;

const ALL_MAPS = { ...COLOR_MAPS, ...LAYOUT_MAPS } as const;

/** Hardcoded Tailwind palette classes are forbidden - only semantic tokens */
const HARDCODED_PALETTE =
  /\b(?:bg|text|border|stroke|ring|fill)-(?:red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|slate|gray|zinc|stone)-\d{2,3}\b/;

describe("color class maps", () => {
  describe.each(Object.entries(COLOR_MAPS))("%s", (_name, map) => {
    it("has an entry for every Color token", () => {
      for (const color of COLORS) {
        expect(map[color], `missing entry for color "${color}"`).toBeTruthy();
      }
      expect(Object.keys(map).sort()).toEqual([...COLORS].sort());
    });
  });
});

describe("all class maps", () => {
  describe.each(Object.entries(ALL_MAPS))("%s", (_name, map) => {
    it("contains only non-empty string values", () => {
      for (const [key, value] of Object.entries(map)) {
        expect(typeof value, `value for "${key}" must be a string`).toBe(
          "string",
        );
        expect(
          (value as string).trim().length,
          `value for "${key}" is empty`,
        ).toBeGreaterThan(0);
      }
    });

    it("contains no dark: prefixed classes (hard architecture rule)", () => {
      for (const [key, value] of Object.entries(map)) {
        expect(value, `"${key}" must not contain dark: classes`).not.toMatch(
          /(?:^|\s)dark:/,
        );
      }
    });

    it("contains no hardcoded palette colors", () => {
      for (const [key, value] of Object.entries(map)) {
        expect(
          value,
          `"${key}" must use semantic tokens, not palette colors`,
        ).not.toMatch(HARDCODED_PALETTE);
      }
    });
  });

  it("contains only valid Tailwind class tokens (no stray whitespace or separators)", () => {
    for (const [name, map] of Object.entries(ALL_MAPS)) {
      for (const [key, value] of Object.entries(map)) {
        const tokens = (value as string).split(" ");
        for (const token of tokens) {
          expect(
            token,
            `${name}.${key} contains an invalid class token`,
          ).toMatch(/^[a-z][\w:[\]/.-]*$/i);
        }
      }
    }
  });
});

describe("getResponsiveGridCols", () => {
  it("returns the fixed class for a numeric value", () => {
    expect(getResponsiveGridCols(3)).toBe("grid-cols-3");
  });

  it('returns the none class for "none"', () => {
    expect(getResponsiveGridCols("none")).toBe("grid-cols-none");
  });

  it("prefixes breakpoints for responsive maps, leaving base unprefixed", () => {
    expect(getResponsiveGridCols({ base: 1, md: 2, lg: 4 })).toBe(
      "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    );
  });

  it("returns an empty string for an empty responsive map", () => {
    expect(getResponsiveGridCols({})).toBe("");
  });
});

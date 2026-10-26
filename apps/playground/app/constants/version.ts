/**
 * Version constants for playground app
 * Centralized version management for playground documentation
 */

import corePackage from "@ninna-ui/core/package.json";

export const NINNA_UI_VERSION = corePackage.version;

export type NinnaUIVersion = typeof NINNA_UI_VERSION;

import { NINNA_UI_VERSION } from "~/constants/version;
import type { ComponentMeta } from "~/components/docs/types";

export const codeBlockMeta: ComponentMeta = {
  title: "CodeBlock",
  description:
    "A lightweight syntax-highlighted code block with copy-to-clipboard, line numbers, and automatic dark mode support. Zero external dependencies for syntax highlighting.",
  category: "Code Block",
  version: NINNA_UI_VERSION,
  status: "stable",
  source: {
    package: "@ninna-ui/code-block",
    importName: "CodeBlock",
  },
};


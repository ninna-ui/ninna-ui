import { useState, useMemo, forwardRef } from "react";
import { cn } from "@ninna-ui/utils";
import type { TokenType } from "./code-block.styles";
import type { CodeBlockProps } from "./code-block.types";

/**
 * Regex-based TSX/JSX syntax highlighter.
 * Returns an array of token segments instead of an HTML string,
 * so we can apply inline styles without dangerouslySetInnerHTML.
 */
interface TokenSegment {
  text: string;
  type: TokenType | null;
  italic?: boolean;
}

function tokenizeTsx(code: string): TokenSegment[][] {
  const TOKEN_REGEX = new RegExp(
    [
      "(?<blockComment>\\/\\*[\\s\\S]*?\\*\\/)",
      "(?<lineComment>\\/\\/[^\\n]*)",
      "(?<templateString>`[^`]*`)",
      "(?<quotedString>\"(?:\\\\.|[^\"\\\\])*\"|'(?:\\\\.|[^'\\\\])*')",
      "\\b(?<keyword>import|export|from|default|const|let|var|function|return|if|else|switch|case|break|for|while|do|try|catch|finally|throw|new|typeof|instanceof|void|delete|in|of|async|await|class|extends|super|this|static|get|set|yield|interface|type|enum|namespace|declare|as|is|keyof|readonly|abstract|implements|private|protected|public)\\b",
      "\\b(?<booleanLike>true|false|null|undefined|NaN|Infinity)\\b",
      "(?<numberLike>\\b\\d+(?:\\.\\d+)?\\b)",
      "(?<jsxClose>\\/>)",
      "(?<jsxGt>>)",
      "(?<tagOpen><\\/?)(?<tagName>[A-Za-z][\\w.-]*)",
      "\\b(?<attrName>[A-Za-z_:][\\w:.-]*)(?=\\s*=)",
      "\\b(?<componentName>[A-Z][A-Za-z0-9_]*)\\b(?=\\s*(?:\\(|<))",
    ].join("|"),
    "g"
  );

  const lines = code.split("\n");
  return lines.map((line) => {
    const segments: TokenSegment[] = [];
    let lastIndex = 0;

    for (const match of line.matchAll(TOKEN_REGEX)) {
      const groups = match.groups;
      if (!groups || match.index === undefined) continue;

      // Push plain text before this match
      if (match.index > lastIndex) {
        segments.push({ text: line.slice(lastIndex, match.index), type: null });
      }

      if (groups.blockComment || groups.lineComment) {
        segments.push({ text: match[0], type: "comment", italic: true });
      } else if (groups.templateString || groups.quotedString) {
        segments.push({ text: match[0], type: "string" });
      } else if (groups.keyword) {
        segments.push({ text: groups.keyword, type: "keyword" });
      } else if (groups.booleanLike) {
        segments.push({ text: groups.booleanLike, type: "boolean" });
      } else if (groups.numberLike) {
        segments.push({ text: groups.numberLike, type: "number" });
      } else if (groups.jsxClose || groups.jsxGt) {
        segments.push({ text: match[0], type: "punctuation" });
      } else if (groups.tagOpen && groups.tagName) {
        const tagClass: TokenType = /^[A-Z]/.test(groups.tagName) ? "component" : "tag";
        segments.push({ text: groups.tagOpen, type: "punctuation" });
        segments.push({ text: groups.tagName, type: tagClass });
      } else if (groups.attrName) {
        segments.push({ text: groups.attrName, type: "attr" });
      } else if (groups.componentName) {
        segments.push({ text: groups.componentName, type: "component" });
      } else {
        segments.push({ text: match[0], type: null });
      }

      lastIndex = match.index + match[0].length;
    }

    // Push remaining text
    if (lastIndex < line.length) {
      segments.push({ text: line.slice(lastIndex), type: null });
    }

    // Ensure empty lines render
    if (segments.length === 0) {
      segments.push({ text: "\n", type: null });
    }

    return segments;
  });
}

/**
 * Lightweight syntax-highlighted code block for TSX/JSX.
 * Embeds all token colors as CSS custom properties so no external CSS is needed.
 * Adapts to light/dark mode via the Ninna-UI theme system.
 *
 * @example
 * ```tsx
 * <CodeBlock code={`const x = 1;`} showLineNumbers />
 * ```
 */
export const CodeBlock = forwardRef<HTMLDivElement, CodeBlockProps>(
  function CodeBlock(
    { code, language = "tsx", showLineNumbers = false, showCopyButton = true, copyButtonAlwaysVisible = false, colorScheme = "auto", className, style, ...props },
    ref
  ) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    const shouldHighlight = language !== "text" && language !== "bash";
    const tokenizedLines = useMemo(
      () => shouldHighlight ? tokenizeTsx(code) : code.split("\n").map(line => [{ text: line || "\n", type: null as TokenType | null, italic: false }]),
      [code, shouldHighlight]
    );

    return (
      <div
        ref={ref}
        data-slot="code-block"
        data-color-scheme={colorScheme === "auto" ? undefined : colorScheme}
        className={cn("group relative rounded-lg overflow-hidden", className)}
        style={{
          background: "var(--ninna-cb-bg)",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "var(--ninna-cb-border)",
          color: "var(--ninna-cb-text)",
          ...style,
        }}
        {...props}
      >

        {showCopyButton && (
          <div
            data-slot="code-block-copy"
            className={cn(
              "absolute top-2 right-2 z-10 transition-opacity",
              copyButtonAlwaysVisible ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )}
          >
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center justify-center h-7 w-7 rounded-md backdrop-blur-sm transition-colors cursor-pointer"
              style={{
                background: "var(--ninna-cb-copy-bg)",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "var(--ninna-cb-copy-border)",
                color: "var(--ninna-cb-text)",
              }}
              aria-label={copied ? "Code copied" : "Copy code to clipboard"}
            >
              {copied ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
              )}
            </button>
          </div>
        )}

        <pre
          data-slot="code-block-pre"
          className="overflow-x-auto p-4 text-[13px] leading-relaxed font-mono"
        >
          <code data-slot="code-block-code">
            {tokenizedLines.map((segments, lineIdx) => (
              <div key={lineIdx} className="table-row">
                {showLineNumbers && (
                  <span
                    data-slot="code-block-line-number"
                    className="table-cell pr-4 text-right select-none text-xs w-8"
                    style={{ color: "var(--ninna-cb-line-num)" }}
                  >
                    {lineIdx + 1}
                  </span>
                )}
                <span className="table-cell">
                  {segments.map((seg, segIdx) =>
                    seg.type ? (
                      <span
                        key={segIdx}
                        style={{
                          color: `var(--ninna-cb-${seg.type})`,
                          fontStyle: seg.italic ? "italic" : undefined,
                        }}
                      >
                        {seg.text}
                      </span>
                    ) : (
                      <span key={segIdx}>{seg.text}</span>
                    )
                  )}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    );
  }
);

CodeBlock.displayName = 'CodeBlock';

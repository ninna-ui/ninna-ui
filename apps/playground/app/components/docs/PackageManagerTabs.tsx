import { Tabs } from "@ninna-ui/navigation";
import { CodeBlock } from "@ninna-ui/code-block";

interface PackageManagerTabsProps {
  packages: string[];
  devPackages?: string[];
}

function buildCommand(pm: "pnpm" | "npm" | "yarn", packages: string[], dev?: boolean): string {
  const flag = dev ? " -D" : "";
  const pkgs = packages.map((name) => name.startsWith("@ninna-ui/") && !name.includes("@", 1) ? name + "@latest" : name).join(" ");
  switch (pm) {
    case "pnpm":
      return `pnpm add${flag} ${pkgs}`;
    case "npm":
      return `npm install${flag} ${pkgs}`;
    case "yarn":
      return `yarn add${flag} ${pkgs}`;
  }
}

export function PackageManagerTabs({ packages, devPackages }: PackageManagerTabsProps) {
  return (
    <Tabs defaultValue="pnpm" className="min-w-0 rounded-md border border-base-200 bg-base-50" data-doc-install>
      <Tabs.List aria-label="Package manager" className="px-2 pt-1">
        <Tabs.Trigger value="pnpm">pnpm</Tabs.Trigger>
        <Tabs.Trigger value="npm">npm</Tabs.Trigger>
        <Tabs.Trigger value="yarn">yarn</Tabs.Trigger>
      </Tabs.List>

      {(["pnpm", "npm", "yarn"] as const).map((pm) => {
        const lines = packages.length ? [buildCommand(pm, packages)] : [];
        if (devPackages && devPackages.length > 0) {
          lines.push(buildCommand(pm, devPackages, true));
        }
        return (
          <Tabs.Content key={pm} value={pm}>
            <div className="space-y-2">
              {lines.map((line, i) => (
                <CodeBlock key={i} code={line} language="bash" copyButtonAlwaysVisible className="rounded-none border-0 bg-transparent" />
              ))}
            </div>
          </Tabs.Content>
        );
      })}
    </Tabs>
  );
}

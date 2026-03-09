import { ComponentHeader, ComponentSection, UsageExample, type ComponentSectionType } from "~/components/docs";
import { Button, Heading, Text, Badge, Code } from "@ninna-ui/primitives";
import { ArrowRight, Palette, Zap, Code2, Shield, Layers, Sun } from "lucide-react";
import { Link } from "react-router";
import { CodeBlock } from "@ninna-ui/code-block";
import { NINNA_UI_VERSION } from "~/constants/version";

const introductionMeta = {
  title: "Introduction",
  description: "Beautiful, accessible React components with simple theming. Zero-config dark mode, 5 built-in themes, 64+ components.",
  category: "Getting Started",
  version: NINNA_UI_VERSION,
  status: "stable" as const,
};

export const introductionSections: ComponentSectionType[] = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "why-ninna-ui", title: "Why Ninna UI", level: 2 },
  { id: "packages", title: "Packages", level: 2 },
  { id: "features", title: "Features", level: 2 },
  { id: "philosophy", title: "Design Philosophy", level: 2 },
  { id: "quick-start", title: "Quick Start", level: 2 },
];

const WHY_ITEMS = [
  { title: "One import, complete theme", desc: "A single CSS import gives you a full design system — colors, surfaces, dark mode, and all component styles. No configuration files, no token setup." },
  { title: "64+ production-ready components", desc: "Every component ships with proper ARIA attributes, keyboard navigation, focus management, and screen reader support. Accessibility is not an afterthought." },
  { title: "Radix primitives under the hood", desc: "Complex interactive widgets — Select, Checkbox, Radio, Switch, Slider, Tabs, Accordion — are built on battle-tested Radix UI primitives." },
  { title: "Zero JS runtime for theming", desc: "All theming is pure CSS variables. No JavaScript theme provider, no Emotion, no styled-components. Instant theme switching with zero re-renders." },
  { title: "Tailwind CSS v4 native", desc: "Built from the ground up for Tailwind v4. CSS-first configuration, @theme inline tokens, and full tree-shaking via @source directives." },
  { title: "data-slot deep customization", desc: "98 data-slot attributes across all components. Target any internal element with plain CSS — no component forks, no prop drilling." },
];

function WhySection() {
  return (
    <ComponentSection id="why-ninna-ui" title="Why Ninna UI" description="The principles that make Ninna UI the right choice for production React applications.">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {WHY_ITEMS.map((item) => (
          <div key={item.title} className="border border-base-200 rounded-lg p-5 bg-base-100">
            <Heading as="h3" size="sm" weight="semibold" className="text-primary mb-2">{item.title}</Heading>
            <Text size="sm" className="text-base-content/70 leading-relaxed">{item.desc}</Text>
          </div>
        ))}
      </div>
    </ComponentSection>
  );
}

const PACKAGES = [
  { name: "@ninna-ui/primitives", count: "14 components", color: true, desc: "Button, Badge, Avatar, Heading, Text, Link, Divider, Code, Kbd, and more." },
  { name: "@ninna-ui/feedback", count: "8 components", color: true, desc: "Alert, Toast, Progress, Loading, Skeleton, Status, EmptyState, CircularProgress." },
  { name: "@ninna-ui/forms", count: "17 components", color: true, desc: "Input, Select, Checkbox, Switch, Radio, Slider, FileUpload, Field, and more." },
  { name: "@ninna-ui/layout", count: "10 components", color: true, desc: "Box, Stack, Flex, Grid, Center, Container, Wrap, SimpleGrid, AspectRatio, Separator." },
  { name: "@ninna-ui/overlays", count: "5 components", color: true, desc: "Modal, Drawer, Popover, Tooltip, DropdownMenu." },
  { name: "@ninna-ui/navigation", count: "5 components", color: true, desc: "Tabs, Accordion, Breadcrumbs, Pagination, Stepper." },
  { name: "@ninna-ui/data-display", count: "7 components", color: true, desc: "Card, Stat, Table, DataTable, Timeline, Tree, Calendar." },
  { name: "@ninna-ui/code-block", count: "optional", color: false, desc: "Syntax-highlighted CodeBlock component with copy-to-clipboard and dark mode." },
  { name: "@ninna-ui/core", count: "auto-installed", color: false, desc: "Types, tokens, color maps, 5 built-in themes. Auto-installed as a direct dependency of all component packages." },
  { name: "@ninna-ui/cli", count: "scaffolding", color: true, desc: "npx @ninna-ui/cli init — scaffold a project with templates and themes." },
];

function PackagesSection() {
  return (
    <ComponentSection id="packages" title="Packages" description="Ninna UI is split into focused packages — install only what you need.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PACKAGES.map((pkg) => (
          <div key={pkg.name} className="border border-base-200 rounded-lg p-5 bg-base-100">
            <div className="flex items-center gap-2 mb-2">
              <Code color={pkg.color ? "primary" : undefined}>{pkg.name}</Code>
              <Badge size="sm" color={pkg.color ? "secondary" : "neutral"} variant="soft">{pkg.count}</Badge>
            </div>
            <Text size="sm" className="text-base-content/70">{pkg.desc}</Text>
          </div>
        ))}
      </div>
    </ComponentSection>
  );
}

const FEATURES = [
  { icon: Palette, color: "primary", title: "8 Semantic Colors", desc: "Primary, secondary, accent, neutral, success, danger, warning, info — each with auto-generated content contrast colors." },
  { icon: Zap, color: "success", title: "5 Component Variants", desc: "Solid, soft, outline, ghost, and text variants on interactive components. Consistent across all packages." },
  { icon: Code2, color: "secondary", title: "TypeScript First", desc: "Every component is fully typed. All props, variants, colors, and sizes get IntelliSense out of the box." },
  { icon: Sun, color: "warning", title: "Zero-Config Dark Mode", desc: "Dark mode via CSS variables. No dark: classes needed — the theme handles everything." },
  { icon: Shield, color: "accent", title: "Accessibility Built-in", desc: "ARIA attributes, keyboard navigation, focus management, and screen reader support on every component. Radix primitives for complex widgets." },
  { icon: Layers, color: "info", title: "data-slot Styling", desc: "98 data-slot attributes across all components. Target any inner element with CSS without modifying component code." },
] as const;

function FeaturesSection() {
  return (
    <ComponentSection id="features" title="Features" description="What makes Ninna UI stand out.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FEATURES.map(({ icon: Icon, color, title, desc }) => (
          <div key={title} className="border border-base-200 rounded-lg p-6 bg-base-100">
            <div className="flex items-center gap-3 mb-3">
              <div className={`p-2 bg-${color}/10 rounded-lg`}><Icon className={`size-5 text-${color}`} /></div>
              <Heading as="h3" size="base" weight="semibold">{title}</Heading>
            </div>
            <Text size="sm" className="text-base-content/70">{desc}</Text>
          </div>
        ))}
      </div>
    </ComponentSection>
  );
}

const PHILOSOPHY_ITEMS = [
  { color: "primary", title: "CSS-First Theming", desc: "One CSS import for a complete theme. No token configuration files, no JavaScript theme providers required. Just CSS variables — instant switching, zero re-renders." },
  { color: "success", title: "Production-Grade Components", desc: "Every component ships with proper accessibility, keyboard navigation, compound patterns, and comprehensive TypeScript props — built to the highest standard." },
  { color: "secondary", title: "Radix Under the Hood", desc: "Complex interactive components (Select, Checkbox, Radio, Switch, Slider) are built on Radix primitives for battle-tested accessibility and behavior." },
  { color: "warning", title: "Tree-Shakeable & Modular", desc: "Each package is independently installable with tree-shakeable exports. Only the components you import end up in your bundle." },
];

function PhilosophySection() {
  return (
    <ComponentSection id="philosophy" title="Design Philosophy" description="The principles behind Ninna UI.">
      <div className="space-y-5">
        {PHILOSOPHY_ITEMS.map((item) => (
          <div key={item.title} className={`border-l-4 border-${item.color} pl-4 py-2`}>
            <Heading as="h3" size="base" weight="semibold" className="mb-1">{item.title}</Heading>
            <Text size="sm" className="text-base-content/70">{item.desc}</Text>
          </div>
        ))}
      </div>
    </ComponentSection>
  );
}

function QuickStartSection() {
  return (
    <ComponentSection id="quick-start" title="Quick Start" description="Get up and running in under 2 minutes.">
      <div className="space-y-6">
        <div className="bg-linear-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-lg p-6">
          <Heading as="h3" size="lg" weight="semibold" className="mb-2">Option 1: CLI (Recommended)</Heading>
          <Text size="sm" className="text-base-content/70 mb-4">Scaffold a complete project with your preferred framework and theme.</Text>
          <CodeBlock code="npx @ninna-ui/cli init my-app" copyButtonAlwaysVisible />
        </div>
        <div>
          <Heading as="h3" size="lg" weight="semibold" className="mb-2">Option 2: Manual Setup</Heading>
          <UsageExample title="Install packages and configure your CSS" code={QUICK_START_CODE} />
        </div>
        <div className="flex flex-wrap gap-4">
          <Link to="/getting-started/installation"><Button color="primary" size="lg">Installation Guide<ArrowRight className="size-5 ml-2" /></Button></Link>
          <Link to="/getting-started/theming"><Button variant="outline" color="primary" size="lg">Theming Guide</Button></Link>
          <Link to="/primitives/button"><Button variant="ghost" color="primary" size="lg">View Components</Button></Link>
        </div>
      </div>
    </ComponentSection>
  );
}

const QUICK_START_CODE = `import { Button, Heading, Text, Badge } from "@ninna-ui/primitives";
import { Alert } from "@ninna-ui/feedback";
import { Input, Field } from "@ninna-ui/forms";
import { VStack, HStack } from "@ninna-ui/layout";

export default function App() {
  return (
    <VStack gap={6} className="p-8">
      <Heading as="h1" size="3xl">Welcome</Heading>
      <Text className="text-base-content/70">Get started with Ninna UI.</Text>
      
      <HStack gap={3}>
        <Button color="primary">Get Started</Button>
        <Button variant="outline" color="primary">Learn More</Button>
      </HStack>

      <Alert color="info" variant="soft">
        All components support 8 semantic colors and 5 variants.
      </Alert>
    </VStack>
  );
}`;

export function IntroductionView() {
  return (
    <div className="">
      <ComponentHeader meta={introductionMeta} />
      <div className="space-y-12">
        <ComponentSection
          id="overview"
          title="Overview"
          description="Ninna UI is a modern React component library built for production — accessible, themeable, and modular by design."
        >
          <div className="max-w-none space-y-4">
            <Text className="text-base-content/70 leading-relaxed">
              Built with <strong>React 19</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS v4</strong>, 
              Ninna UI provides 64+ production-ready components across 8 packages. The entire theme system is driven 
              by CSS variables — no complex token management, no JavaScript runtime for styling.
            </Text>
            <Text className="text-base-content/70 leading-relaxed">
              Switch between 5 built-in themes with a single CSS import. Dark mode works automatically via 
              <Code color="primary">prefers-color-scheme</Code>
              or class-based toggling. Every component uses <Code color="primary">data-slot</Code> attributes 
              for deep CSS customization without touching component internals.
            </Text>
          </div>
        </ComponentSection>

        <WhySection />

        <PackagesSection />

        <FeaturesSection />

        <PhilosophySection />

        <QuickStartSection />
      </div>
    </div>
  );
}

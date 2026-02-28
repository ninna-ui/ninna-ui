import { CodeBlock } from "@ninna-ui/code-block";

const code = `const greeting = "Hello, world!";
console.log(greeting);`;

export default function CustomStyle() {
  return (
    <div className="space-y-4">
      <CodeBlock code={code} className="border-primary/30" />
      <CodeBlock code={code} className="rounded-2xl shadow-lg" />
    </div>
  );
}

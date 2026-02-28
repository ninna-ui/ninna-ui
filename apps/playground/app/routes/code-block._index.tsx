import CodeBlockOverview, { codeBlockOverviewSections } from "~/views/code-block/overview";

export default function CodeBlockOverviewRoute() {
  return <CodeBlockOverview />;
}


export const handle = {
  sections: codeBlockOverviewSections,
};
import { Showcase } from "~/components/Showcase";

export function meta() {
  return [
    { title: "Ninna UI + React Router" },
    {
      name: "description",
      content: "A Ninna UI starter with React Router SSR.",
    },
  ];
}

export default function Index() {
  return <Showcase />;
}

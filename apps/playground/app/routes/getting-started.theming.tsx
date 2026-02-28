import ThemingView, { themingSections } from "~/views/getting-started/theming";

export default function Theming() {
  return <ThemingView />;
}


export const handle = {
  sections: themingSections,
};
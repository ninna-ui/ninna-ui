import AspectRatioView, { aspectRatioSections } from "~/views/layout/aspect-ratio";

export default function AspectRatioRoute() {
  return <AspectRatioView />;
}


export const handle = {
  sections: aspectRatioSections,
};
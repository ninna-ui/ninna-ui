import LinkOverlayView, { linkOverlaySections } from "~/views/primitives/link-overlay";

export default function LinkOverlayRoute() {
  return <LinkOverlayView />;
}


export const handle = {
  sections: linkOverlaySections,
};
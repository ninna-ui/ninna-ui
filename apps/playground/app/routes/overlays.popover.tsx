import PopoverView, { popoverSections } from "~/views/overlays/popover";
export default function PopoverRoute() { return <PopoverView />; }

export const handle = { sections: popoverSections };
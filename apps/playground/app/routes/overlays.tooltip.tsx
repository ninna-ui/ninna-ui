import TooltipView, { tooltipSections } from "~/views/overlays/tooltip";
export default function TooltipRoute() { return <TooltipView />; }

export const handle = { sections: tooltipSections };
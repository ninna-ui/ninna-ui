import StatView, { statSections } from "~/views/data-display/stat";
export default function StatRoute() { return <StatView />; }

export const handle = { sections: statSections };
import TimelineView, { timelineSections } from "~/views/data-display/timeline";
export default function TimelineRoute() { return <TimelineView />; }

export const handle = { sections: timelineSections };
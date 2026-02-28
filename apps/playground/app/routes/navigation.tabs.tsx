import TabsView, { tabsSections } from "~/views/navigation/tabs";
export default function TabsRoute() { return <TabsView />; }

export const handle = { sections: tabsSections };
import DrawerView, { drawerSections } from "~/views/overlays/drawer";
export default function DrawerRoute() { return <DrawerView />; }

export const handle = { sections: drawerSections };
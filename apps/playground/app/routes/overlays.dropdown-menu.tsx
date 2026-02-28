import DropdownMenuView, { dropdownMenuSections } from "~/views/overlays/dropdown-menu";
export default function DropdownMenuRoute() { return <DropdownMenuView />; }

export const handle = { sections: dropdownMenuSections };
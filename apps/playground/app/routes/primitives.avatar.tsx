import AvatarView, { avatarSections } from "~/views/primitives/avatar";

export default function AvatarRoute() {
  return <AvatarView />;
}


export const handle = {
  sections: avatarSections,
};
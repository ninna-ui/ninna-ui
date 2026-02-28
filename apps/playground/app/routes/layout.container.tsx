import ContainerView, { containerSections } from "~/views/layout/container";

export default function ContainerRoute() {
  return <ContainerView />;
}


export const handle = {
  sections: containerSections,
};
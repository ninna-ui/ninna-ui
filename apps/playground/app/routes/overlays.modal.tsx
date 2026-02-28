import ModalView, { modalSections } from "~/views/overlays/modal";

export default function ModalRoute() {
  return <ModalView />;
}


export const handle = {
  sections: modalSections,
};
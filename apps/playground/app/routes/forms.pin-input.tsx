import PinInputView, { pinInputSections } from "~/views/forms/pin-input";

export default function PinInputRoute() {
  return <PinInputView />;
}


export const handle = {
  sections: pinInputSections,
};
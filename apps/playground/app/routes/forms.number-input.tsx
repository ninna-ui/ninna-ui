import NumberInputView, { numberInputSections } from "~/views/forms/number-input";

export default function NumberInputRoute() {
  return <NumberInputView />;
}


export const handle = {
  sections: numberInputSections,
};
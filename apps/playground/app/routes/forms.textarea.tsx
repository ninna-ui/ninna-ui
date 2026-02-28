import TextareaView, { textareaSections } from "~/views/forms/textarea";

export default function Textarea() {
  return <TextareaView />;
}


export const handle = {
  sections: textareaSections,
};
import CircularProgressView, { circularProgressSections } from "~/views/feedback/circular-progress";

export default function CircularProgressRoute() {
  return <CircularProgressView />;
}


export const handle = {
  sections: circularProgressSections,
};
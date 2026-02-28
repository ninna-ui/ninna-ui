import IntroductionView, { introductionSections } from "~/views/getting-started/introduction";

export default function Index() {
  return <IntroductionView />;
}

export const handle = {
  sections: introductionSections,
};

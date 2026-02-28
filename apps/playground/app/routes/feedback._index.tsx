import FeedbackOverview, { feedbackOverviewSections } from "~/views/feedback/overview";

export default function FeedbackOverviewRoute() {
  return <FeedbackOverview />;
}


export const handle = {
  sections: feedbackOverviewSections,
};
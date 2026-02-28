import { Timeline } from "@ninna-ui/data-display";

export default function TimelineWithStatus() {
  return (
    <div className="w-[400px]">
      <Timeline>
        <Timeline.Item>
          <Timeline.Indicator status="success" />
          <Timeline.Connector />
          <Timeline.Content>
            <Timeline.Heading>Build Passed</Timeline.Heading>
            <Timeline.Description>All tests passed successfully.</Timeline.Description>
            <Timeline.Time>2 hours ago</Timeline.Time>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Indicator status="danger" />
          <Timeline.Connector />
          <Timeline.Content>
            <Timeline.Heading>Deploy Failed</Timeline.Heading>
            <Timeline.Description>Deployment to staging failed.</Timeline.Description>
            <Timeline.Time>1 hour ago</Timeline.Time>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Indicator status="warning" />
          <Timeline.Connector />
          <Timeline.Content>
            <Timeline.Heading>Review Needed</Timeline.Heading>
            <Timeline.Description>Code review requested.</Timeline.Description>
            <Timeline.Time>30 min ago</Timeline.Time>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Indicator status="primary" />
          <Timeline.Content>
            <Timeline.Heading>In Progress</Timeline.Heading>
            <Timeline.Description>Working on hotfix.</Timeline.Description>
            <Timeline.Time>Just now</Timeline.Time>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

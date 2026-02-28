import { Timeline } from "@ninna-ui/data-display";

export default function BasicTimeline() {
  return (
    <div className="w-[400px]">
      <Timeline>
        <Timeline.Item>
          <Timeline.Indicator />
          <Timeline.Connector />
          <Timeline.Content>
            <Timeline.Heading>Event Title</Timeline.Heading>
            <Timeline.Description>Details about this event.</Timeline.Description>
            <Timeline.Time>Jan 1, 2024</Timeline.Time>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Indicator />
          <Timeline.Connector />
          <Timeline.Content>
            <Timeline.Heading>Another Event</Timeline.Heading>
            <Timeline.Description>More details here.</Timeline.Description>
            <Timeline.Time>Jan 5, 2024</Timeline.Time>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Indicator />
          <Timeline.Content>
            <Timeline.Heading>Latest Event</Timeline.Heading>
            <Timeline.Description>Most recent activity.</Timeline.Description>
            <Timeline.Time>Jan 10, 2024</Timeline.Time>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

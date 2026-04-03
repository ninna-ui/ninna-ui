import { Timeline } from "@ninna-ui/data-display";

export default function TimelineWithStatus() {
  const statuses = ["neutral", "primary", "secondary", "accent", "info", "success", "warning", "danger"] as const;

  return (
    <div className="w-[500px]">
      <Timeline>
        {statuses.map((status, index) => (
          <Timeline.Item key={status}>
            <Timeline.Indicator status={status} />
            {index < statuses.length - 1 && <Timeline.Connector />}
            <Timeline.Content>
              <Timeline.Heading className="capitalize">{status} Event</Timeline.Heading>
              <Timeline.Description>
                Example of a timeline item with {status} status indicator.
              </Timeline.Description>
              <Timeline.Time>{index + 1} day ago</Timeline.Time>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
}

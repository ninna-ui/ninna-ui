import { Progress } from "@ninna-ui/feedback";

export default function Colors() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Progress value={60} color="neutral" />
      <Progress value={60} color="primary" />
      <Progress value={60} color="secondary" />
      <Progress value={60} color="accent" />
      <Progress value={60} color="info" />
      <Progress value={60} color="success" />
      <Progress value={60} color="warning" />
      <Progress value={60} color="danger" />
    </div>
  );
}

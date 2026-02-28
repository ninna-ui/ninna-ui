import { Progress } from "@ninna-ui/feedback";

export default function Basic() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Progress value={25} />
      <Progress value={50} />
      <Progress value={75} />
      <Progress value={100} />
    </div>
  );
}

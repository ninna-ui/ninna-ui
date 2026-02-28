import { Stat } from "@ninna-ui/data-display";

export default function BasicStat() {
  return (
    <Stat>
      <Stat.Label>Total Revenue</Stat.Label>
      <Stat.Value>$45,231</Stat.Value>
      <Stat.Trend direction="up">+20.1%</Stat.Trend>
    </Stat>
  );
}

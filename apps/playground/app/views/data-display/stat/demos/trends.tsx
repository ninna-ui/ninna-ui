import { Stat } from "@ninna-ui/data-display";

export default function StatTrends() {
  return (
    <div className="flex gap-8">
      <Stat>
        <Stat.Label>Revenue</Stat.Label>
        <Stat.Value>$45,231</Stat.Value>
        <Stat.Trend direction="up">+12.5%</Stat.Trend>
      </Stat>
      <Stat>
        <Stat.Label>Expenses</Stat.Label>
        <Stat.Value>$8,120</Stat.Value>
        <Stat.Trend direction="down">-3.2%</Stat.Trend>
      </Stat>
      <Stat>
        <Stat.Label>Bounce Rate</Stat.Label>
        <Stat.Value>32%</Stat.Value>
        <Stat.Trend direction="up" positiveIsGood={false}>+5.2%</Stat.Trend>
      </Stat>
    </div>
  );
}

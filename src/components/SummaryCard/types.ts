export type SummaryCardStyleType = "blueDark" | "blue";

export type SummaryCardProps = {
  title: string;
  value: number;
  percentage: number;
  color: SummaryCardStyleType;
};

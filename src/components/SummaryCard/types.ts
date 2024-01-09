export type SummaryCardStyleType = "blueDark" | "blue";

export type SummaryCardProps = {
  title: string;
  value: string;
  percentage: number;
  color: SummaryCardStyleType;
};

import Chart, { GoogleChartOptions } from "react-google-charts";
import * as S from "./styles";

export const MainChart = () => {
  const data = [
    ["month", "Sales", "Cost"],
    ["Jan", 1000, 400],
    ["Feb", 1170, 460],
    ["Mar", 660, 1120],
    ["Apr", 1030, 540],
    ["Jun", 1030, 540],
    ["Jul", 1030, 540],
    ["Aug", 1030, 540],
  ];

  const options: GoogleChartOptions = {
    isStacked: true,
    height: 300,
    legend: { position: "top", maxLines: 3 },
    titleTextStyle: { color: "#5C6CA5" },
    title: "Gross Sales",
    backgroundColor: "#222738",
    colors: ["blue", "green"],
    auraColor: "red",
  };

  return (
    <S.MainChartWrapper>
      <Chart
        chartType="AreaChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </S.MainChartWrapper>
  );
};

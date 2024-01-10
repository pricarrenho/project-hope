import Chart, { GoogleChartOptions } from "react-google-charts";
import * as S from "./styles";
import { useTheme } from "styled-components";

export const MainChart = () => {
  const theme = useTheme();

  console.log("aaa", theme.colors.green);
  const data = [
    ["month", "Sales", "Cost"],
    ["Jan", 99, 81],
    ["Feb", 90, 72],
    ["Mar", 99, 90],
    ["Apr", 90, 72],
    ["Jun", 99, 81],
    ["Jul", 90, 72],
    ["Aug", 99, 82],
  ];

  const options: GoogleChartOptions = {
    legend: { position: "top", textStyle: { color: theme.colors.blue[50] } },
    titleTextStyle: { color: theme.colors.blue[50] },
    title: "$855.8K",
    subtitle: "AAAA",
    backgroundColor: "#222738",
    areaOpacity: 0.04,
    vAxis: {
      gridlines: {
        color: "none", //tira as linhas horizontais
      },
      textStyle: { color: theme.colors.blue[50] },
    },
    series: {
      0: { color: theme.colors.blue[400] }, // Cor para a série "Sales"
      1: { color: theme.colors.blue[150] }, // Cor para a série "Cost"
    },
    hAxis: {
      textStyle: { color: theme.colors.blue[50] },
    },
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

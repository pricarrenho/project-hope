import Chart, { GoogleChartOptions } from "react-google-charts";
import { useTheme } from "styled-components";
import * as S from "./styles";
import { useGlobalContext } from "../../context/GlobalContext";

export const MainChart = () => {
  const { debouncedMenuState } = useGlobalContext();
  const theme = useTheme();

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
    title: "$855.8K",
    titleTextStyle: { color: theme.colors.white },
    backgroundColor: theme.colors.neutral[400],
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
    chartArea: { width: "90%", height: "70%", left: 60, top: 90 },
    animation: {
      startup: true,
      easing: "linear",
      duration: 1000,
    },
  };

  return (
    <S.MainChartWrapper>
      <Chart
        key={debouncedMenuState}
        chartType="AreaChart"
        width="100%"
        height="447px"
        data={data}
        options={options}
      />
    </S.MainChartWrapper>
  );
};

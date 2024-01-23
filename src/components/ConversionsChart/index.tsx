import Chart, { GoogleChartOptions } from "react-google-charts";
import { useTheme } from "styled-components";
import { useGlobalContext } from "../../context/GlobalContext";
import * as S from "./styles";

export const ConversionsChart = () => {
  const { debouncedMenuState } = useGlobalContext();
  const theme = useTheme();

  const data = [
    ["days", "Sales", "Cost"],
    ["S", 35, 45],
    ["M", 45, 116],
    ["T", 40, 80],
    ["W", 45, 120],
    ["T", 40, 80],
    ["F", 80, 125],
    ["S", 35, 45],
    ["M", 45, 116],
    ["T", 40, 80],
    ["W", 45, 120],
  ];

  const options: GoogleChartOptions = {
    backgroundColor: theme.colors.neutral[400],
    legend: { position: "none" },
    vAxis: {
      gridlines: {
        color: theme.colors.blue[50],
      },
      textStyle: { color: theme.colors.blue[50] },
      ticks: [0, 40, 80, 120, 160], // Define os valores dos ticks desejados
    },
    hAxis: {
      textStyle: { color: theme.colors.blue[50] },
    },
    series: {
      0: { color: theme.colors.blue[400] }, // Cor para a série "Sales"
      1: { color: theme.colors.blue[150] }, // Cor para a série "Cost"
    },
    isStacked: true,
    chartArea: { width: "86%", height: "76%", right: 40, left: 60, top: 40 },
    animation: {
      startup: true,
      easing: "linear",
      duration: 1000,
    },
  };

  return (
    <S.ConversionsChartWrapper>
      <S.Title>Conversions</S.Title>

      <Chart
        key={debouncedMenuState}
        chartType="ColumnChart"
        width="100%"
        height="343px"
        data={data}
        options={options}
      />
    </S.ConversionsChartWrapper>
  );
};

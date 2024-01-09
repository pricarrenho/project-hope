import { MainChart } from "../../components/MainChart";
import { SummaryCard } from "../../components/SummaryCard";
import * as S from "./styles";

export const Home = () => {
  return (
    <S.HomeWrapper>
      <S.SummaryCardContent>
        <SummaryCard
          title="Total Sales"
          value="560K"
          percentage={80}
          color="blueDark"
        />

        <SummaryCard
          title="Total Profit"
          value="185K"
          percentage={60}
          color="blue"
        />

        <SummaryCard
          title="Total Cost"
          value="375K"
          percentage={80}
          color="blueDark"
        />

        <SummaryCard
          title="Revenue"
          value="742K"
          percentage={60}
          color="blue"
        />

        <SummaryCard
          title="Net Income"
          value="150K"
          percentage={80}
          color="blueDark"
        />

        <SummaryCard title="Today" value="4600" percentage={60} color="blue" />
      </S.SummaryCardContent>

      <S.HomeContent>
        <S.HomeContentLeft>
          <MainChart />
        </S.HomeContentLeft>

        <S.HomeContentRight></S.HomeContentRight>
      </S.HomeContent>
    </S.HomeWrapper>
  );
};

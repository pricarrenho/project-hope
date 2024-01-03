import { SummaryCard } from "../../components/SummaryCard";
import * as S from "./styles";

export const Home = () => {
  return (
    <S.HomeWrapper>
      <S.SummaryCardContent>
        <SummaryCard title="Total Sales" value="560K" color="#3A57E8" />
        <SummaryCard title="Total Profit" value="185K" color="#08B1BA" />
        <SummaryCard title="Total Cost" value="375K" color="#3A57E8" />
        <SummaryCard title="Revenue" value="742K" color="#08B1BA" />
        <SummaryCard title="Net Income" value="150K" color="#08B1BA" />
        <SummaryCard title="Total" value="4600" color="#08B1BA" />
      </S.SummaryCardContent>
    </S.HomeWrapper>
  );
};

import { SummaryCard } from "../../components/SummaryCard";
import { MainChart } from "../../components/MainChart";
import { EarningsChart } from "../../components/EarningsChart";
import { ConversionsChart } from "../../components/ConversionsChart";
import { EnterpriseClientsCard } from "../../components/EnterpriseClientsCard";

import * as S from "./styles";
import { DebitCard } from "../../components/DabitCard";
import { VisitorsCard } from "../../components/VisitorsCard";

export const Home = () => {
  return (
    <S.HomeWrapper>
      <S.SummaryCardContent>
        <SummaryCard
          title="Total Sales"
          value={560}
          percentage={80}
          color="blueDark"
        />

        <SummaryCard
          title="Total Profit"
          value={185}
          percentage={60}
          color="blue"
        />

        <SummaryCard
          title="Total Cost"
          value={375}
          percentage={80}
          color="blueDark"
        />

        <SummaryCard title="Revenue" value={742} percentage={60} color="blue" />

        <SummaryCard
          title="Net Income"
          value={150}
          percentage={80}
          color="blueDark"
        />

        <SummaryCard title="Today" value={4600} percentage={60} color="blue" />
      </S.SummaryCardContent>

      <S.HomeContent>
        <MainChart />

        <S.ChartsContent>
          <EarningsChart percentageFashion={70} percentageAccessories={40} />

          <ConversionsChart />
        </S.ChartsContent>

        <EnterpriseClientsCard />

        <S.ChartsContent>
          <div>
            <DebitCard />
            <VisitorsCard />
          </div>

          <div>Card Activity</div>
        </S.ChartsContent>
      </S.HomeContent>
    </S.HomeWrapper>
  );
};

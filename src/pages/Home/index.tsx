import { SummaryCard } from "../../components/SummaryCard";
import { MainChart } from "../../components/MainChart";
import { EarningsChart } from "../../components/EarningsChart";
import { ConversionsChart } from "../../components/ConversionsChart";
import { EnterpriseClientsCard } from "../../components/EnterpriseClientsCard";

import * as S from "./styles";
import { DebitCard } from "../../components/DabitCard";
import { VisitorsCard } from "../../components/VisitorsCard";
import { ActivityCard } from "../../components/ ActivityCard";

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

        <S.FirstChartsContent>
          <EarningsChart percentageFashion={70} percentageAccessories={40} />

          <ConversionsChart />
        </S.FirstChartsContent>

        <EnterpriseClientsCard />

        <S.SecondChartsContent>
          <div>
            <DebitCard />
            <VisitorsCard />
          </div>

          <ActivityCard />
        </S.SecondChartsContent>
      </S.HomeContent>
    </S.HomeWrapper>
  );
};

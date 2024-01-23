import { EarningsChartProps } from "./types";

import * as S from "./styles";

export const EarningsChart = ({
  percentageFashion,
  percentageAccessories,
}: EarningsChartProps) => {
  return (
    <S.EarningsChartWrapper>
      <S.Title>Earnings</S.Title>

      <S.EarningsChartContent>
        <S.OuterBallFashion $percentageFashion={percentageFashion}>
          <S.InnerBall>
            <S.EarningsChartBackground>
              <S.OuterBallAccessories
                $percentageAccessories={percentageAccessories}
              >
                <S.InnerBall></S.InnerBall>
              </S.OuterBallAccessories>
            </S.EarningsChartBackground>
          </S.InnerBall>
        </S.OuterBallFashion>

        <S.SubtitleWrapper>
          <S.SubtitleContent>
            <S.Trace color="darkBlue"></S.Trace>

            <div>
              <S.Subtitle>Fashion</S.Subtitle>
              <S.SubtitleValue>251K</S.SubtitleValue>
            </div>
          </S.SubtitleContent>

          <S.SubtitleContent>
            <S.Trace color="blue"></S.Trace>

            <div>
              <S.Subtitle>Fashion</S.Subtitle>
              <S.SubtitleValue>251K</S.SubtitleValue>
            </div>
          </S.SubtitleContent>
        </S.SubtitleWrapper>
      </S.EarningsChartContent>
    </S.EarningsChartWrapper>
  );
};

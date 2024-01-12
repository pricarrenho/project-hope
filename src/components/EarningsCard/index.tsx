import { EarningsCardProps } from "./types";
import * as S from "./styles";

export const EarningsCard = ({
  percentageFashion,
  percentageAccessories,
}: EarningsCardProps) => {
  return (
    <S.EarningsCardWrapper>
      <S.Title>Earnings</S.Title>

      <S.EarningsCardContent>
        <S.OuterBallFashion percentageFashion={percentageFashion}>
          <S.InnerBall>
            <S.EarningsCardBackground>
              <S.OuterBallAccessories
                percentageAccessories={percentageAccessories}
              >
                <S.InnerBall></S.InnerBall>
              </S.OuterBallAccessories>
            </S.EarningsCardBackground>
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
      </S.EarningsCardContent>
    </S.EarningsCardWrapper>
  );
};

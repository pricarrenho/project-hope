import { SummaryCardProps } from "./types";
import { GoArrowUpRight } from "react-icons/go";
import * as S from "./styles";

export const SummaryCard = ({
  title,
  value,
  percentage,
  color,
}: SummaryCardProps) => {
  return (
    <S.SummaryCardWrapper>
      <S.OuterBall percentage={percentage} $styleType={color}>
        <S.InnerBall>
          <GoArrowUpRight color="#8A92A6 " size={36} />
        </S.InnerBall>
      </S.OuterBall>

      <S.SummaryCarContent>
        <S.Title>{title}</S.Title>
        <S.Value>${value}</S.Value>
      </S.SummaryCarContent>
    </S.SummaryCardWrapper>
  );
};

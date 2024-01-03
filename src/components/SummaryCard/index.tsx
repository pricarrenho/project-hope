import { SummaryCardProps } from "./types";
import { SummaryCardIcon } from "../../assets/svg/SummaryCardIcon";
import * as S from "./styles";

export const SummaryCard = ({ title, value, color }: SummaryCardProps) => {
  return (
    <S.SummaryCardWrapper>
      <SummaryCardIcon size={72} color={color} />

      <S.SummaryCarContent>
        <S.Title>{title}</S.Title>
        <S.Value>${value}</S.Value>
      </S.SummaryCarContent>
    </S.SummaryCardWrapper>
  );
};

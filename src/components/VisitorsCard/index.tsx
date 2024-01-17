import * as S from "./styles";

export const VisitorsCard = () => {
  return (
    <S.VisitorsCardWrapper>
      <S.VisitorsCardContent>
        <S.VisitorsCardTitle>750K</S.VisitorsCardTitle>
        <S.VisitorsCardSubtitle>Website Visitors</S.VisitorsCardSubtitle>
      </S.VisitorsCardContent>

      <S.Divisor />

      <S.VisitorsCardContent>
        <S.VisitorsCardTitle>7,500</S.VisitorsCardTitle>
        <S.VisitorsCardSubtitle>New Customers</S.VisitorsCardSubtitle>
      </S.VisitorsCardContent>
    </S.VisitorsCardWrapper>
  );
};

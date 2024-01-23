import styled, { css } from "styled-components";

export const HomeWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.neutral[500]};
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0px 36px 36px 36px;
  `}
`;

export const SummaryCardContent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin-top: -40px;
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const FirstChartsContent = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: 4fr 8fr;
`;

export const SecondChartsContent = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: 4fr 4fr;
`;

export const LeftSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

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
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: -40px;
`;

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ChartsContent = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: 2fr 3fr;
`;

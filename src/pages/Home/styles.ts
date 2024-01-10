import styled, { css } from "styled-components";

export const HomeWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.neutral[500]};
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0px 24px;
  `}
`;

export const SummaryCardContent = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  margin-top: -40px;
`;

export const HomeContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
`;

export const HomeContentLeft = styled.div``;

export const HomeContentRight = styled.div``;

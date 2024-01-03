import styled, { css } from "styled-components";

export const HomeWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.neutral[500]};
    flex: 1;
  `}
`;

export const SummaryCardContent = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  margin-top: -40px;
  padding: 0px 24px;
`;

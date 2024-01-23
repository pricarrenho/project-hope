import styled, { css } from "styled-components";

export const MainChartWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.neutral[400]};
    border-radius: 8px;
    overflow: hidden;
    height: 447px;
  `}
`;

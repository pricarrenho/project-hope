import styled, { css } from "styled-components";

export const ConversionsChartWrapper = styled.div`
  ${({ theme }) => css`
    border-radius: 8px;
    background-color: ${theme.colors.neutral[400]};
    overflow: hidden;
    position: relative;
  `}
`;

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[50]};
    font-size: ${theme.font.sizes.md};
    font-weight: 500;
    line-height: 175%;

    position: absolute;
    z-index: 1;
    top: 36px;
    left: 40px;
  `}
`;

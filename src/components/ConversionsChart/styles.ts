import styled, { css } from "styled-components";

export const ConversionsChartWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;

  flex: 1;

  position: relative;
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

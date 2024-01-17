import styled, { css } from "styled-components";

export const VisitorsCardWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 24px;
    justify-content: space-between;
    background-color: ${theme.colors.neutral[400]};
    border-radius: 8px;
  `}
`;

export const VisitorsCardContent = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
  `}
`;

export const Divisor = styled.div`
  ${({ theme }) => css`
    flex: -1;
    border: 1px solid ${theme.colors.neutral[250]};
  `}
`;

export const VisitorsCardTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[200]};
    font-size: ${theme.font.sizes.lg};
    font-weight: 500;
    line-height: 130%;
  `}
`;

export const VisitorsCardSubtitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.blue[50]};
    font-size: ${theme.font.sizes.md};
    font-weight: 400;
    line-height: 175%;
  `}
`;

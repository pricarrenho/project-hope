import styled, { css } from "styled-components";

export const FooterWrapper = styled.div`
  ${({ theme }) =>
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 36px;
      background: ${theme.colors.neutral[350]};
    `}
`;

export const FooterContentLeft = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    gap: 24px;
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[200]};
    font-size: ${theme.font.sizes.sm};
    font-weight: 400;
  `}
`;

export const TextLink = styled.a`
  ${({ theme }) =>
    css`
      color: ${theme.colors.blue[400]};
      font-size: ${theme.font.sizes.md};
    `}
`;

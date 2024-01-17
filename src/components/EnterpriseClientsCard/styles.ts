import styled, { DefaultTheme, css } from "styled-components";

export const EnterpriseClientsWrapper = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
  `}
`;

export const EnterpriseClientsHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.neutral[400]};
    padding: 24px;
    border: 1px solid ${theme.colors.black};
  `}
`;

export const EnterpriseClientsHeaderTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[50]};
    font-size: ${theme.font.sizes.md};
    font-weight: 500;
    line-height: 175%;
  `}
`;

export const EnterpriseClientsHeaderSubtitleWrapper = styled.h2`
  ${() =>
    css`
      display: flex;
      align-items: center;
      gap: 4px;
    `}
`;

export const EnterpriseClientsHeaderSubtitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    font-style: normal;
    font-weight: 400;
    line-height: 175%;
    color: ${theme.colors.neutral[200]};
  `}
`;

export const Table = styled.table`
  ${({ theme }) => css`
    border-collapse: collapse;
    color: ${theme.colors.neutral[200]};
    font-size: ${theme.font.sizes.sm};

    th,
    td {
      padding: 16px;
      text-align: left;
    }
  `}
`;

export const TBody = styled.tbody`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[50]};
    font-size: ${theme.font.sizes.sm};
    font-weight: 400;
    line-height: 175%;

    tr {
      background: ${theme.colors.neutral[400]};
      border-bottom: 1px solid ${theme.colors.neutral[300]};
    }

    tr:last-child {
      border-bottom: none;
    }
  `}
`;

type CompletionProps = {
  percentage: number;
};

const CompletionModifier = {
  blue: (theme: DefaultTheme, percentage: number) => css`
    background: linear-gradient(
      to right,
      ${theme.colors.blue[400]} 0% ${percentage}%,
      #455990 ${percentage}% 100%
    );
  `,

  green: (theme: DefaultTheme) => css`
    background: ${theme.colors.green[200]};
  `,
};

export const Completion = styled.div<CompletionProps>`
  ${({ theme, percentage }) => css`
    width: 100%;
    height: 10px;

    ${percentage === 100
      ? CompletionModifier.green(theme)
      : CompletionModifier.blue(theme, percentage)};
  `}
`;

export const ContactContainer = styled.td`
  ${() => css`
    display: flex;
  `}
`;

export const Contact = styled.div`
  ${({ theme }) =>
    css`
      width: 36px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      border: 2px solid ${theme.colors.blue[400]};
      background: ${theme.colors.blue[600]};

      margin-left: -10px;
      color: ${theme.colors.blue[400]};
      font-size: ${theme.font.sizes.sm};
      font-weight: 500;
      line-height: 175%;
    `}
`;

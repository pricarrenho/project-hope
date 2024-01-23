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

export const EnterpriseClientsHeaderSubtitleWrapper = styled.div`
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

    thead {
      background: ${theme.colors.neutral[300]};
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
  $percentage: number;
  $isCompleted: boolean;
};

const CompletionModifier = {
  completed: (theme: DefaultTheme) => css`
    background: ${theme.colors.green[200]};
  `,
};

export const Completion = styled.div<CompletionProps>`
  ${({ theme, $percentage, $isCompleted }) => css`
    width: 100%;
    height: 10px;
    background: linear-gradient(
      to right,
      ${theme.colors.blue[400]} 0% ${$percentage}%,
      ${theme.colors.neutral[200]} ${$percentage}% 100%
    );

    ${$isCompleted && CompletionModifier.completed(theme)};
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
      border: 2px solid ${theme.colors.neutral[100]};
      background: ${theme.colors.blue[550]};

      margin-left: -10px;
      color: ${theme.colors.neutral[100]};
      font-size: ${theme.font.sizes.sm};
      font-weight: 500;
      line-height: 175%;
    `}
`;

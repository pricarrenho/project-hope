import styled, { DefaultTheme, css } from "styled-components";
import { SummaryCardStyleType } from "./types";

export const SummaryCardWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;

    justify-content: center;
    align-items: center;
    padding: 16px;

    border-radius: 8px;
    background: ${theme.colors.neutral[400]};
    box-shadow: 0px 10px 30px 0px rgba(0, 0, 6, 0.15);
  `}
`;

export const SummaryCarContent = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.md};
    font-weight: 400;
    line-height: 175%;
    color: ${theme.colors.neutral[200]};
  `}
`;

export const Value = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    font-weight: 500;
    line-height: 175%;
    color: ${theme.colors.neutral[50]};
  `}
`;

type BorderProps = {
  $styleType: SummaryCardStyleType;
  percentage: number;
};

const BorderModifier = {
  blueDark: (percentage: number, theme: DefaultTheme) => css`
    background: conic-gradient(
      ${theme.colors.blue[400]} 0% ${percentage}%,
      ${theme.colors.neutral[200]} ${percentage}% 100%
    );
  `,
  blue: (percentage: number, theme: DefaultTheme) => css`
    background: conic-gradient(
      ${theme.colors.blue[150]} 0% ${percentage}%,
      ${theme.colors.neutral[200]} ${percentage}% 100%
    );
  `,
};

export const OuterBall = styled.div<BorderProps>`
  ${({ $styleType, percentage, theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: relative;

    ${$styleType && BorderModifier[$styleType](percentage, theme)};
  `}
`;

export const InnerBall = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 90%;

    background: ${theme.colors.neutral[400]};
    border-radius: 50%;
  `}
`;

import styled, { DefaultTheme, css } from "styled-components";
import { SummaryCardStyleType } from "./types";

export const SummaryCardWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;

    justify-content: center;
    align-items: center;
    padding: 24px;

    border-radius: 8px;
    background: ${theme.colors.neutral[400]};
    box-shadow: 0px 10px 30px 0px rgba(0, 0, 6, 0.15);
  `}
`;

export const SummaryCarIconContent = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 68px;
    height: 68px;
    border-left: 2px solid red;
    border-right: 2px solid red;
    border-bottom: 2px solid red;
    border-top: 2px solid gray;
    border-radius: 50%;
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
    font-size: 19px;
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

    width: 100px;
    height: 100px;
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

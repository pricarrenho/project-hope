import styled, { DefaultTheme, css } from "styled-components";

export const EarningsChartWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 40px;
    background-color: ${theme.colors.neutral[400]};
    padding: 32px;
    border-radius: 8px;
  `}
`;

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[50]};
    font-size: 19px;
    font-weight: 500;
    line-height: 175%;
  `}
`;

export const EarningsChartContent = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

export const SubtitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const SubtitleContent = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

type TraceProps = {
  color: "darkBlue" | "blue";
};

const TraceModifier = {
  darkBlue: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.blue[400]};
  `,
  blue: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.blue[150]};
  `,
};

export const Trace = styled.div<TraceProps>`
  ${({ color, theme }) => css`
    width: 28px;
    height: 2px;

    ${color && TraceModifier[color](theme)};
  `}
`;

export const Subtitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.blue[50]};
    font-size: 16px;
    font-weight: 400;
    line-height: 175%;
  `}
`;

export const SubtitleValue = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[200]};
    font-size: 16px;
    font-weight: 500;
    line-height: 175%;
  `}
`;

type BorderProps = {
  percentageFashion?: number;
  percentageAccessories?: number;
};

export const OuterBallFashion = styled.div<BorderProps>`
  ${({ percentageFashion, theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 150px;
    height: 150px;
    border-radius: 50%;
    position: relative;

    background: conic-gradient(
      ${theme.colors.blue[400]} 0% ${percentageFashion}%,
      ${theme.colors.neutral[200]} ${percentageFashion}% 100%
    );
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

export const EarningsChartBackground = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    background: ${theme.colors.neutral[400]};
    border-radius: 50%;
  `}
`;

export const OuterBallAccessories = styled.div<BorderProps>`
  ${({ theme, percentageAccessories }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 108px;
    height: 108px;
    border-radius: 50%;
    position: relative;

    background: conic-gradient(
      ${theme.colors.blue[150]} 0% ${percentageAccessories}%,
      ${theme.colors.neutral[200]} ${percentageAccessories}% 100%
    );
  `}
`;

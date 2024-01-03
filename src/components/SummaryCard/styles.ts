import styled, { css } from "styled-components";

export const SummaryCardWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
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

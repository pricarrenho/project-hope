import styled, { css } from "styled-components";

export const ActivityCardWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
    background: ${theme.colors.neutral[400]};
    border-radius: 8px;
  `}
`;

export const ActivityCardTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ActivityCardTitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.lg};
    font-weight: 500;
    line-height: 130%;
    color: ${theme.colors.neutral[50]};
  `}
`;

export const ActivityCardTitleSpan = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 4px;

    font-size: ${theme.font.sizes.md};
    font-weight: 400;
    line-height: 175%;
    color: ${theme.colors.blue[50]};
  `}
`;

export const ActivityCardContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

export const ActivityCardContentSpan = styled.span`
  ${({ theme }) => css`
    width: 20px;
    height: 20px;
    background-color: transparent;
    border: 1px solid ${theme.colors.blue[400]};
    border-radius: 50%;
  `}
`;

export const ActivityCardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ActivityCardContentTitle = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.md};
    font-weight: 400;
    line-height: 175%;
    color: ${theme.colors.neutral[50]};
  `}
`;

export const ActivityCardContentSubtitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.md};
    font-weight: 400;
    line-height: 175%;
    color: ${theme.colors.blue[50]};
  `}
`;

import styled, { css } from "styled-components";

export const DebitCardWrapper = styled.div`
  ${({ theme }) => css`
    //APAGAR DEPOIS
    margin-bottom: 16px;
    //APAGAR DEPOIS

    background-color: ${theme.colors.neutral[400]};
    border-radius: 8px;
  `}
`;

export const CardContainer = styled.div`
  ${({ theme }) => css`
    background: radial-gradient(
        circle at top left,
        #1964d3 39%,
        transparent 40%
      ),
      radial-gradient(circle at bottom right, #9ae5eb 39%, transparent 40%),
      ${theme.colors.neutral[450]};

    border-radius: 8px 8px 0px 0px;
    padding: 24px 32px;
    color: ${theme.colors.white};
  `}
`;

export const CardContent = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 48px;
    padding: 24px;

    border: 1px solid #1e2745;
    border-radius: 24px;
    background: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(32px);
  `}
`;

export const CardItems = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const CardNumber = styled.div`
  ${() => css`
    display: flex;
    gap: 28px;
  `}
`;

export const DataContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
  `}
`;

export const DataContent = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 48px;
  `}
`;

export const IconContent = styled.div`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${theme.colors.blue[550]};
  `}
`;

export const TotalProductsAndOrder = styled.div`
  ${() => css`
    display: flex;
    gap: 16px;
  `}
`;

export const TotalProductsAndOrderTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[50]};
    font-size: ${theme.font.sizes.md};
    font-weight: 400;
    line-height: 175%;
  `}
`;

export const TotalProductsAndOrderSubTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[200]};
    font-size: ${theme.font.sizes.sm};
    font-weight: 400;
    line-height: 130%;
  `}
`;

export const TotalValueTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[200]};
    font-size: ${theme.font.sizes.lg};
    font-weight: 500;
    line-height: 130%;
  `}
`;

export const TotalValueSubtitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.blue[200]};
    font-size: ${theme.font.sizes.md};
    font-weight: 400;
    line-height: 175%;
  `}
`;

export const TotalValueTag = styled.div`
  ${({ theme }) => css`
    padding: 4px 16px;

    background-color: ${theme.colors.green[200]};
    border-radius: 35px;

    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const TotalValueTagText = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.sm};
    font-weight: 400;
    line-height: 130%;
  `}
`;

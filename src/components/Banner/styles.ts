import styled, { css } from "styled-components";

export const BannerWrapper = styled.div`
  ${() => css`
    background: radial-gradient(
      36.28% 150.93% at 50% 50%,
      #3b8aff 0%,
      #0048b2 100%
    );
    border-radius: 0px 0px 16px 16px;
    height: 220px;
  `}
`;

export const BannerContainer = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    padding: 24px;
  `}
`;

export const BannerTextContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    width: 60%;
    gap: 8px;
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xl};
    font-weight: 700;
    color: ${theme.colors.white};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.lg};
    font-weight: 500;
    color: ${theme.colors.white};
  `}
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
`;

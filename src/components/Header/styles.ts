import styled, { css } from "styled-components";

export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.neutral[400]};
  `}
`;

export const LogoContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 257px;
    border-bottom: 2px solid ${theme.colors.neutral[300]};
  `}
`;

export const LogoImage = styled.img`
  ${() => css`
    width: 28px;
    height: 28px;
  `}
`;

export const LogoText = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xl};
    font-weight: 500;
    color: ${theme.colors.white};
    line-height: 130%;
  `}
`;

export const HeaderContent = styled.div`
  ${() => css`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 32px;
  `}
`;

export const HeaderLinks = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    gap: 16px;
  `}
`;

export const Avatar = styled.div`
  ${({ theme }) => css`
    width: 45px;
    height: 45px;
    border-radius: 30px;
    background-color: ${theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const Name = styled.p`
  ${({ theme }) => css`
    font-size: 16px;
    font-weight: 400;
    line-height: 175%;
    color: ${theme.colors.white};
  `}
`;

export const Career = styled.p`
  ${({ theme }) => css`
    font-size: 13px;
    font-weight: 400;
    line-height: 130%;
    color: ${theme.colors.white};
  `}
`;

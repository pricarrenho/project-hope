import styled, { css } from "styled-components";

export const HeaderWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.neutral[350]};
    height: 77px;
    padding: 0px 36px;
  `}
`;

export const HeaderContent = styled.div`
  ${() => css`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

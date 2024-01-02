import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: ${theme.colors.neutral[400]};
    filter: drop-shadow(8px 1px 100px ${theme.colors.neutral[300]});
    transition: max-width 0ms.2s;
  `}
`;

export const LogoContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border-bottom: 2px solid ${theme.colors.neutral[300]};
    padding: 16px;
    height: 40px;
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
    font-size: ${theme.font.sizes.lg};
    font-weight: 500;
    color: ${theme.colors.white};
    line-height: 130%;
  `}
`;

export const Btn = styled.button`
  ${({ theme }) => css`
    position: absolute;
    right: -16px;
    top: 22px;

    display: flex;
    justify-content: center;
    padding: 6px;
    border-radius: 33px;
    border: none;
    background-color: ${theme.colors.blue[400]};
    transition: 0.2s;

    &:hover {
      background-color: ${theme.colors.blue[500]};
    }
  `}
`;

export const SidebarContent = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 24px;
  `}
`;

export const Titles = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[100]};
    font-size: ${theme.font.sizes.md};
    font-weight: 600;
    line-height: 175%;
  `}
`;

export const SidebarButtonsContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `}
`;

export const LinkContainer = styled(Link)`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 8px 0px;
  `}
`;

export const LinkLeftContent = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    gap: 8px;
  `}
`;

export const LinkImage = styled.img`
  ${() => css``}
`;

export const LinkTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[200]};
    font-size: ${theme.font.sizes.md};
    font-weight: 400;
    line-height: 175%;
  `}
`;

export const Divisor = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.neutral[250]};
    width: 100%;
    height: 1px;
  `}
`;

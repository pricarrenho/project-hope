import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

type SidebarWrapperProps = {
  isOpen: boolean;
};

export const SidebarWrapper = styled.div<SidebarWrapperProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: ${theme.colors.neutral[400]};
    width: 72px;
    transition: width 0.3s ease;

    ${isOpen &&
    css`
      width: 220px;
    `}
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
    height: 44px;
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

    height: 36px;
  `}
`;

export const LinkImage = styled.img`
  ${() => css``}
`;

type LinkTitleProps = {
  isVisible: boolean;
};

export const LinkTitle = styled.p<LinkTitleProps>`
  ${({ theme, isVisible }) => css`
    color: ${theme.colors.neutral[200]};
    font-size: ${theme.font.sizes.md};
    font-weight: 400;
    line-height: 175%;
    overflow: hidden;
    max-height: 0px;
    max-width: 0px;
    opacity: 0;
    transition: max-width 0.3s, max-height 0.3s, opacity 0.3s;

    ${isVisible &&
    css`
      max-height: 40px;
      max-width: 200px;
      opacity: 1;
      transition: max-width 0.3s, max-height 0s 0.2s, opacity 0.3s;
    `};
  `}
`;

export const Divisor = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.neutral[250]};
    width: 100%;
    height: 1px;
  `}
`;

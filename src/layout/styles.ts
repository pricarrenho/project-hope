import styled, { css } from "styled-components";

export const LayoutContainer = styled.div`
  ${() => css`
    display: flex;
    position: relative;
    overflow: hidden;
  `}
`;

export const RightContent = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
  `}
`;

export const MainContainer = styled.div`
  ${() => css`
    height: calc(100vh - 77px);
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 0.1em;
    }
  `}
`;

export const Overlay = styled.div`
  ${() => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 99998;

    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const Modal = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue[50]};
    width: 250px;
    height: 250px;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 36px;
    border-radius: 4px;

    text-align: center;
    font-size: ${theme.font.sizes.lg};
    line-height: 36px;
    color: ${theme.colors.neutral[500]};
  `}
`;

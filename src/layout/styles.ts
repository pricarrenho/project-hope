import styled, { css } from "styled-components";

export const LayoutContainer = styled.div`
  ${() => css`
    display: flex;
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

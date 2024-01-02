import styled, { css } from "styled-components";

export const LayoutContainer = styled.div`
  ${() => css`
    display: flex;
  `}
`;

export const RightContent = styled.div`
  ${() => css`
    flex: 1;
    display: flex;
    flex-direction: column;
  `}
`;

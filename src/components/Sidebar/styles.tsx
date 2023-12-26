import styled, { css } from "styled-components";

export const SidebarContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 4px;
    background-color: ${theme.colors.neutral[400]};
    width: 257px;
  `}
`;

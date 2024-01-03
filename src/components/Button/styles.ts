import styled, { css } from "styled-components";
import { ButtonStyleType } from "./types";

type WrapperProps = {
  $styleType: ButtonStyleType;
};

const WrapperModifier = {
  transparent: () => css`
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 30px 0px rgba(0, 0, 6, 0.15);
    padding: 8px 24px;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  `,
  justIcon: () =>
    css`
      background: transparent;
      padding: 4px 8px;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    `,
};

export const ButtonWrapper = styled.button<WrapperProps>`
  ${({ $styleType, theme }) => css`
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.2s;

    color: ${theme.colors.white};
    text-align: center;
    font-size: ${theme.font.sizes.md};
    font-weight: 400;

    ${$styleType && WrapperModifier[$styleType]()};
  `}
`;

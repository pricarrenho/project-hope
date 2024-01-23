import styled, { DefaultTheme, css } from "styled-components";
import { ButtonStyleType } from "./types";

type WrapperProps = {
  $styleType: ButtonStyleType;
};

const WrapperModifier = {
  transparent: () => css`
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 30px 0px rgba(0, 0, 6, 0.15);

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  `,
  justIcon: () =>
    css`
      background: transparent;
      padding: 8px 16px;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    `,
  blue: (theme: DefaultTheme) =>
    css`
      background: ${theme.colors.blue[400]};

      &:hover {
        background: ${theme.colors.blue[500]};
      }
    `,
  blueLight: (theme: DefaultTheme) =>
    css`
      background: ${theme.colors.green[200]};

      &:hover {
        background: ${theme.colors.green[300]};
      }
    `,
};

export const ButtonWrapper = styled.button<WrapperProps>`
  ${({ $styleType, theme }) => css`
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.4s;

    color: ${theme.colors.white};
    text-align: center;
    font-size: ${theme.font.sizes.md};
    font-weight: bold;

    ${$styleType && WrapperModifier[$styleType](theme)};
  `}
`;

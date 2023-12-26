import styled, { css } from "styled-components";

export const InputContainer = styled.div`
  ${() => css`
    display: flex;
    gap: 8px;
    align-items: center;
    position: relative;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    padding: 12px 16px 12px 48px;
    background-color: ${theme.colors.neutral[400]};
    border: 1px solid #30384f;
    border-radius: 4px;

    &::placeholder {
      font-size: ${theme.font.sizes.md};
      color: ${theme.colors.neutral[100]};
      font-weight: 400;
      line-height: 175%;
    }
  `}
`;

export const IconContainer = styled.div`
  ${() => css`
    position: absolute;
    bottom: 50%;
    transform: translateY(50%);
    left: 16px;
  `}
`;

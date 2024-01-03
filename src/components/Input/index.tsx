import { LuSearch } from "react-icons/lu";
import { InputProps } from "./types";
import * as S from "./styles";

export const Input = ({ inputType, label, name }: InputProps) => {
  return (
    <S.InputWrapper>
      <S.IconContainer>
        <LuSearch color="#ADB5BD" size={24} />
      </S.IconContainer>

      <S.Input id={name} name={name} type={inputType} placeholder={label} />
    </S.InputWrapper>
  );
};

import { FaMicrophoneAlt } from "react-icons/fa";
import { GoBellFill } from "react-icons/go";
import { IoIosMail } from "react-icons/io";
import { ButtonProps } from "./types";
import * as S from "./styles";

export const Button = ({
  children,
  styleType,
  icon,

  ...props
}: ButtonProps) => {
  const icons = {
    microphone: <FaMicrophoneAlt size={24} color="#ffffff" />,
    bell: <GoBellFill size={24} color="#8A92A6" />,
    mail: <IoIosMail size={24} color="#8A92A6" />,
  };

  return (
    <S.WrapperButton $styleType={styleType} {...props}>
      {icon && icons[icon]} {children}
    </S.WrapperButton>
  );
};

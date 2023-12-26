import { GoBellFill } from "react-icons/go";
import { IoIosMail } from "react-icons/io";
import { FcBusinessman } from "react-icons/fc";
import { Input } from "../Input";
import logo from "../../assets/images/logo.png";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.LogoContainer>
        <S.LogoImage
          src={logo}
          alt="Logo da hope UI. Traços azuis conectados formando uma hashtag "
        />
        <S.LogoText>Hope UI</S.LogoText>
      </S.LogoContainer>

      <S.HeaderContent>
        <Input inputType="text" label="Search..." name="inputSearch" />

        <S.HeaderLinks>
          <GoBellFill size={24} />

          <IoIosMail size={24} />

          <S.HeaderLinks>
            <S.Avatar>
              <FcBusinessman size={24} />
            </S.Avatar>

            <div>
              <S.Name>Austin Robertson</S.Name>
              <S.Career>Marketing Administrator</S.Career>
            </div>
          </S.HeaderLinks>
        </S.HeaderLinks>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};

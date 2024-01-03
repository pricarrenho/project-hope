import { FcBusinessman } from "react-icons/fc";
import { Input } from "../Input";
import * as S from "./styles";
import { Button } from "../Button";

export const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        <Input inputType="text" label="Search..." name="inputSearch" />

        <S.HeaderLinks>
          <Button icon="bell" styleType="justIcon" />

          <Button icon="mail" styleType="justIcon" />

          <S.HeaderLinks>
            <S.Avatar>
              <FcBusinessman size={36} />
            </S.Avatar>

            <div>
              <S.Name>Austin Robertson</S.Name>
              <S.Career>Marketing Administrator</S.Career>
            </div>
          </S.HeaderLinks>
        </S.HeaderLinks>
      </S.HeaderContent>
    </S.HeaderWrapper>
  );
};

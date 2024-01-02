import { Button } from "../Button";
import * as S from "./styles";

export const Banner = () => {
  return (
    <S.BannerWrapper>
      <S.BannerContainer>
        <S.BannerTextContainer>
          <S.Title>Hello Devs !</S.Title>
          <S.Description>
            We are on a mission to help developers like you to build beautiful
            projects for free.
          </S.Description>
        </S.BannerTextContainer>

        <S.ButtonContent>
          <Button styleType="transparent" icon="microphone">
            Announcments
          </Button>
        </S.ButtonContent>
      </S.BannerContainer>
    </S.BannerWrapper>
  );
};

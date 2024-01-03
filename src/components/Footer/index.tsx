import * as S from "./styles";

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <S.FooterWrapper>
      <S.FooterContentLeft>
        <S.Text>Privacy Policy</S.Text>
        <S.Text>Terms of Use</S.Text>
      </S.FooterContentLeft>

      <S.Text>
        © {year} Hope UI, Made with ❤ by{" "}
        <S.TextLink href="https://pricarrenho.com.br">Pri Carrenho</S.TextLink>.
      </S.Text>
    </S.FooterWrapper>
  );
};

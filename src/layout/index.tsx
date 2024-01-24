import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Routes } from "../routes";
import { useWindowResize } from "../hooks/useWindowResize";
import * as S from "./styles";

export const Layout = () => {
  const { windowSize } = useWindowResize();

  const showModal = windowSize < 300;

  return (
    <S.LayoutContainer>
      <Sidebar />

      <S.RightContent>
        <Header />

        <S.MainContainer>
          <Banner />

          <Routes />

          <Footer />
        </S.MainContainer>
      </S.RightContent>

      {showModal && (
        <S.Overlay>
          <S.Modal>
            Funcionalidade não disponível para telas menores que 1030px
          </S.Modal>
        </S.Overlay>
      )}
    </S.LayoutContainer>
  );
};

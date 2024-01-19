import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Routes } from "../routes";
import * as S from "./styles";

export const Layout = () => {
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
    </S.LayoutContainer>
  );
};

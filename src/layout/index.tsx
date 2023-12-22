import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Routes } from "../routes";
import * as S from "./styles";

export const Layout = () => {
  return (
    <div>
      <Header />

      <S.LayoutContent>
        <Sidebar />

        <div>
          <Routes />
        </div>
      </S.LayoutContent>
    </div>
  );
};

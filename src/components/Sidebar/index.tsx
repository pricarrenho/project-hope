import { Link } from "react-router-dom";
import * as S from "./styles";

export const Sidebar = () => {
  return (
    <S.SidebarContainer>
      <p>Sidebar</p>

      <Link to="/">Home</Link>
      <Link to="/menu-style">Menu Style</Link>
    </S.SidebarContainer>
  );
};

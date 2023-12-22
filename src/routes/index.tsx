import { Route, Routes as RouteLib } from "react-router-dom";
import { Home } from "../pages/Home";
import { MenuStyle } from "../pages/MenuStyle";

export const Routes = () => {
  return (
    <RouteLib>
      <Route path="/" element={<Home />} />
      <Route path="/menu-style" element={<MenuStyle />} />
    </RouteLib>
  );
};

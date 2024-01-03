import logo from "../../assets/images/logo.png";
import category from "../../assets/images/category.png";
import menuStyle from "../../assets/images/menuStyle.png";
import example from "../../assets/images/example.png";
import widgets from "../../assets/images/widgets.png";
import maps from "../../assets/images/maps.png";
import authentication from "../../assets/images/authentication.png";
import user from "../../assets/images/user.png";
import error404 from "../../assets/images/error404.png";
import error505 from "../../assets/images/error505.png";
import maintence from "../../assets/images/maintence.png";
import components from "../../assets/images/components.png";
import form from "../../assets/images/form.png";
import table from "../../assets/images/table.png";
import icons from "../../assets/images/icons.png";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

import * as S from "./styles";
import { useState } from "react";

const SidebarLibrary = [
  [
    { title: "Home" },
    {
      name: "Dashboard",
      icons: category,
      route: "/",
    },
    {
      name: "Menu Style",
      icons: menuStyle,
      route: "/menu-style",
    },
  ],

  [
    { title: "Page" },
    {
      name: "Example",
      icons: example,
      route: "/",
    },
    {
      name: "Widgets",
      icons: widgets,
      route: "/",
    },
    {
      name: "Maps",
      icons: maps,
      route: "/",
    },
    {
      name: "Authentication",
      icons: authentication,
      route: "/",
    },
    {
      name: "Users",
      icons: user,
      route: "/",
    },
    {
      name: "Error 404",
      icons: error404,
      route: "/",
    },
    {
      name: "Error 505",
      icons: error505,
      route: "/",
    },
    {
      name: "Maintence",
      icons: maintence,
      route: "/",
    },
  ],

  [
    { title: "Elements" },
    {
      name: "Components",
      icons: components,
      route: "/",
    },
    {
      name: "Form",
      icons: form,
      route: "/",
    },
    {
      name: "Table",
      icons: table,
      route: "/",
    },
    {
      name: "Icons",
      icons: icons,
      route: "/",
    },
  ],
];

export const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleCloseMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <S.SidebarWrapper>
      <S.LogoContainer>
        <S.LogoImage
          src={logo}
          alt="Logo da hope UI. Traços azuis conectados formando uma hashtag "
        />

        {isMenuOpen && <S.LogoText>Hope UI</S.LogoText>}
      </S.LogoContainer>

      <S.Btn onClick={handleCloseMenu}>
        <FaArrowLeft size={18} color="#ffffff" />
      </S.Btn>

      <S.SidebarContent>
        {SidebarLibrary.map((item, index) => (
          <div key={index}>
            {item.map((value, index) => (
              <div key={index}>
                {value.title && isMenuOpen && (
                  <S.Titles>{value.title}</S.Titles>
                )}

                <S.SidebarButtonsContainer>
                  {value.route && (
                    <S.LinkContainer to={value.route}>
                      <S.LinkLeftContent>
                        <S.LinkImage src={value.icons} />

                        {isMenuOpen && <S.LinkTitle>{value.name}</S.LinkTitle>}
                      </S.LinkLeftContent>

                      {isMenuOpen && <IoIosArrowForward color="#8A92A6" />}
                    </S.LinkContainer>
                  )}
                </S.SidebarButtonsContainer>
              </div>
            ))}

            <S.Divisor />
          </div>
        ))}
      </S.SidebarContent>
    </S.SidebarWrapper>
  );
};

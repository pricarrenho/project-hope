import logo from "../../assets/images/logo.png";
import category from "../../assets/images/category.png";
import menuStyle from "../../assets/images/menuStyle.png";
import example from "../../assets/images/example.png";
import widgets from "../../assets/images/widgets.png";
import maps from "../../assets/images/maps.png";
import user from "../../assets/images/user.png";
import error404 from "../../assets/images/error404.png";
import error505 from "../../assets/images/error505.png";
import maintence from "../../assets/images/maintence.png";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useGlobalContext } from "../../context/GlobalContext";
import * as S from "./styles";

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
      route: "/",
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
];

export const Sidebar = () => {
  const { isMenuOpen, handleMenuIsOpen } = useGlobalContext();

  const handleCloseMenu = () => {
    handleMenuIsOpen(!isMenuOpen);
  };

  return (
    <S.SidebarWrapper $isOpen={isMenuOpen}>
      <S.LogoContainer>
        <S.LogoImage
          src={logo}
          alt="Logo da hope UI. Traços azuis conectados formando uma hashtag "
        />

        {isMenuOpen && <S.LogoText>Hope UI</S.LogoText>}
      </S.LogoContainer>

      <S.Btn onClick={handleCloseMenu}>
        {isMenuOpen ? (
          <FaArrowLeft size={18} color="#ffffff" />
        ) : (
          <FaArrowRight size={18} color="#ffffff" />
        )}
      </S.Btn>

      <S.SidebarContent>
        {SidebarLibrary.map((item, index) => (
          <div key={index}>
            {item.map((value, index) => (
              <div key={index}>
                <S.SidebarButtonsContainer>
                  {value.route && (
                    <S.LinkContainer to={value.route}>
                      <S.LinkLeftContent>
                        <S.LinkImage src={value.icons} />

                        <S.LinkTitle $isVisible={isMenuOpen}>
                          {value.name}
                        </S.LinkTitle>
                      </S.LinkLeftContent>

                      <IoIosArrowForward color="#8A92A6" />
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

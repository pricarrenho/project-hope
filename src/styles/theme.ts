const colors = {
  black: "#13131A",
  white: "#FFFFFF",
  blue: {
    50: "#5C6CA5",
    100: "#85F4FA",
    150: "#85C5FA",
    200: "#08B1BA",
    300: "#369BFF",
    400: "#3A57E8",
    500: "#0048B2",
    550: "#263056",
    600: "#001F4D",
  },
  green: {
    100: "#409900",
    200: "#1AA053",
    300: "#18723d",
  },
  neutral: {
    50: "#D3D3D3",
    100: "#ADB5BD",
    200: "#8A92A6",
    250: "#343948",
    300: "#30384F",
    350: "#262c42",
    400: "#222738",
    450: "#21293F",
    500: "#151824",
  },
};

const font = {
  family: "Inter",
  sizes: {
    ssm: "0.625rem", //10px
    sm: "0.875rem", //14px
    md: "1rem", //16px
    lg: "1.5rem", //24px
    xl: "2rem", //33px
    xxl: "2.5rem", //40px
  },
};

export const themeDefault = {
  colors: {
    ...colors,
    background: colors.neutral[500],
  },
  font,
};

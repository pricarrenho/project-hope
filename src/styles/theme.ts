const colors = {
  black: "#13131A",
  white: "#FFFFFF",
  blue: {
    100: "#85F4FA",
    200: "#08B1BA",
    300: "#369BFF",
    400: "#3A57E8",
    500: "#0048B2",
    600: "#001F4D",
  },
  green: {
    100: "#409900",
    200: "#1AA053",
  },
  neutral: {
    100: "#ADB5BD",
    200: "#8A92A6",
    300: "#30384F",
    400: "#222738",
  },
};

const font = {
  sizes: {
    ssm: "1rem",
    sm: "1.4rem",
    md: "1.6rem",
    lg: "2.4rem",
    xl: "3.3rem",
    xxl: "6.4rem",
  },
};

export const themeDefault = {
  colors: {
    ...colors,
    background: colors.neutral[400],
  },
  font,
};

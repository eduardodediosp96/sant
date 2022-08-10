export const spacing = (qty: number) => `${qty}rem`;
export const fontFamily = "Roboto";
export const palette = {
  white: "white",
  black: "black",
  main: "#D87D4A",
  gray: "#F1F1F1",
};
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const theme = {
  palette: palette,
  shadow: {
    0: `0px 0px 0px ${palette.main}`,
    1: `0px 0px 5px ${palette.main}`,
    2: `0px 0px 10px ${palette.main}`,
    3: `0px 0px 20px ${palette.main}`,
  },
  mediaQueries: {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
  },
  spacing: (qty: number) => `${qty}rem`,
  // fontSource: 'https://fonts.googleapis.com/css?family=Poppins:400,600',
  fontFamily: "Poppins, sans-serif",
};

export default theme;

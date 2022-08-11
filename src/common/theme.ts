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
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`,
  },
  spacing: (qty: number) => `${qty}rem`,
  // fontSource: 'https://fonts.googleapis.com/css?family=Poppins:400,600',
  fontFamily: "Poppins, sans-serif",
};

export default theme;

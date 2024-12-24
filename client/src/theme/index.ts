import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      900: "#6B49F2",
      800: "#cec2ff",
      700: "#322183",
      600: "#432AAA",
      500: "#5638D0",
      400: "#6B49F2",
      300: "#8E64F6",
      200: "#AD84F9",
      100: "#edf2f6",
      50:  "#cec2ff"
    },
    secondary: {
      900: "#59231A",
      800: "#833524",
      700: "#AA452D",
      600: "#D05738",
      500: "#F26B49",
      400: "#F47764",
      300: "#F79784",
      200: "#FABAA9",
      100: "#FCDDD1",
      50: "#FEF2ED"
    }
  },
  components: {
    Tabs: {
      baseStyle: {
        tab: {
          marginLeft: "18px",
          border: "none",
          _hover: {
            border: "none",
          },
          _selected: {
            border: "none",
          },
          _active: {
            border: "none",
          },
          _focus: {
            border: "none",
          },
          _blur: {
            border: "none",
          },
          _nthOfType: {
            "&:nth-of-type(odd)": {
              marginLeft: "",
            },
          },
        },
      },
    },
  },
});

export default theme;

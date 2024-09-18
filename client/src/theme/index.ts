import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
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

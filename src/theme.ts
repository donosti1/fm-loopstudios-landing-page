import {extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      body: {
        color: "blackAlpha.900",
      },
      h1: {
        color: "white",
      },
    },
  },
  colors: {
    primary: {
      500: "hsl(0, 0%, 55%)",
      700: "hsl(0, 0%, 41%)",
    },
  },
  sizes: {
    container: {
      sm: "375px",
      md: "640px",
      xl: "1120px",
    },
  },
  fonts: {
    body: "'Josefin Sans', sans-serif",
    heading: "Josefin Sans",
    /* heading: "Alata", */
  },
  components: {
    Link: {
      variants: {
        unstyled: ({colorScheme = "blackAlpha"}) => ({
          color: `${colorScheme}.700`,
          _hover: {
            color: `${colorScheme}.800`,
            textDecoration: "none",
          },
        }),
      },
      defaultProps: {
        variant: "color",
      },
    },
    Button: {
      sizes: {
        lg: {
          fontSize: "md",
        },
      },
      variants: {
        outline: {
          px: 12,
          pt: 4,
          pb: 2,
          textTransform: "uppercase",
          borderColor: "black",
          borderRadius: "sm",
          letterSpacing: "2px",
          _hover: {
            color: "white",
            bg: "black",
          },
        },
        "footer-link": {
          fontFamily: "Alata",
          h: 8,
          color: "white",
          borderRadius: 0,
          paddingInlineStart: ["inherit", 0],
          paddingInlineEnd: ["inherit", 0],
        },
        "header-link": {
          color: "white",
        },
      },
    },
    Heading: {
      baseStyle: {
        textTransform: "uppercase",
      },
    },
  },
});

import { createMuiTheme } from "@material-ui/core/styles";
export const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#f99807",
      contrastText: "#000",
    },
    secondary: {
      main: "#173664",
      contrastText: "#fff",
    },
  },
  typography: {
    h6: {
      fontWeight: 400,
    },
  },
  sidebar: {
    width: 240,
    closedWidth: 55,
  },
  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor: "rgba(0, 0, 0, 0.00)",
        "&$disabled": {
          backgroundColor: "rgba(0, 0, 0, 0.05)",
        },
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
      },
    },
    MuiButtonBase: {
      root: {
        "&:hover:active::after": {
          // recreate a static ripple color
          // use the currentColor to make it work both for outlined and contained buttons
          // but to dim the background without dimming the text,
          // put another element on top with a limited opacity
          content: '""',
          display: "block",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          right: 0,
          backgroundColor: "currentColor",
          opacity: 0.3,
          borderRadius: "inherit",
        },
      },
    },
  },
  props: {
    MuiButtonBase: {
      // disable ripple for perf reasons
      disableRipple: true,
    },
  },
});

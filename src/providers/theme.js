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
    width: 200,
    closedWidth: 55,
  },
  overrides: {
    raInput: {
      marginRight: "5px",
    },
    RaFormInput: {
      input: {
        width: "100%",
        maxWidth: "610px",
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: "rgba(0, 0, 0, 0.00)",
        "&$disabled": {
          backgroundColor: "rgba(0, 0, 0, 0.05)",
        },
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        width: "100%",
      },
    },
    MuiButtonBase: {
      root: {
        "&:hover:active::after": {
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

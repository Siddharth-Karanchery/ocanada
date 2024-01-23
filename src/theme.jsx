import { createTheme } from "@mui/material/styles";
import { green, white, red, grey } from "@mui/material/colors";

export const appTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: grey[500],
    },
    secondary: {
      main: grey[50],
    },
    error: {
      main: red[500],
    },
    action: {
      disabledBackground: grey[500],
      disabled: grey[700],
    },
  },
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
});

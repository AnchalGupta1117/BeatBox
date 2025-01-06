import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark", 
    background: {
      default: "#121212", 
    },
    text: {
      primary: "#ffffff", 
    },
  },
});

export default darkTheme;

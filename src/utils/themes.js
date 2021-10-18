import createMuiTheme from "@material-ui/core/styles";

export default createMuiTheme({
  typography: {
    fontFamily: "Maven Pro",
  },
  palette: {
    // used for bg-color like button, appbar text
    primary: {
      main: "#0080ff",
      contrastText: "#fff",
    },
    secondary: {
      main: "#0080ff",
      contrastText: "#fff",
    },
    text: {
      primary: "#000000",
      secondary: "#999",
    },
    // background color of whole body
    background: {},
  },
});

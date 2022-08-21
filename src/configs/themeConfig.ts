import { createTheme } from "@mui/material";
import {
  ColorPartial,
  SimplePaletteColorOptions
} from "@mui/material/styles/createPalette";

export const customTheme = createTheme({
  palette: {
    app: {
      main: "#A7ACB2"
    }
  }
});

declare module "@mui/material/styles/createPalette" {
  export interface PaletteOptions {
    app: SimplePaletteColorOptions | ColorPartial;
  }
}

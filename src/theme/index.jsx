import {
    StyledEngineProvider,
    ThemeProvider,
    createTheme,
} from "@mui/material/styles";
import shadows, { customShadows } from "./shadows";

import { CssBaseline } from "@mui/material";
import { isMerry } from "../utils/isMerry";
import { isSpooky } from "../utils/isSpooky";
import palette from "./palette";
import typography from "./typography";

const theme = {
    palette,
    shape: { borderRadius: 8 },
    typography,
    shadows,
    customShadows,
    custom: {
        isSpooky: isSpooky(),
        isMerry: isMerry(),
    },
};

export const ThemeConfig = ({ children }) => (
    <StyledEngineProvider injectFirst>
        <ThemeProvider theme={createTheme(theme)}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    </StyledEngineProvider>
);

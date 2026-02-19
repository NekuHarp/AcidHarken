import "./App.css";
import { Box } from "@mui/material";
import KofiButton from "./components/KofiButton";
import Page from "./components/Page";
import { AcidCalculator } from "./features/acid/AcidCalculator";
import { ThemeConfig } from "./theme";

function App() {
    return (
        <ThemeConfig>
            <Page>
                <Box sx={{ flex: 1, width: "100%", pt: "5vh" }}>
                    <AcidCalculator />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: "auto",
                        pb: 2,
                    }}
                >
                    <KofiButton />
                </Box>
            </Page>
        </ThemeConfig>
    );
}

export default App;

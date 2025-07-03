import "./App.css";
import Page from "./components/Page";
import { AcidCalculator } from "./features/acid/AcidCalculator";
import { ThemeConfig } from "./theme";

function App() {
    return (
        <ThemeConfig>
            <Page>
                <AcidCalculator />
            </Page>
        </ThemeConfig>
    );
}

export default App;

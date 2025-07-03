import "./App.css";
import Page from "./components/Page";
import { AcidCalculator } from "./features/acid/AcidCalculator";

function App() {
    return (
        <Page>
            <AcidCalculator />
        </Page>
    );
}

export default App;

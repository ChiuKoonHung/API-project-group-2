import "./App.css";

import Weather from "./component/czy_Chart/chart_1_view";
import PM from "./component/czy_Chart/czy_PM25";
import PSI from "./component/Clam/clam-psi-j";
import Forecast from "./component/chart_4_view";

import UltraVioletReadings from "./component/justin_UVReading";

function App() {
    return (
        <div className="App">
            <h1>Group_2 dash board</h1>
            <div className="container">
                <div className="chart">
                    <Weather />
                </div>
                <div className="chart">
                    <PM />
                </div>
                <div className="chart">3</div>
                <div className="chart">
                    <Forecast />
                </div>
                <div className="chart">
                    <PSI />
                </div>
            </div>
        </div>
    );
}

export default App;

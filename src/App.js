import "./App.css";
import Weather from "./component/czy_Chart/chart_1_view";
import Forecast from "./component/chart_4_view";
import UltraVioletReadings from "./component/justin_UVReading";
import PM from "./component/czy_Chart/chart_2_view";

function App() {
    return (
        <div className="App">
            <h1 style={{ color: "white" }}>Weather information in Singapore</h1>
            <div className="container">
                <div className="chart">
                    <Weather />
                </div>
                <div className="chart">
                    <PM />
                </div>

                <div className="chart">
                    <Forecast />
                </div>
                <div className="chart">5</div>
                <div className="chart">
                    <UltraVioletReadings />
                </div>
            </div>
        </div>
    );
}

export default App;

import "./App.css";
import Weather from "./component/czy_Chart/chart_1_view";
import PSI from "./component/Clam/clam-psi-j";
import PM from "./component/czy_Chart/chart_2_view";
import Forecast from "./component/ly-chart-4/chart_4_view";
import DisplayForecast from "./component/justin_chart/chart_6_view";

function App() {
    return (
        <div className="App">
            <h1 style={{ color: "white" }}>Weather information in Singapore</h1>
            < div className="container">
                <div className="chart">
                    <Weather />
                </div>
                <div className="chart">
                    <PM />
                </div>

                <div className="chart">
                    <Forecast />
                </div>
                <div className="chart">
                    <PSI />
                </div>
                <div className="chart">
                    <DisplayForecast />
                </div>
  
            </div>
        </div>
    );
}

export default App;

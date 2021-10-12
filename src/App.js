import "./App.css";
import Weather from "./component/chart_1_view";
import Forecast from "./component/chart_4_view";

function App() {
    return (
        <div className="App">
            <h1>Group_2 dash board</h1>
            <div className="container">
                <div className="chart">
                    {/* <Weather /> */}
                </div>
                <div className="chart">2</div>
                <div className="chart">3</div>
                <div className="chart">
                    <Forecast />
                </div>
                <div className="chart">5</div>
                <div className="chart">6</div>
            </div>
        </div>
    );
}

export default App;

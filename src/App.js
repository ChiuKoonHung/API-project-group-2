import "./App.css";
import Weather from "./component/czy_Chart/chart_1_view";
import PM from "./component/czy_Chart/czy_PM25";
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
                <div className="chart">4</div>
                <div className="chart">5</div>
                <div className="chart">6</div>
            </div>
        </div>
    );
}

export default App;

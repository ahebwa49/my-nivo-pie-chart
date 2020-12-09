import "./App.css";
import { data } from "./data";
import MyResponsivePie from "./Pie.js";

function App() {
  console.log(data);
  return (
    <div className="App">
      <h1>Hello React + Nivo :)</h1>
      <MyResponsivePie data={data} />
    </div>
  );
}

export default App;

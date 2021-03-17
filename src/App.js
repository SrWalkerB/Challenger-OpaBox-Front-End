import Challenger02 from "./components/Challenger2/Challenger2";
import Challenger from "./components/Challengers/Challengers";
import Header from "./components/Header/Header";

import "./global/global.css"

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <Challenger />
        <Challenger02 />
      </div>
    </div>
  );
}

export default App;

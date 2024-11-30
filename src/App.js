import "./App.css";
import Recipepage from "./component/Recipepage";
import Recipenfo from "./component/Recipenfo";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Recipepage />} />
        <Route path="/:mealid" element={<Recipenfo/>} />

      </Routes>
    </div>
  );
}

export default App;

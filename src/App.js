import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from "react-router-dom";
import Home from "./components/Home";
import Rooms from "./components/Rooms";
function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />{" "}
      </Route>
      <Route exact path="/rooms">
        <Rooms />{" "}
      </Route>
    </Router>
  );
}

export default App;

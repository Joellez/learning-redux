import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ChangeColour from "./components/ChangeColour";

function App() {
  return <div className="App">
    <Profile />
    <Login />
    <br />
    <ChangeColour />
  </div>;
}

export default App;

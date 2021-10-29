import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AddNewService from "./Components/AddNewService/AddNewService";
import Home from "./Components/Home/Home/Home";
import Header from "./Components/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/add">
            <AddNewService></AddNewService>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

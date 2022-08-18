import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./components/admin/Admin";
import { Login } from "./components/login/Login";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}>
          {/* <Login /> */}
        </Route>
        <Route path="/Admin">
          <Admin />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;

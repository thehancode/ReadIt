import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { LoginForm } from "./components/LoginForm";
import { RegistroForm } from "./components/RegistroForm";
import { HomeWithoutLogin } from "./components/HomeWithoutLogin";
import { Home } from "./components/Home";
import { HomePage } from "./components/HomePage";

//import Home from "./containers/Home";
import NotFound from "./containers/NotFound";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container p-4">
          <Switch>
            <Route exact path="/" component={HomeWithoutLogin} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/register" component={RegistroForm} />
            <Route exact path="/home" component={() => <HomePage component="HOME" />} />
            <Route path="/books/:bookID" children={<HomePage component="BOOK" />} />
            <Route path="/read/:bookID" children={<HomePage component="READ" />} />
            <Route exact path="/account" component={() => <HomePage component="ACCOUNT" />} />
            <Route component={NotFound}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

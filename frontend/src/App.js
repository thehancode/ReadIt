import "./App.css";
import { Route, Switch } from "react-router-dom";

import { LoginForm } from "./components/LoginForm";
import { RegistroForm } from "./components/RegistroForm";
import { HomeWithoutLogin } from "./components/HomeWithoutLogin";
import { HomePage } from "./components/HomePage";
import { MyBooks } from "./components/MyBooks";
import { MyNotes } from "./components/MyNotes";
import NotFound from "./containers/NotFound";

function App() {
  return (
    <div className="App">
      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={HomeWithoutLogin} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegistroForm} />
          <Route exact path="/books" component={MyBooks} />
          <Route exact path="/notes" component={MyNotes} />
          <Route
            exact
            path="/home"
            component={() => <HomePage component="HOME" />}
          />
          <Route
            path="/books/:bookID"
            children={<HomePage component="BOOK" />}
          />
          <Route
            path="/read/:bookID/:bookIDMongo"
            children={<HomePage component="READ" />}
          />
          <Route
            exact
            path="/account"
            component={() => <HomePage component="ACCOUNT" />}
          />
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

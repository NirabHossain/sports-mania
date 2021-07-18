// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='/league/about/:id'>
            <About></About>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>

        </Switch>
    </Router>
    </div>
  );
}

export default App;

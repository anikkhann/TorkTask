import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import NotFound from './components/pages/NotFound';
function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route  exact path="/home" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="*" component={NotFound}/>
      </Switch>
    </div>
  </Router>
  );
}

export default App;

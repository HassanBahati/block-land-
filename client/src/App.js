import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './screens/Home/Home.js'
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

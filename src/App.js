import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Kindness from './Kindness';
import Happiness from './Happiness';
import Generosity from './Generosity'

function App() {
  return (
    <Router>
      <div className="App">
      <h1> Christmas Spirit</h1>
      <Navbar />
      <p> The holiday season is supposed to be reminder that life isn't always bad.</p>
      <p> It never hurts to see more reminders of that.</p>
      <Route exact path= '/' />
        <Route exact path= '/kindness' component= {Kindness}/>
        <Route exact path= '/happiness' component= {Happiness}/>
        <Route exact path= '/generosity' component= {Generosity}/>
    </div>


    </Router>
    
  );
}

export default App;

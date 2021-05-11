import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Game from './pages/Game'
import GameOver from './pages/GameOver'
import HighScores from './pages/HighScores'
import Home from './pages/Home'
import NavBar from './components/NavBar';


function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
         <Route path="/game" component={Game}/>
         <Route path="/highScores" component={HighScores}/>
         <Route path="/gameOver" component={GameOver}/>
         <Route path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;

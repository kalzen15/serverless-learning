import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Game from "./pages/Game";
import GameOver from "./pages/GameOver";
import HighScores from "./pages/HighScores";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { Container } from "./styled/Container";
import { Main } from "./styled/Main";
import Global from "./styled/Global";

function App() {
  return (
    <Router>
      <Global />
      <Main>
        <Container>
          <NavBar />
          <Switch>
            <Route path="/game" component={Game} />
            <Route path="/highScores" component={HighScores} />
            <Route path="/gameOver" component={GameOver} />
            <Route path="/" component={Home} />
          </Switch>
        </Container>
      </Main>
    </Router>
  );
}

export default App;

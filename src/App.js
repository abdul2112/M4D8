import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieContainer from './Components/MovieContainer';
import Galleries from './Components/Galleries';
import ShowDetail from './Components/ShowDetail';
import Registration from './Components/Registration';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Router>
        <MovieContainer />
        {/* <Galleries movie="Harry Potter" /> */}
        {/* <Galleries movie="Lord of the Rings" />
        <Galleries movie="Batman" /> */}
        {/* <Route component={ShowDetail} exact path="/details/:movieId" /> */}
        <Route
          path="/Registration"
          exact
          render={(props) => <Registration {...props} />}
        />
        <Footer />
      </Router>
      {/* <ShowDetail /> */}
      {/* <Registration /> */}
    </div>
  );
}

export default App;

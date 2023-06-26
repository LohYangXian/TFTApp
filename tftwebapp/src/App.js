import './App.css';
import './styles/Global.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage'; // Import the SearchPage component
import ProfilePage from './pages/ProfilePage'; // Import the ProfilePage component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={LandingPage} />
        <Route path="/profile/:summonerName" Component={ProfilePage} />
      </Routes>
    </Router>
  );
}

export default App;

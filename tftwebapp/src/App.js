import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './SearchPage'; // Import the SearchPage component
import ProfilePage from './ProfilePage'; // Import the ProfilePage component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={SearchPage} />
        <Route path="/profile/:summonerName" Component={ProfilePage} />
      </Routes>
    </Router>
  );
}

export default App;

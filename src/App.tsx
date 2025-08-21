import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PetList from './components/PetList';
import PetProfile from './components/PetProfile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PetList />} />
        <Route path="/pets/:id" element={<PetProfile />} />
      </Routes>
    </Router>
  );
};

export default App;

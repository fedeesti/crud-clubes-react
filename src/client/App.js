import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import CreateTeam from './components/pages/CreateTeam';
import EditTeam from './components/pages/EditTeam';

export default function App() {
  return (
    <main className="text-center min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-team" element={<CreateTeam />} />
          <Route path="/team/:id/edit" element={<EditTeam />} />
        </Routes>
      </Router>
    </main>
  );
}

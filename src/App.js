import logo from './logo.svg';
import './App.css';
import { Card } from '@mui/material';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './auth/Login';
import AdminHome from './components/admin/AdminHome';
import TeamLeaderHome from './components/teamLeader/teamLeaderHome';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" Component={Login} />
        <Route path="/adminhome" Component={AdminHome} />
        <Route path="/teamleader" Component={TeamLeaderHome} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';
import Dashboard from './pages/Dashboard';
import UserProtectedWrapper from './pages/UserProtectedWrapper';
import UserLogout from './pages/UserLogout';
import CaptainHome from './pages/CaptainHome';
import CaptainProtectWrapper from './pages/CaptainProtectWrapper';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/dashboard" element={
          <UserProtectedWrapper>
            <Dashboard />
          </UserProtectedWrapper>
        } />

        <Route path="/userLogout" element={<UserProtectedWrapper>
          <UserLogout />
        </UserProtectedWrapper>} />
        <Route path="/captain-home" element={<CaptainProtectWrapper>
          <CaptainHome />
        </CaptainProtectWrapper>} />
      </Routes>
    </div>
  )
}

export default App
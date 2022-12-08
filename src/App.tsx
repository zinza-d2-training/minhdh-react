import './App.css';
import Login from './pages/loginPage/Login';
import ForgotPassword from './pages/forgotPasswordPage/ForgotPassword';
import Register from './pages/registerPage/Register';
import Home from './pages/homePage/Home';
import User from './pages/userPage/User';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAccessToken } from './hooks/useAccessToken';

function App() {
  const token = useAccessToken();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={token === '' ? <Login /> : <Navigate to={'/'} />}
        />
        <Route
          path="/forgot-password"
          element={token === '' ? <ForgotPassword /> : <Navigate to={'/'} />}
        />
        <Route
          path="/register"
          element={token === '' ? <Register /> : <Navigate to={'/'} />}
        />
        <Route
          path="/user"
          element={token !== '' ? <User /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;

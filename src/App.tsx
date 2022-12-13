import './App.css';
import Login from './pages/loginPage/Login';
import ForgotPassword from './pages/forgotPasswordPage/ForgotPassword';
import Register from './pages/registerPage/Register';
import Home from './pages/homePage/Home';
import User from './pages/userPage/User';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAccessToken } from './hooks/useAccessToken';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const token = useAccessToken();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<PrivateRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/forgot-password" element={<PrivateRoute />}>
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>
        <Route path="/register" element={<PrivateRoute />}>
          <Route path="/register" element={<Register />} />
        </Route>
        <Route
          path="/user"
          element={
            token !== '' || token !== null ? <User /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

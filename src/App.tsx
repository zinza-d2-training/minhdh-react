import './App.css';
import Login from './pages/loginPage/Login';
import ForgotPassword from './pages/forgotPasswordPage/ForgotPassword';
import Register from './pages/registerPage/Register';
import User from './pages/userPage/User';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;

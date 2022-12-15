import './App.css';
import Login from './pages/loginPage/Login';
import ForgotPassword from './pages/forgotPasswordPage/ForgotPassword';
import Register from './pages/registerPage/Register';
import Home from './pages/homePage/Home';
import User from './pages/userPage/Account';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAccessToken } from './hooks/useAccessToken';
import PrivateRoute from './components/PrivateRoute';
import VaccineStep1 from './pages/vaccineRegistrationPage/VaccineStep1';
import VaccineStep2 from './pages/vaccineRegistrationPage/VaccineStep2';
import VaccineStep3 from './pages/vaccineRegistrationPage/VaccineStep3';
import VaccineCertificate from './pages/userPage/VaccineCertificate';
import RegistrationResult from './pages/userPage/RegistrationResult';
import Account from './pages/userPage/Account';

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
        <Route path="/vaccine-register-step1" element={<VaccineStep1 />} />
        <Route path="/vaccine-register-step2" element={<VaccineStep2 />} />
        <Route path="/vaccine-register-step3" element={<VaccineStep3 />} />
        <Route path="/vaccine-certificate" element={<VaccineCertificate />} />
        <Route path="/registration-result" element={<RegistrationResult />} />
        <Route path="/account" element={<Account />} />
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

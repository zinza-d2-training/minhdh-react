import './App.css';
import Login from './pages/loginPage/Login';
import ForgotPassword from './pages/forgotPasswordPage/ForgotPassword';
import Register from './pages/registerPage/Register';
import Home from './pages/homePage/Home';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PrivateRouteForUser from './components/PrivateRouteForUser';
import PrivateRouteForAdmin from './components/PrivateRouteForAdmin';
import VaccineStep1 from './pages/vaccineRegistrationPage/VaccineStep1';
import VaccineStep2 from './pages/vaccineRegistrationPage/VaccineStep2';
import VaccineStep3 from './pages/vaccineRegistrationPage/VaccineStep3';
import VaccineCertificate from './pages/userPage/VaccineCertificate';
import RegistrationResult from './pages/userPage/RegistrationResult';
import Account from './pages/userPage/Account';
import AdminPlace from './pages/adminPage/AdminPlace';
import AdminDocuments from './pages/adminPage/AdminDocuments';
import AdminRegister from './pages/adminPage/AdminRegister';
import { useLogin } from './hooks/useLogin';

function App() {
  useLogin();

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
        <Route path="/vaccine-register-step1" element={<PrivateRouteForUser />}>
          <Route path="/vaccine-register-step1" element={<VaccineStep1 />} />
        </Route>
        <Route path="/vaccine-register-step2" element={<PrivateRouteForUser />}>
          <Route path="/vaccine-register-step2" element={<VaccineStep2 />} />
        </Route>
        <Route path="/vaccine-register-step3" element={<PrivateRouteForUser />}>
          <Route path="/vaccine-register-step3" element={<VaccineStep3 />} />
        </Route>
        <Route path="/vaccine-certificate" element={<PrivateRouteForUser />}>
          <Route path="/vaccine-certificate" element={<VaccineCertificate />} />
        </Route>
        <Route path="/registration-result" element={<PrivateRouteForUser />}>
          <Route path="/registration-result" element={<RegistrationResult />} />
        </Route>
        <Route path="/account" element={<PrivateRouteForUser />}>
          <Route path="/account" element={<Account />} />
        </Route>
        <Route element={<PrivateRouteForAdmin />}>
          <Route path="/admin-place" element={<AdminPlace />} />
        </Route>
        <Route element={<PrivateRouteForUser />}>
          <Route path="/admin-document" element={<AdminDocuments />} />
        </Route>
        <Route element={<PrivateRouteForAdmin />}>
          <Route path="/admin-register" element={<AdminRegister />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

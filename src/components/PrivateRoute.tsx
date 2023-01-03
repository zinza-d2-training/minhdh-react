import { Navigate, Outlet } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';

const PrivateRoute = () => {
  const isLogin = useLogin();

  return isLogin ? <Navigate to="/" /> : <Outlet />;
};

export default PrivateRoute;

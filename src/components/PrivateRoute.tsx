import { Navigate, Outlet } from 'react-router-dom';
import { useAccessToken } from '../hooks/useAccessToken';

const PrivateRoute = () => {
  const token = useAccessToken();

  return token ? <Navigate to="/" /> : <Outlet />;
};

export default PrivateRoute;

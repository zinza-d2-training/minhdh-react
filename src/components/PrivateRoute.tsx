import { Navigate, Outlet } from 'react-router-dom';
import { useAccessToken } from '../hooks/useAccessToken';

const PrivateRoute = () => {
  const token = useAccessToken();

  return token === '' || token === null ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;

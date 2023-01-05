import { Navigate, Outlet } from 'react-router-dom';
import { useCurrentUser } from '../hooks/useCurrentUser';

const PrivateRoute = () => {
  const isLogin = useCurrentUser();

  return isLogin ? <Navigate to="/" /> : <Outlet />;
};

export default PrivateRoute;

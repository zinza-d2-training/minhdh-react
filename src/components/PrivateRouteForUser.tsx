import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useCurrentUser } from '../hooks/useCurrentUser';

const PrivateRouteForUser = () => {
  const isLogin = useCurrentUser();
  const location = useLocation();
  return isLogin === null ? (
    <Navigate to="/login" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export default PrivateRouteForUser;

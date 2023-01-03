import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectIsLogin } from '../features/auth/authSlice';
import { useAppSelector } from '../store/hooks';

const PrivateRouteForUser = () => {
  const isLogin: boolean = useAppSelector(selectIsLogin);
  const location = useLocation();
  return !isLogin ? (
    <Navigate to="/login" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export default PrivateRouteForUser;

import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../store';
import { selectIsAdmin } from '../features/auth/authSlice';
import UnAuthorized from './UnAuthorized';
import { useCurrentUser } from '../hooks/useCurrentUser';

const PrivateRouteForAdmin = () => {
  const isAdmin = useAppSelector(selectIsAdmin);
  const isLogin = useCurrentUser();
  const location = useLocation();
  return isAdmin ? (
    <Outlet />
  ) : isLogin ? (
    <UnAuthorized />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRouteForAdmin;

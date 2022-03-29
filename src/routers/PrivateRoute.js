import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({isAuth, children}) => {
   // console.log('private',isAuth);
   return isAuth ? children : <Navigate to="/auth/login" />;
};
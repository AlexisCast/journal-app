import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({isAuth,  children }) => {
   // console.log('public',isAuth);
   return isAuth ? <Navigate to="/" /> : children;
};

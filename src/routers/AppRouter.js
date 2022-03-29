import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import {
   BrowserRouter,
   Routes,
   Route,
 } from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

   const dispatch = useDispatch();

   const [cheking, setCheking] = useState(true);
   const [isLoggedIn, setIsLoggedIn] = useState(false);


   useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
         if (user?.uid) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            console.log(user);
            dispatch(login(user.uid, user.displayName));
            setIsLoggedIn(true);
         } else {
            setIsLoggedIn(false);
         }
         setCheking(false);
      });
   }, [dispatch, setCheking, setIsLoggedIn])

   if (cheking) {
      return (
         <h1>Wait...</h1>
      )
   }


   return (
      <BrowserRouter>
         <Routes>
            <Route
               path="/*"
               element={
                  <PublicRoute isAuth={isLoggedIn}>
                     <AuthRouter />
                  </PublicRoute>
               }
            />

            <Route
               path="/"
               element={
                  <PrivateRoute isAuth={isLoggedIn}>
                     <JournalScreen />
                  </PrivateRoute>
               }
            />
         </Routes>
      </BrowserRouter>

   )
}

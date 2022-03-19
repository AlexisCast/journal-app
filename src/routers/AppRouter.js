import React, { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link,
   useParams,
   useRouteMatch,
   Redirect
} from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { login } from '../actions/auth';

export const AppRouter = () => {

   const dispatch = useDispatch();

   useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
         if (user?.uid) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            console.log(user);
            dispatch(login(user.uid, user.displayName));
            // ...
         } else {
            // User is signed out
            // ...
         }
      });
   }, [dispatch])


   return (
      <Router>
         <div>
            <Switch>
               <Route path="/auth" component={AuthRouter} />
               <Route exact path="/" component={JournalScreen} />
               <Redirect to="/auth/register" />
            </Switch>
         </div>
      </Router>

   )
}

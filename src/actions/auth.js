
import { getAuth, signInWithPopup, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';

export const startLoginEmailPassword = (email, password) => {
   return (dispatch) => {
      dispatch(startLoading());
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
         .then(({ user }) => {
            // console.log(user);
            dispatch(
               login(user.uid, user.displayName)
            )
            dispatch(finishLoading());
         })
         .catch((error) => {
            console.log(error);
            dispatch(finishLoading());
         });


   }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
   return (dispatch) => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
         .then(async ({ user }) => {
            await updateProfile(user, { displayName: name });
            // console.log(user);
            dispatch(
               login(user.uid, user.displayName)
            )
            // ...
         })
         .catch((error) => {
            console.log('error', error);
            // ..
         });
   }
}

export const startGoogleLogin = () => {
   return (dispatch) => {
      const auth = getAuth();
      signInWithPopup(auth, googleAuthProvider)
         .then(({ user }) => {
            // console.log(user);
            dispatch(
               login(user.uid, user.displayName)
            )
         });
   }
}

export const login = (uid, displayName) => ({
   type: types.login,
   payload: {
      uid,
      displayName
   }
});

export const startLogout = () => {
   return (dispatch) => {
      const auth = getAuth();
      signOut(auth).then(() => {
         dispatch(logout());
      }).catch((error) => {
         // An error happened.
      });
   }
}

export const logout = () => ({
   type: types.logout
})
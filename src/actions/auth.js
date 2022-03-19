
import { getAuth, signInWithPopup, updateProfile, createUserWithEmailAndPassword } from 'firebase/auth';
import { googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';

export const startLoginEmailPassword = (email, password) => {
   return (dispatch) => {

      setTimeout(() => {
         dispatch(login(123, 'Pedro'));
      }, 3500);

   }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
   return (dispatch) => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
         .then(async ({ user }) => {
            await updateProfile(user, { displayName: name });
            console.log(user);
            dispatch(
               login(user.uid, user.displayName)
            )
            // ...
         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('errorMessage', errorMessage);
            console.log('errorCode', errorCode);
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
            console.log(user);
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
})
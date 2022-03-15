import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
   return (
      <>
         <h3 className="auth__title">Register</h3>
         <form>
            <input
               type="text"
               placeholder="Name"
               name="name"
               className="auth__input"
               autoComplete="off"
            />
            <input
               type="text"
               placeholder="Email"
               name="email"
               className="auth__input"
               autoComplete="off"
            />
            <input
               type="passwpord"
               placeholder="Password"
               name="password"
               className="auth__input"
            />
            <input
               type="passwpord"
               placeholder="Confirm Password"
               name="password2"
               className="auth__input"
            />
            <button
               className='btn btn-primary btn-block'
               type="submit"
            // disabled={true}
            >
               Register
            </button>

            
            <Link
               className="link"
               to="/auth/login"
            >
               Already registered?
            </Link>
         </form>
      </>
   )
}

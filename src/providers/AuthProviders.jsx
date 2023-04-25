import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../FIrebase/firebase.config';


 export const AuthContext = createContext(null);

 const auth =getAuth(app)
 const provider = new GoogleAuthProvider();

const AuthProviders = ({children}) => {



  const [user, setUser] = useState(null)
  const [loader, setLoader] = useState(true)

  const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn  = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  

  useEffect(()=>{
  const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
      console.log(currentUser)
      setUser(currentUser)
      setLoader(false)
    })

    return () =>{
      unsubscribe()
    }
  } ,[])

 const logOut = () =>{
  return signOut(auth)
 }

 const signWithGoogle = () =>{
  return signInWithPopup(auth, provider)
 }

  const authInfo = {
        user,
        loader,
        createUser,
        signIn,
        signWithGoogle,
        logOut,
  }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;
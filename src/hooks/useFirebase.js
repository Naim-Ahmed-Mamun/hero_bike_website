import { useEffect, useState } from "react";
import initializeFirebaseAuthentication from "../components/shared/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,
signOut,onAuthStateChanged,updateProfile } from "firebase/auth";

initializeFirebaseAuthentication()

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [authError,setAuthError] = useState('');

    // auth
    const auth = getAuth();

    // register user
    const registerUser = (email,password,name) => {
        createUserWithEmailAndPassword(auth,email,password)
        .then(result => {
            const user = {email:email,displayName:name}
            setUser(user)
            // update
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
                
              }).catch((error) => {
               
              });
        })
        .catch(err => {
            setAuthError(err.message)
        })
    }

    // sign in user
    const loginUser = (email,password) => {
        signInWithEmailAndPassword(auth,email,password)
        .then(result => {
            setUser(result.user)
        })
        .catch(err => {
            setAuthError(err.message)
        })
    }

    // on Auth State Changed
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              setUser({})
            }
          });

          return () => unsubscribe;
    },[auth])

    // logout
    const logout = () => {
        signOut(auth)
        .then(() => {
            setUser({})
          })
          .catch((error) => {
            setAuthError(error.message)
          });
    }

    return{
        user,
        registerUser,
        loginUser,
        logout,
        authError,
    }
}

export default useFirebase;
import React, { createContext, useEffect, useState } from 'react';
import app from './FirebaseProvider';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';

export const AuthContext = createContext(null);

const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const twitterProvider = new TwitterAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const facebookSignIn = () => {
        return signInWithPopup(auth, facebookProvider);
    }

    const twitterSignIn = () => {
        return signInWithPopup(auth, twitterProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = () => {
            onAuthStateChanged(auth, curUser => {
                setUser(curUser);
                console.log("user from observer : " + curUser);
            });
        }

        return () => {
            unSubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        facebookSignIn,
        twitterSignIn,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;
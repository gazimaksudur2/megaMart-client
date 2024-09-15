import React, { createContext, useEffect, useState } from 'react';
import app from './FirebaseProvider';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, signInWithPopup, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import useAxios from '../hooks/useAxios';

export const AuthContext = createContext(null);

const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(false);
    const [loading, setLoading] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const twitterProvider = new TwitterAuthProvider();
    const axios = useAxios();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const profileUpdate = (name, url) => {
        setLoading(true);
        return updateProfile(auth.currentUser, { displayName: name, photoURL: url});
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const facebookSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    }

    const twitterSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, twitterProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, curUser => {
            const loggedUser = curUser ? {email: curUser?.email} : {email: user?.email};
            console.log("user from observer : " + curUser);
            // console.log(curUser);
            setLoading(false);
            setUser(curUser);
                if(curUser){
                    axios.post('/jwt',loggedUser, {withCredentials: true})
                    .then(res=>{
                        // console.log(res.data);
                        if(res?.data?.success){
                            setToken(true);
                        }
                    })
                }else{
                    axios.post('/logout', loggedUser, {withCredentials: true})
                    .then(res=>{
                        console.log(res.data);
                        if(res?.data?.success){
                            setToken(false);
                        }
                    })
                }
            });

        return () => {
            unSubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        profileUpdate,
        token,
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
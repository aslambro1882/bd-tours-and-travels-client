import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../../Firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth();
    const handleGoogleSignIn = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);

    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            return () => unsubscribed;
        })
        setIsLoading(false)
    }, [])

    const handleLogout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                console.log('signout success');
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return {
        handleGoogleSignIn,
        handleLogout,
        user,
        setIsLoading,
        isLoading
    }
};

export default useFirebase;
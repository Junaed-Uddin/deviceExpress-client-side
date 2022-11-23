import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import app from '../Firebase/firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthProvider = createContext();

const AuthContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserInfo = (name, photo) => {
        return updateProfile(auth.currentUser, name, photo);
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }
    
    const authInfo = {
        user,
        userRegister,
        updateUserInfo,
        googleLogin
    }

    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;
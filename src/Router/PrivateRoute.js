import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Components/Loader/Loader';
import { AuthProvider } from '../Contexts/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthProvider);
    const location = useLocation();
    
    if (loading) {
        return <Loader></Loader>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default PrivateRoute;
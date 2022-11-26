import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Components/Loader/Loader';
import { AuthProvider } from '../Contexts/AuthContext';
import useSeller from '../hooks/useSeller';


const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthProvider);
    const [isSeller, isLoading] = useSeller(user?.email);
    const location = useLocation();

    if (loading || isLoading) {
        return <Loader></Loader>
    }

    if (user && isSeller) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default SellerRoute;
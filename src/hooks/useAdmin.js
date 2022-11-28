import axios from "axios";
import { useEffect, useState } from "react";


const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (email) {
            axios.get(`https://device-express-server.vercel.app/users/admin/${email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem("secretToken")}`
                }
            })
                .then(data => {
                    console.log(data);
                    setIsAdmin(data.data.isAdmin);
                    setIsLoading(false);
                })
        }
    }, [email])
    return [isAdmin, isLoading];
};

export default useAdmin;
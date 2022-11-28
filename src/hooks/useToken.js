import axios from "axios";
import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState('');

    useEffect(() => {
        if (email) {
            axios.get(`https://device-express-server.vercel.app/jwt?email=${email}`)
                .then(data => {
                    if (data.data.accessToken) {
                        localStorage.setItem('secretToken', data.data.accessToken);
                        setToken(data.data.accessToken);
                    }
                })
        }
    }, [email])

    return [token];
};

export default useToken;
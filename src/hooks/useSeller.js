import axios from "axios";
import { useEffect, useState } from "react";


const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (email) {
            axios.get(`http://localhost:5000/users/seller/${email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem("secretToken")}`
                }
            })
                .then(data => {
                    console.log(data);
                    setIsSeller(data.data.isSeller);
                    setIsLoading(false);
                })
        }
    }, [email])
    return [isSeller, isLoading];
};

export default useSeller;
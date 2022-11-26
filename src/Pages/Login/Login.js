import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';
import { AuthProvider } from '../../Contexts/AuthContext';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [userEmail, setUserEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const { userLogin, googleLogin } = useContext(AuthProvider);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const [token] = useToken(userEmail);
    const from = location.state?.from?.pathname || '/';


    if (token) {
        navigate(from, { replace: true });
        setLoading(false);
    }

    if (loading) {
        return <Loader></Loader>
    }

    const handleLogin = data => {
        userLogin(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);
                setUserEmail(data.email);
            })
            .catch(error => {
                console.log(error)
                toast.error('Login failed')
            });
    }


    const storedUser = (name, email, role) => {
        const userInfo = { name, email, role };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    console.log(data);
                    setLoading(true);
                    toast.success(data.message);
                    setUserEmail(email);
                    reset();
                }
                else {
                    toast.error(data.message)
                }
            })
    }


    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                const user = res.user;
                console.log(user);
                storedUser(user?.displayName, user?.email, 'Buyer');
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            });
    }

    return (
        <div className='flex flex-col items-center py-7 rounded-lg px-8 h-full w-full max-w-sm mx-auto shadow-2xl my-10 justify-center outline outline-slate-50'>
            <form onSubmit={handleSubmit(handleLogin)} className='w-full max-w-sm mx-auto' >
                <h2 className='text-3xl mb-1 text-center font-bold text-violet-500'>Login</h2>
                <div className="form-control w-full max-w-sm mt-2">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", { required: 'Email is Required' })} type="email" placeholder="Email" className="input input-bordered w-full" />
                    {errors.email && <p className='text-red-500 text-start mt-2 text-sm'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full max-w-sm mt-2">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register("password", {
                        required: 'Please Enter the Password',
                    })} type="password" placeholder="*********" className="input input-bordered w-full" />
                    {errors.password && <p className='text-red-500 text-start mt-2 text-sm'>{errors.password?.message}</p>}
                </div>
                <input className='btn border-none bg-gradient-to-r from-cyan-500 to-blue-500 mt-4 w-full max-w-xs text-white' type="submit" value='Login' />
                <p className='text-start text-sm mt-2'>New to DeviceExpress? <Link className='text-violet-500' to='/register'>Create new Account</Link> </p>
                <div className="divider">OR</div>
            </form>
            <button onClick={handleGoogleLogin} className='w-full py-2 outline flex items-center justify-center outline-none shadow-xl bg-white rounded'><FcGoogle className='mr-2' size={26}></FcGoogle><span> Sign in with Google</span></button>
        </div>
    );
};

export default Login;
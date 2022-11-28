import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../Pages/Dashboard/AllSellers/AllSellers";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import Payment from "../Pages/Dashboard/Payment/Payment/Payment";
import ReportedItems from "../Pages/Dashboard/ReportedItems/ReportedItems";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
import Register from "../Pages/Register/Register";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/category/:name',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.name}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem("secretToken")}`
                    }
                }),
                element: <PrivateRoute><Products></Products></PrivateRoute>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard/myOrders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/payment/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/booking/${params.id}`),
                element: <Payment></Payment>
            },
            {
                path: '/dashboard/myProducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/addProducts',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/allSellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/reportedItems',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            }
        ]
    }
])
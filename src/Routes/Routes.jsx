import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import AllClass from './../Pages/AllClasses/AllClass';
import TechON from './../Pages/TechOn/TechON';
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import SeeDetails from "../Pages/SeeDetails/SeeDetails";
import Payment from "../Pages/Payment/Payment";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: 'allclasses',
                element:<AllClass></AllClass>
            },
            {
                path:'techon',
                element:<TechON></TechON>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: 'register',
                element:<Register></Register>
            },
            {
                path:'/courseDetails/:id',
                element:<SeeDetails></SeeDetails>,
                loader:()=> fetch('/fakeData.json')
            },
            {
                path: '/payment',
                element:<Payment></Payment>
            }
        ]
    }
])


export default router
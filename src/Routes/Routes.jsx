import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import AllClass from './../Pages/AllClasses/AllClass';
import TechON from './../Pages/TechOn/TechON';
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import SeeDetails from "../Pages/SeeDetails/SeeDetails";
import Payment from "../Pages/Payment/Payment";
import PrivateRoute from './PrivateRoute';
import { singleCourse } from "../api/courses";
import DashboardLayout from "../Layout/DashBoardLayout";
import AddClass from "../Pages/Dashboard/Teacher/AddClass";
import MyClass from "../Pages/Dashboard/Teacher/MyClass";
import TeacherRout from "./TeacherRout";
import AdminRoute from './AdminRoute';
import ManageUsers from './../Pages/Dashboard/Admin/ManageUsers';
import TeacherRequst from './../Pages/Dashboard/Admin/TeacherRequst';
import Profile from "../Pages/Dashboard/Common/Profile";
import StudentRoute from './StudentRoute';
import MyEnRollClasses from "../Pages/Dashboard/Student/MyEnRollClasses";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'allclasses',
                element: <AllClass></AllClass>
            },
            {
                path: 'techon',
                element: <TechON></TechON>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: '/courseDetails/:id',
                element: <PrivateRoute><SeeDetails></SeeDetails></PrivateRoute>,
                loader: ({ params }) => singleCourse(params.id)
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
                children: [
                    {
                        path: 'addclass',
                        element:
                            <PrivateRoute>
                                <TeacherRout>
                                    <AddClass></AddClass>
                                </TeacherRout>
                            </PrivateRoute>
                    },
                    {
                        path: 'myclass',
                        element: <PrivateRoute>
                            <TeacherRout>
                                <MyClass></MyClass>
                            </TeacherRout>
                        </PrivateRoute>
                    },
                    {
                        path: 'allclass',
                        element:<PrivateRoute><AdminRoute><AllClass></AllClass></AdminRoute></PrivateRoute>
                    },
                    {
                        path: 'users',
                        element:<PrivateRoute><AdminRoute><ManageUsers></ManageUsers></AdminRoute></PrivateRoute>
                    },
                    {
                        path: 'teacherRequst',
                        element:<PrivateRoute><AdminRoute><TeacherRequst></TeacherRequst></AdminRoute></PrivateRoute>
                    },
                    {
                        path:'profile',
                        element:<PrivateRoute>
                            <Profile></Profile>
                        </PrivateRoute>
                    },
                    {
                        path:'myenrollClass',
                        element:<PrivateRoute><StudentRoute><MyEnRollClasses></MyEnRollClasses></StudentRoute></PrivateRoute>
                    }
                ]
            }

        ]
    },

])


export default router
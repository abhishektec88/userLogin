import React, { useContext, useMemo } from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LoginPage from '../Page/Login/LoginPage';
import PageNotFound from '../Page/PageNotFound/PageNotFound';
import { filterRoutesByPermissions } from './filterRoutesByPermissions';
import { AuthRoutes } from './AuthRoutes';
import Layout from '../Components/Layout/Layout';
import { UserData } from '../AuthProvider/AuthProvider';




const allRoutes = [
  {
    path: "*",
    element: <PageNotFound />,
  },
]

const PublicRoutes = [
    {
      path: "login",
      element: <LoginPage />,
    },
  ]

  
  const AppRouter = () => {
    const userInfo = useContext(UserData)
    const filterRoute = useMemo(() => {
      return [...filterRoutesByPermissions(userInfo, AuthRoutes)]
    }, [userInfo])

    const token = localStorage.getItem('token')
    if(token) {
      allRoutes.push(...filterRoute)
    } else {
      allRoutes.push(...PublicRoutes)
    }

    const router = createBrowserRouter([
      {
        path: "/",
        element: <><Layout userInfo={userInfo} /><Outlet/></>,
        children: [...allRoutes],
      },
      ]);
    return (
          <RouterProvider router={router} />
    )
  }
  
  export default AppRouter
  
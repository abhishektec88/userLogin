import HomePage from "../Page/home/HomePage";
import Profile from '../Page/Profile/Profile';
import { ADMINPERMISSION, GUESTPERMISSION } from "../CONSTANT/CONSTANT"
import ContactUs from "../Page/ContactUs/ContactUs";


export const AuthRoutes = [
    {
      path: "/",
      element: <HomePage />,
      Permissions : [GUESTPERMISSION]
    },
    {
        path: "/contact",
        element: <ContactUs />,
        redirect: true
      },
    {
      path: "profile",
      element: <Profile />,
      Permissions : [ADMINPERMISSION]
    },
  ]


// export const filterRoutesByPermissions = (user) => {
//     if(user.role === ADMINPERMISSION) {
//         return AllRoutes;
//       } else if(user.role === GUESTPERMISSION || user.role !== ADMINPERMISSION) {
//         return AllRoutes.filter(({Permissions, redirect}) => (Permissions && Permissions.includes(GUESTPERMISSION)) || redirect)
//       }
// }


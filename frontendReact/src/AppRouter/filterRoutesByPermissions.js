import { ADMINPERMISSION, GUESTPERMISSION } from "../CONSTANT/CONSTANT"



export const filterRoutesByPermissions = (user, AllRoutes) => {
    if(user.role === ADMINPERMISSION) {
        return AllRoutes;
      } else if(user.role === GUESTPERMISSION || user.role !== ADMINPERMISSION) {
        return AllRoutes.filter(({Permissions, redirect}) => (Permissions && Permissions.includes(GUESTPERMISSION)) || redirect)
      }
}
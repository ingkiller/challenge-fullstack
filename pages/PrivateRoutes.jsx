import {useRouter} from "next/router";
import {useUserContext} from "../context/UserContext";
import {useCallback} from "react";
const publicRoutes = ['/about','/contact']
export const ProtectRoute = ({ children }) => {
    const router = useRouter()
    const {userData} = useUserContext()

    const isPublicRoute = useCallback(() =>{
        return publicRoutes.includes(router.pathname)
    },[router])

    const isAuthenticated = useCallback(() => {
        return userData !== null
    },[userData])

    if(isPublicRoute() || isAuthenticated())
        return children

    if(typeof window !== "undefined" && window.location.pathname === '/login')
        return children

    if(typeof window !== "undefined")
        window.location.pathname = '/login'
    return null

};

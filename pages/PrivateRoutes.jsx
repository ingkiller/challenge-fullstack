import {useRouter} from "next/router";
import {useUserContext} from "../context/UserContext";
import {useCallback, useEffect, useState} from "react";
const publicRoutes = ['/about','/contact']
export const ProtectRoute = ({ children }) => {
    const router = useRouter()
    const {userData,loading} = useUserContext()
    const [loadingData, setLoadingData] = useState(false)

    useEffect(() => {
        setLoadingData(loading)
    },[loading])


    const isPublicRoute = useCallback(() =>{
        return publicRoutes.includes(router.pathname)
    },[router])

    const isAuthenticated = useCallback(() => {
        return userData !== null
    },[userData])

    if(loadingData){
        return null
    }

    if((isPublicRoute() || isAuthenticated()) && (typeof window !== "undefined" && window.location.pathname !== '/login'))
        return children

    if(typeof window !== "undefined" && window.location.pathname === '/login')
        return children

    if(typeof window !== "undefined")
        window.location.pathname = '/login'
    return null

};

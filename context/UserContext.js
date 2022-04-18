import {createContext, useCallback, useContext, useEffect, useMemo, useState} from "react";
import {useMutation, ClientContext, useManualQuery} from "graphql-hooks";
import {LOGIN} from "../src/components/mutations";
import {GET_USERDATA_BY_TOKEN} from '../src/components/queries'

const UserContext = createContext(null);

const UserContextProvider = (props) => {
    const client = useContext(ClientContext)
    const [token,setToken] = useState(() => {
         return  typeof window !== "undefined" ? localStorage.getItem('token'): "";
    })
    const [userData, setUserData] = useState(null)
    const [onLogin] = useMutation(LOGIN);
    const [fetchUserDataByToken] = useManualQuery(GET_USERDATA_BY_TOKEN)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const temp = typeof window !== "undefined" ? localStorage.getItem('token'): "";
        if(temp){
            const getData = async () => {
                let result = await fetchUserDataByToken({variables:{token:temp},useCache:false})
                if(result.error){
                    console.log('Error:',result.error)
                    setUserData(null)
                }else{
                    setUserData(result.data.getUserDataByUsername)
                }
                setLoading(false)
            }
             getData()
        }else{
            setLoading(false)
        }
    },[])

    const onLoginHandler = useCallback(async (user,pass,rememberMe) =>{
        const result = await onLogin({variables:{username:user, password:pass}})
        if(result.error){
            setToken("")
            setUserData(null)
            client.removeHeader('Authorization')
            rememberMe && typeof window !== "undefined" && localStorage.setItem('token',null)
            console.error('Login Error '+result.error)
        }else{
            setToken(result.data.login.token)
            setUserData(result.data.login.user)
            client.setHeader('Authorization', `Bearer ${result.data.login.token}`)
            rememberMe && typeof window !== "undefined" && localStorage.setItem('token',result.data.login.token)
        }
    },[])

    const onLogOut = useCallback(() =>{
        setToken("")
        client.removeHeader('Authorization')
        typeof window !== "undefined" && localStorage.setItem('token',"")
        window.location.pathname = '/login'
        setLoading(false)
    },[])

    return <UserContext.Provider value={{token:token,userData:userData,loading
        ,onLoginHandler,onLogOut}} {...props}/>
}

const useUserContext = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUserContext must be used within a UserContextProvider');
    }

    const {onLoginHandler} = useMemo(() => {
        const onLoginHandler = (user,pass,rememberMe) => context.onLoginHandler(user,pass,rememberMe);
        return {onLoginHandler}
    },[context.onLoginHandler])

    return {...context,onLoginHandler}

}

export {UserContextProvider,useUserContext}

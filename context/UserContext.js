import {createContext, useCallback, useContext, useMemo, useState} from "react";
import { useMutation, ClientContext } from "graphql-hooks";
import {LOGIN} from "../src/components/mutations";

const UserContext = createContext(null);

const UserContextProvider = (props) => {
    const client = useContext(ClientContext)
    const [token,setToken] = useState(() => {
         return  typeof window !== "undefined" ? localStorage.getItem('token'): "";
    })
    const [onLogin] = useMutation(LOGIN);

    const onLoginHandler = useCallback(async (user,pass,rememberMe) =>{
        const result = await onLogin({variables:{username:user, password:pass}})
        if(result.error){
            setToken("")
            client.removeHeader('Authorization')
            rememberMe && typeof window !== "undefined" && localStorage.setItem('token',null)
            console.error('Login Error '+result.error)
        }else{
            console.log('okoko')
            setToken(result.data.login)
            client.setHeader('Authorization', `Bearer ${result.data.login}`)
            rememberMe && typeof window !== "undefined" && localStorage.setItem('token',result.data.login)
        }
    },[])

    const onLogOut = useCallback(() =>{
        setToken("")
        client.removeHeader('Authorization')
        typeof window !== "undefined" && localStorage.setItem('token',"")
    },[])

    return <UserContext.Provider value={{token:token,userData:'',onLoginHandler,onLogOut}} {...props}/>
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

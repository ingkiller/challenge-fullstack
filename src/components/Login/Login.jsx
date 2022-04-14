import {useCallback, useEffect, useState} from "react";
import { useRouter } from 'next/router'
import {useUserContext} from "../../../context/UserContext";

export default () => {
    const router = useRouter()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(true);
    const {token,onLoginHandler} = useUserContext();

    useEffect(() => {
        token !== "" && router.push('/posts')
    },[token])

    const onChangeUsername = useCallback(evt => {
        setUsername(evt.target.value);
    },[])

    const onChangePassword = useCallback(evt => {
        setPassword(evt.target.value)
    },[])

    const onChangeRememberMe = useCallback(evt => {
        setRememberMe(evt.target.checked)
    },[])

    const loginHandler = useCallback(async () => {
        onLoginHandler(username,password,rememberMe)
    },[username,password,rememberMe])


    return token === "" &&(<div className="container h-100">
            <div className="row d-flex align-items-center justify-content-center h-100">
                <div className="col-md-8 col-lg-7 col-xl-6">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                         className="img-fluid" alt="Phone image"/>
                </div>
                <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                    <form>

                        <div className="form-outline mb-4">
                            <input type="email" id="form1Example13" className="form-control form-control-md" placeholder="Email address" onChange={onChangeUsername}/>
                        </div>
                        <div className="form-outline mb-2">
                            <input type="password" id="form1Example23" className="form-control form-control-md" placeholder="Password" onChange={onChangePassword}/>
                        </div>

                        <div className="d-flex justify-content-around align-items-center mb-4">

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="form1Example3"
                                       checked={rememberMe} onChange={onChangeRememberMe}/>
                                <label className="form-check-label" htmlFor="form1Example3"><small>Remember me</small> </label>
                            </div>
                            <a href="#"><small>Forgot password?</small></a>
                        </div>

                        <div className="d-flex bg-success">
                            <button type="button" className="btn btn-primary w-100" onClick={loginHandler}>Sign in</button>
                        </div>


                        <div className="divider d-flex align-items-center justify-content-center my-2">
                            <p className="text-center mx-3 mb-0 text-muted">-or-</p>
                        </div>

                        <div className="d-flex flex-row align-items-center justify-content-center ">
                            <button type="button" className="btn btn-link btn-floating">
                                <i className="bi-google" role="img" aria-label="Google" style={{color:'var(--bs-primary)'}}></i>
                            </button>
                            <button type="button" className="btn btn-link btn-floating">
                                <i className="bi-github" role="img" aria-label="GitHub" style={{color:'var(--bs-primary)'}}></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating">
                                <i className="bi-facebook" role="img" aria-label="Facebook" style={{color:'var(--bs-primary)'}}></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating">
                                <i className="bi-twitter" role="img" aria-label="Twitter" style={{color:'var(--bs-primary)'}}></i>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>)

}

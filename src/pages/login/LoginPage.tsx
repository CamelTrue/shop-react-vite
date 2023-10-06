import { selectAuthError, selectAuthIsLogged, useAuth } from "@/services/auth"
import { useNavigate } from "react-router-dom"
import { FormEvent, useEffect } from "react"
import { useLogin } from "./hooks/useLogin"
import { ServerError } from "@/shared/"

export const LoginPage = () => {

    const navigate = useNavigate()
    const error = useAuth(selectAuthError)
    const isLogged = useAuth(selectAuthIsLogged)
    const login = useAuth(state => state.login)

    const { formData, isValid, changeHandler } = useLogin()
    
    function doLogin(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        login(formData.username, formData.password)
    }

    useEffect(() => {
        if(isLogged) {
            navigate('/cms')
        }
    }, [isLogged])

    return (
        <div className="page-sm">
            <h1 className='title'>LOGIN</h1>

            { error && <ServerError /> }

            <form action="" className="flex flex-col gap-3 mt-12" onSubmit={doLogin}>
                <input 
                    type="text" 
                    placeholder="username" 
                    name="username" 
                    value={formData.username} 
                    onChange={changeHandler} 
                />
                
                <input 
                    type="password" 
                    placeholder="password" 
                    name="password" 
                    value={formData.password} 
                    onChange={changeHandler} 
                />

                <button disabled={!isValid} className="btn primary" type="submit">SIGN IN</button>
            </form>
        </div>
    )
}
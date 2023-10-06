import { selectAuthIsLogged, useAuth } from "@/services/auth";
import { Navigate } from "react-router-dom";
import { PropsWithChildren } from "react";

export const PrivateRoute = (props: PropsWithChildren) => {

    const isLogged = useAuth(selectAuthIsLogged)


    return (
        <>
            {
                isLogged ? props.children : <Navigate to="/login" />
            }
        </>
    )
}
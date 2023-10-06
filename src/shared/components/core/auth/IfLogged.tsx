import { selectAuthIsLogged, useAuth } from "@/services/auth"
import React, { PropsWithChildren } from "react"

interface IfLoggedProps {
    else?: React.ReactNode;
}

export const IfLogged = (props: PropsWithChildren<IfLoggedProps>) => {
    
    const isLogged = useAuth(selectAuthIsLogged)

    return (
        <>
            {
                isLogged ?
                    props.children : 
                    props.else
            }
        </>
    )
}

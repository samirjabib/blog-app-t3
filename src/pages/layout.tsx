import React from "react"
import { Header } from "./components/Header"
import { useSession } from "next-auth/react"

export const MainLayout = ({children}:React.PropsWithChildren) => {

    const { data:sessionData, status }= useSession()


    return(
        <div>
            <Header status={status}/>
            {children}
        </div>
    )
}



import { ReactNode } from "react"
import Searchbar from "./searchbar"

export default function Layout({children}:{
    children:ReactNode
}) {
    return (
        <div>
            <div>setting header</div>
            <Searchbar />
            {children}
        </div>
    )
}
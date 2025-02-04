"use client"

import { ReactNode } from "react"
import ServerComponent from "./server-component"

// export default function Clientcomponent() {
//     console.log("client comp")
//     return <ServerComponent />
// }

export default function Clientcomponent({children}:{children:ReactNode}) {
    console.log("client comp")
    return <div>{children}</div>
}
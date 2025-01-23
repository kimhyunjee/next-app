"useClient";

import { useState } from "react"

export default function Searchbar() {
    const [search, setSearch] = useState("");

    const handleChangeSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return (
        <div>
            <input value={search} onChange={handleChangeSearch}/>
            <button>검색</button>
        </div>
    )
}
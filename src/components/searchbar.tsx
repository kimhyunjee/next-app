"useClient";

import { useState } from "react"
import { useRouter } from "next/navigation"; // next/router는 페이지 라우터 버전, next/navigation이 앱라우터 버전

export default function Searchbar() {
    const router = useRouter();
    const [search, setSearch] = useState("");

    const handleChangeSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    
    const onSubmit = () => {
        router.push(`/search?q=${search} `)

    }

    return (
        <div>
            <input value={search} onChange={handleChangeSearch}/>
            <button onClick={onSubmit}>검색</button>
        </div>
    )
}
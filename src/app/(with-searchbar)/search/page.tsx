import Clientcomponent from "@/components/client-component";


export default async function Page({searchParams}:{searchParams:Promise<{q:string}>}) {
    const {q} = await searchParams;
    console.log(q)
    return (
        <div>
            search page: {q}
            <Clientcomponent>
                <></>
            </Clientcomponent>
        </div>)
}
import { useRouteError } from "react-router-dom"

const Error= ()=>{
    const err  = useRouteError()
    console.log(err)
    return(
        <>
            <div>
                {err.statusText}
            </div>
            <div>status:{err.status}</div>
            <div>{err.data}</div>
        </>
    )
}

export default Error
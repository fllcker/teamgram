import {useParams} from "react-router-dom";

export default function MsgPage() {
    let params = useParams()

    return (
        <div className='spage'>
            <div>
                <h1>{params.title}</h1>
                <h3>{params.msg}</h3>
            </div>
        </div>
    )
}
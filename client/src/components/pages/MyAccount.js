import '../styles/myaccount.css'
import {Link, useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import {useEffect} from "react";
import verifyAuth from "../funcs/verifyauth";

export default function MyAccount() {
    let [cookies] = useCookies()
    let navigate = useNavigate()

    useEffect(() => {
        console.log(cookies)
        //console.log()
        verifyAuth(cookies.tge, cookies.tgp).then(value => {
            if (!value) return navigate('/auth/login')
        })
    }, [])

    return (
        <div className="myaccountpage">
            <div className="myaccountpagemain">
                <h1>Мой аккаунт</h1>
                <h3>Email: <span className="mac">jxwide@gmail.com</span></h3>
                <Link to='/auth/exit' className='maca'>Выйти из аккаунта</Link>
            </div>
        </div>
    )
}
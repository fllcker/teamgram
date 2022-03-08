import './styles/myaccount.css'
import {Link, useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import {useEffect} from "react";
import verifyAuth from "./verifyauth";

export default function MyAccount() {
    let [cookies, setCookies] = useCookies()
    let navigate = useNavigate()
    let authed = true;

    useEffect(() => {
        //console.log(cookies)

        if (authed) {
            if (!verifyAuth(cookies.tge, cookies.tgp)) {
                authed = false;
                return navigate('/auth/login')
            }
        }
    }, [])

    if (authed)
    {
        return (
            <div className="myaccountpage">
                <div className="myaccountpagemain">
                    <h1>Мой аккаунт</h1>

                    <h3>Email: <span className="mac">jxwide@gmail.com</span></h3>
                    <Link to='/auth/exit' className='maca'>Выйти из аккаунта</Link>
                </div>
            </div>
        )
    } else {
        return (
            <div className="myaccountpage">
                <div className="myaccountpagemain">
                    <h1>Вы не авторизованы</h1>

                    <Link to='/auth/login' className='maca'>Авторизация</Link>
                </div>
            </div>
        )
    }

}
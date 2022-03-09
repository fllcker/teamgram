import '../styles/auth.css'
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useCookies} from "react-cookie";

export default function AuthLogin() {
    const [emailInput, setEmailInput] = useState('')
    const [passwdInput, setPasswdInput] = useState('')
    const [accountData, setAccountData] = useState({})
    const [cookies, setCookie] = useCookies()
    const navigate = useNavigate()

    const sendLoginForm = () => {
        let fetchString = 'http://localhost:7000/users/vad';

        let fetchData = {
            email: emailInput,
            passwd: passwdInput
        }

        fetch(fetchString, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fetchData)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)

                if (
                    data.error == 1 ||
                    data.statusCode == 500 ||
                    typeof data != 'object'
                ) return navigate('/alert/Произошла%20ошибка1/Проверьте%20данные')

                setCookie('tge', emailInput)
                setCookie('tgp', passwdInput)
                navigate('/alert/Успех/Вы%20авторизировались')
        });

    }

    return (
        <div className="authlogin">
            <div className="main">
                <h1>Login</h1>
                <h4>Email: </h4>
                <input type="email" value={emailInput} onChange={e => setEmailInput(e.target.value)}/>

                <h4>Password: </h4>
                <input type="password" value={passwdInput} onChange={e => setPasswdInput(e.target.value)}/>

                <br/>

                <div className="authformbuttons">
                    <button className="subm" onClick={sendLoginForm}>Login</button>
                    <Link to='/auth/registration'>
                        Registration
                    </Link>
                </div>
            </div>
        </div>
    )
}
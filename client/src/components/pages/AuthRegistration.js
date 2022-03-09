import '../styles/auth.css'
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useCookies} from "react-cookie";
//import bcrypt from "bcrypt";

export default function AuthRegistration() {
    const [emailInput, setEmailInput] = useState('')
    const [passwdInput, setPasswdInput] = useState('')
    const [passwdInput2, setPasswdInput2] = useState('')
    const [cookies, setCookie] = useCookies()
    const navigate = useNavigate()

    const sendRegistrationForm = () => {
        if (passwdInput !== passwdInput2) return navigate('/alert/Произошла%20ошибка/Введите%20пароль%202%20раза')
        if (!emailInput.includes('@')) return navigate('/alert/Произошла%20ошибка/Проверьте%20введенную%20почту')

        let fetchString = 'http://localhost:7000/users/new';

        //hashing pass
        //let hashedpass = bcrypt.hashSync(passwdInput, 3)

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

                setCookie('tge', data.email)
                setCookie('tgp', data.passwd)
                navigate('/alert/Успех/Аккаунт%20зарегистрирован')
        });
    }

    return (
        <div className="authlogin">

            <div className="main">
                <h1>Registration</h1>
                <h4>Email: </h4>
                <input type="email" value={emailInput} onChange={e => setEmailInput(e.target.value)}/>

                <h4>Password: </h4>
                <input type="password" value={passwdInput} onChange={e => setPasswdInput(e.target.value)}/>

                <h4>Password (again): </h4>
                <input type="password" value={passwdInput2} onChange={e => setPasswdInput2(e.target.value)}/>

                <br/>

                <div className="authformbuttons">
                    <button className="subm" onClick={sendRegistrationForm}>Registration</button>
                    <Link to='/auth/login'>
                        Login
                    </Link>
                </div>
            </div>
        </div>
    )
}
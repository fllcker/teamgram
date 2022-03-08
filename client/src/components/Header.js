import './styles/header.css'
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <div className="header_logotype">
                <Link to='/' className='logotype'>Teamgram</Link>
            </div>
            <div className="header_nav">
                <Link to='/dialogs'>Dialogs</Link>
                <Link to='/friends'>Friends</Link>
                <Link to='/account'>My account</Link>
            </div>
        </div>
    )
}
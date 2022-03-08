import './components/styles/app.css'
import Header from "./components/Header";
import {Route, Routes, Link} from "react-router-dom";
import AuthLogin from "./components/AuthLogin";
import AuthRegistration from "./components/AuthRegistration";
import MsgPage from "./components/MsgPage";
import MyAccount from "./components/MyAccount";

function App() {
    return (
        <div className="App">
            <Header/>

            <Routes>

                <Route path='auth/login/' element={ <AuthLogin/> }/>
                <Route path='auth/registration/' element={ <AuthRegistration/> }/>
                <Route path='account' element={<MyAccount/>} />

                <Route path='alert/:title/:msg' element={<MsgPage/>}/>

            </Routes>
        </div>
    );
}

export default App;

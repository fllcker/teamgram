import './components/styles/app.css'
import Header from "./components/Header";
import {Route, Routes, Link} from "react-router-dom";
import AuthLogin from "./components/pages/AuthLogin";
import AuthRegistration from "./components/pages/AuthRegistration";
import MsgPage from "./components/pages/MsgPage";
import MyAccount from "./components/pages/MyAccount";
import DialogsPage from "./components/pages/DialogsPage";
import React from "react";

function App() {
    return (
        <div className="App">
            <Header/>

            <Routes>

                <Route path='auth/login/' element={ <AuthLogin/> }/>
                <Route path='auth/registration/' element={ <AuthRegistration/> }/>
                <Route path='account' element={<MyAccount/>} />
                <Route path='dialogs' element={<DialogsPage/>} />
                <Route path='dialogs/:diagId' element={ <DialogsPage/> } />

                <Route path='alert/:title/:msg' element={<MsgPage/>}/>



            </Routes>
        </div>
    );
}

export default App;

import React, {useEffect} from 'react';
import '../styles/dialogsPage.css'
import MessagesBox from "../MessagesBox";
import DialogsList from "../DialogsList";
import {Route, useParams} from "react-router-dom";

const DialogsPage = () => {
    let {diagId} = useParams()
    if (!diagId) diagId = 0;

    // scroll down
    useEffect(() => {
        document.querySelector('.mb2').scrollTop = 9999999;
    }, [])

    return (
        <div className="dialogsPage">
            <div className="mw">
                <h1>Dialogs</h1>

                <div className="maindialogs">
                    <DialogsList/>
                    <div className="messagesBox">
                        <MessagesBox dialogId={diagId}/>
                    </div>
                </div>
                <div className="newmessage">
                    <input type="text" className="newmessageinput"/>
                    <button className='newmessagebutton'>Send</button>
                </div>
            </div>


        </div>
    );
};

export default DialogsPage;
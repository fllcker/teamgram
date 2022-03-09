import React, {useEffect, useState} from 'react';
import OneMessage from "./OneMessage";
import {useCookies} from "react-cookie";
import verifyAuth from "./funcs/verifyauth";
import {useNavigate} from "react-router-dom";
import getNickNameById from "./funcs/getNickNameById";

const MessagesBox = (props) => {
    let dialogId = props.dialogId
    let [allMessages, setAllMessages] = useState([])
    let [cookies] = useCookies()
    let navigate = useNavigate()

    useEffect(() => {

        if (dialogId != 0)
        {
            let {tge, tgp} = cookies
            verifyAuth(tge, tgp).then(value => {
                if (!value) return navigate('/auth/login')

                fetch('http://localhost:7000/messages/get/' + dialogId)
                    .then(response => response.json())
                    .then(messagesData => {
                        if (!messagesData) return navigate('/UDIerror')

                        //console.log(messagesData)

                        let x = messagesData;
                        for (let i = 0; i < messagesData.length; i++)
                        {
                            let userId = x[i].ownerId;
                            //console.log(userId)
                            getNickNameById(userId)
                                .then(response333 => {
                                    console.log('resp', response333)
                                    messagesData[i].ownerId = response333;
                                    console.log(messagesData[i])
                                    setAllMessages(messagesData)
                                })
                        }
                })
            })
        }
    }, [dialogId])

    return (
        <div className="mb2">
            {/*<OneMessage msgright='omRight' mText='333'/>*/}
            {/*<OneMessage mText='3331' mAuthor='jxwide'/>*/}
            {/*<OneMessage mText='3332'/>*/}
            {/*<OneMessage mText='33323'/>*/}

            {allMessages.map(
                el => <OneMessage mText={el.messageText} mAuthor={el.ownerId}/>
            )}
        </div>
    );
};

export default MessagesBox;
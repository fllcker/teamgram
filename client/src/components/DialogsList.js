import React, {useEffect, useState} from 'react';
import OneDialog from "./OneDialog";
import {useCookies} from "react-cookie";
import verifyAuth from "./funcs/verifyauth";
import {useNavigate} from "react-router-dom";

const DialogsList = () => {
    let [cookies] = useCookies()
    let userId = useState(0)
    let [allDialogs, setAllDialogs] = useState([])
    let navigate = useNavigate()

    useEffect(() => {
        let {tge, tgp} = cookies

        verifyAuth(tge, tgp).then(value => {
            if (!value) return navigate('/auth/login')

            fetch('http://localhost:7000/users/byemail/' + tge)
                .then(response => response.json())
                .then(userData => {
                    if (!userData._id) return navigate('/UDIerror')
                    userId = userData._id

                    fetch('http://localhost:7000/dialogs/whereId/' + userId)
                        .then(response2 => response2.json())
                        .then(data2 => {
                            // data2 - All Dialogs
                            setAllDialogs(data2)
                        })
                })
        })
    }, [])

    return (
        <div className="dialogsList">
            {allDialogs.map(
                el => <OneDialog dialogId={el._id} dialogTitle={el.title} dialogMembers='members'/>
            )}

            {/*<OneDialog dialogId='1' dialogTitle='title' dialogMembers='members'/>*/}
            {/*<OneDialog dgc='dg2' dialogId='2' dialogTitle='title2' dialogMembers='members2'/>*/}
        </div>
    );
};

export default DialogsList;
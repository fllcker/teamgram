import React from 'react';
import {Link} from "react-router-dom";

const OneDialog = (props) => {
    let dg2 = '';
    if (props.dgc) dg2 = props.dgc

    return (
        <Link className={"dialog " + dg2} to={'/dialogs/' + props.dialogId}>
            <h4 className="titleOfDialog dgi">{props.dialogTitle}</h4>
            <h5 className='dgi'>{props.dialogMembers}, ...</h5>
        </Link>
    );
};

export default OneDialog;
import React from 'react';

const OneMessage = (props) => {
    let msgRight = '';
    if(props.msgright) msgRight = props.msgright

    return (
        <div className={"onemessage " + msgRight}>
            <h3 className='onemessagep'>
                <span className='spanauthor'>
                    {props.mAuthor}
                </span>
                {props.mText}
            </h3>
        </div>
    );
};

export default OneMessage;